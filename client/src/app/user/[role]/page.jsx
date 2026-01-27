"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function RoleSwitcher() {
  const router = useRouter();
  const { role } = useParams();

  useEffect(() => {
    if (!role) return;

    // 1. Normalize the role
    const validRoles = ["vendor", "customer", "driver"];
    const activeRole = validRoles.includes(role.toLowerCase()) ? role.toLowerCase() : "customer";

    // 2. Set the cookie for the Layout to read
    document.cookie = `userRole=${activeRole}; path=/; max-age=604800; SameSite=Lax`;

    // 3. Redirect to the correct nested sub-page
    if (activeRole === "vendor") {
      router.replace(`/user/${activeRole}/dashboard`);
    } else if (activeRole === "driver") {
      router.replace(`/user/${activeRole}/orders`);
    } else {
      router.replace(`/user/${activeRole}/profile`);
    }
  }, [role, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#1a1a1a]">
      <div className="w-10 h-10 border-4 border-[#fbb316] border-t-transparent rounded-full animate-spin mb-4" />
      <p className="text-zinc-400 animate-pulse uppercase tracking-widest text-xs">
        Initializing {role} Session...
      </p>
    </div>
  );
}