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


"use client"

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
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BadgeIndianRupee, Banknote, Bookmark, ChevronsUpDown, CirclePlus, CircleUserRound, ClipboardCheck, Headset, Home, LogIn, LogOut, Scroll, TicketCheck } from "lucide-react";
import UserMenu from "./user-menu";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/api/userApis";

const navigationLinks = [
  { active: true, href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  // { href: "/owner", label: "Owner" },
  { href: "/about", label: "About" },
  // { href: "/vendors", label: "Vendors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { user, setUser } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await logoutUser()

      if (res.status === 'success') {
        setUser(null)
        router.replace('/sign-in')
        router.refresh()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <header className="px-4 md:px-6 fixed top-0 left-0 right-0 z-50 bg-neutral-800">
      <div className="flex h-18 items-center justify-between gap-4">

        <div className="flex-1 flex items-center">
          <Link href="/">
            <Image alt="Ekcors logo" height={200} priority src="/images/logo-white.png" width={200} className="max-h-14 object-contain w-fit" />
          </Link>
        </div>

        <div className="grow max-md:hidden">
          <NavigationMenu className={'mx-auto'}>
            <NavigationMenuList className="gap-0">
              {navigationLinks.map((link, _index) => (
                <NavigationMenuItem key={link.label}>
                  <Button variant={'ghost'} asChild>
                    <Link
                      className="py-1.5 font-medium text-neutral-300 hover:text-yellowClr hover:bg-transparent rounded-none data-active:text-yellowClr"
                      data-active={link.active}
                      href={link.href}>
                      {link.label}
                    </Link>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">

          {user && <Button asChild className={'rounded-full'}>
            <Link href="#"><CirclePlus size={16} /> List Machine</Link>
          </Button>}

          {user
            ? <UserMenu handleLogout={handleLogout} />
            : <Button asChild className={'md:inline-flex hidden'}>
              <Link href="/sign-in"><LogIn size={16} /> Login</Link>
            </Button>}

          <Drawer direction="left">
            <DrawerTrigger className="inline-flex md:hidden" asChild>
              <Button className="group md:hidden" size="icon" variant="outline">
                <svg
                  className="pointer-events-none"
                  fill="none"
                  height={16}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width={16}
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="-translate-y-[7px] origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    d="M4 12L20 12" />
                  <path
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    d="M4 12H20" />
                  <path
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    d="M4 12H20" />
                </svg>
              </Button>
            </DrawerTrigger>
            <DrawerContent className={'bg-neutral-800 border-neutral-700'}>
              <DrawerHeader>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    <Image
                      src="/images/logo-white.png"
                      width={200}
                      height={200}
                      alt="logo"
                      className="max-h-16 w-fit"
                    />
                  </div>
                  <div className="hidden">
                    <DrawerTitle>Ekcors</DrawerTitle>
                    <DrawerDescription>Sidebar</DrawerDescription>
                  </div>
                </div>
              </DrawerHeader>

              <div className="px-4 text-white">
                <ul className="text-sm">
                  <li>
                    <DrawerClose asChild>
                      <Link
                        className="flex w-full items-center gap-2 py-2"
                        href="/"
                      >
                        <Home className="inline h-4 w-4" />
                        Home
                      </Link>
                    </DrawerClose>
                  </li>
                  {/* <li>
                    <DrawerClose asChild>
                      <Link
                        className="flex w-full items-center gap-2 py-2"
                        href="/owner"
                      >
                        <Scroll className="inline h-4 w-4" />
                        Owner
                      </Link>
                    </DrawerClose>
                  </li> */}
                  <li>
                    <DrawerClose asChild>
                      <Link
                        className="flex w-full items-center gap-2 py-2"
                        href="/about"
                      >
                        <Scroll className="inline h-4 w-4" />
                        About
                      </Link>
                    </DrawerClose>
                  </li>
                  {/* <li>
                    <DrawerClose asChild>
                      <Link
                        className="flex w-full items-center gap-2 py-2"
                        href="/vendors"
                      >
                        <Scroll className="inline h-4 w-4" />
                        Vendors
                      </Link>
                    </DrawerClose>
                  </li> */}

                  <li>
                    <DrawerClose asChild>
                      <Link
                        className="flex w-full items-center gap-2 py-2"
                        href="/offers"
                      >
                        <BadgeIndianRupee className="inline h-4 w-4" />
                        Offers
                      </Link>
                    </DrawerClose>
                  </li>
                  <li>
                    <DrawerClose asChild>
                      <Link
                        className="flex w-full items-center gap-2 py-2"
                        href="/contact"
                      >
                        <Headset className="inline h-4 w-4" />
                        Contact
                      </Link>
                    </DrawerClose>
                  </li>
                </ul>
              </div>

              <DrawerFooter>
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      asChild
                      className="h-12 p-2!"
                    >
                      <Button
                        size="lg"
                        className="data-[state=open]:bg-yellowClr/80 data-[state=open]:text-sidebar-accent-foreground"
                      >
                        <Avatar className="h-8 w-8 rounded-xl">
                          <AvatarImage src={`${process.env.NEXT_PUBLIC_API_URL}${user?.avatar}`} />
                          <AvatarFallback className="bg-white uppercase">
                            {user?.fullName.split(' ')[0][0].toUpperCase()}
                            {user?.fullName.split(' ')[1][0].toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-medium capitalize">
                            Hi, {user?.fullName.split(' ')[0]}
                          </span>
                          <span className="truncate text-[10px]">
                            {user?.role.toUpperCase()}
                          </span>
                        </div>
                        <ChevronsUpDown className="ml-auto size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                      align="end"
                      sideOffset={4}
                    >
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                          <Link href="/user/profile" className="text-xs font-medium">
                            <CircleUserRound className="text-yellowClr inline h-3 w-3" />
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/user/bookings" className="text-xs font-medium">
                            <Bookmark className="text-yellowClr inline h-3 w-3" />
                            Saved Machines
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/user/payments" className="text-xs font-medium">
                            <ClipboardCheck className="text-yellowClr inline h-3 w-3" />
                            Orders
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <button
                          className="flex w-full cursor-pointer items-center gap-2 text-xs font-medium"
                          onClick={handleLogout}
                        >
                          <LogOut className="text-yellowClr" />
                          Log out
                        </button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <div>
                    <Button
                      variant="default"
                      size="sm"
                      className="mt-2 h-9 w-full"
                      asChild
                    >
                      <Link href="/sign-in"><LogIn className="h-4 w-4" /> Login</Link>
                    </Button>
                  </div>
                )}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
