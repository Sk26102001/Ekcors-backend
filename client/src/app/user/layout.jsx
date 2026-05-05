"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  User,
  LayoutDashboard,
  Truck,
  ClipboardList,
  ShoppingCart,
} from "lucide-react";
import { useAuth } from "@/context/useAuth";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const { user } = useAuth();

  const userRole = user?.role || "user";

  const navItems = [
    { title: "Dashboard", url: `/user/dashboard`, icon: LayoutDashboard, roles: ["vendor"] },
    { title: "Profile", url: `/user/profile`, icon: User, roles: ["vendor", "user", "driver"] },
    { title: "Listing", url: `/user/listings`, icon: ClipboardList, roles: ["vendor"] },
    { title: "Drivers", url: `/user/driver-bookings`, icon: Truck, roles: ["vendor"] },
    { title: "Vendor Orders", url: `/user/orders`, icon: ShoppingCart, roles: ["vendor"] },
    { title: "User Orders", url: `/user/user-order`, icon: ShoppingCart, roles: ["user"] },
    { title: "Driver Orders", url: `/user/driver-order`, icon: ShoppingCart, roles: ["driver"] },
  ];

  /* ✅ Filter links based on role */
  const filteredNavItems = navItems.filter((item) =>
    item.roles.includes(userRole)
  );

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <Navbar />

      <SidebarProvider>
        <div className="flex w-full min-h-[calc(100vh-72px)] pt-[72px]">

          {/* Sidebar */}
          <Sidebar
            className="md:inline-block hidden sticky top-[72px] h-[calc(100vh-72px)] w-64 bg-[#262626] border-r border-neutral-800"
            collapsible="none"
          >
            <SidebarContent className="p-4 bg-[#262626]">
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu className="gap-2">
                    {filteredNavItems.map((item) => {
                      const isActive = pathname === item.url;

                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            className={`py-6 px-4 rounded-lg transition-all ${isActive
                              ? "bg-[#332b1a] text-[#fbb316] hover:bg-yellow-600"
                              : "text-neutral-400"
                              }`}
                          >
                            <Link
                              className="flex items-center gap-4"
                              href={item.url}
                            >
                              <item.icon
                                className={`h-5 w-5 ${isActive
                                  ? "text-[#fbb316]"
                                  : "text-neutral-500"
                                  }`}
                              />
                              <span className="text-[15px] font-medium">
                                {item.title}
                              </span>
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

          {/* Main */}
          <main className="flex-1 bg-[#1a1a1a] md:p-8 sm:p-6 p-4 w-full overflow-x-hidden">
            {children}
          </main>
        </div>
      </SidebarProvider>

      <Footer />
    </div>
  );
}
