import { Facebook, Instagram, Linkedin } from "lucide-react"
import Logo from "./logo"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import GradientText from "./GradientText"

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
                                        <Image src="/svg/x.svg" alt="X" width={20} height={20} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div data-orientation="horizontal" role="none"
                            className="shrink-0 bg-border h-px w-full col-span-2 md:my-6 sm:my-4 mt-2 lg:hidden"></div>
                        <div>
                            <h3 className="mb-4 font-bold text-white">Product</h3>
                            <ul className="space-y-2 text-neutral-300 [&_a]:font-medium [&_a]:text-sm [&_a]:hover:text-yellowClr">
                                <li><a href="#">Overview</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Marketplace</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Integrations</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-bold text-white">Company</h3>
                            <ul className="space-y-2 text-neutral-300 [&_a]:font-medium [&_a]:text-sm [&_a]:hover:text-yellowClr">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Privacy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 font-bold text-white">Resources</h3>
                            <ul className="space-y-2 text-neutral-300 [&_a]:font-medium [&_a]:text-sm [&_a]:hover:text-yellowClr">
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Sales</a></li>
                                <li><a href="#">Advertise</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div data-orientation="horizontal" role="none" className="shrink-0 bg-neutral-700 h-px w-full my-6 md:my-8"></div> */}
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center md:mt-12 sm:mt-10 mt-8">
                        <div>
                            <GradientText
                                colors={["#FFE52A", "#FF9D00", "#FFE52A", "#FF9D00", "#FFE52A"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="rounded-none"
                            >
                                <p className="mb-2 text-3xl font-semibold lg:text-4xl">Join our newsletter</p>
                            </GradientText>
                            <p className="text-neutral-300 font-light">Get exclusive news, features, and updates.</p>
                        </div>
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input type="email" name="email" placeholder="Email" className={'focus-visible:ring-yellowClr/20 focus-visible:border-yellowClr/80'} />
                            <Button
                                type="submit">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                    <div data-orientation="horizontal" role="none" className="shrink-0 bg-neutral-700 h-px w-full my-6 md:my-8"></div>
                    <div className="flex flex-col justify-between gap-4 text-sm font-medium text-zinc-600 md:flex-row md:items-center">
                        <ul className="flex gap-4">
                            <li className="underline text-neutral-400 hover:text-neutral-300"><Link href="#"> Terms and Conditions</Link></li>
                            <li className="underline text-neutral-400 hover:text-neutral-300"><Link href="#"> Privacy Policy</Link></li>
                        </ul>
                        <p className="text-neutral-400">© 2026 EKCORS | All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
