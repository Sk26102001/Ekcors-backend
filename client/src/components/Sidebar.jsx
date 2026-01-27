"use client";

import React, { useId } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  CirclePlus, LogIn, Home, Scroll, BadgeIndianRupee, 
  Headset, Menu, CircleUserRound, Bookmark, 
  ClipboardCheck, LogOut
} from "lucide-react";

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
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import UserMenu from "./user-menu";

// Centralized link configuration
const navigationLinks = [
  { href: "/", label: "Home", icon: Home, active: true },
  { href: "/listings", label: "Listings", icon: Scroll },
  { href: "/owner", label: "Owner", icon: Scroll },
  { href: "/about", label: "About", icon: Scroll },
  { href: "/vendors", label: "Vendors", icon: Scroll },
  { href: "/offers", label: "Offers", icon: BadgeIndianRupee },
  { href: "/contact", label: "Contact", icon: Headset },
];

export default function Navbar() {
  const id = useId();
  const isLoggedIn = true; // Logic for auth state

  return (
    <header className="px-4 md:px-6 fixed top-0 left-0 right-0 z-50 bg-neutral-800 border-b border-neutral-700">
      <div className="flex h-18 items-center justify-between gap-4 max-w-7xl mx-auto">
        
        {/* Logo Area */}
        <div className="flex-1">
          <Link href="/">
            <Image 
              alt="Ekcors logo" 
              height={200} 
              priority 
              src="/images/logo-white.png" 
              width={200} 
              className="max-h-12 object-contain w-auto" 
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="grow max-md:hidden">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="gap-1">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <Button variant="ghost" asChild>
                    <Link
                      className="px-4 py-1.5 font-medium text-neutral-300 hover:text-white transition-colors data-[active=true]:text-yellow-500"
                      data-active={link.active}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Action Buttons */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <Button asChild className="hidden sm:flex bg-yellow-600 hover:bg-yellow-700 text-white border-none">
            <Link href="/list-machine">
              <CirclePlus className="mr-2 h-4 w-4" /> 
              <span className="hidden lg:inline">List Machine</span>
              <span className="lg:hidden">List</span>
            </Link>
          </Button>

          {!isLoggedIn ? (
            <Button asChild variant="outline" className="hidden md:flex text-white border-neutral-600">
              <Link href="/sign-in"><LogIn className="mr-2 h-4 w-4" /> Login</Link>
            </Button>
          ) : (
            <div className="max-md:hidden">
               <UserMenu />
            </div>
          )}

          {/* Mobile Sidebar Trigger */}
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden text-white hover:bg-neutral-700">
                <Menu size={24} />
              </Button>
            </DrawerTrigger>
            
            <DrawerContent className="bg-neutral-900 border-neutral-800 text-white h-full w-[300px] rounded-none">
              <DrawerHeader className="border-b border-neutral-800">
                <div className="flex items-center justify-between">
                  <Image src="/images/logo-white.png" width={120} height={40} alt="logo" className="h-8 w-auto" />
                </div>
                <div className="sr-only">
                  <DrawerTitle>Navigation Menu</DrawerTitle>
                  <DrawerDescription>Mobile site navigation</DrawerDescription>
                </div>
              </DrawerHeader>

              <div className="flex flex-col h-full py-4">
                <ul className="flex-1 px-2 space-y-1">
                  {navigationLinks.map((link) => (
                    <li key={link.label}>
                      <DrawerClose asChild>
                        <Link
                          href={link.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-300 hover:bg-neutral-800 hover:text-yellow-500 transition-all"
                        >
                          <link.icon className="h-5 w-5" />
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      </DrawerClose>
                    </li>
                  ))}
                </ul>

                <DrawerFooter className="border-t border-neutral-800 p-4">
                  {!isLoggedIn ? (
                    <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                      <Link href="/sign-in"><LogIn className="mr-2 h-4 w-4" /> Login</Link>
                    </Button>
                  ) : (
                    /* You can render a mobile-specific version of UserMenu here if needed */
                    <div className="space-y-2">
                       <p className="text-xs text-neutral-500 px-2 uppercase tracking-widest font-bold">Account</p>
                       <Link href="/profile" className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-300"><CircleUserRound size={18}/> Profile</Link>
                       <Link href="/orders" className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-300"><ClipboardCheck size={18}/> My Orders</Link>
                       <Button variant="destructive" className="w-full mt-4 justify-start bg-red-900/20 text-red-500 hover:bg-red-900/40 border-none">
                         <LogOut className="mr-2 h-4 w-4" /> Logout
                       </Button>
                    </div>
                  )}
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}