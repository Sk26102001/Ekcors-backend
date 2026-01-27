// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
 




// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
// } from "@/components/ui/sidebar"

// const items = [
//   {
//     title: "Home",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Inbox",
//     url: "#",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
// ]
// export default function RootLayout({ children }) {
//     return (
//         <>
//             <Navbar />
//                 <main className='mt-[72px]'>
//             <SidebarProvider>
//                     <div>
//                     <Sidebar>
//                     <SidebarContent>
//                         <SidebarGroup>
//                         <SidebarGroupLabel>Application</SidebarGroupLabel>
//                         <SidebarGroupContent>
//                             <SidebarMenu>
//                             {items.map((item) => (
//                                 <SidebarMenuItem key={item.title}>
//                                 <SidebarMenuButton asChild>
//                                     <a href={item.url}>
//                                     <item.icon />
//                                     <span>{item.title}</span>
//                                     </a>
//                                 </SidebarMenuButton>
//                                 </SidebarMenuItem>
//                             ))}
//                             </SidebarMenu>
//                         </SidebarGroupContent>
//                         </SidebarGroup>
//                     </SidebarContent>
//                     </Sidebar>
//                     </div>
//                     {children}
//             </SidebarProvider>
//                 </main>
//             <Footer />
//         </>
//     )
// }





"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, LayoutDashboard, Truck, ClipboardList, ShoppingCart } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const params = useParams();
  
  // The magic happens here: [role] is now a part of every URL
  const userRole = params?.role || "customer"; 

  const navItems = [
    { title: "Dashboard", url: `/user/${userRole}/dashboard`, icon: LayoutDashboard, roles: ["vendor"] },
    { title: "Profile", url: `/user/${userRole}/profile`, icon: User, roles: ["vendor", "customer", "driver"] },
    { title: "Listing", url: `/user/${userRole}/listings`, icon: ClipboardList, roles: ["vendor"] },
    { title: "Drivers", url: `/user/${userRole}/driver-bookings`, icon: Truck, roles: ["vendor"] },
    { title: "Orders", url: `/user/${userRole}/orders`, icon: ShoppingCart, roles: ["vendor", "customer", "driver"] },
  ];

  // Logic: "customer" won't have "vendor" in their roles, so Dashboard is filtered out
  const filteredItems = navItems.filter(item => item.roles.includes(userRole));

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <Navbar />
      <SidebarProvider>
        <div className="flex w-full min-h-[calc(100vh-72px)] pt-[72px]">
          <Sidebar className="sticky top-[72px] h-[calc(100vh-72px)] w-64 bg-[#262626] border-r border-neutral-800" collapsible="none">
            <SidebarContent className="p-4 bg-[#262626]">
              <div className="mb-8 px-2">
                <h2 className="text-[#fbb316] text-xl font-bold uppercase tracking-tight">EkCors Admin</h2>
                <div className="flex items-center gap-2 mt-1">
                   <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-[10px] text-zinc-500 font-bold uppercase">{userRole} Mode</span>
                </div>
              </div>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu className="gap-2">
                    {filteredItems.map((item) => {
                      const isActive = pathname === item.url;
                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild className={`py-6 px-4 rounded-lg transition-all ${isActive ? "bg-[#332b1a] text-[#fbb316] hover:bg-yellow-600" : "text-neutral-400 "}`}>
                            <Link className="flex items-center gap-4" href={item.url}>
                              <item.icon className={`h-5 w-5 ${isActive ? "text-[#fbb316]" : "text-neutral-500 hover"}`} />
                              <span className="text-[15px] font-medium">{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 bg-[#1a1a1a] p-8 w-full overflow-x-hidden">{children}</main>
        </div>
      </SidebarProvider>
      <Footer />
    </div>
  );
}