'use client'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/react-splide/css";
import Image from "next/image";
import Link from "next/link";

function CategorySlider() {
    return (
        <Splide
            options={{
                type: "loop",
                padding: "1rem",
                perPage: 9,
                gap: "1rem",
                arrows: false,
                pagination: false,
                autoScroll: {
                    speed: 0.75,
                    pauseOnHover: true,
                    pauseOnFocus: false
                },
                breakpoints: {
                    1200: {
                        perPage: 7
                    },
                    1024: {
                        perPage: 6
                    },
                    860: {
                        perPage: 5
                    },
                    768: {
                        perPage: 4,
                        autoScroll: {
                            speed: 0.5
                        }
                    },
                    568: {
                        perPage: 3
                    }
                }
            }}
            extensions={{ AutoScroll }}
        >
            {Array.from({ length: 10 }).map((_, index) => (
                <SplideSlide key={index}>
                    <Link href={'#'} className="flex flex-col gap-2 items-center mx-auto group">
                        <div>
                            <Image src="/images/jcb.jpeg" alt="ACC" width={500} height={500} className="shrink-0 sm:w-28 sm:h-28 w-24 h-24 object-cover rounded-full group-hover:opacity-80 duration-200" />
                        </div>
                        <p className="text-neutral-700 sm:text-base text-sm font-sans font-semibold group-hover:underline">JCB</p>
                    </Link>
                </SplideSlide>
            ))}
        </Splide>
    )
}

export default CategorySlider
