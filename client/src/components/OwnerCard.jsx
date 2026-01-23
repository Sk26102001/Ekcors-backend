import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Bookmark, MapPin, Star, Truck, Verified } from "lucide-react"

function OwnerCard({ owner }) {
    // Fallback data if no owner prop is passed
    const data = owner || {
        name: "Rajesh Construction Co.",
        location: "Mumbai, Maharashtra",
        rating: 4.8,
        machinesCount: 12,
        image: "/images/owner.jpg", // Replace with your actual path
        initial: "R"
    }

    return (
        <div className="rounded-2xl p-4 bg-white border border-neutral-800 hover:border-yellow-500/50 transition-all group shadow-lg">
            {/* Owner Image / Branding Area */}
            <div className="relative overflow-hidden rounded-xl aspect-video bg-neutral-800 flex items-center justify-center">
                {data.image ? (
                    <Image 
                        src={data.image} 
                        width={500} 
                        height={300} 
                        alt={data.name} 
                        className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                ) : (
                    <span className="text-4xl font-black text-yellow-500">{data.initial}</span>
                )}
                
                {/* Verified Badge overlay */}
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10">
                    <Verified className="w-4 h-4 text-yellow-500" />
                </div>
            </div>

            {/* Content Area */}
            <div className="mt-4 space-y-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-black text-lg font-bold tracking-tight line-clamp-1 transition-colors">
                        {data.name}
                    </h3>
                </div>

                <div className="space-y-1">
                    <p className="flex items-center text-zinc-400 text-sm gap-1.5 font-medium">
                        <MapPin className="text-yellow-500 w-4 h-4" /> {data.location}
                    </p>
                    <p className="flex items-center text-zinc-400 text-sm gap-1.5 font-medium">
                        <Truck className="text-yellow-500 w-4 h-4" /> {data.machinesCount} Machines Available
                    </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-neutral-800">
                    <div className="flex items-center gap-1.5">
                        <Star className="fill-yellow-500 text-yellow-500 w-4 h-4" />
                        <span className="text-white font-bold text-sm">{data.rating}</span>
                        <span className="text-zinc-500 text-xs font-medium">(120+ Reviews)</span>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex gap-2">
                <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-bold uppercase tracking-wider rounded-xl h-11 transition-all active:scale-95">
                    Book now
                </Button>
                <Button 
                    size={'icon'} 
                    variant={'outline'} 
                    className="border-neutral-700 bg-transparent text-zinc-400 hover:text-white hover:border-yellow-500 rounded-xl h-11 w-11 transition-all"
                >
                    <Bookmark className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}

export default OwnerCard