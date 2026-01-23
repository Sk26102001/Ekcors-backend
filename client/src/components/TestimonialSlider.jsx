'use client'

import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const customerReviews = [
    {
        name: 'Riya Mehta',
        profession: 'Fashion Designer',
        review: 'These aligners literally changed my smile! Super comfortable to wear all day and they’re almost invisible. Mujhe pehenke bahar jaana bhi convenient lagta hai.',
        image: 'https://ui-avatars.com/api/?name=Riya+Mehta&background=FFB22C&color=854836',
    },
    {
        name: 'Ankit Sharma',
        profession: 'Software Engineer',
        review: 'Great product! Starting weeks mein hi farak dikhne laga. Coding karte waqt bhi koi dikkat nahi hoti, lightweight and easy to manage.',
        image: 'https://ui-avatars.com/api/?name=Ankit+Sharma&background=FFB22C&color=854836',
    },
    {
        name: 'Neha Kapoor',
        profession: 'Dentist',
        review: 'As a dentist myself, I really appreciate the quality and fit of these aligners. Bahut hi professional process tha from start to finish. Highly recommend to my own patients too!',
        image: 'https://ui-avatars.com/api/?name=Neha+Kapoor&background=FFB22C&color=854836',
    },
    {
        name: 'Rahul Verma',
        profession: 'Marketing Manager',
        review: 'Meetings, presentations, travel — in sab ke beech aligners ne mujhe bilkul bhi disturb nahi kiya. Comfortable and looks clean — very impressive.',
        image: 'https://ui-avatars.com/api/?name=Rahul+Verma&background=FFB22C&color=854836',
    },
    {
        name: 'Sakshi Nair',
        profession: 'Student',
        review: 'College jaate waqt pehnna easy hai aur friends ko pata bhi nahi chalta. Pehle braces ka soch ke dar lagta tha, but these aligners are totally stress-free!',
        image: 'https://ui-avatars.com/api/?name=Sakshi+Nair&background=FFB22C&color=854836',
    },
    {
        name: 'Arjun Bhatia',
        profession: 'Banker',
        review: 'Aligners ka result genuinely acha hai. Timely delivery, smooth fitting process, aur customer support bhi kaafi helpful tha. Totally worth the investment.',
        image: 'https://ui-avatars.com/api/?name=Arjun+Bhatia&background=FFB22C&color=854836',
    },
    {
        name: 'Meenal Joshi',
        profession: 'Teacher',
        review: "Metal braces ki dikkat se bachna ho toh yeh best option hai. Easy to remove, clean and put back. Plus they don't affect my speech while teaching.",
        image: 'https://ui-avatars.com/api/?name=Meenal+Joshi&background=FFB22C&color=854836',
    },
    {
        name: 'Karan Malhotra',
        profession: 'Photographer',
        review: 'Camera ke samne smile confident honi chahiye, and these aligners made that possible. Mere shoots ke dauraan kabhi problem nahi hui. Loved the whole journey!',
        image: 'https://ui-avatars.com/api/?name=Karan+Malhotra&background=FFB22C&color=854836',
    },
    {
        name: 'Pooja Reddy',
        profession: 'Content Creator',
        review: 'Instagram reels, vlogs, aur daily videos – sab mein confident smile dikhti hai ab. Pehle hesitation hoti thi but now I feel totally camera-ready!',
        image: 'https://ui-avatars.com/api/?name=Pooja+Reddy&background=FFB22C&color=854836',
    },
    {
        name: 'Devansh Patel',
        profession: 'Chartered Accountant',
        review: 'Numbers ke beech smile bhi zaruri hoti hai. Process was smooth, no clinic rush, and affordable plans made it easy for me to start. Thanks for the amazing support!',
        image: 'https://ui-avatars.com/api/?name=Devansh+Patel&background=FFB22C&color=854836',
    },
]

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
                                <div className="bg-white h-full shadow-md rounded-xl text-card-foreground max-w-96 select-none p-6 duration-200">
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
                                        <div className="text-sm">
                                            <p className="font-medium">{review.name}</p>
                                            <p className="text-neutral-600 text-xs">
                                                {review.profession}
                                            </p>
                                        </div>
                                    </div>
                                    <q>{review.review}</q>
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
                                <div className="bg-white h-full shadow-md rounded-xl text-card-foreground  max-w-96 select-none p-6 duration-200">
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
                                        <div className="text-sm">
                                            <p className="font-medium">{review.name}</p>
                                            <p className="text-neutral-600 text-xs">
                                                {review.profession}
                                            </p>
                                        </div>
                                    </div>
                                    <q>{review.review}</q>
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
