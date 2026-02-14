export const metadata = {
    title: "Privacy Policy - Rent and Ride Varkala | Sen Auto Agencies",
    description: "Read the Rent and Ride Varkala privacy policy. Learn how we collect, use, and protect your personal data when you rent a vehicle or use our website and booking services.",
}

function page() {
    return (
        <>
            <section>
                <div className="relative h-[300px] bg-[url('/images/privacy-bg.jpg')] bg-cover bg-center lg:h-[380px]">
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[rgba(9,35,61,0.8)] to-[rgba(7,50,94,0.1)]"></div>
                    <h1 className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-4 text-5xl font-bold text-white md:text-6xl lg:text-6xl">Privacy Policy</h1>
                </div>
            </section>
            <section>
                <div className="mx-auto max-w-7xl space-y-6 px-4 py-12 text-neutral-800 md:py-16 lg:py-20">
                    <div>
                        <p className="mb-2">
                            At Rent and Ride Varkala, we prioritize the privacy and security of our customers. Our Privacy Policy explains how we collect, use, and protect your personal information
                            when you use our vehicle rental services in Varkala. By using our services, you agree to the practices described in this policy.
                        </p>
                        <p>
                            We value your trust and are committed to handling your information responsibly. Rent and Ride Varkala follows ethical standards in collecting, using, and safeguarding any
                            information you provide. Our company is registered in India and specializes in providing quality vehicle rental services to tourists and locals in the Varkala area.
                        </p>
                        <p>
                            This privacy policy applies to your use of our rental services, website, booking applications, and any related interactions. Please read this policy carefully along with
                            our Terms of Service. By using our services, you agree to be bound by this policy. If you do not agree, please refrain from using our services.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Information We Collect</p>
                        <ul className="ml-6 list-disc space-y-2">
                            <li>
                                <strong>Personal Information:</strong> When you make a reservation, we collect information such as your name, contact details, address, driver's license information,
                                and payment details necessary to complete your booking.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including your IP address, browser type, device information,
                                and pages visited. This helps us improve our online services and customer experience.
                            </li>
                            <li>
                                <strong>Location Information:</strong> With your consent, we may collect location data to provide assistance, suggest nearby attractions, or help in case of vehicle
                                breakdowns during your rental period.
                            </li>
                            <li>
                                <strong>Cookies:</strong> We use cookies to enhance your browsing experience, remember your preferences, and understand how our services are being used. You can manage
                                cookie settings through your browser.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">How We Use Your Information</p>
                        <ul className="ml-6 list-disc space-y-2">
                            <li>
                                <strong>Service Provision:</strong> We use your information to process reservations, manage rentals, provide customer support, and ensure the safe operation of our
                                vehicles.
                            </li>
                            <li>
                                <strong>Communication:</strong> We may contact you regarding your reservation, share important service updates, or send promotional offers about our services. You can
                                opt out of marketing communications at any time.
                            </li>
                            <li>
                                <strong>Improvements:</strong> We analyze usage patterns to enhance our services, develop new features, and improve the overall customer experience at our Varkala
                                rental location.
                            </li>
                            <li>
                                <strong>Safety and Security:</strong> We use information to verify identities, prevent fraud, and ensure the security of our vehicles and customers.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Data Sharing and Protection</p>
                        <ul className="ml-6 list-disc space-y-2">
                            <li>
                                <strong>Service Providers:</strong> We may share necessary information with trusted partners such as payment processors, insurance providers, and vehicle maintenance
                                services to facilitate your rental experience.
                            </li>
                            <li>
                                <strong>Legal Requirements:</strong> We may disclose information when required by law, to enforce our policies, or to protect the rights, property, or safety of our
                                business, customers, or others.
                            </li>
                            <li>
                                <strong>Data Security:</strong> We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.
                                However, no electronic transmission or storage method is 100% secure.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Changes to This Policy</p>
                        <p>
                            We may update our Privacy Policy periodically to reflect changes in our practices or legal requirements. We will post any revisions on this page with an updated effective
                            date. We encourage you to review this policy occasionally to stay informed about how we protect your information.
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Contact Us</p>
                        <p>
                            If you have questions about this Privacy Policy or our data practices, please contact us at{" "}
                            <a className="text-blueClr underline" href="mailto:senauto1975@gmail.com">
                                senauto1975@gmail.com
                            </a>{" "}
                            or visit our office in Varkala.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
