// import Link from "next/link"
// import Image from "next/image"
// import { Facebook, Instagram, Linkedin } from "lucide-react"

// function Footer() {
//     return (
//         <>
//             <footer className="md:px-6 px-4 border-t-4 border-yellowClr bg-neutral-800">
//                 <div className="md:py-14 sm:py-10 py-8 max-w-7xl mx-auto">
//                     <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
//                         <div className="col-span-2 flex h-full items-center justify-between md:items-start lg:col-span-3 lg:flex-col">
//                             <Image src="/images/logo-white.png" alt="Ekcors Logo" width={250} height={250} className="max-h-24 object-contain w-fit" />
//                             <ul className="flex items-center space-x-6 text-zinc-600">
//                                 <li className="font-medium hover:text-gray-800">
//                                     <Link href="#">
//                                         <Facebook className="w-6 h-6 fill-yellowClr stroke-0" />
//                                     </Link>
//                                 </li>
//                                 <li className="font-medium hover:text-gray-800">
//                                     <Link href="#">
//                                         <Instagram className="w-6 h-6 stroke-yellowClr" />
//                                     </Link>
//                                 </li>
//                                 <li className="font-medium hover:text-gray-800">
//                                     <Link href="#">
//                                         <Linkedin className="w-6 h-6 fill-yellowClr stroke-0" />
//                                     </Link>
//                                 </li>
//                                 <li className="font-medium hover:text-gray-800">
//                                     <Link href="#">
//                                         <Image src="/svg/x.svg" alt="X" width={18} height={18} />
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div data-orientation="horizontal" role="none"
//                             className="shrink-0 bg-border h-px w-full col-span-2 md:my-6 sm:my-4 mt-2 lg:hidden"></div>
//                         <div>
//                             <h3 className="mb-4 font-bold text-white">Category</h3>
//                             <ul className="space-y-2 text-neutral-300 [&_a]:font-medium [&_a]:text-sm [&_a]:hover:text-yellowClr">
//                                 <li><a href="#">Earthmoving</a></li>
//                                 <li><a href="#">Concrete mixers</a></li>
//                                 <li><a href="#">Lifting vehicles</a></li>
//                                 <li><a href="#">Road vehicles</a></li>
//                                 <li><a href="#">Power equipments</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="mb-4 font-bold text-white">Quick Links</h3>
//                             <ul className="space-y-2 text-neutral-300 [&_a]:font-medium [&_a]:text-sm [&_a]:hover:text-yellowClr">
//                                 <li><a href="#">All Listings</a></li>
//                                 <li><a href="#">About</a></li>
//                                 <li><a href="#">Contact</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="mb-4 font-bold text-white">Support</h3>
//                             <ul className="space-y-2 text-neutral-300 [&_a]:font-medium [&_a]:text-sm [&_a]:hover:text-yellowClr">
//                                 <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
//                                 <li><a href="/privacy-policy">Privacy Policy</a></li>
//                                 <li><a href="/refund-policy">Refund Policy</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div data-orientation="horizontal" role="none" className="shrink-0 bg-neutral-700 h-px w-full my-6 md:my-8"></div>
//                     <div className="flex flex-col justify-center text-sm font-medium text-zinc-600 md:flex-row md:items-center">
//                         <p className="text-neutral-400">© 2026 EKCORS | All rights reserved.</p>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Footer


'use client'

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import FloatingPhone from "./FloatingPhone";

function Footer() {
    return (

        

        
        <footer className="bg-neutral-800 text-neutral-300 border-t-4 border-yellowClr">
            <FloatingPhone/>
              {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-12 w-12 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        </span>
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center bg-[#25D366] text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform duration-300">
          <FaWhatsapp className="h-9 w-9" />
        </a>
      </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
                    
                    {/* Column 1: Logo + Description + Social */}
                    <div className="lg:col-span-4">
                        <Image 
                            src="/images/logo-white.png" 
                            alt="Ekcors Logo" 
                            width={240} 
                            height={80} 
                            className="mb-6 object-contain"
                            priority 
                        />
                        <p className="text-neutral-400 text-[15px] leading-relaxed max-w-sm">
                            Your trusted marketplace for heavy construction equipment in India. 
                            Buy, sell, and rent earthmoving machinery, concrete mixers, cranes, 
                            road vehicles, and power equipment with complete transparency.
                        </p>

                        <div className="flex items-center gap-5 mt-8">
                            <Link href="#" className="text-yellowClr transition-all duration-300 hover:scale-110" aria-label="Facebook">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="text-yellowClr transition-all duration-300 hover:scale-110" aria-label="Instagram">
                                <Instagram className="w-6 h-6" />
                            </Link>
                           <Link 
  href="#" 
  className="text-yellowClr transition-all duration-300 hover:scale-110" 
  aria-label="LinkedIn"
>
  <Linkedin className="w-6 h-6" />
</Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-semibold text-lg mb-5 tracking-tight">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-yellowClr transition-colors">Home</Link></li>
                            <li><Link href="#" className="hover:text-yellowClr transition-colors">All Listings</Link></li>
                            <li><Link href="#" className="hover:text-yellowClr transition-colors">Post Equipment</Link></li>
                            <li><Link href="#" className="hover:text-yellowClr transition-colors">Track Inquiry</Link></li>
                            <li><Link href="#" className="hover:text-yellowClr transition-colors">Login / Register</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Categories */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold text-lg mb-5 tracking-tight">Our Categories</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-yellowClr transition-colors">Earthmoving Machinery</a></li>
                            <li><a href="#" className="hover:text-yellowClr transition-colors">Concrete Mixers & Pumps</a></li>
                            <li><a href="#" className="hover:text-yellowClr transition-colors">Cranes & Lifting Vehicles</a></li>
                            <li><a href="#" className="hover:text-yellowClr transition-colors">Road Construction Equipment</a></li>
                            <li><a href="#" className="hover:text-yellowClr transition-colors">Power Generators & Tools</a></li>
                            <li><a href="#" className="hover:text-yellowClr transition-colors">Attachments & Spare Parts</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-semibold text-lg mb-5 tracking-tight">Contact Us</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 mt-0.5 text-yellowClr" />
                                <div>
                                    <p>+91 98765 43210</p>
                                    <p className="text-neutral-500 text-xs">Mon-Sat: 9:00 AM - 7:00 PM</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 mt-0.5 text-yellowClr" />
                                <p>info@ekcors.com</p>
                            </div>
                            
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 mt-0.5 text-yellowClr" />
                                <p>Varanasi, Uttar Pradesh, India</p>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="mt-8 bg-neutral-900/70 border border-neutral-700 rounded-lg p-4 text-xs">
                            <p className="text-neutral-400 mb-1">Business Hours</p>
                            <p>Monday - Saturday: 9:00 AM – 7:00 PM</p>
                            <p className="text-neutral-500">Sunday: Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Matching the reference design */}
            <div className="border-t border-neutral-700 bg-neutral-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
                    <div className="flex items-center gap-4 flex-wrap">
                        {/* <a 
                            href="tel:+919876543210"
                            className="bg-yellowClr hover:bg-yellow-400 transition-colors text-neutral-900 px-5 py-2 rounded-full font-medium flex items-center gap-2 text-sm"
                        >
                            <Phone className="w-4 h-4" />
                            Technical Issue? Call Us
                        </a> */}
                        <p>© 2026 EKCORS. All rights reserved. | GST Registered</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="/privacy-policy" className="hover:text-yellowClr transition-colors">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-yellowClr transition-colors">Terms of Service</Link>
                        <Link href="/refund-policy" className="hover:text-yellowClr transition-colors">Refund Policy</Link>
                    </div>

                    {/* WhatsApp Button - Fixed with Lucide Icon */}
                    {/* <a 
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle className="w-6 h-6 text-white" />
                    </a> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;