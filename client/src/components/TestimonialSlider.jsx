'use client'

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const customerReviews = [
    {
        name: "Rakesh Kumar",
        profession: "Civil Contractor",
        review:
            "Platform ka experience kaafi smooth raha. Excavator booking easy thi aur machine condition exactly wahi thi jo listing mein dikhaya gaya tha. Time aur cost dono save hue.",
        image: "https://ui-avatars.com/api/?name=Rakesh+Kumar&background=FFB22C&color=854836",
    },
    {
        name: "Amit Verma",
        profession: "Project Manager",
        review:
            "Multiple sites ke liye machinery arrange karni hoti hai, aur yahan filtering kaafi helpful hai. Location-based search ne kaam aur fast kar diya.",
        image: "https://ui-avatars.com/api/?name=Amit+Verma&background=FFB22C&color=854836",
    },
    {
        name: "Neha Singh",
        profession: "Real Estate Developer",
        review:
            "Verified owners hone ki wajah se trust bana. Crane aur batching plant dono bookings smooth rahi. Support team bhi responsive thi.",
        image: "https://ui-avatars.com/api/?name=Neha+Singh&background=FFB22C&color=854836",
    },
    {
        name: "Imran Khan",
        profession: "Site Supervisor",
        review:
            "Road roller rent pe liya tha highway project ke liye. Pricing transparent thi aur koi hidden charges nahi mile. Kaafi professional setup hai.",
        image: "https://ui-avatars.com/api/?name=Imran+Khan&background=FFB22C&color=854836",
    },
    {
        name: "Suresh Patel",
        profession: "Infrastructure Contractor",
        review:
            "Pehlay local contacts pe depend rehna padta tha. Ab ek hi platform pe machines compare kar sakte hain. Kaam kaafi easy ho gaya.",
        image: "https://ui-avatars.com/api/?name=Suresh+Patel&background=FFB22C&color=854836",
    },
    {
        name: "Pankaj Malhotra",
        profession: "Logistics & Transport",
        review:
            "Heavy machinery ke liye reliable listings milna mushkil hota hai. Yahan machine details aur photos accurate hote hain, jo decision lene mein help karta hai.",
        image: "https://ui-avatars.com/api/?name=Pankaj+Malhotra&background=FFB22C&color=854836",
    },
    {
        name: "Anjali Deshmukh",
        profession: "Construction Consultant",
        review:
            "Clients ke liye quick machinery sourcing karna easy ho gaya hai. Categories aur filters clearly designed hain — confusion bilkul nahi hota.",
        image: "https://ui-avatars.com/api/?name=Anjali+Deshmukh&background=FFB22C&color=854836",
    },
    {
        name: "Vikas Yadav",
        profession: "Road Work Contractor",
        review:
            "Paver finisher aur grader dono time pe deliver hue. On-site coordination bhi smooth rahi. Definitely using this platform again.",
        image: "https://ui-avatars.com/api/?name=Vikas+Yadav&background=FFB22C&color=854836",
    },
];


function TestimonialSlider() {

    const firstOptions = {
        type: 'loop',
        perPage: 5,
        gap: '1rem',
        arrows: false,
        pagination: false,
        drag: true,
        autoScroll: {
            speed: 0.4,
        },
        breakpoints: {
            1540: {
                perPage: 4,
            },
            1080: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
            640: {
                perPage: 1.5,
            },
            568: {
                perPage: 1,
            },
        },
    }

    const secOptions = {
        type: 'loop',
        perPage: 5,
        gap: '1rem',
        arrows: false,
        pagination: false,
        drag: true,
        autoScroll: {
            speed: -0.4,
        },
        breakpoints: {
            1540: {
                perPage: 4,
            },
            1080: {
                perPage: 3,
            },
            768: {
                perPage: 2,
            },
            640: {
                perPage: 1.5,
            },
            568: {
                perPage: 1,
            },
        },
    }

    return (
        <section className="md:py-12 sm:py-8 py-6 relative overflow-hidden bg-neutral-700">
            <div className='bg-yellowClr/40 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%] md:w-[500px] sm:w-[420px] w-[360px] md:h-[500px] sm:h-[420px] h-[360px] z-0 blur-2xl'></div>
            <h6
                className="font-heading md:text-4xl text-3xl text-yellowClr text-center"
            >
                Meet our happy clients!
            </h6>
            <div className="mt-10 mx-auto">
                <div>
                    <Splide
                        options={firstOptions}
                        id="testimonialsSlider1"
                        extensions={{ AutoScroll }}
                    >
                        {customerReviews.slice(0, 5).map((review, index) => (
                            <SplideSlide key={index}>
                                <div className="bg-neutral-800 h-full shadow-md rounded-xl text-card-foreground max-w-96 select-none p-6 duration-200">
                                    <div className="mb-4 flex gap-4">
                                        <span className="relative flex shrink-0 overflow-hidden size-9 rounded-full">
                                            <Image
                                                width={100}
                                                height={100}
                                                src={review.image}
                                                alt={review.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </span>
                                        <div className="text-sm text-white">
                                            <p className="font-medium">{review.name}</p>
                                            <p className="text-neutral-300 text-xs">
                                                {review.profession}
                                            </p>
                                        </div>
                                    </div>
                                    <q className="text-neutral-300">{review.review}</q>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                    <Splide
                        options={secOptions}
                        id="testimonialsSlider2"
                        extensions={{ AutoScroll }}
                    >
                        {customerReviews.slice(5, 10).map((review, index) => (
                            <SplideSlide key={index}>
                                <div className="bg-neutral-800 h-full shadow-md rounded-xl text-card-foreground  max-w-96 select-none p-6 duration-200">
                                    <div className="mb-4 flex gap-4">
                                        <span className="relative flex shrink-0 overflow-hidden size-9 rounded-full">
                                            <Image
                                                width={100}
                                                height={100}
                                                src={review.image}
                                                alt={review.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </span>
                                        <div className="text-sm text-white">
                                            <p className="font-medium">{review.name}</p>
                                            <p className="text-neutral-300 text-xs">
                                                {review.profession}
                                            </p>
                                        </div>
                                    </div>
                                    <q className="text-neutral-300">{review.review}</q>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSlider
