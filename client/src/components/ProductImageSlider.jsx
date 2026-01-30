"use client"
import { useEffect, useRef } from "react"
import Image from "next/image"
// import { server_url } from "@/lib/constant"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

export default function ProductImageSilder({ images = [] }) {
    const mainRef = useRef(null)
    const thumbsRef = useRef(null)

    console.log(images)

    useEffect(() => {
        if (mainRef.current && thumbsRef.current) {
            const main = mainRef.current.splide
            const thumbs = thumbsRef.current.splide

            main.sync(thumbs)
        }
    }, [])

    return (
        <div className="mx-auto w-full max-w-2xl">
            <Splide
                ref={mainRef}
                options={{
                    type: "fade",
                    height: "500px",
                    pagination: false,
                    arrows: false,
                    rewind: true,
                    breakpoints: {
                        776: {
                            height: "420px",
                        },
                        640: {
                            height: "360px",
                        },
                    }
                }}
                className="overflow-hidden rounded-2xl border border-neutral-600"
                id="product-slider-main"
            >
                {images.map((img, i) => (
                    <SplideSlide key={i}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}${img}`}
                            alt={`Product ${i + 1}`}
                            unoptimized
                            className="w-full h-full rounded-2xl object-contain"
                            width={1000}
                            height={1000}
                        />
                    </SplideSlide>
                ))}
            </Splide>

            <Splide
                ref={thumbsRef}
                options={{
                    fixedWidth: 90,
                    fixedHeight: 90,
                    gap: 10,
                    rewind: true,
                    pagination: false,
                    isNavigation: true,
                    arrows: false,
                    breakpoints: {
                        640: {
                            fixedWidth: 60,
                            fixedHeight: 60,
                        },
                    },
                }}
                className="mt-4"
                id="product-slider-thumbs"
            >
                {images.map((img, i) => (
                    <SplideSlide key={i}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_API_URL}${img}`}
                            alt={`Thumbnail ${i + 1}`}
                            unoptimized
                            className="hover:border-goldClr h-full w-full cursor-pointer rounded-xl border border-transparent object-cover transition-all"
                            width={1000}
                            height={1000}
                        />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    )
}
