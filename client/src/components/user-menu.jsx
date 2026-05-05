// 'use client'

// import { useAuth } from "@/context/useAuth";
// import {
//   Bookmark,
//   ChevronDown,
//   List,
//   ListOrdered,
//   LogOutIcon,
//   User,
// } from "lucide-react"
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import Link from "next/link";

// export default function UserMenu({ handleLogout }) {
//   const { user } = useAuth()

//   return (
//     <DropdownMenu modal={false}>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" className="h-auto md:flex gap-1 hidden cursor-pointer border border-white/60 p-[3px] rounded-full hover:bg-white/40">
//           <Avatar className={'w-7 h-7'}>
//             <AvatarImage src={`${process.env.NEXT_PUBLIC_API_URL}${user?.avatar}`} alt="Profile image" />
//             <AvatarFallback className={'bg-yellowClr text-xs'}>
//               {user?.fullName.split(' ')[0][0].toUpperCase()}
//               {user?.fullName.split(' ')[1][0].toUpperCase()}
//             </AvatarFallback>
//           </Avatar>
//           <span>
//             <ChevronDown size={16} className="opacity-90 text-white/60" aria-hidden="true" />
//           </span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="min-w-[200px]" align="end">
//         <DropdownMenuLabel className="flex min-w-0 flex-col">
//           <span className="text-foreground truncate text-sm font-medium">
//             {user?.fullName}
//           </span>
//           <span className="text-muted-foreground truncate text-xs font-normal">
//             {user?.email}
//           </span>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem asChild className={'cursor-pointer'}>
//             <Link href="/user/profile">
//               <User size={16} className="opacity-90" aria-hidden="true" />
//               <span>Profile</span>
//             </Link>
//           </DropdownMenuItem>
//           <DropdownMenuItem asChild className={'cursor-pointer'}>
//             <Link href="/user/my-listings">
//               <List size={16} className="opacity-90" aria-hidden="true" />
//               <span>My Listings</span>
//             </Link>
//           </DropdownMenuItem>
//           <DropdownMenuItem asChild className={'cursor-pointer'}>
//             <Link href="/user/saved">
//               <Bookmark size={16} className="opacity-90" aria-hidden="true" />
//               <span>Saved</span>
//             </Link>
//           </DropdownMenuItem>
//           <DropdownMenuItem asChild className={'cursor-pointer'}>
//             <Link href="/user/orders">
//               <ListOrdered size={16} className="opacity-90" aria-hidden="true" />
//               <span>Orders</span>
//             </Link>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem asChild>
//           <button onClick={handleLogout} variant="outline" className="w-full cursor-pointer">
//             <LogOutIcon size={16} className="opacity-90" aria-hidden="true" />
//             <span>Logout</span>
//           </button>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu >
//   );
// }






// "use client"

// import { useAuth } from "@/context/useAuth";
// import {
//   Bookmark,
//   ChevronDown,
//   List,
//   ListOrdered,
//   LogOutIcon,
//   User,
// } from "lucide-react"
// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import Link from "next/link";

// export default function UserMenu({ handleLogout }) {
//   const { user } = useAuth()

//   // ✅ SAFE initials logic
//   const nameParts = user?.fullName?.split(" ") || [];
//   const firstInitial = nameParts[0]?.[0]?.toUpperCase() || "";
//   const secondInitial = nameParts[1]?.[0]?.toUpperCase() || "";

//   return (
//     <DropdownMenu modal={false}>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="ghost"
//           className="h-auto md:flex gap-1 hidden cursor-pointer border border-white/60 p-[3px] rounded-full hover:bg-white/40"
//         >
//           <Avatar className="w-7 h-7">
//             <AvatarImage
//               src={`${process.env.NEXT_PUBLIC_API_URL}${user?.avatar}`}
//               alt="Profile image"
//             />
//             <AvatarFallback className="bg-yellowClr text-xs">
//               {firstInitial}{secondInitial}
//             </AvatarFallback>
//           </Avatar>

//           <span>
//             <ChevronDown size={16} className="opacity-90 text-white/60" />
//           </span>
//         </Button>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent className="min-w-[200px]" align="end">
//         <DropdownMenuLabel className="flex flex-col">
//           <span className="truncate text-sm font-medium">
//             {user?.fullName || "User"}
//           </span>
//           <span className="truncate text-xs">
//             {user?.email || ""}
//           </span>
//         </DropdownMenuLabel>

//         <DropdownMenuSeparator />

//         <DropdownMenuGroup>
//           <DropdownMenuItem asChild>
//             <Link href="/user/profile">
//               <User size={16} />
//               <span>Profile</span>
//             </Link>
//           </DropdownMenuItem>

//           <DropdownMenuItem asChild>
//             <Link href="/user/my-listings">
//               <List size={16} />
//               <span>My Listings</span>
//             </Link>
//           </DropdownMenuItem>

//           <DropdownMenuItem asChild>
//             <Link href="/user/saved">
//               <Bookmark size={16} />
//               <span>Saved</span>
//             </Link>
//           </DropdownMenuItem>

//           <DropdownMenuItem asChild>
//             <Link href="/user/orders">
//               <ListOrdered size={16} />
//               <span>Orders</span>
//             </Link>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>

//         <DropdownMenuSeparator />

//         <DropdownMenuItem asChild>
//           <button
//             onClick={handleLogout}
//             className="w-full flex items-center gap-2 cursor-pointer"
//           >
//             <LogOutIcon size={16} />
//             <span>Logout</span>
//           </button>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }


"use client";

import { useAuth } from "@/context/useAuth";
import {
  Bookmark,
  ChevronDown,
  List,
  ListOrdered,
  LogOutIcon,
  User,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function UserMenu({ handleLogout }) {
  const { user } = useAuth();

  const nameParts = user?.fullName?.split(" ") || [];
  const firstInitial = nameParts[0]?.[0]?.toUpperCase() || "";
  const secondInitial = nameParts[1]?.[0]?.toUpperCase() || "";
  const userRole = user?.role; // 'user', 'vendor', 'admin'

  // Determine which menu items to show
  const isCustomer = userRole === "user";
  const isVendorOrAdmin = userRole === "vendor" || userRole === "admin";

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto md:flex gap-1 hidden cursor-pointer border border-white/60 p-[3px] rounded-full hover:bg-white/40"
        >
          <Avatar className="w-7 h-7">
            <AvatarImage
              src={`${process.env.NEXT_PUBLIC_API_URL}${user?.avatar}`}
              alt="Profile image"
            />
            <AvatarFallback className="bg-yellowClr text-xs">
              {firstInitial}{secondInitial}
            </AvatarFallback>
          </Avatar>
          <span>
            <ChevronDown size={16} className="opacity-90 text-white/60" />
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-[200px]" align="end">
        <DropdownMenuLabel className="flex flex-col">
          <span className="truncate text-sm font-medium">
            {user?.fullName || "User"}
          </span>
          <span className="truncate text-xs">{user?.email || ""}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {/* Profile – always visible */}
          <DropdownMenuItem asChild>
            <Link href="/user/profile">
              <User size={16} />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>

          {/* My Listings – only for vendors/admins */}
          {isVendorOrAdmin && (
            <DropdownMenuItem asChild>
              <Link href="/user/my-listings">
                <List size={16} />
                <span>My Listings</span>
              </Link>
            </DropdownMenuItem>
          )}

          {/* Saved – only for regular customers */}
          {isCustomer && (
            <DropdownMenuItem asChild>
              <Link href="/user/saved">
                <Bookmark size={16} />
                <span>Saved</span>
              </Link>
            </DropdownMenuItem>
          )}

          {/* Orders – visible for all */}
          <DropdownMenuItem asChild>
            <Link href="/user/orders">
              <ListOrdered size={16} />
              <span>Orders</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 cursor-pointer"
          >
            <LogOutIcon size={16} />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}