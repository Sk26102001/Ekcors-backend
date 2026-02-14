import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

function Cta() {
    return (
        <>
            <section className="md:py-12 sm:py-8 py-6 md:px-6 px-4 bg-neutral-700">
                <div className="max-w-5xl mx-auto bg-brownClr grid grid-cols-1 md:grid-cols-2 md:gap-10 sm:gap-8 gap-6 rounded-xl md:p-10 sm:p-8 p-6 shadow-md">

                    {/* Left Content */}
                    <div>
                        <h5 className="mb-3 text-2xl font-bold lg:text-4xl text-white">
                            Get Our App, Work Smarter
                        </h5>

                        <p className="text-gray-200 max-w-md text-sm">
                            Browse verified machines, check real-time availability, compare prices, and connect with sellers — all from your phone.
                        </p>

                        <ul className="mt-4 text-gray-300 space-y-2 text-sm">
                            <li>• 1,000+ verified machines</li>
                            <li>• Instant availability & pricing</li>
                            <li>• Direct seller contact</li>
                        </ul>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Button asChild className="sm:w-fit w-full">
                                <Link href="#">
                                    <Image
                                        src="/images/icons/play-store.svg"
                                        width={80}
                                        height={80}
                                        alt="Google Play"
                                        className="w-full max-h-5 object-contain"
                                    />
                                    Download on Play Store
                                </Link>
                            </Button>

                            <Button variant="outline" asChild className="sm:w-fit w-full hover:bg-yellowClr/20 hover:text-yellowClr">
                                <Link href="#">
                                    <Image
                                        src="/images/icons/apple.svg"
                                        width={80}
                                        height={80}
                                        alt="Google Play"
                                        className="w-full max-h-5 object-contain"
                                    />
                                    Download on App Store
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="flex items-center justify-center">
                        <Image
                            src="/images/app-cta.png"
                            width={500}
                            height={500}
                            alt="App Preview"
                            className="w-full max-h-80 object-contain"
                        />
                    </div>

                </div>
            </section>

        </>
    )
}

export default Cta
