"use client";

import React from "react";
import { LogOut } from "lucide-react";

export default function LogoutDialog() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-neutral-950 border border-neutral-800 rounded-3xl p-8 shadow-2xl text-center">
        
        {/* Icon & Text */}
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-[#fbb316]/10 text-[#fbb316] mb-6">
          <LogOut size={32} />
        </div>
        
       
        <p className="text-zinc-400 text-sm mb-8">
          Are you sure you want to log out of your account?
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button 
            className="w-full bg-[#fbb316] text-neutral-900 font-bold py-3 rounded-2xl hover:bg-[#e0a114] transition shadow-lg"
            onClick={() => console.log("Confirmed")}
          >
            Confirm
          </button>
          
          <button 
            className="w-full bg-neutral-800 text-zinc-300 font-bold py-3 rounded-2xl hover:bg-neutral-700 transition"
            onClick={() => console.log("Cancelled")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}