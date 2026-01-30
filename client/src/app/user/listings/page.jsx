'use client';
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, PlusCircle } from "lucide-react";
import Link from "next/link";
import { getCurrentUserMachinery } from "@/api/machineryApis";
import Image from "next/image";

export default function ListingsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {

      try {
        const res = await getCurrentUserMachinery();
        setData(res.data.machinery);
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, []);

  const handleDelete = async () => {
    try {
      await deleteMachinery(item._id); // create API
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Machine Listings</h1>
          <p className="text-zinc-400">Manage your fleet inventory</p>
        </div>
        <Button asChild>
          <Link href="/user/add-machinery" >
            <PlusCircle size={20} />
            List New Machine
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.length === 0 ? (
          <div className="aspect-video bg-[#262626] rounded-2xl border-2 border-dashed border-neutral-800 flex items-center justify-center text-zinc-600">
            No listings yet. Click "List New Machine" to start.
          </div>
        ) : (
          data.map((item) => (
            <>
              <div className="rounded-xl p-4 bg-white text-black shadow-md">
                <Link href={`/machinery/${item.slug || item._id}`}>
                  <Image
                    width={500}
                    height={500}
                    unoptimized
                    src={item.images?.[0] ? `${process.env.NEXT_PUBLIC_API_URL}${item.images[0]}` : "/images/jcb.jpeg"}
                    alt={item.title}
                    className="rounded-md aspect-video object-cover w-full"
                  />
                </Link>

                <Link href={`/machinery/${item.slug || item._id}`} className="inline-block mt-2">
                  <p className="text-lg font-semibold line-clamp-1">{item.title}</p>
                  <p className="text-xs text-neutral-600 line-clamp-2">{item.description}</p>

                  <p className="flex items-center text-sm gap-1 mt-2 text-neutral-700">
                    <MapPin className="w-4 h-4 stroke-red-500" />
                    {item.location?.city}, {item.location?.state}
                  </p>

                  <div className="flex justify-between items-end mt-2">
                    <p className="text-sm text-neutral-600">
                      <span className="text-neutral-900 text-lg font-bold">
                        ₹ {item.pricePerDay || item.pricePerHour || item.pricePerMonth}
                      </span>
                      /{item.pricePerDay ? "day" : item.pricePerHour ? "hour" : "month"}
                    </p>

                    <span className={`text-xs px-2 py-1 rounded-full ${item.availability ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {item.availability ? "Available" : "Unavailable"}
                    </span>
                  </div>
                </Link>

                {/* ACTION BUTTONS */}
                <div className="mt-3 flex gap-2">
                  <Button asChild className="flex-1 bg-black text-white hover:bg-neutral-800">
                    <Link href={`/user/edit-machinery/${item._id}`}>Edit</Link>
                  </Button>

                  <Button
                    variant="destructive"
                    className="flex-1"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </>
          ))
        )}
      </div>

    </div>
  );
}