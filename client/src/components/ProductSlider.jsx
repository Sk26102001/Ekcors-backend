'use client'

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductCard from "./ProductCard";

function ProductSlider() {
    return (
        <>
            <Splide
                className="w-full"
                id="productSlider"
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
                            perPage: 1
                        }
                    }
                }}
            >
                {Array.from({ length: 10 }).map((_, index) => (
                    <SplideSlide key={index}>
                        <ProductCard />
                    </SplideSlide>
                ))}
            </Splide>
        </>
    )
}

export default ProductSlider
