// 'use client'

// import { useMachinery } from "@/context/useMachinery";
// import Cta from "@/components/Cta";
// import HeroSection from "@/components/HeroSection";
// import Stats from "@/components/Stats";
// import TestimonialSlider from "@/components/TestimonialSlider";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { ArrowDownAZ, ArrowDownNarrowWide, ArrowDownWideNarrow, ArrowRight, ArrowUpAZ, ArrowUpDown, Award, ChevronRight, ClockArrowDown, ClockArrowUp, MousePointerClick, Plus, RotateCw, Search, SlidersHorizontal, Sparkles } from "lucide-react";
// import ProductCard from "@/components/ProductCard";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   const { machinery } = useMachinery()

//   return (
//     <>
//       <HeroSection />

//       <section className="bg-neutral-700 md:px-6 px-4">
//         <div className="md:py-12 sm:py-8 py-6 max-w-6xl mx-auto">
//           <h2 className="font-heading md:text-4xl text-3xl text-yellowClr text-center mb-2">Categories</h2>
//           <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 sm:gap-4 gap-2 sm:mt-6 mt-4">
//             <Link href="#" className="flex flex-col justify-between gap-4 border border-neutral-600 hover:bg-white/5 duration-200 rounded-lg p-4 text-white text-center group">
//               <Image src="/images/categories/earthmoving.png" width={500} height={500} className="sm:max-h-32 max-h-28 object-contain group-hover:scale-110 duration-300" alt="Bulldozer" />
//               <p>Earthmoving</p>
//             </Link>
//             <Link href="#" className="flex flex-col justify-between gap-4 border border-neutral-600 hover:bg-white/5 duration-200 rounded-lg p-4 text-white text-center group">
//               <Image src="/images/categories/concrete.png" width={500} height={500} className="sm:max-h-32 max-h-28 object-contain group-hover:scale-110 duration-300" alt="Bulldozer" />
//               <p>Concrete</p>
//             </Link>
//             <Link href="#" className="flex flex-col justify-between gap-4 border border-neutral-600 hover:bg-white/5 duration-200 rounded-lg p-4 text-white text-center group">
//               <Image src="/images/categories/lifting.png" width={500} height={500} className="sm:max-h-32 max-h-28 object-contain group-hover:scale-110 duration-300" alt="Bulldozer" />
//               <p>Lifting</p>
//             </Link>
//             <Link href="#" className="flex flex-col justify-between gap-4 border border-neutral-600 hover:bg-white/5 duration-200 rounded-lg p-4 text-white text-center group">
//               <Image src="/images/categories/road.png" width={500} height={500} className="sm:max-h-32 max-h-28 object-contain group-hover:scale-110 duration-300" alt="Bulldozer" />
//               <p>Road</p>
//             </Link>
//             <Link href="#" className="flex flex-col justify-between gap-4 border border-neutral-600 hover:bg-white/5 duration-200 rounded-lg p-4 text-white text-center group">
//               <Image src="/images/categories/power.png" width={500} height={500} className="sm:max-h-32 max-h-28 object-contain group-hover:scale-110 duration-300" alt="Bulldozer" />
//               <p>Power Equipment</p>
//             </Link>
//             {/* <Link href="#" className="sm:col-span-5 col-span-3 border border-neutral-600 hover:bg-white/5 duration-200 flex justify-center items-center rounded-lg p-4 text-white">
//               <p className="flex items-center">Explore all <ChevronRight className="w-5 h-5" /></p>
//             </Link> */}
//           </div>
//         </div>
//       </section>

//       <section className="bg-neutral-700 md:px-6 px-4">
//         <div className="md:py-12 sm:py-8 py-6 max-w-6xl mx-auto">
//           <div className="flex sm:flex-row flex-col justify-between gap-2 py-4 bg-neutral-700">
//             <h2 className="font-heading md:text-4xl text-3xl text-yellowClr text-center flex-1 mb-2">Machineries</h2>
//             {/* <div className="flex gap-2">
//               <Input type="text" className={'bg-white focus-visible:ring-0 focus-visible:border-yellowClr'} placeholder="Search" />
//               <DropdownMenu modal={false}>
//                 <DropdownMenuTrigger asChild>
//                   <Button className="gap-2">
//                     <ArrowUpDown className="w-4 h-4" />
//                     <span className="sm:inline hidden">Sort by</span>
//                   </Button>
//                 </DropdownMenuTrigger>

//                 <DropdownMenuContent align="end" className="w-48">

//                   <DropdownMenuItem >
//                     <ClockArrowDown className="w-4 h-4" />
//                     Newest to Oldest
//                   </DropdownMenuItem>

//                   <DropdownMenuItem >
//                     <ClockArrowUp className="w-4 h-4" />
//                     Oldest to Newest
//                   </DropdownMenuItem>

//                   <DropdownMenuSeparator />

//                   <DropdownMenuItem>
//                     <ArrowDownNarrowWide className="w-4 h-4" />
//                     Price: Low to High
//                   </DropdownMenuItem>

//                   <DropdownMenuItem>
//                     <ArrowDownWideNarrow className="w-4 h-4" />
//                     Price: High to Low
//                   </DropdownMenuItem>

//                   <DropdownMenuSeparator />

//                   <DropdownMenuItem >
//                     <ArrowDownAZ className="w-4 h-4" />
//                     Name: A to Z
//                   </DropdownMenuItem>

//                   <DropdownMenuItem >
//                     <ArrowUpAZ className="w-4 h-4" />
//                     Name: Z to A
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//               <Button><SlidersHorizontal className="w-4 h-4" /></Button>
//             </div> */}
//           </div>
//           <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3">
//             {machinery?.slice(0, 12)?.map((machinery, index) => (
//               <ProductCard key={index} data={machinery} />
//             ))}
//           </div>
//           <div className="mt-8 text-center">
//             <Button asChild>
//               <Link href="/listings">View all <ChevronRight className="w-4 h-4" /></Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* <section>
//         <div className="bg-bgClr md:py-12 sm:py-8 py-6">
//           <div className="md:px-6 px-4 flex items-center justify-between">
//             <h3 className="font-heading text-2xl text-brownClr">Fetaured Listings</h3>
//             <Button>View all <ArrowRight /></Button>
//           </div>
//           <div className="md:mt-8 mt-6">
//             <ProductSlider />
//           </div>
//         </div>
//       </section>
//       <section>
//         <div className="md:py-12 sm:py-8 py-6">
//           <div className="md:px-6 px-4 flex items-center justify-between">
//             <h4 className="font-heading text-2xl text-brownClr">Based on City</h4>
//             <Button>View all <ArrowRight /></Button>
//           </div>
//           <div className="md:mt-8 mt-6">
//             <LocationSlider />
//           </div>
//         </div>
//       </section> */}
//       <Cta />
//       <Stats />
//       <section>
//         <div className="md:py-12 sm:py-8 py-6 md:px-6 px-4 bg-neutral-700">
//           <p className="text-center text-neutral-300 text-sm max-w-3xl mx-auto">Finding and renting the right machine is simple. Browse verified equipment, book instantly with transparent pricing, and get it delivered to your site with full support so you can focus on getting the job done.</p>
//           <div className="md:mt-8 mt-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-5xl mx-auto">
//             <div className="p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
//               <Search className="w-10 h-10 stroke-yellowClr my-2" />
//               <p className="text-lg font-semibold mb-1 text-white">Search & Choose</p>
//               <p className="text-xs text-neutral-300">Explore our verified inventory with clear specs, real images, and fair pricing. Easily filter by location, category, and availability to find the right machine fast.</p>
//             </div>
//             <div className="p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
//               <MousePointerClick className="w-10 h-10 stroke-yellowClr my-2" />
//               <p className="text-lg font-semibold mb-1 text-white">Book & Secure</p>
//               <p className="text-xs text-neutral-300">Confirm your rental instantly through our platform. Enjoy transparent pricing, flexible rental terms, and secure payments no surprises.</p>
//             </div>
//             <div className="md:col-span-1 sm:col-span-2 p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
//               <Sparkles className="w-10 h-10 stroke-yellowClr my-2" />
//               <p className="text-lg font-semibold mb-1 text-white">Get to Work</p>
//               <p className="text-xs text-neutral-300">We deliver the machine directly to your site. Count on full operational support and maintenance assistance for the entire rental period.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <TestimonialSlider />
//       <section>
//         <div className="customBg md:p-12 sm:p-10 p-8 text-center space-y-8 text-neutral-800 relative">
//           <div className="absolute top-0 left-0 h-8 w-full bg-linear-to-b from-neutral-700 via-neutral-700 to-transparent"></div>
//           <div className="space-y-4 relative z-10">
//             <h6 className="md:text-5xl sm:text-4xl text-3xl font-heading text-yellowClr">Own Heavy Machinery?</h6>
//             <p className="sm:text-lg text-sm font-medium max-w-2xl mx-auto text-neutral-300">Put your machines to work and start earning today. Join a growing network of trusted owners already generating consistent income on our platform.</p>
//           </div>
//           <Button asChild className={'sm:p-6 p-5 rounded-xl sm:text-lg text-neutral-800'}>
//             <Link href="/user/add-machinery">
//               <Plus /> List Your Machine
//             </Link>
//           </Button>
//           {/* <div className="max-w-4xl mx-auto flex justify-between">
//             <div className="flex-1">
//               <p className="sm:text-4xl text-3xl font-bold">00</p>
//               <p className="sm:text-base text-xs text-neutral-700">Revenue Generated</p>
//             </div>
//             <div className="flex-1">
//               <p className="sm:text-4xl text-3xl font-bold">100+</p>
//               <p className="sm:text-base text-xs text-neutral-700">Trusted Owners</p>
//             </div>
//             <div className="flex-1">
//               <p className="sm:text-4xl text-3xl font-bold">95%</p>
//               <p className="sm:text-base text-xs text-neutral-700">Utilization Rate</p>
//             </div>
//           </div> */}
//         </div>
//       </section>
//     </>
//   );
// }




// 'use client'

// import { useMachinery } from "@/context/useMachinery";
// import Cta from "@/components/Cta";
// import HeroSection from "@/components/HeroSection";
// import Stats from "@/components/Stats";
// import TestimonialSlider from "@/components/TestimonialSlider";
// import { Button } from "@/components/ui/button";
// import { MousePointerClick, Plus, Search, Sparkles, ChevronRight } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import ProductCard from "@/components/ProductCard";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   const { machinery } = useMachinery()

//   // Category data with their correct slug paths
//   const categories = [
//     { name: "Earthmoving", slug: "earthmoving", image: "/images/categories/earthmoving.png" },
//     { name: "Concrete", slug: "concrete", image: "/images/categories/concrete.png" },
//     { name: "Lifting", slug: "lifting", image: "/images/categories/lifting.png" },
//     { name: "Road", slug: "road", image: "/images/categories/road.png" },
//     { name: "Power Equipment", slug: "power-equipment", image: "/images/categories/power.png" }
//   ]

//   return (
//     <>
//       <HeroSection  />

//       {/* Categories Section - NOW WITH WORKING LINKS */}
//       <section className="bg-neutral-700 md:px-6 px-4">
//         <div className="md:py-12 sm:py-8 py-6 max-w-6xl mx-auto">
//           <h2 className="font-heading md:text-4xl text-3xl text-yellowClr text-center mb-2">Categories</h2>
//           <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 sm:gap-4 gap-2 sm:mt-6 mt-4">
//             {categories.map((category) => (
//               <Link 
//                 key={category.name}
//                 href={`/categories/${category.slug}`}
//                 className="flex flex-col justify-between gap-4 border border-neutral-600 hover:bg-white/5 duration-200 rounded-lg p-4 text-white text-center group"
//               >
//                 <Image 
//                   src={category.image} 
//                   width={500} 
//                   height={500} 
//                   className="sm:max-h-32 max-h-28 object-contain group-hover:scale-110 duration-300" 
//                   alt={category.name} 
//                 />
//                 <p>{category.name}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Machinery Section */}
//       <section className="bg-neutral-700 md:px-6 px-4">
//         <div className="md:py-12 sm:py-8 py-6 max-w-6xl mx-auto">
//           <div className="flex sm:flex-row flex-col justify-between gap-2 py-4 bg-neutral-700">
//             <h2 className="font-heading md:text-4xl text-3xl text-yellowClr text-center flex-1 mb-2">Machineries</h2>
//           </div>
//           <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3">
//             {machinery?.slice(0, 12)?.map((machinery, index) => (
//               <ProductCard key={index} data={machinery} />
//             ))}
//           </div>
//           <div className="mt-8 text-center">
//             <Button asChild>
//               <Link href="/listings">View all <ChevronRight className="w-4 h-4" /></Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <Cta />
//       <Stats />
      
//       <section>
//         <div className="md:py-12 sm:py-8 py-6 md:px-6 px-4 bg-neutral-700">
//           <p className="text-center text-neutral-300 text-sm max-w-3xl mx-auto">Finding and renting the right machine is simple. Browse verified equipment, book instantly with transparent pricing, and get it delivered to your site with full support so you can focus on getting the job done.</p>
//           <div className="md:mt-8 mt-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-5xl mx-auto">
//             <div className="p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
//               <Search className="w-10 h-10 stroke-yellowClr my-2" />
//               <p className="text-lg font-semibold mb-1 text-white">Search & Choose</p>
//               <p className="text-xs text-neutral-300">Explore our verified inventory with clear specs, real images, and fair pricing. Easily filter by location, category, and availability to find the right machine fast.</p>
//             </div>
//             <div className="p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
//               <MousePointerClick className="w-10 h-10 stroke-yellowClr my-2" />
//               <p className="text-lg font-semibold mb-1 text-white">Book & Secure</p>
//               <p className="text-xs text-neutral-300">Confirm your rental instantly through our platform. Enjoy transparent pricing, flexible rental terms, and secure payments no surprises.</p>
//             </div>
//             <div className="md:col-span-1 sm:col-span-2 p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
//               <Sparkles className="w-10 h-10 stroke-yellowClr my-2" />
//               <p className="text-lg font-semibold mb-1 text-white">Get to Work</p>
//               <p className="text-xs text-neutral-300">We deliver the machine directly to your site. Count on full operational support and maintenance assistance for the entire rental period.</p>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <TestimonialSlider />
      
//       <section>
//         <div className="customBg md:p-12 sm:p-10 p-8 text-center space-y-8 text-neutral-800 relative">
//           <div className="absolute top-0 left-0 h-8 w-full bg-linear-to-b from-neutral-700 via-neutral-700 to-transparent"></div>
//           <div className="space-y-4 relative z-10">
//             <h6 className="md:text-5xl sm:text-4xl text-3xl font-heading text-yellowClr">Own Heavy Machinery?</h6>
//             <p className="sm:text-lg text-sm font-medium max-w-2xl mx-auto text-neutral-300">Put your machines to work and start earning today. Join a growing network of trusted owners already generating consistent income on our platform.</p>
//           </div>
//           <Button asChild className={'sm:p-6 p-5 rounded-xl sm:text-lg text-neutral-800'}>
//             <Link href="/user/add-machinery">
//               <Plus /> List Your Machine
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </>
//   );
// }[]



// "use client";

// import { useState, useEffect } from "react";
// import { useMachinery } from "@/context/useMachinery";
// import Cta from "@/components/Cta";
// import HeroSection from "@/components/HeroSection";
// import Stats from "@/components/Stats";
// import TestimonialSlider from "@/components/TestimonialSlider";
// import { Button } from "@/components/ui/button";
// import { MousePointerClick, Plus, Search, Sparkles, ChevronRight } from "lucide-react";
// import ProductCard from "@/components/ProductCard";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   const { machinery } = useMachinery();
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage on mount
//   useEffect(() => {
//     const stored = localStorage.getItem("ekcors_favorites");
//     if (stored) setFavorites(JSON.parse(stored));
//   }, []);

//   // Save to localStorage when favorites change
//   useEffect(() => {
//     localStorage.setItem("ekcors_favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const toggleFavorite = (machine) => {
//     setFavorites((prev) => {
//       const exists = prev.some((item) => item.id === machine.id);
//       if (exists) {
//         return prev.filter((item) => item.id !== machine.id);
//       } else {
//         return [...prev, machine];
//       }
//     });
//   };

//   const isFavorite = (id) => favorites.some((item) => item.id === id);

//   // Categories data with correct slug paths
//   const categories = [
//     { name: "Earthmoving", slug: "earthmoving", image: "/images/categories/earthmoving.png" },
//     { name: "Concrete", slug: "concrete", image: "/images/categories/concrete.png" },
//     { name: "Lifting", slug: "lifting", image: "/images/categories/lifting.png" },
//     { name: "Road", slug: "road", image: "/images/categories/road.png" },
//     { name: "Power Equipment", slug: "power-equipment", image: "/images/categories/power.png" },
//   ];

//   return (
//     <>
//       <HeroSection />

//       {/* Categories Section */}
//       <section className="bg-neutral-700 md:px-6 px-4">
//         <div className="md:py-12 sm:py-8 py-6 max-w-6xl mx-auto">
//           <h2 className="font-heading md:text-4xl text-3xl text-yellowClr text-center mb-2">Categories</h2>
//           <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 sm:gap-4 gap-2 sm:mt-6 mt-4">
//             {categories.map((category) => (
//               <Link
//                 key={category.name}
//                 href={`/categories/${category.slug}`}
//                 className="flex flex-col justify-between gap-4 border border-neutral-600 hover:bg-white/5 duration-200 rounded-lg p-4 text-white text-center group"
//               >
//                 <Image
//                   src={category.image}
//                   width={500}
//                   height={500}
//                   className="sm:max-h-32 max-h-28 object-contain group-hover:scale-110 duration-300"
//                   alt={category.name}
//                 />
//                 <p>{category.name}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Machinery Section WITH FAVORITES AND BOOK NOW */}
//       <section className="bg-neutral-700 md:px-6 px-4">
//         <div className="md:py-12 sm:py-8 py-6 max-w-6xl mx-auto">
//           <div className="flex sm:flex-row flex-col justify-between gap-2 py-4 bg-neutral-700">
//             <h2 className="font-heading md:text-4xl text-3xl text-yellowClr text-center flex-1 mb-2">Machineries</h2>
//           </div>
//           <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3">
//             {machinery?.slice(0, 12)?.map((machine, index) => (
//               <ProductCard
//                 key={index}
//                 data={machine}
//                 isFavorite={isFavorite}
//                 onToggleFavorite={toggleFavorite}
//               />
//             ))}
//           </div>
//           <div className="mt-8 text-center">
//             <Button asChild>
//               <Link href="/listings">
//                 View all <ChevronRight className="w-4 h-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <Cta />
//       <Stats />

//       <section>
//         <div className="md:py-12 sm:py-8 py-6 md:px-6 px-4 bg-neutral-700">
//           <p className="text-center text-neutral-300 text-sm max-w-3xl mx-auto">
//             Finding and renting the right machine is simple. Browse verified equipment, book instantly with transparent pricing, and get it delivered to your site with full support so you can focus on getting the job done.
//           </p>
//           <div className="md:mt-8 mt-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-5xl mx-auto">
//             <div className="p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
//               <Search className="w-10 h-10 stroke-yellowClr my-2" />
//               <p className="text-lg font-semibold mb-1 text-white">Search & Choose</p>
//               <p className="text-xs text-neutral-300">
//                 Explore our verified inventory with clear specs, real images, and fair pricing. Easily filter by location, category, and availability to find the right machine fast.
//               </p>
//             </div>
//             <div className="p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
//               <MousePointerClick className="w-10 h-10 stroke-yellowClr my-2" />
//               <p className="text-lg font-semibold mb-1 text-white">Book & Secure</p>
//               <p className="text-xs text-neutral-300">
//                 Confirm your rental instantly through our platform. Enjoy transparent pricing, flexible rental terms, and secure payments no surprises.
//               </p>
//             </div>
//             <div className="md:col-span-1 sm:col-span-2 p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
//               <Sparkles className="w-10 h-10 stroke-yellowClr my-2" />
//               <p className="text-lg font-semibold mb-1 text-white">Get to Work</p>
//               <p className="text-xs text-neutral-300">
//                 We deliver the machine directly to your site. Count on full operational support and maintenance assistance for the entire rental period.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <TestimonialSlider />

//       <section>
//         <div className="customBg md:p-12 sm:p-10 p-8 text-center space-y-8 text-neutral-800 relative">
//           <div className="absolute top-0 left-0 h-8 w-full bg-linear-to-b from-neutral-700 via-neutral-700 to-transparent"></div>
//           <div className="space-y-4 relative z-10">
//             <h6 className="md:text-5xl sm:text-4xl text-3xl font-heading text-yellowClr">Own Heavy Machinery?</h6>
//             <p className="sm:text-lg text-sm font-medium max-w-2xl mx-auto text-neutral-300">
//               Put your machines to work and start earning today. Join a growing network of trusted owners already generating consistent income on our platform.
//             </p>
//           </div>
//           <Button asChild className="sm:p-6 p-5 rounded-xl sm:text-lg text-neutral-800">
//             <Link href="/user/add-machinery">
//               <Plus /> List Your Machine
//             </Link>
//           </Button>
//         </div>
//       </section>
//     </>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { useMachinery } from "@/context/useMachinery";
import Cta from "@/components/Cta";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Button } from "@/components/ui/button";
import { MousePointerClick, Plus, Search, Sparkles, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { machinery, machineryLoading } = useMachinery();
  console.log('🏠 HOME RENDER - machinery length:', machinery?.length, 'loading:', machineryLoading); // ✅ added loading
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("ekcors_favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // Save to localStorage when favorites change
  useEffect(() => {
    localStorage.setItem("ekcors_favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ✅ Fixed: use _id instead of id
  const toggleFavorite = (machine) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item._id === machine._id);
      if (exists) {
        return prev.filter((item) => item._id !== machine._id);
      } else {
        return [...prev, machine];
      }
    });
  };

  const isFavorite = (id) => favorites.some((item) => item._id === id);

  // Categories data
  const categories = [
    { name: "Earthmoving", slug: "earthmoving", image: "/images/categories/earthmoving.png" },
    { name: "Concrete", slug: "concrete", image: "/images/categories/concrete.png" },
    { name: "Lifting", slug: "lifting", image: "/images/categories/lifting.png" },
    { name: "Road", slug: "road", image: "/images/categories/road.png" },
    { name: "Power Equipment", slug: "power-equipment", image: "/images/categories/power.png" },
  ];

  // Show loader while fetching
  if (machineryLoading) {
    return (
      <div className="bg-neutral-700 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading machinery...</div>
      </div>
    );
  }

  // Show empty state if no machines
  if (!machinery || machinery.length === 0) {
    console.log('🏠 Homepage render - machinery length:', machinery?.length, 'loading:', machineryLoading);
    return (
      <div className="bg-neutral-700 min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">No machinery found.</div>
      </div>
    );
  }

  return (
    <>
      <HeroSection />

      {/* Categories Section */}
      <section className="bg-neutral-700 md:px-6 px-4">
        <div className="md:py-12 sm:py-8 py-6 max-w-6xl mx-auto">
          <h2 className="font-heading md:text-4xl text-3xl text-yellowClr text-center mb-2">Categories</h2>
          <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 sm:gap-4 gap-2 sm:mt-6 mt-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.slug}`}
                className="flex flex-col justify-between gap-4 border border-neutral-600 hover:bg-white/5 duration-200 rounded-lg p-4 text-white text-center group"
              >
                <Image
                  src={category.image}
                  width={500}
                  height={500}
                  className="sm:max-h-32 max-h-28 object-contain group-hover:scale-110 duration-300"
                  alt={category.name}
                />
                <p>{category.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Section */}
      <section className="bg-neutral-700 md:px-6 px-4">
        <div className="md:py-12 sm:py-8 py-6 max-w-6xl mx-auto">
          <div className="flex sm:flex-row flex-col justify-between gap-2 py-4 bg-neutral-700">
            <h2 className="font-heading md:text-4xl text-3xl text-yellowClr text-center flex-1 mb-2">Machineries</h2>
          </div>
          {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3">
            {machinery.slice(0, 12).map((machine) => (
              <ProductCard
                key={machine._id} // ✅ use _id instead of index
                data={machine}
                isFavorite={isFavorite}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div> */}
<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-3">
  {machinery.slice(0, 12).map((machine) => (
    <ProductCard
      key={machine._id}
      data={machine}
      isFavorite={isFavorite}
      onToggleFavorite={toggleFavorite}
    />
  ))}
</div>
  <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/listings">
                View all <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Cta />
      <Stats />

      <section>
        <div className="md:py-12 sm:py-8 py-6 md:px-6 px-4 bg-neutral-700">
          <p className="text-center text-neutral-300 text-sm max-w-3xl mx-auto">
            Finding and renting the right machine is simple. Browse verified equipment, book instantly with transparent pricing, and get it delivered to your site with full support so you can focus on getting the job done.
          </p>
          <div className="md:mt-8 mt-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-5xl mx-auto">
            <div className="p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
              <Search className="w-10 h-10 stroke-yellowClr my-2" />
              <p className="text-lg font-semibold mb-1 text-white">Search & Choose</p>
              <p className="text-xs text-neutral-300">
                Explore our verified inventory with clear specs, real images, and fair pricing. Easily filter by location, category, and availability to find the right machine fast.
              </p>
            </div>
            <div className="p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
              <MousePointerClick className="w-10 h-10 stroke-yellowClr my-2" />
              <p className="text-lg font-semibold mb-1 text-white">Book & Secure</p>
              <p className="text-xs text-neutral-300">
                Confirm your rental instantly through our platform. Enjoy transparent pricing, flexible rental terms, and secure payments no surprises.
              </p>
            </div>
            <div className="md:col-span-1 sm:col-span-2 p-4 bg-yellowClr/20 border border-yellowClr/40 rounded-xl shadow-md">
              <Sparkles className="w-10 h-10 stroke-yellowClr my-2" />
              <p className="text-lg font-semibold mb-1 text-white">Get to Work</p>
              <p className="text-xs text-neutral-300">
                We deliver the machine directly to your site. Count on full operational support and maintenance assistance for the entire rental period.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section>
        <div className="customBg md:p-12 sm:p-10 p-8 text-center space-y-8 text-neutral-800 relative">
          <div className="absolute top-0 left-0 h-8 w-full bg-linear-to-b from-neutral-700 via-neutral-700 to-transparent"></div>
          <div className="space-y-4 relative z-10">
            <h6 className="md:text-5xl sm:text-4xl text-3xl font-heading text-yellowClr">Own Heavy Machinery?</h6>
            <p className="sm:text-lg text-sm font-medium max-w-2xl mx-auto text-neutral-300">
              Put your machines to work and start earning today. Join a growing network of trusted owners already generating consistent income on our platform.
            </p>
          </div>
          <Button asChild className="sm:p-6 p-5 rounded-xl sm:text-lg text-neutral-800">
            <Link href="/user/add-machinery">
              <Plus /> List Your Machine
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}