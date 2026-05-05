// import { useId } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu"
// import Link from "next/link";
// import Image from "next/image";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { BadgeIndianRupee, Banknote, Bookmark, ChevronsUpDown, CirclePlus, CircleUserRound, ClipboardCheck, Headset, Home, LogIn, LogOut, Scroll, TicketCheck } from "lucide-react";
// import UserMenu from "./user-menu";

// const navigationLinks = [
//   { active: true, href: "/", label: "Home" },
//   { href: "/listings", label: "Listings" },
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const id = useId();

//   return (
//     <header className="px-4 md:px-6 fixed top-0 left-0 right-0 z-50 bg-neutral-800">
//       <div className="flex h-18 items-center justify-between gap-4">

//         <div className="flex-1 flex items-center">
//           <Link href="/">
//             <Image alt="Ekcors logo" height={200} priority src="/images/logo-white.png" width={200} className="max-h-14 object-contain w-fit" />
//           </Link>
//         </div>

//         <div className="grow max-md:hidden">
//           <NavigationMenu className={'mx-auto'}>
//             <NavigationMenuList className="gap-0">
//               {navigationLinks.map((link, _index) => (
//                 <NavigationMenuItem key={link.label}>
//                   <Button variant={'ghost'} asChild>
//                     <Link
//                       className="py-1.5 font-medium text-neutral-300 hover:text-yellowClr hover:bg-transparent rounded-none data-active:text-yellowClr"
//                       data-active={link.active}
//                       href={link.href}>
//                       {link.label}
//                     </Link>
//                   </Button>
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         <div className="flex flex-1 items-center justify-end gap-2">

//           <Button asChild>
//             <Link href="/sign-in"><CirclePlus size={16} /> List Machine</Link>
//           </Button>
//           {!true ? <Button asChild className={'md:inline-flex hidden'}>
//             <Link href="/sign-in"><LogIn size={16} /> Login</Link>
//           </Button> : <UserMenu />}
//           <Drawer direction="left">
//             <DrawerTrigger className="inline-block md:hidden" asChild>
//               <Button className="group md:hidden" size="icon" variant="outline">
//                 <svg
//                   className="pointer-events-none"
//                   fill="none"
//                   height={16}
//                   stroke="white"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   width={16}
//                   xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     className="-translate-y-[7px] origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
//                     d="M4 12L20 12" />
//                   <path
//                     className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
//                     d="M4 12H20" />
//                   <path
//                     className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
//                     d="M4 12H20" />
//                 </svg>
//               </Button>
//             </DrawerTrigger>
//             <DrawerContent className={'bg-neutral-800 border-neutral-700'}>
//               <DrawerHeader>
//                 <div className="flex items-center gap-2">
//                   <div className="flex">
//                     <Image
//                       src="/images/logo-white.png"
//                       width={200}
//                       height={200}
//                       alt="logo"
//                       className="max-h-16 w-fit"
//                     />
//                   </div>
//                   <div className="hidden">
//                     <DrawerTitle>Ekcors</DrawerTitle>
//                     <DrawerDescription>Sidebar</DrawerDescription>
//                   </div>
//                 </div>
//               </DrawerHeader>

//               <div className="px-4 text-white">
//                 <ul className="text-sm">
//                   <li>
//                     <DrawerClose asChild>
//                       <Link
//                         className="flex w-full items-center gap-2 py-2"
//                         href="/"
//                       >
//                         <Home className="inline h-4 w-4" />
//                         Home
//                       </Link>
//                     </DrawerClose>
//                   </li>
//                   <li>
//                     <DrawerClose asChild>
//                       <Link
//                         className="flex w-full items-center gap-2 py-2"
//                         href="/about"
//                       >
//                         <Scroll className="inline h-4 w-4" />
//                         About
//                       </Link>
//                     </DrawerClose>
//                   </li>

//                   <li>
//                     <DrawerClose asChild>
//                       <Link
//                         className="flex w-full items-center gap-2 py-2"
//                         href="/offers"
//                       >
//                         <BadgeIndianRupee className="inline h-4 w-4" />
//                         Offers
//                       </Link>
//                     </DrawerClose>
//                   </li>
//                   <li>
//                     <DrawerClose asChild>
//                       <Link
//                         className="flex w-full items-center gap-2 py-2"
//                         href="/contact"
//                       >
//                         <Headset className="inline h-4 w-4" />
//                         Contact
//                       </Link>
//                     </DrawerClose>
//                   </li>
//                 </ul>
//               </div>

//               <DrawerFooter>
//                 {false ? (
//                   <DropdownMenu>
//                     <DropdownMenuTrigger
//                       asChild
//                       className="h-12 p-2!"
//                     >
//                       <Button
//                         size="lg"
//                         className="border data-[state=open]:bg-yellowClr/80 data-[state=open]:text-sidebar-accent-foreground data-[state=open]:border"
//                       >
//                         <Avatar className="h-8 w-8 rounded-xl">
//                           <AvatarImage src={"/user/avatar"} />
//                           <AvatarFallback className="bg-white uppercase">
//                             SA
//                           </AvatarFallback>
//                         </Avatar>
//                         <div className="grid flex-1 text-left text-sm leading-tight">
//                           <span className="truncate font-medium capitalize">
//                             Hi, User
//                           </span>
//                           <span className="truncate text-[10px]">
//                             DRIVER
//                           </span>
//                         </div>
//                         <ChevronsUpDown className="ml-auto size-4" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent
//                       className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
//                       align="end"
//                       sideOffset={4}
//                     >
//                       <DropdownMenuGroup>
//                         <DropdownMenuItem asChild>
//                           <Link href="/user/profile" className="text-xs font-medium">
//                             <CircleUserRound className="text-yellowClr inline h-3 w-3" />
//                             Profile
//                           </Link>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem asChild>
//                           <Link href="/user/bookings" className="text-xs font-medium">
//                             <Bookmark className="text-yellowClr inline h-3 w-3" />
//                             Saved Machines
//                           </Link>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem asChild>
//                           <Link href="/user/payments" className="text-xs font-medium">
//                             <ClipboardCheck className="text-yellowClr inline h-3 w-3" />
//                             Orders
//                           </Link>
//                         </DropdownMenuItem>
//                       </DropdownMenuGroup>
//                       <DropdownMenuSeparator />
//                       <DropdownMenuItem asChild>
//                         <button
//                           className="flex w-full cursor-pointer items-center gap-2 text-xs font-medium"
//                         // onClick={handleLogout}
//                         >
//                           <LogOut className="text-yellowClr" />
//                           Log out
//                         </button>
//                       </DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ) : (
//                   <div>
//                     <Button
//                       variant="default"
//                       size="sm"
//                       className="mt-2 h-9 w-full"
//                       asChild
//                     >
//                       <Link href="/sign-in"><LogIn className="h-4 w-4" /> Login</Link>
//                     </Button>
//                   </div>
//                 )}
//               </DrawerFooter>
//             </DrawerContent>
//           </Drawer>
//         </div>
//       </div>
//     </header>
//   );
// }




// "use client"

// import { useAuth } from "@/context/useAuth";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu"
// import Link from "next/link";
// import Image from "next/image";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { BadgeIndianRupee, Banknote, Bookmark, ChevronsUpDown, CirclePlus, CircleUserRound, ClipboardCheck, Headset, Home, LogIn, LogOut, Scroll, TicketCheck } from "lucide-react";
// import UserMenu from "./user-menu";
// import { useRouter } from "next/navigation";
// import { logoutUser } from "@/api/userApis";

// const navigationLinks = [
//   { active: true, href: "/", label: "Home" },
//   { href: "/listings", label: "Listings" },
//   // { href: "/owner", label: "Owner" },
//   { href: "/about", label: "About" },
//   // { href: "/vendors", label: "Vendors" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const { user, setUser } = useAuth()
//   const router = useRouter()

//   const handleLogout = async () => {
//     try {
//       const res = await logoutUser()

//       if (res.status === 'success') {
//         setUser(null)
//         router.replace('/sign-in')
//         router.refresh()
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <>
//     <header className="px-4 md:px-6 fixed top-0 left-0 right-0 z-50 bg-neutral-800">
//       <div className="flex h-18 items-center justify-between gap-4">

//         <div className="flex-1 flex items-center">
//           <Link href="/">
//             <Image alt="Ekcors logo" height={200} priority src="/images/logo-white.png" width={200} className="max-h-14 object-contain w-fit" />
//           </Link>
//         </div>

//         <div className="grow max-md:hidden">
//           <NavigationMenu className={'mx-auto'}>
//             <NavigationMenuList className="gap-0">
//               {navigationLinks.map((link, _index) => (
//                 <NavigationMenuItem key={link.label}>
//                   <Button variant={'ghost'} asChild>
//                     <Link
//                       className="py-1.5 font-medium text-neutral-300 hover:text-yellowClr hover:bg-transparent rounded-none data-active:text-yellowClr"
//                       data-active={link.active}
//                       href={link.href}>
//                       {link.label}
//                     </Link>
//                   </Button>
//                 </NavigationMenuItem>
//               ))}
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         <div className="flex flex-1 items-center justify-end gap-2">

//           {user && <Button asChild className={'rounded-full'}>
//             <Link href="/user/add-machinery"><CirclePlus size={16} /> List Machine</Link>
//           </Button>}

//           {user
//             ? <UserMenu handleLogout={handleLogout} />
//             : <Button asChild className={'md:inline-flex hidden'}>
//               <Link href="/sign-in"><LogIn size={16} /> Login</Link>
//             </Button>}

//           <Drawer direction="left">
//             <DrawerTrigger className="inline-flex md:hidden" asChild>
//               <Button className="group md:hidden" size="icon" variant="outline">
//                 <svg
//                   className="pointer-events-none"
//                   fill="none"
//                   height={16}
//                   stroke="white"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                   width={16}
//                   xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     className="-translate-y-[7px] origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
//                     d="M4 12L20 12" />
//                   <path
//                     className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
//                     d="M4 12H20" />
//                   <path
//                     className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
//                     d="M4 12H20" />
//                 </svg>
//               </Button>
//             </DrawerTrigger>
//             <DrawerContent className={'bg-neutral-800 border-neutral-700'}>
//               <DrawerHeader>
//                 <div className="flex items-center gap-2">
//                   <div className="flex">
//                     <Image
//                       src="/images/logo-white.png"
//                       width={200}
//                       height={200}
//                       alt="logo"
//                       className="max-h-16 w-fit"
//                     />
//                   </div>
//                   <div className="hidden">
//                     <DrawerTitle>Ekcors</DrawerTitle>
//                     <DrawerDescription>Sidebar</DrawerDescription>
//                   </div>
//                 </div>
//               </DrawerHeader>

//               <div className="px-4 text-white">
//                 <ul className="text-sm">
//                   <li>
//                     <DrawerClose asChild>
//                       <Link
//                         className="flex w-full items-center gap-2 py-2"
//                         href="/"
//                       >
//                         <Home className="inline h-4 w-4" />
//                         Home
//                       </Link>
//                     </DrawerClose>
//                   </li>
//                   {/* <li>
//                     <DrawerClose asChild>
//                       <Link
//                         className="flex w-full items-center gap-2 py-2"
//                         href="/owner"
//                       >
//                         <Scroll className="inline h-4 w-4" />
//                         Owner
//                       </Link>
//                     </DrawerClose>
//                   </li> */}
//                   <li>
//                     <DrawerClose asChild>
//                       <Link
//                         className="flex w-full items-center gap-2 py-2"
//                         href="/about"
//                       >
//                         <Scroll className="inline h-4 w-4" />
//                         About
//                       </Link>
//                     </DrawerClose>
//                   </li>
//                   {/* <li>
//                     <DrawerClose asChild>
//                       <Link
//                         className="flex w-full items-center gap-2 py-2"
//                         href="/vendors"
//                       >
//                         <Scroll className="inline h-4 w-4" />
//                         Vendors
//                       </Link>
//                     </DrawerClose>
//                   </li> */}

//                   <li>
//                     <DrawerClose asChild>
//                       <Link
//                         className="flex w-full items-center gap-2 py-2"
//                         href="/offers"
//                       >
//                         <BadgeIndianRupee className="inline h-4 w-4" />
//                         Offers
//                       </Link>
//                     </DrawerClose>
//                   </li>
//                   <li>
//                     <DrawerClose asChild>
//                       <Link
//                         className="flex w-full items-center gap-2 py-2"
//                         href="/contact"
//                       >
//                         <Headset className="inline h-4 w-4" />
//                         Contact
//                       </Link>
//                     </DrawerClose>
//                   </li>
//                 </ul>
//               </div>

//               <DrawerFooter>
//                 {user ? (
//                   <DropdownMenu>
//                     <DropdownMenuTrigger
//                       asChild
//                       className="h-12 p-2!"
//                     >
//                       <Button
//                         size="lg"
//                         className="data-[state=open]:bg-yellowClr/80 data-[state=open]:text-sidebar-accent-foreground"
//                       >
//                         <Avatar className="h-8 w-8 rounded-xl">
//                           <AvatarImage src={`${process.env.NEXT_PUBLIC_API_URL}${user?.avatar}`} />
//                           <AvatarFallback className="bg-white uppercase">
//                             {user?.fullName.split(' ')[0][0].toUpperCase()}
//                             {user?.fullName.split(' ')[1][0].toUpperCase()}
//                           </AvatarFallback>
//                         </Avatar>
//                         <div className="grid flex-1 text-left text-sm leading-tight">
//                           <span className="truncate font-medium capitalize">
//                             Hi, {user?.fullName.split(' ')[0]}
//                           </span>
//                           <span className="truncate text-[10px]">
//                             {user?.role.toUpperCase()}
//                           </span>
//                         </div>
//                         <ChevronsUpDown className="ml-auto size-4" />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent
//                       className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
//                       align="end"
//                       sideOffset={4}
//                     >
//                       <DropdownMenuGroup>
//                         <DropdownMenuItem asChild>
//                           <Link href="/user/profile" className="text-xs font-medium">
//                             <CircleUserRound className="text-yellowClr inline h-3 w-3" />
//                             Profile
//                           </Link>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem asChild>
//                           <Link href="/user/bookings" className="text-xs font-medium">
//                             <Bookmark className="text-yellowClr inline h-3 w-3" />
//                             Saved Machines
//                           </Link>
//                         </DropdownMenuItem>
//                         <DropdownMenuItem asChild>
//                           <Link href="/user/payments" className="text-xs font-medium">
//                             <ClipboardCheck className="text-yellowClr inline h-3 w-3" />
//                             Orders
//                           </Link>
//                         </DropdownMenuItem>
//                       </DropdownMenuGroup>
//                       <DropdownMenuSeparator />
//                       <DropdownMenuItem asChild>
//                         <button
//                           className="flex w-full cursor-pointer items-center gap-2 text-xs font-medium"
//                           onClick={handleLogout}
//                         >
//                           <LogOut className="text-yellowClr" />
//                           Log out
//                         </button>
//                       </DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ) : (
//                   <div>
//                     <Button
//                       variant="default"
//                       size="sm"
//                       className="mt-2 h-9 w-full"
//                       asChild
//                     >
//                       <Link href="/sign-in"><LogIn className="h-4 w-4" /> Login</Link>
//                     </Button>
//                   </div>
//                 )}
//               </DrawerFooter>
//             </DrawerContent>
//           </Drawer>
//         </div>
//       </div>
//     </header>
//     </>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { useAuth } from "@/context/useAuth";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";
// import Link from "next/link";
// import Image from "next/image";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import {
//   BadgeIndianRupee,
//   Bookmark,
//   ChevronsUpDown,
//   CirclePlus,
//   CircleUserRound,
//   ClipboardCheck,
//   Headset,
//   Home,
//   LogIn,
//   LogOut,
//   Scroll,
//   Mail,
//   Phone,
//   Facebook,
//   Twitter,
//   Instagram,
// } from "lucide-react";
// import UserMenu from "./user-menu";
// import { useRouter } from "next/navigation";
// import { logoutUser } from "@/api/userApis";

// const navigationLinks = [
//   { active: true, href: "/", label: "Home" },
//   { href: "/listings", label: "Listings" },
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const { user, setUser } = useAuth();
//   const router = useRouter();

//   // ✅ Fix hydration
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);

//   // ✅ Safe initials
//   const nameParts = user?.fullName?.split(" ") || [];
//   const firstInitial = nameParts[0]?.[0]?.toUpperCase() || "";
//   const secondInitial = nameParts[1]?.[0]?.toUpperCase() || "";

//   const handleLogout = async () => {
//     try {
//       const res = await logoutUser();
//       if (res.status === "success") {
//         setUser(null);
//         router.replace("/sign-in");
//         router.refresh();
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       {/* 🆕 TOP HEADER BAR */}
//       <div className=" top-0 left-0 right-0 z-50 bg-black text-white text-sm py-4 px-4 md:px-6">
//         <div className="flex flex-wrap items-center justify-between gap-2">
//           {/* Contact info */}
//           <div className="flex items-center gap-4">
//             <a href="mailto:support@ekcors.com" className="flex items-center gap-1 hover:text-yellowClr transition">
//               <Mail className="h-3.5 w-3.5" />
//               <span className="hidden sm:inline">support@ekcors.com</span>
//             </a>
//             <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-yellowClr transition">
//               <Phone className="h-3.5 w-3.5" />
//               <span className="hidden sm:inline">+1 234 567 890</span>
//             </a>
//           </div>
//           {/* Social icons */}
//           <div className="flex items-center gap-3">
//             <a href="#" aria-label="Facebook" className="hover:text-yellowClr transition">
//               <Facebook className="h-3.5 w-3.5" />
//             </a>
//             <a href="#" aria-label="Twitter" className="hover:text-yellowClr transition">
//               <Twitter className="h-3.5 w-3.5" />
//             </a>
//             <a href="#" aria-label="Instagram" className="hover:text-yellowClr transition">
//               <Instagram className="h-3.5 w-3.5" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* MAIN NAVBAR - now positioned below top header */}
//       <header className="px-4 md:px-6  top-12 left-0 right-0 z-40 bg-neutral-800 ">
//         <div className="flex h-18 items-center justify-between gap-4">
//           {/* Logo */}
//           <div className="flex-1 flex items-center">
//             <Link href="/">
//               <Image
//                 alt="Ekcors logo"
//                 height={200}
//                 width={200}
//                 priority
//                 src="/images/logo-white.png"
//                 className="max-h-14 object-contain w-fit"
//               />
//             </Link>
//           </div>

//           {/* Desktop Nav */}
//           <div className="grow max-md:hidden">
//             <NavigationMenu className="mx-auto">
//               <NavigationMenuList>
//                 {navigationLinks.map((link) => (
//                   <NavigationMenuItem key={link.label}>
//                     <Button variant="ghost" asChild>
//                       <Link
//                         href={link.href}
//                         className="py-1.5 font-medium text-neutral-300 hover:text-yellowClr"
//                       >
//                         {link.label}
//                       </Link>
//                     </Button>
//                   </NavigationMenuItem>
//                 ))}
//               </NavigationMenuList>
//             </NavigationMenu>
//           </div>

//           {/* Right Section */}
//           <div className="flex flex-1 items-center justify-end gap-2">
//             {user && (
//               <Button asChild className="rounded-full">
//                 <Link href="/user/add-machinery">
//                   <CirclePlus size={16} /> List Machine
//                 </Link>
//               </Button>
//             )}

//             {user ? (
//               <UserMenu handleLogout={handleLogout} />
//             ) : (
//               <Button asChild className="hidden md:inline-flex">
//                 <Link href="/sign-in">
//                   <LogIn size={16} /> Login
//                 </Link>
//               </Button>
//             )}

//             {/* ✅ Drawer only after mount */}
//             {mounted && (
//               <Drawer direction="left">
//                 <DrawerTrigger asChild>
//                   <button className="md:hidden inline-flex items-center justify-center size-9 border rounded-md">
//                     <svg
//                       fill="none"
//                       height={16}
//                       stroke="white"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                       width={16}
//                     >
//                       <path d="M4 12H20" />
//                       <path d="M4 6H20" />
//                       <path d="M4 18H20" />
//                     </svg>
//                   </button>
//                 </DrawerTrigger>

//                 <DrawerContent className="bg-neutral-800 border-neutral-700">
//                   <DrawerHeader>
//                     <Image
//                       src="/images/logo-white.png"
//                       width={200}
//                       height={200}
//                       alt="logo"
//                       className="max-h-16 w-fit"
//                     />
//                   </DrawerHeader>

//                   {/* Drawer Links */}
//                   <div className="px-4 text-white">
//                     <ul className="text-sm">
//                       <li>
//                         <DrawerClose asChild>
//                           <Link href="/" className="flex items-center gap-2 py-2">
//                             <Home className="h-4 w-4" /> Home
//                           </Link>
//                         </DrawerClose>
//                       </li>
//                       <li>
//                         <DrawerClose asChild>
//                           <Link href="/about" className="flex items-center gap-2 py-2">
//                             <Scroll className="h-4 w-4" /> About
//                           </Link>
//                         </DrawerClose>
//                       </li>
//                       <li>
//                         <DrawerClose asChild>
//                           <Link href="/offers" className="flex items-center gap-2 py-2">
//                             <BadgeIndianRupee className="h-4 w-4" /> Offers
//                           </Link>
//                         </DrawerClose>
//                       </li>
//                       <li>
//                         <DrawerClose asChild>
//                           <Link href="/contact" className="flex items-center gap-2 py-2">
//                             <Headset className="h-4 w-4" /> Contact
//                           </Link>
//                         </DrawerClose>
//                       </li>
//                     </ul>
//                   </div>

//                   {/* Footer */}
//                   <DrawerFooter>
//                     {user ? (
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <Button size="lg" className="h-12">
//                             <Avatar className="h-8 w-8 rounded-xl">
//                               <AvatarImage
//                                 src={`${process.env.NEXT_PUBLIC_API_URL}${user?.avatar}`}
//                               />
//                               <AvatarFallback className="bg-white uppercase">
//                                 {firstInitial}
//                                 {secondInitial}
//                               </AvatarFallback>
//                             </Avatar>

//                             <div className="grid flex-1 text-left text-sm">
//                               <span className="truncate">Hi, {nameParts[0] || ""}</span>
//                               <span className="text-[10px]">{user?.role?.toUpperCase()}</span>
//                             </div>

//                             <ChevronsUpDown className="ml-auto size-4" />
//                           </Button>
//                         </DropdownMenuTrigger>

//                         <DropdownMenuContent align="end">
//                           <DropdownMenuGroup>
//                             <DropdownMenuItem asChild>
//                               <Link href="/user/profile">
//                                 <CircleUserRound className="h-3 w-3" /> Profile
//                               </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuItem asChild>
//                               <Link href="/user/bookings">
//                                 <Bookmark className="h-3 w-3" /> Saved
//                               </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuItem asChild>
//                               <Link href="/user/payments">
//                                 <ClipboardCheck className="h-3 w-3" /> Orders
//                               </Link>
//                             </DropdownMenuItem>
//                           </DropdownMenuGroup>

//                           <DropdownMenuSeparator />

//                           <DropdownMenuItem asChild>
//                             <button onClick={handleLogout} className="flex gap-2">
//                               <LogOut /> Logout
//                             </button>
//                           </DropdownMenuItem>
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     ) : (
//                       <Button asChild className="w-full">
//                         <Link href="/sign-in">
//                           <LogIn /> Login
//                         </Link>
//                       </Button>
//                     )}
//                   </DrawerFooter>
//                 </DrawerContent>
//               </Drawer>
//             )}
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }





"use client";

import { useEffect, useState, useRef } from "react";
import { useAuth } from "@/context/useAuth";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  BadgeIndianRupee,
  Bookmark,
  ChevronsUpDown,
  CirclePlus,
  CircleUserRound,
  ClipboardCheck,
  Headset,
  Home,
  LogIn,
  LogOut,
  Scroll,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Menu,
} from "lucide-react";
import UserMenu from "./user-menu";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/api/userApis";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/tracking", label: "Tracking" },
  { href: "/cart", label: "My Booking" },
];

export default function Navbar() {
  const { user, setUser } = useAuth();
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Scroll state – true when we should show the new navbar and hide the old one
  const [showNewNavbar, setShowNewNavbar] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Show new navbar after scrolling down more than 80px
          if (currentScrollY > 80 && !showNewNavbar) {
            setShowNewNavbar(true);
          } else if (currentScrollY <= 80 && showNewNavbar) {
            setShowNewNavbar(false);
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showNewNavbar]);

  // Safe initials
  const nameParts = user?.fullName?.split(" ") || [];
  const firstInitial = nameParts[0]?.[0]?.toUpperCase() || "";
  const secondInitial = nameParts[1]?.[0]?.toUpperCase() || "";

  const handleLogout = async () => {
    try {
      const res = await logoutUser();
      if (res.status === "success") {
        setUser(null);
        router.replace("/sign-in");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Mobile drawer component (shared)
  const MobileDrawer = () => (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <button className="md:hidden inline-flex items-center justify-center size-9 border rounded-md">
          <Menu className="h-4 w-4 text-white" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-neutral-800 border-neutral-700">
        <DrawerHeader>
          <Image
            src="/images/logo-white.png"
            width={200}
            height={200}
            alt="logo"
            className="max-h-16 w-fit"
          />
        </DrawerHeader>
        <div className="px-4 text-white">
          <ul className="text-sm">
            <li>
              <DrawerClose asChild>
                <Link href="/" className="flex items-center gap-2 py-2">
                  <Home className="h-4 w-4" /> Home
                </Link>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose asChild>
                <Link href="/listings" className="flex items-center gap-2 py-2">
                  <Scroll className="h-4 w-4" /> Listings
                </Link>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose asChild>
                <Link href="/about" className="flex items-center gap-2 py-2">
                  <Scroll className="h-4 w-4" /> About
                </Link>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose asChild>
                <Link href="/traking" className="flex items-center gap-2 py-2">
                  <Headset className="h-4 w-4" /> Traking
                </Link>
              </DrawerClose>
            </li>
            <li>
              <DrawerClose asChild>
                <Link href="/contact" className="flex items-center gap-2 py-2">
                  <Headset className="h-4 w-4" /> Contact
                </Link>
              </DrawerClose>
                       <DrawerClose asChild>
                <Link href="/cart" className="flex items-center gap-2 py-2">
                  <Headset className="h-4 w-4" /> My Booking
                </Link>
              </DrawerClose>
            </li>
          </ul>
        </div>
        <DrawerFooter>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="h-12">
                  <Avatar className="h-8 w-8 rounded-xl">
                    <AvatarImage
                      src={`${process.env.NEXT_PUBLIC_API_URL}${user?.avatar}`}
                    />
                    <AvatarFallback className="bg-white uppercase">
                      {firstInitial}{secondInitial}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm">
                    <span className="truncate">Hi, {nameParts[0] || ""}</span>
                    <span className="text-[10px]">{user?.role?.toUpperCase()}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/user/profile">
                      <CircleUserRound className="h-3 w-3" /> Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/user/saved">
                      <Bookmark className="h-3 w-3" /> Saved
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/user/orders">
                      <ClipboardCheck className="h-3 w-3" /> Orders
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <button onClick={handleLogout} className="flex gap-2">
                    <LogOut /> Logout
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild className="w-full">
              <Link href="/sign-in">
                <LogIn /> Login
              </Link>
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );

  // Calculate total height of the original fixed elements (top header + main navbar)
  // This is used as spacer to prevent content jump.
  const topHeaderHeight = 40; // 2.5rem = 40px (py-2 = 8px*2 + text)
  const mainNavbarHeight = 72; // h-18 = 4.5rem = 72px
  const totalFixedHeight = topHeaderHeight + mainNavbarHeight;

  return (
    <>
      {/* ORIGINAL TOP HEADER + MAIN NAVBAR (slide up/down together) */}
      <div
        className={`
          fixed top-0 left-0 right-0 z-40
          transition-transform duration-500 ease-in-out
          ${showNewNavbar ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        {/* Top header */}
        <div className="bg-yellowClr  transition-colors text-black text-sm py-3 px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2 ">
            <div className="flex items-center gap-4 ml-26">
              <a href="mailto:support@ekcors.com" className="flex items-center gap-2  ">
                <Mail className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">support@ekcors.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 ">
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">+1 234 567 890</span>
              </a>
              <a href="https://maps.google.com/?q=123+Main+St" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellowClr transition">
  <MapPin className="h-3.5 w-3.5" />
  <span className="hidden sm:inline">123 Main St, City, Country</span>
</a>
            </div>
<div className="flex items-center gap-3">
  <a 
    href="#" 
    aria-label="Facebook" 
    className="hover:text-primary transition-colors duration-200"
  >
    <Facebook className="h-3.5 w-3.5 transition-transform duration-200 hover:scale-150" />
  </a>
  <a 
    href="#" 
    aria-label="Twitter" 
    className="hover:text-primary transition-colors duration-200"
  >
    <Twitter className="h-3.5 w-3.5 transition-transform duration-200 hover:scale-150" />
  </a>
  <a 
    href="#" 
    aria-label="Instagram" 
    className="hover:text-primary transition-colors duration-200"
  >
    <Instagram className="h-3.5 w-3.5 transition-transform duration-200 hover:scale-150" />
  </a>
</div>
          </div>
        </div>

        {/* Main navbar */}
        <header className="bg-neutral-800 px-4 md:px-6">
          <div className="flex h-18 items-center justify-between gap-4">
            <div className="flex-1 flex items-center">
              <Link href="/">
                <Image
                  alt="Ekcors logo"
                  height={200}
                  width={200}
                  priority
                  src="/images/logo-white.png"
                  className="max-h-14 object-contain w-fit"
                />
              </Link>
            </div>

            <div className="grow max-md:hidden">
              <NavigationMenu className="mx-auto">
                <NavigationMenuList>
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                      <Button variant="ghost" asChild>
                        <Link
                          href={link.href}
                          className="py-1.5 font-medium text-neutral-300 hover:text-yellowClr border-b-2 border-transparent hover:border-yellowClr transition "
                        >
                          {link.label}
                        </Link>
                      </Button>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
              {user && (
                <Button asChild className="rounded-full">
                  <Link href="/user/add-machinery">
                    <CirclePlus size={16} /> List Machine
                  </Link>
                </Button>
              )}
              {user ? (
                <UserMenu handleLogout={handleLogout} />
              ) : (
                
                <Button asChild className="hidden md:inline-flex">
                  <Link href="/sign-in">
                    <LogIn size={16} /> Login
                  </Link>
                </Button>
              )}
              {mounted && <MobileDrawer />}
            </div>
          </div>
        </header>
      </div>

      {/* NEW COMPACT NAVBAR (drops down from top when scrolling) */}
      <div
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-neutral-800/95 backdrop-blur-md px-4 md:px-6 shadow-lg
          transition-transform duration-500 ease-in-out
          ${showNewNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo - smaller version */}
<Link href="/" className="flex-shrink-0">
  <Image
    alt="Ekcors logo"
    height={200}
    width={200}
    priority
    src="/images/logo-white.png"
    className="max-h-14 object-contain w-fit"  // h-10 = 40px, width auto
  />
</Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-yellowClr transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {user && (
              <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
                <Link href="/user/add-machinery">
                  <CirclePlus size={14} /> List Machine
                </Link>
              </Button>
            )}
            {user ? (
              <UserMenu handleLogout={handleLogout} />
            ) : (
              <Button asChild size="sm" className="hidden md:inline-flex">
                <Link href="/sign-in">
                  <LogIn size={14} /> Login
                </Link>
              </Button>
            )}
            {/* Mobile drawer - same as before */}
            {mounted && <MobileDrawer />}
          </div>
        </div>
      </div>

      {/* Spacer to maintain layout height when both headers are hidden */}
      <div className={`h-[${totalFixedHeight}px]`} />
    </>
  );
}