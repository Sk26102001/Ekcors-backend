'use client'

import { useState } from "react";
import ProductImageSilder from "@/components/ProductImageSlider"
import Image from "next/image"
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link";
import { ChevronDownIcon, ChevronRight } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
});

// const RouteMap = dynamic(() => import('@/components/RouteMap'), {
//     ssr: false,
// });

const images = [
    '/images/jcb2.jpg',
    '/images/jcb.jpeg',
    '/images/jcb.jpeg',
    '/images/jcb2.jpg',
]

function page() {
    const [open, setOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    return (
        <>
            <section className="bg-neutral-700 md:px-6 px-4">
                <div className="md:py-12 sm:py-8 py-6 max-w-7xl mx-auto grid md:grid-cols-2 md:gap-8 sm:gap-6 gap-4">
                    <div className="h-fit md:sticky top-22">
                        <ProductImageSilder images={images} />
                    </div>
                    <div className="md:mt-4 space-y-2">
                        <h1 className="sm:text-4xl text-3xl font-semibold text-white">Lorem ipsum dolor sit amet.</h1>
                        <p className="text-sm text-yellowClr font-medium">HEAVY VEHICLE</p>
                        <p className="text-sm text-neutral-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas voluptates, ipsam vel magnam facere minus!</p>
                        <div className="grid grid-cols-3 divide-x divide-neutral-600 text-white gap-4 border-t border-b border-neutral-600 py-2 text-2xl font-medium">
                            <p className="text-center">₹500<span className="text-base text-yellowClr">/m</span></p>
                            <p className="text-center">₹500<span className="text-base text-yellowClr">/w</span></p>
                            <p className="text-center">₹500<span className="text-base text-yellowClr">/d</span></p>
                        </div>
                        <div className="px-4 py-2 flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <Image src="/images/default-avatar.jpg" width={200} height={200} className="w-12 h-12 border-2 border-yellowClr rounded-full object-cover" alt="vehicle" />
                                <div className="text-white">
                                    <p className="text-sm font-medium text-yellowClr">Owner</p>
                                    <p>John Doe</p>
                                </div>
                            </div>
                            <div>
                                <Button asChild className={'gap-1'}>
                                    <Link href="/listings/demo">View more <ChevronRight className="w-5 h-5 inline" /></Link>
                                </Button>
                            </div>
                        </div>
                        <div className="border-2 border-yellowClr rounded-xl space-y-2 p-4 text-white">
                            <p className="font-semibold text-xl text-yellowClr">Rent now</p>
                            <div className="flex justify-between items-center">
                                <p>Start date:</p>
                                <div>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                id="date"
                                                className="w-48 justify-between font-normal"
                                            >
                                                {date ? date.toLocaleDateString() : "Select date"}
                                                <ChevronDownIcon />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                captionLayout="dropdown"
                                                onSelect={(date) => {
                                                    setDate(date)
                                                    setOpen(false)
                                                }}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <p>End date:</p>
                                <div>
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                id="date"
                                                className="w-48 justify-between font-normal"
                                            >
                                                {date ? date.toLocaleDateString() : "Select date"}
                                                <ChevronDownIcon />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                captionLayout="dropdown"
                                                onSelect={(date) => {
                                                    setDate(date)
                                                    setOpen(false)
                                                }}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            <p className="font-semibold text-xl text-yellowClr">Price summary</p>
                            <div className="flex justify-between">
                                <p>Total:</p>
                                <p className="font-semibold text-yellowClr text-lg">₹5000</p>
                            </div>
                            <Button className={'w-full'}>Book now</Button>
                        </div>
                        <div className="space-y-1">
                            <p className="text-white font-semibold">Location:</p>
                            <Map />
                        </div>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full text-white"
                            defaultValue="item-1"
                        >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className={'text-lg [&>svg]:stroke-yellowClr'}>Equipment/Machinery Description</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias qui consectetur quis perspiciatis cum repellendus expedita incidunt cumque, rem autem nihil molestiae, amet nemo provident saepe commodi consequatur sunt sit. Ducimus similique porro quibusdam debitis cumque, at quas non autem quam voluptatibus quos unde sit quaerat explicabo voluptatem eius sint.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger className={'text-lg [&>svg]:stroke-yellowClr'}>Equipment/Machinery Description</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias qui consectetur quis perspiciatis cum repellendus expedita incidunt cumque, rem autem nihil molestiae, amet nemo provident saepe commodi consequatur sunt sit. Ducimus similique porro quibusdam debitis cumque, at quas non autem quam voluptatibus quos unde sit quaerat explicabo voluptatem eius sint.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger className={'text-lg [&>svg]:stroke-yellowClr'}>Equipment/Machinery Description</AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias qui consectetur quis perspiciatis cum repellendus expedita incidunt cumque, rem autem nihil molestiae, amet nemo provident saepe commodi consequatur sunt sit. Ducimus similique porro quibusdam debitis cumque, at quas non autem quam voluptatibus quos unde sit quaerat explicabo voluptatem eius sint.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
