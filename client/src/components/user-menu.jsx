'use client'

import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/useAuth";
import {
  Bookmark,
  List,
  ListCheck,
  ListOrdered,
  LogOutIcon,
  ShieldUser,
  StickyNote,
  User,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
// import { logoutUser } from "@/api/userController";

export default function UserMenu() {
  // const { user, fetchUser } = useAuth()
  // const router = useRouter()

  const handleLogout = async () => {
    // try {
    //   const res = await logoutUser()
    //   await fetchUser()
    //   if (res.status === 'success') {
    //     router.push('/sign-in')
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto md:flex hidden p-0 hover:bg-transparent cursor-pointer">
          <Avatar>
            <AvatarImage src={`/images/default-avatar.jpg`} alt="Profile image" />
            <AvatarFallback className={'bg-orangeClr/60'}>
              SA
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[200px]" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            John Doe
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            johndoe@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className={'cursor-pointer'}>
            <Link href="/user/profile">
              <User size={16} className="opacity-90" aria-hidden="true" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className={'cursor-pointer'}>
            <Link href="/user/my-listings">
              <List size={16} className="opacity-90" aria-hidden="true" />
              <span>My Listings</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className={'cursor-pointer'}>
            <Link href="/user/saved">
              <Bookmark size={16} className="opacity-90" aria-hidden="true" />
              <span>Saved</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className={'cursor-pointer'}>
            <Link href="/user/orders">
              <ListOrdered size={16} className="opacity-90" aria-hidden="true" />
              <span>Orders</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button onClick={handleLogout} variant="outline" className="w-full cursor-pointer">
            <LogOutIcon size={16} className="opacity-90" aria-hidden="true" />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu >
  );
}
