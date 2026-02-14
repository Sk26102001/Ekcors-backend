import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

function Footer() {
    return (
        <>
            <footer className="md:px-6 px-4 border-t-4 border-yellowClr bg-neutral-800">
                <div className="md:py-14 sm:py-10 py-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                        <div className="col-span-2 flex h-full items-center justify-between md:items-start lg:col-span-3 lg:flex-col">
                            <Image src="/images/logo-white.png" alt="Ekcors Logo" width={250} height={250} className="max-h-24 object-contain w-fit" />
                            <ul className="flex items-center space-x-6 text-zinc-600">
                                <li className="font-medium hover:text-gray-800">
                                    <Link href="#">
                                        <Facebook className="w-6 h-6 fill-yellowClr stroke-0" />
                                    </Link>
                                </li>
                                <li className="font-medium hover:text-gray-800">
                                    <Link href="#">
                                        <Instagram className="w-6 h-6 stroke-yellowClr" />
                                    </Link>
                                </li>
                                <li className="font-medium hover:text-gray-800">
                                    <Link href="#">
                                        <Linkedin className="w-6 h-6 fill-yellowClr stroke-0" />
                                    </Link>
                                </li>
                                <li className="font-medium hover:text-gray-800">
                                    <Link href="#">
                                        <Image src="/svg/x.svg" alt="X" width={18} height={18} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div data-orientation="horizontal" role="none"
                            className="shrink-0 bg-border h-px w-full col-span-2 md:my-6 sm:my-4 mt-2 lg:hidden"></div>
                        <div>
                            <h3 className="mb-4 font-bold text-white">Category</h3>
                            <ul className="space-y-2 text-neutral-300 [&_a]:font-medium [&_a]:text-sm [&_a]:hover:text-yellowClr">
                                <li><a href="#">Earthmoving</a></li>
                                <li><a href="#">Concrete mixers</a></li>
                                <li><a href="#">Lifting vehicles</a></li>
                                <li><a href="#">Road vehicles</a></li>
                                <li><a href="#">Power equipments</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-bold text-white">Quick Links</h3>
                            <ul className="space-y-2 text-neutral-300 [&_a]:font-medium [&_a]:text-sm [&_a]:hover:text-yellowClr">
                                <li><a href="#">All Listings</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-bold text-white">Support</h3>
                            <ul className="space-y-2 text-neutral-300 [&_a]:font-medium [&_a]:text-sm [&_a]:hover:text-yellowClr">
                                <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="/refund-policy">Refund Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-neutral-700 h-px w-full my-6 md:my-8"></div>
                    <div className="flex flex-col justify-center text-sm font-medium text-zinc-600 md:flex-row md:items-center">
                        <p className="text-neutral-400">© 2026 EKCORS | All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
