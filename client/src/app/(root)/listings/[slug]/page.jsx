'use client'

import { useEffect, useState } from "react";
import ProductImageSilder from "@/components/ProductImageSlider"
import Image from "next/image"
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useParams } from "next/navigation";
import { getMachinery } from "@/api/machineryApis";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DateTimePicker } from "@/components/DateTimePicker";
import { bookMachinery } from "@/api/userApis";


const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
});

function Page() {

    const [data, setData] = useState(null);

    const [startDate, setStartDate] = useState(null);
    const [startTime, setStartTime] = useState("00:00");
    const [endDate, setEndDate] = useState(null);
    const [endTime, setEndTime] = useState("00:00");

    const [totalHours, setTotalHours] = useState(0);
    const [loading, setLoading] = useState(false);

    const params = useParams();

    // Fetch machinery
    useEffect(() => {
        if (!params?.slug) return;

        async function fetchData() {
            try {
                const response = await getMachinery(params.slug);
                setData(response?.data?.machinery);
            } catch (error) {
                console.error(error);
                toast.error("Failed to load vehicle");
            }
        }

        fetchData();
    }, [params?.slug]);

    useEffect(() => {
        if (!startDate || !endDate) {
            setTotalHours(0);
            return;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        const [startH, startM] = startTime.split(":");
        const [endH, endM] = endTime.split(":");

        start.setHours(Number(startH), Number(startM));
        end.setHours(Number(endH), Number(endM));

        if (end <= start) {
            setTotalHours(0);
            return;
        }

        const diffMs = end.getTime() - start.getTime();
        const hours = Math.ceil(diffMs / (1000 * 60 * 60));

        setTotalHours(hours);
    }, [startDate, startTime, endDate, endTime]);


    const formatDuration = (hours) => {
        if (!hours || hours <= 0) return "0 hours";

        const days = Math.floor(hours / 24);
        const remainingHours = hours % 24;

        if (days === 0) {
            return `${hours} hour${hours > 1 ? "s" : ""}`;
        }

        if (remainingHours === 0) {
            return `${days} day${days > 1 ? "s" : ""}`;
        }

        return `${days} day${days > 1 ? "s" : ""} ${remainingHours} hour${remainingHours > 1 ? "s" : ""}`;
    };

    const estimateCost = () => {
        if (!data || !totalHours) return 0;

        const hourlyRate = Number(data?.baseHourlyRate) || 0;
        const dailyRate = Number(data?.dailyCapPrice) || 0;
        const weeklyRate = Number(data?.weeklyCapPrice) || 0;
        const monthlyRate = Number(data?.monthlyCapPrice) || 0;

        let amount = 0;

        // 1️⃣ If 4 hours or less → hourly
        if (totalHours <= 4) {
            return totalHours * hourlyRate;
        }

        let totalDays = Math.floor(totalHours / 24);
        let remainingHours = totalHours % 24;

        // 2️⃣ Monthly blocks (30 days)
        const months = Math.floor(totalDays / 30);
        amount += months * monthlyRate;
        totalDays = totalDays % 30;

        // 3️⃣ Weekly blocks (7 days)
        const weeks = Math.floor(totalDays / 7);
        amount += weeks * weeklyRate;
        totalDays = totalDays % 7;

        // 4️⃣ Remaining days (3–6 day cap rule)
        if (totalDays > 0) {
            let dailyAmount = totalDays * dailyRate;

            if (totalDays > 2 && totalDays < 7) {
                dailyAmount = Math.min(dailyAmount, weeklyRate);
            }

            amount += dailyAmount;
        }

        // 5️⃣ Remaining hours
        if (remainingHours > 0) {
            if (remainingHours <= 4) {
                amount += remainingHours * hourlyRate;
            } else {
                amount += dailyRate;
            }
        }

        return amount;
    };

    const handleBooking = async () => {

        if (!startDate || !endDate) {
            toast.error("Please select start and end date");
            return;
        }

        // 🔥 Convert correctly because startDate is now a Date object
        const start = new Date(startDate);
        const end = new Date(endDate);

        const [startH, startM] = startTime.split(":");
        const [endH, endM] = endTime.split(":");

        start.setHours(Number(startH), Number(startM));
        end.setHours(Number(endH), Number(endM));

        if (end <= start) {
            toast.error("End time must be after start time");
            return;
        }

        try {
            setLoading(true);

            const res = await bookMachinery({
                vehicleId: data._id,
                startDateTime: start,
                endDateTime: end,
                location: {
                    address: data?.location?.address,
                },
            });

            console.log(res)

            // 🔥 Show backend-calculated price
            toast.success(`Booking created. Total: ₹${res?.data?.totalAmount}`);

            // Optional: redirect or open payment
            // router.push(`/payment/${res.data.data._id}`);

        } catch (error) {
            console.error(error);

            toast.error(
                error?.response?.data?.message || "Booking failed"
            );

        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="bg-neutral-700 md:px-6 px-4">
            <div className="md:py-12 sm:py-8 py-6 max-w-7xl mx-auto grid md:grid-cols-2 md:gap-8 sm:gap-6 gap-4">

                <div className="h-fit md:sticky top-22">
                    <ProductImageSilder images={data?.images || []} />
                </div>

                <div className="md:mt-4 space-y-4">

                    <h1 className="sm:text-4xl text-3xl font-semibold text-white">
                        {data?.title}
                    </h1>

                    <p className="text-sm text-yellowClr font-medium">
                        {data?.category}
                    </p>

                    <p className="text-sm text-neutral-300">
                        {data?.description}
                    </p>

                    {/* Show Base Hourly Rate */}
                    <div className="flex justify-evenly text-white text-2xl font-semibold border-y border-neutral-600 py-2">
                        <p>
                            ₹{data?.dailyCapPrice || 0}
                            <span className="text-base text-yellowClr">/daily</span>
                        </p>
                        <p>
                            ₹{data?.weeklyCapPrice || 0}
                            <span className="text-base text-yellowClr">/weekly</span>
                        </p>
                        <p>
                            ₹{data?.monthlyCapPrice || 0}
                            <span className="text-base text-yellowClr">/monthly</span>
                        </p>
                    </div>

                    {/* Owner Block */}
                    <div className="px-4 py-2 flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <Image
                                src="/images/default-avatar.jpg"
                                width={200}
                                height={200}
                                className="w-12 h-12 border-2 border-yellowClr rounded-full object-cover"
                                alt="owner"
                            />
                            <div className="text-white">
                                <p className="text-sm font-medium text-yellowClr">Owner</p>
                                <p>{data?.vendor?.name || "Vendor"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Booking Card */}
                    <Card className="border-yellowClr bg-neutral-700 text-white shadow-lg rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-yellowClr text-xl">
                                Select Rental Time
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-6">

                            {/* Start Section */}
                            <DateTimePicker
                                label="Start"
                                date={startDate}
                                time={startTime}
                                onDateChange={setStartDate}
                                onTimeChange={setStartTime}
                            />

                            {/* End Section */}
                            <DateTimePicker
                                label="End"
                                date={endDate}
                                time={endTime}
                                onDateChange={setEndDate}
                                onTimeChange={setEndTime}
                            />

                            <Separator className="bg-neutral-800" />

                            {/* Summary */}
                            <div className="space-y-3">

                                <div className="flex justify-between text-sm text-neutral-300">
                                    <span>Duration</span>
                                    <span className="text-white font-medium">
                                        {formatDuration(totalHours)}
                                    </span>
                                </div>

                                <div className="flex justify-between text-lg font-semibold">
                                    <span>Total</span>
                                    <span className="text-yellowClr">
                                        ₹{estimateCost()}
                                    </span>
                                </div>

                            </div>

                            <Button
                                className="w-full bg-yellowClr text-black hover:bg-yellow-400 transition-all"
                                onClick={handleBooking}
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "Book Now"}
                            </Button>

                        </CardContent>
                    </Card>


                    {/* Location */}
                    <div className="space-y-1">
                        <p className="text-white font-semibold">Location:</p>
                        <Map key={data?._id} />
                    </div>

                    {/* Accordion */}
                    <Accordion type="single" collapsible className="w-full text-white">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Equipment Description
                            </AccordionTrigger>
                            <AccordionContent>
                                {data?.description}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </section>
    )
}

export default Page;
