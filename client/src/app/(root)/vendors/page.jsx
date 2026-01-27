
'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  ArrowUpDown,
  X,
  MapPin,
  Star,
  Truck,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import OwnerCard from "@/components/OwnerCard"
import ProductCard from "@/components/ProductCard"

const MACHINES_PER_PAGE = 8

export default function Page() {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedOwner, setSelectedOwner] = useState(null)
  const [machinePage, setMachinePage] = useState(1)

  const handleSelectOwner = () => {
    setSelectedOwner({
      name: "Rajesh Construction Co.",
    //   initial: "R",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      reviews: 124,
      machinesCount: 23,
      description:
        "Leading provider of heavy machinery and logistics solutions across India.",
    })
    setMachinePage(1)
  }

  const totalMachines = selectedOwner?.machinesCount || 0
  const totalPages = Math.ceil(totalMachines / MACHINES_PER_PAGE)
  const startIndex = (machinePage - 1) * MACHINES_PER_PAGE

  return (
    <>
      {/* HEADER */}
      <section className="sm:min-h-48 min-h-40 bg-[url('/images/listing-bg.jpg')] bg-cover bg-center flex items-center justify-center relative">
        <div className="absolute inset-0 bg-yellow-500/20 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center space-y-2">
          <h1 className="text-white text-3xl font-semibold">Vendors</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-400">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-300">
                  Vendors
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-neutral-800 min-h-screen px-6">
        <div className="grid lg:grid-cols-5 gap-6">

          {/* FILTERS */}
          {!selectedOwner && (
            <aside className="hidden md:block border-r border-neutral-700 py-6 pr-4 sticky top-16 h-fit">
              <p className="text-yellow-500 font-medium mb-4">FILTERS</p>
              <p className="text-white text-sm font-semibold mb-2">Price Range</p>
              <Slider
                value={priceRange}
                min={0}
                max={100}
                onValueChange={setPriceRange}
              />
            </aside>
          )}

          {/* MAIN CONTENT */}
          <div className={selectedOwner ? "lg:col-span-5" : "lg:col-span-4"}>

            {/* OWNER LIST */}
            {!selectedOwner && (
              <>
                <div className="flex justify-between items-center py-6">
                  <div>
                    <p className="text-white text-xl font-semibold">All Owners</p>
                    <p className="text-gray-400 text-sm">Showing 12 Owners</p>
                  </div>
                  <div className="flex gap-2">
                    <Input className="bg-white" placeholder="Search" />
                    <Button className="gap-2">
                      <ArrowUpDown className="h-4 w-4" />
                      Sort by
                    </Button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} onClick={handleSelectOwner} className="cursor-pointer">
                      <OwnerCard />
                    </div>
                  ))}
                </div>

                <Pagination className="mt-7 text-white mb-7">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                                                        <PaginationLink href="#">2</PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">3</PaginationLink>
                                                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </>
            )}

            {/* OWNER DETAILS */}
            {selectedOwner && (
              <div className="space-y-10 py-6 animate-in slide-in-from-bottom-4">

                {/* OWNER HEADER */}
                <div className="bg-[#26262a] border border-yellow-500 rounded-3xl p-8 relative">
                  <button
                    onClick={() => setSelectedOwner(null)}
                    className="absolute top-6 right-6 bg-zinc-800 p-2 rounded-full text-zinc-400 hover:text-white"
                  >
                    <X />
                  </button>

                  <div className="flex gap-8">
                    <div className="">
                      {/* {selectedOwner.initial} */}
                       <Image src="/images/default-avatar.jpg" width={200} height={200} className="w-30 h-30 border-2 border-yellowClr rounded-full object-cover" alt="vehicle" />
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-white text-4xl font-bold">
                        {selectedOwner.name}
                      </h2>

                      <p className="flex items-center gap-2 text-zinc-300">
                        <MapPin className="text-yellow-500" />
                        {selectedOwner.location}
                      </p>

                      <p className="flex items-center gap-2 text-yellow-500 font-bold">
                        <Star fill="currentColor" />
                        {selectedOwner.rating}
                        <span className="text-zinc-400 font-normal">
                          ({selectedOwner.reviews} reviews)
                        </span>
                      </p>

                      <p className="text-zinc-400 max-w-2xl">
                        {selectedOwner.description}
                      </p>

                      <div className="flex gap-4 pt-4">
                        <Button className="bg-yellow-500 text-black gap-2">
                          <Phone /> Call
                        </Button>
                        <Button variant="outline" className="gap-2 text-white">
                          <Mail /> Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MACHINERY LIST */}
                {/* <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Truck className="text-yellow-500 h-7 w-7" />
                    <div>
                      <p className="text-white text-2xl font-semibold">
                        Machinery & Equipment
                      </p>
                      <p className="text-gray-400 text-sm">
                        Showing {totalMachines} items
                      </p>
                    </div>
                  </div>
                </div>
 */}



<div className="bg-neutral-800 pb-4 flex sm:flex-row flex-col justify-between sm:items-center gap-4 md:static sticky top-[72px] z-20">
  
  {/* LEFT: Icon + Text */}
  <div className="flex items-center gap-3">
    <Truck className="text-yellow-500 h-8 w-8" />

    <div>
      <p className="text-white text-2xl font-semibold">
        All Machinery and Equipments
      </p>
      <p className="text-sm text-gray-400">
        Showing 10 of 1,000 listings
      </p>
    </div>
  </div>

  {/* RIGHT: Search + Sort */}
  <div className="flex gap-2">
    <Input
      type="text"
      className="bg-white"
      placeholder="Search"
    />

    <Button className="gap-2">
      <ArrowUpDown className="w-4 h-4" />
      <span className="sm:inline hidden">Sort by</span>
    </Button>
  </div>
</div>



                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
                  {Array.from({
                    length: Math.min(
                      MACHINES_PER_PAGE,
                      totalMachines - startIndex
                    ),
                  }).map((_, i) => (
                    <ProductCard key={startIndex + i} />
                  ))}
                </div>

                {/* MACHINERY PAGINATION */}
                {totalPages > 1 && (
                  <Pagination className="mt-6 text-white">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            setMachinePage((p) => Math.max(1, p - 1))
                          }}
                        />
                      </PaginationItem>

                      {Array.from({ length: totalPages }).map((_, i) => (
                        <PaginationItem key={i}>
                          <PaginationLink
                            href="#"
                            isActive={machinePage === i + 1}
                            onClick={(e) => {
                              e.preventDefault()
                              setMachinePage(i + 1)
                            }}
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            setMachinePage((p) =>
                              Math.min(totalPages, p + 1)
                            )
                          }}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}






