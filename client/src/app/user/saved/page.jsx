// app/saved/page.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingCart, Trash2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SavedPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("ekcors_favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.id !== id);
    setFavorites(updated);
    localStorage.setItem("ekcors_favorites", JSON.stringify(updated));
    // Optional: dispatch an event to sync other pages
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  if (favorites.length === 0) {
    return (
      <div className="bg-neutral-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">No saved machines yet</h2>
          <p className="text-gray-400 mb-6">Click the heart icon on any equipment card to save it here.</p>
          <Link href="/listings">
            <Button className="bg-yellowClr text-black">Browse Equipment</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-red-500 fill-red-500" />
          <h1 className="text-3xl font-bold text-white">Saved Machines</h1>
          <span className="bg-neutral-700 text-gray-300 px-2 py-1 rounded-full text-sm">
            {favorites.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((machine) => (
            <div key={machine.id} className="bg-neutral-800 rounded-xl overflow-hidden border border-neutral-700">
              <div className="relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${machine.image}`}
                  width={400}
                  height={300}
                  alt={machine.title}
                  className="w-full h-48 object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-white font-bold text-xl">{machine.title}</h3>
                  <button onClick={() => removeFavorite(machine.id)} className="text-gray-400 hover:text-red-500">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
                  <MapPin className="w-4 h-4 text-yellowClr" /> Location
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-yellowClr font-bold text-2xl">₹ {machine.dailyRate}</span>
                    <span className="text-gray-400 text-sm"> / day</span>
                  </div>
                  <Link href={`/booking?equipment=${machine.id}`}>
                    <Button className="bg-yellowClr text-black flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4" /> Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}