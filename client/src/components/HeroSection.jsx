'use client'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from "next/image";

const sliderImages = [
    { src: "/images/jcb.jpeg", alt: "JCB" },
    { src: "/images/crane.jpeg", alt: "Crane" },
    { src: "/images/tipper.jpeg", alt: "Tipper" },
    { src: "/images/generator.jpeg", alt: "Generator" },
    { src: "/images/bulldozer.jpeg", alt: "Bulldozer" },
    { src: "/images/dump.jpeg", alt: "Dump truck" },
    { src: "/images/jcb2.jpg", alt: "JCB" },
    { src: "/images/roller.jpeg", alt: "Road Roller" },
    { src: "/images/mixer.jpeg", alt: "Construction mixer" },
]

function HeroSection() {
    return (
        <>
            <section>
                <div className="relative">
                    <Splide
                        className="w-full"
                        id="hero"
                        options={{
                            type: "loop",
                            // perPage: 3,
                            height: "337px",
                            autoWidth: true,
                            gap: "0rem",
                            autoplay: false,
                            interval: 4000,
                            pauseOnHover: true,
                            arrows: false,
                            pagination: false,
                            autoScroll: {
                                speed: 1,
                                pauseOnHover: false
                            },
                            breakpoints: {
                                1200: {
                                    perPage: 4
                                },
                                1024: {
                                    perPage: 3
                                },
                                768: {
                                    perPage: 2,
                                },
                                568: {
                                    perPage: 1
                                }
                            }
                        }}
                        extensions={{ AutoScroll }}
                    >
                        {sliderImages.map((image, index) => (
                            <SplideSlide key={index}>
                                <Image src={image.src} alt={image.alt} className="h-full max-h-[337px] w-fit object-contain" width={1000} height={1000} />
                            </SplideSlide>
                        ))}
                    </Splide>
                    <div className="h-full absolute top-0 sm:left-[15%] left-0 z-10">
                        <Image src="/images/hero-img.png" alt="hero" className="h-full w-fit" width={1000} height={1000} />
                        <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-8 sm:px-16 px-12">
                            <h1 className="text-white font-bold sm:text-4xl text-3xl flex flex-col sm:gap-2 gap-1 mb-4">
                                <span><span className="text-yellowClr">Browse</span> Equipment</span>
                                <span>Offer Your <span className="text-yellowClr">Equipment</span></span>
                                <span>Connect With <span className="text-yellowClr">Professionals</span></span>
                            </h1>
                            <p className="text-neutral-300">Rent, buy, or lend equipment through a simple, reliable peer-powered marketplace.</p>
                        </div>
                    </div>
                    <div className="absolute bg-yellowClr/10 inset-0"></div>
                </div>
            </section>
            {/* <section className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('/svg/hero-bg.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-1 before:transform before:-translate-x-1/2">
                <div className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 md:py-20 sm:py-16 py-10">

                    <div className="max-w-4xl text-center mx-auto">
                        <h1 className="block font-bold text-neutral-800 text-4xl md:text-5xl lg:text-6xl lg:leading-16 md:leading-13 leading-10 transition-all duration-300">
                            Heavy{' '}
                            <RotatingText
                                texts={['Equipment', 'Machinery', 'Vehicles']}
                                mainClassName="inline-flex text-nowrap px-2 sm:px-2 md:px-3 bg-yellowClr text-neutral-800 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.05}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2500}
                            />{' '}
                            Rentals, <br /> Made{' '}
                            <span className="bg-clip-text bg-linear-to-tl from-yellowClr to-[#FFE52A] text-transparent">Effortless</span>
                        </h1>
                    </div>

                    <div className="mt-4 max-w-3xl text-center mx-auto">
                        <p className="sm:text-lg text-gray-600 dark:text-neutral-400">
                            Get the machines you need, straight from verified owners. Book JCBs, cranes, excavators, dumpers, and more, anywhere in India.
                        </p>
                    </div>

                    <div className="bg-neutral-800 shadow-[0px_0px_20px_2px_#FFE52A] sm:p-8 p-6 rounded-xl max-w-5xl mx-auto mt-8 space-y-4">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
                            <div className="grid w-full items-center text-white gap-2">
                                <Label htmlFor="email" className={'font-heading tracking-wider'}>Keyword</Label>
                                <Input type="email" id="email" placeholder="Email" className={'placeholder:text-white/60 text-[14px]'} />
                            </div>
                            <div className="grid w-full items-center gap-2 text-white">
                                <Label htmlFor="email" className={'font-heading tracking-wider'}>Categories</Label>
                                <Input type="email" id="email" placeholder="Email" className={'placeholder:text-white/60 text-[14px]'} />
                            </div>
                            <div className="grid w-full items-center gap-2 text-white">
                                <Label htmlFor="email" className={'font-heading tracking-wider'}>State</Label>
                                <Select>
                                    <SelectTrigger className="w-full data-placeholder:text-white/60!">
                                        <SelectValue placeholder="Select State" className={'text-white'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid w-full items-center gap-2 text-white">
                                <Label htmlFor="email" className={'font-heading tracking-wider'}>City</Label>
                                <Select>
                                    <SelectTrigger className="w-full data-placeholder:text-white/60!">
                                        <SelectValue placeholder="Select City" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col justify-between sm:items-end gap-2">
                            <div className="flex sm:flex-row flex-col gap-2">
                                <p className="text-sm text-white">Popular searches: </p>
                                <div className="flex flex-wrap gap-1">
                                    <Badge variant="secondary" className={'bg-white/20 text-white/80 border-white/80'}>Secondary</Badge>
                                    <Badge variant="secondary" className={'bg-white/20 text-white/80 border-white/80'}>Secondary</Badge>
                                    <Badge variant="secondary" className={'bg-white/20 text-white/80 border-white/80'}>Secondary</Badge>
                                </div>
                            </div>
                            <Button className={'gap-1'}><Search className="w-5 h-5" /> Search</Button>
                        </div>
                    </div>
                    <div className="md:mt-12 mt-8">
                        <LogoLoop
                            logos={brandLogos}
                            speed={100}
                            direction="left"
                            logoHeight={32}
                            gap={52}
                            hoverSpeed={0}
                            scaleOnHover
                            fadeOut
                            fadeOutColor="#ffffff"
                            ariaLabel="Technology partners"
                        />
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default HeroSection
