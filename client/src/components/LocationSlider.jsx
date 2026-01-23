'use client'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ChevronRight, MapPinned } from "lucide-react";
import Link from "next/link";

function LocationSlider() {
    return (
        <>
            <Splide
                className="w-full"
                options={{
                    type: "loop",
                    perPage: 5,
                    gap: "1rem",
                    autoplay: false,
                    padding: "1.5rem",
                    interval: 4000,
                    pauseOnHover: true,
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                        1200: {
                            perPage: 4
                        },
                        1024: {
                            perPage: 3
                        },
                        768: {
                            perPage: 2,
                            padding: "1rem"
                        },
                        568: {
                            perPage: 1.5
                        }
                    }
                }}
            >
                {Array.from({ length: 10 }).map((_, index) => (
                    <SplideSlide key={index}>
                        <Link href={'#'} className="inline-block w-full border border-yellowClr/60 p-4 bg-yellowClr/20 rounded-xl hover:bg-yellowClr/40 duration-200">
                            <p className="bg-white inline-flex h-12 w-12 rounded-full shadow-sm justify-center items-center">
                                <MapPinned className="inline stroke-yellowClr" />
                            </p>
                            <p className="mt-2 font-semibold text-lg text-brownClr uppercase">Mumbai</p>
                            <p className="text-sm text-neutral-600">25 Listings available</p>
                            <p className="mt-2 text-sm text-brownClr flex w-full items-center justify-end">Explore <ChevronRight className="inline stroke-brownClr h-4 w-4" /></p>
                        </Link>
                    </SplideSlide>
                ))}
            </Splide>
        </>
    )
}

export default LocationSlider
