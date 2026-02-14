export const metadata = {
    title: "Terms and Conditions - Rent and Ride Varkala | Sen Auto Agencies",
    description: "Read the Terms and Conditions for renting a vehicle from Rent and Ride Varkala. Covers rental agreements, driver requirements, insurance, and customer responsibilities.",
}

function page() {
    return (
        <>
            <section>
                <div className="relative h-[300px] bg-[url('/images/tandc-bg.jpg')] bg-cover bg-center lg:h-[380px]">
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[rgba(9,35,61,0.8)] to-[rgba(7,50,94,0.1)]"></div>
                    <h1 className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-4 text-5xl font-bold text-white md:text-6xl lg:text-6xl">Terms and Conditions</h1>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-7xl space-y-6 px-4 py-12 text-neutral-800 md:py-16 lg:py-20">
                    <div>
                        <p className="mb-2">
                            Welcome to our Rent and Ride Varkala website. We are committed to providing safe, reliable, and convenient vehicle rentals for both locals and travelers exploring this
                            beautiful coastal town. This Privacy and Rental Policy explains how we handle your information and outlines the terms you agree to when renting a vehicle from us. By using
                            our services, you accept these terms and conditions.
                        </p>
                        <p>
                            We value your trust and ensure that all customer details are kept confidential. Our aim is to provide a smooth rental experience while maintaining clear guidelines that
                            ensure safety for you, our vehicles, and others on the road. Please read the policy carefully before proceeding with a booking.
                        </p>
                    </div>

                    <div>
                        <p className="mb-2 text-2xl font-semibold">Information We Collect</p>
                        <ul className="ml-6 list-disc space-y-2">
                            <li>
                                <strong>Personal Information:</strong> When booking a vehicle, we collect your name, contact number, and a valid driving license copy (original hard copy at the time of
                                hiring).
                            </li>
                            <li>
                                <strong>Log Data:</strong> We may record general information such as your booking history, rental dates, and payment details to improve our services.
                            </li>
                            <li>
                                <strong>Cookies:</strong> If you use our website for booking, cookies may be used to improve your browsing experience and remember your preferences.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 text-2xl font-semibold">Use of Information</p>
                        <ul className="ml-6 list-disc space-y-2">
                            <li>
                                <strong>Booking and Communication:</strong> Your details are used only for processing bookings, confirming reservations, and communicating important updates.
                            </li>
                            <li>
                                <strong>Security and Verification:</strong> Driving license details are collected strictly for verification and compliance with local transport laws.
                            </li>
                            <li>
                                <strong>Service Improvements:</strong> Customer feedback and booking data help us enhance our rental services.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 text-2xl font-semibold">Rental Terms and Conditions</p>
                        <ul className="ml-6 list-disc space-y-2">
                            <li>The hirer must submit the original hard copy of their driving license at the time of hiring.</li>
                            <li>
                                A soft copy of the driving license on the <strong>mParivahan</strong> app or <strong>DigiLocker</strong> is also recommended and valid during police checks.
                            </li>
                            <li>
                                Rent for the booked period must be paid in advance along with a refundable security deposit of ₹1000. Deductions will apply in case of penalties or damages to the
                                vehicle or helmets.
                            </li>
                            <li>Two helmets are provided with each scooter. Both rider and pillion must wear helmets at all times.</li>
                            <li>Failure to wear a helmet will result in a fine of ₹500 per person, even if noticed during return.</li>
                            <li>Riding with three passengers (triples) will attract a penalty of ₹2000.</li>
                            <li>Using a phone while riding will result in a penalty of ₹2000.</li>
                            <li>Maximum usage is 100 km per day. Extra kilometers will be charged at ₹5 per km.</li>
                            <li>For mechanical complaints (e.g., vehicle not starting), contact us immediately. Our service team will assist as soon as possible.</li>
                            <li>If the vehicle cannot be repaired, we will provide a replacement. Refunds or time extensions are not applicable in such cases.</li>
                            <li>Tyre puncture repairs are the responsibility of the hirer.</li>
                            <li>No refund will be given if the vehicle is returned before the agreed rental period ends.</li>
                            <li>For pre-booking, 50% of the total rent must be paid in advance. Confirm pickup and drop-off time at the time of booking.</li>
                            <li>Earliest pickup time: 6 AM. Latest return time: 8 PM.</li>
                            <li>For cancellations: full refund if canceled at least 48 hours before pickup, 50% refund if canceled 24 hours before, and no refund if canceled within 24 hours.</li>
                            <li>In case of an accident, immediately make a video call to us before moving the vehicle. The hirer is responsible for damages.</li>
                            <li>The company is not responsible for injuries or damages to the rider, pillion, or third parties.</li>
                            <li>No refund will be given for extra fuel left in the vehicle.</li>
                            <li>Hirers must record a full video of the vehicle at the time of pickup. Any scratches will incur a minimum charge of ₹1000.</li>
                            <li>Helmet damages: ₹200 for visor glass, ₹150 for hooks, and ₹500 for broken helmets.</li>
                            <li>Late returns will be charged for an additional day.</li>
                            <li>One rental day is calculated from 6 AM to 6 AM next day, with a buffer time until 8 AM for returns.</li>
                            <li>Minimum rental period is one day. Half-day charges apply only until 12 noon after the first day.</li>
                            <li>Decisions regarding timing are final. Clarify any doubts with management before hiring.</li>
                            <li>The company reserves the right to take final decisions on matters not covered above.</li>
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 text-2xl font-semibold">Changes to Policy</p>
                        <p>
                            This policy may be updated from time to time. Any changes will be reflected here with a revised “Last Updated” date. We recommend reviewing this section before your next
                            booking.
                        </p>
                    </div>

                    <div>
                        <p className="mb-2 text-2xl font-semibold">Contact Us</p>
                        <p>
                            For bookings, support, or any queries regarding our rental policy, please contact us at{" "}
                            <a className="text-blueClr underline" href="mailto:senauto1975@gmail.com">
                                senauto1975@gmail.com
                            </a>{" "}
                            or call our Varkala office directly.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
