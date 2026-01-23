import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { Bookmark, MapPin, Star } from "lucide-react"

function ProductCard() {
    return (
        <>
            <div className="rounded-xl p-4 bg-white">
                <Link href="/listings/demo">
                    <Image src="/images/jcb.jpeg" width={500} height={500} alt="Placeholder" className="rounded-md aspect-video object-cover" />
                </Link>
                <Link href="/listings/demo" className="inline-block mt-1">
                    <p className="text-lg font-medium line-clamp-1">Lorem ipsum dolor sit amet aaa.</p>
                    <p className="text-xs line-clamp-2 text-neutral-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro accusantium dicta totam laudantium nisi minus?</p>
                    <p className="flex items-center text-sm gap-1 mt-2"><MapPin className="stroke-red-500 w-4 h-4" /> Location</p>
                    <div className="flex justify-between items-end">
                        <p className="text-sm text-neutral-600"><span className="text-neutral-800 text-lg font-semibold">₹ 1,00,000</span>/day</p>
                        <p className="flex items-center gap-1 text-sm"><Star className="stroke-transparent fill-yellowClr w-5 h-5" /> 4.5</p>
                    </div>
                </Link>
                <div className="mt-2 flex gap-2">
                    <Button className="flex-1">Book now</Button>
                    <Button size={'icon'} variant={'outline'}><Bookmark className="w-4 h-4" /></Button>
                </div>
            </div>
        </>
    )
}

export default ProductCard
