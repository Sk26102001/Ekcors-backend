import Link from "next/link"

export const metadata = {
    title: "Refund Policy - Rent and Ride Varkala | Sen Auto Agencies",
    description: "Review the refund and cancellation policy for Rent and Ride Varkala. Understand the terms for cancellations, early returns, and refund eligibility for our vehicle rentals.",
}

function page() {
    return (
        <>
            <section>
                <div className="relative h-[300px] bg-[url('/images/refund-bg.jpg')] bg-cover bg-center lg:h-[380px]">
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[rgba(9,35,61,0.8)] to-[rgba(7,50,94,0.1)]"></div>
                    <h1 className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-4 text-5xl font-bold text-white md:text-6xl lg:text-6xl">Refund Policy</h1>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-7xl space-y-6 px-4 py-12 text-neutral-800 md:py-16 lg:py-20">
                    <div>
                        <p className="mb-2">
                            At Rent and Ride Varkala, we strive to provide transparent and fair refund policies for our customers. This policy outlines the circumstances under which refunds may be
                            issued for our vehicle rental services in Varkala.
                        </p>
                        <p>
                            Please read this policy carefully before making a reservation. By booking a vehicle with us, you acknowledge that you have read, understood, and agree to be bound by this
                            refund policy.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Cancellation and Refund Eligibility</p>
                        <ul className="ml-6 list-disc space-y-2">
                            <li>
                                <strong>Early Cancellations:</strong> Cancellations made at least 48 hours before the scheduled pickup time will receive a full refund, minus any payment processing
                                fees.
                            </li>
                            <li>
                                <strong>Late Cancellations:</strong> Cancellations made between 24-48 hours before pickup will receive a 50% refund of the total booking amount.
                            </li>
                            <li>
                                <strong>Last-Minute Cancellations:</strong> Cancellations made less than 24 hours before the scheduled pickup time are not eligible for a refund.
                            </li>
                            <li>
                                <strong>No-Shows:</strong> Customers who do not show up for their reservation without prior notice will not be eligible for any refund.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Early Returns</p>
                        <p>
                            If you return a vehicle earlier than the scheduled return date, we do not provide partial refunds for unused rental days. The rental period is considered as booked and
                            reserved exclusively for your use.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Vehicle Issues and Breakdowns</p>
                        <ul className="ml-6 list-disc space-y-2">
                            <li>
                                If a vehicle becomes unusable due to mechanical failure not caused by customer negligence, we will either provide a replacement vehicle of similar category or issue a
                                prorated refund for the unused rental period.
                            </li>
                            <li>
                                In case of breakdown, please contact our emergency support line immediately for assistance. Refunds are subject to verification of the mechanical issue by our team.
                            </li>
                            <li>
                                We will arrange for a replacement vehicle to be delivered within 6-12 hours of confirming the breakdown, subject to vehicle availability and location accessibility. In
                                cases where replacement cannot be provided within this timeline, a prorated refund for the unused rental period will be issued.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Weather and Natural Conditions</p>
                        <p>
                            We do not offer refunds due to unfavorable weather conditions or natural events unless local authorities issue travel restrictions that prevent vehicle use. In such cases,
                            we will work with you to reschedule your rental or provide credit for future use.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Refund Processing</p>
                        <ul className="ml-6 list-disc space-y-2">
                            <li>Approved refunds will be processed and credited within 7-10 business days.</li>
                            <li>Refunds will be credited to the original payment method used during booking.</li>
                            <li>Depending on your bank or payment provider, it may take additional time for the refund to reflect in your account.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Special Circumstances</p>
                        <p>
                            We understand that unexpected situations can arise. In cases of genuine emergencies (medical, family emergencies, etc.), please contact us directly with supporting
                            documentation. We will review these cases individually and may offer rental credits or partial refunds at our discretion.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Contact Us</p>
                        <p>
                            If you have questions about our refund policy or need to request a refund, please contact us at{" "}
                            <a className="text-blueClr underline" href="mailto:senauto1975@gmail.com">
                                senauto1975@gmail.com
                            </a>{" "}
                            or call our Varkala office at{" "}
                            <Link className="text-blueClr underline" href="tel:+919846701975">
                                +919846701975
                            </Link>
                            . Please include your booking reference number in all communications.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
