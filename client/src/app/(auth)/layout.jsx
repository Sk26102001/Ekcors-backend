import Image from 'next/image'
import Navbar from '@/components/Navbar'

export const metadata = {
    title: 'Join us - Ekcors',
}

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className='mt-[72px]'>
                <div className="grid min-h-[90vh] lg:grid-cols-2">
                    <div className="bg-muted relative hidden lg:block">
                        <div className="after:content-[''] after:absolute after:inset-0 after:z-10 after:bg-black/40">
                            <Image
                                src="/images/auth-bg.jpg"
                                alt="Image"
                                height={1920}
                                width={1080}
                                priority
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                        <div className="w-2/3 z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white space-y-2 text-center">
                            <h1 className="text-6xl font-semibold flex flex-col gap-2">
                                <span className='text-xl font-medium'>Welcome to</span>
                                <span className='speedFont'>Ekcors</span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 md:p-10 bg-neutral-800">
                        {children}
                    </div>
                </div>
            </main>
        </>
    )
}
