import Link from "next/link"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

function Cta() {
    return (
        <>
            <section className="md:py-12 sm:py-8 py-6 md:px-6 px-4 bg-neutral-700">
                <div className="max-w-5xl mx-auto bg-brownClr grid grid-cols-1 flex-col md:gap-10 sm:gap-8 gap-6 rounded-xl md:p-10 sm:p-8 p-6 shadow-md md:grid-cols-2">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold lg:text-4xl text-white">Looking for Something Specific?</h5>
                        <p className="text-gray-200">
                            Browse our complete catalog of 1,000+ verified machines complete with detailed specs, real-time availability, and transparent pricing.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
                            <Button asChild className={'sm:w-fit w-full'}>
                                <Link href="#">
                                    Browse Full Catalog <ChevronRight className="inline w-4 h-4" />
                                </Link>
                            </Button>
                            <Button variant={'outline'} asChild className={'sm:w-fit w-full'}>
                                <Link href={'#'}>
                                    Contact Sales
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Image src="/svg/cta-bg.svg" width={500} height={500} alt="Placeholder" className="max-h-58 w-full" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cta
