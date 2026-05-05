// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "./ui/button"
// import { Bookmark, MapPin, Star } from "lucide-react"

// function ProductCard({ data }) {
//     return (
//         <>
//             <div className="rounded-xl sm:p-4 p-3 bg-neutral-800 flex sm:flex-col flex-row gap-2">
//                 <Link href={`/listings/${data?.slug}`}>
//                     <Image src={`${process.env.NEXT_PUBLIC_API_URL}${data?.images[0]}`} width={500} height={500} alt="Placeholder" className="rounded-md sm:aspect-video aspect-square object-cover sm:w-full w-32" unoptimized />
//                 </Link>
//                 <div className="flex-1">
//                     <Link href={`/listings/${data?.slug}`} className="inline-block mt-1 text-white w-full">
//                         <p className="font-medium line-clamp-1">{data?.title}</p>
//                         <p className="text-xs line-clamp-2 text-gray-200">{data?.description}</p>
//                         <p className="flex items-center sm:text-sm text-xs gap-1 sm:mt-2 mt-1"><MapPin className="stroke-red-500 w-4 h-4" /> Location</p>
//                         <p className="text-sm text-gray-200"><span className="text-white sm:text-lg font-semibold">₹ {data?.dailyCapPrice}</span>/day</p>
//                         {/* <div className="flex justify-between items-end">
//                             <p className="flex items-center gap-1 text-sm"><Star className="stroke-transparent fill-yellowClr w-5 h-5" /> 4.5</p>
//                         </div> */}
//                     </Link>
//                     <div className="sm:mt-2 mt-1 flex gap-2 w-full">
//                         <Button className="flex-1">Book now</Button>
//                         <Button size={'icon'} variant={'outline'}><Bookmark className="w-4 h-4" /></Button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProductCard




// // components/ProductCard.jsx
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import { Bookmark, MapPin, Heart } from "lucide-react"; // replace Bookmark with Heart

// function ProductCard({ data, isFavorite, onToggleFavorite }) {
//   const machine = {
//     id: data.id,
//     slug: data.slug,
//     title: data.title,
//     description: data.description,
//     image: data.images?.[0],
//     dailyRate: data.dailyCapPrice,
//   };

//   return (
//     <div className="rounded-xl sm:p-4 p-3 bg-neutral-800 flex sm:flex-col flex-row gap-2">
//       <Link href={`/listings/${machine.slug}`}>
//         <Image
//           src={`${process.env.NEXT_PUBLIC_API_URL}${machine.image}`}
//           width={500}
//           height={500}
//           alt="Placeholder"
//           className="rounded-md sm:aspect-video aspect-square object-cover sm:w-full w-32"
//           unoptimized
//         />
//       </Link>
//       <div className="flex-1">
//         <Link href={`/listings/${machine.slug}`} className="inline-block mt-1 text-white w-full">
//           <p className="font-medium line-clamp-1">{machine.title}</p>
//           <p className="text-xs line-clamp-2 text-gray-200">{machine.description}</p>
//           <p className="flex items-center sm:text-sm text-xs gap-1 sm:mt-2 mt-1">
//             <MapPin className="stroke-red-500 w-4 h-4" /> Location
//           </p>
//           <p className="text-sm text-gray-200">
//             <span className="text-white sm:text-lg font-semibold">₹ {machine.dailyRate}</span>/day
//           </p>
//         </Link>
//         <div className="sm:mt-2 mt-1 flex gap-2 w-full">
//           <Button asChild className="flex-1">
//             <Link href={`/listings/${machine.slug}`}>Book now</Link>
//           </Button>
//           <Button
//             size="icon"
//             variant="outline"
//             onClick={() => onToggleFavorite(machine)}
//           >
//             <Heart
//               className={`w-4 h-4 ${
//                 isFavorite(machine.id) ? "fill-red-500 text-red-500" : "text-gray-400"
//               }`}
//             />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;




// components/ProductCard.jsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MapPin, Heart } from "lucide-react";

function ProductCard({ data, isFavorite, onToggleFavorite }) {
  const machine = {
    id: data._id || data.id,   // Use _id if available (MongoDB)
    slug: data.slug,
    title: data.title,
    description: data.description,
    image: data.images?.[0],
    dailyRate: data.dailyCapPrice,
  };

  // ✅ Safe check: ensure isFavorite is a function
  const isFav = typeof isFavorite === 'function' ? isFavorite(machine.id) : false;

  return (
    <div className="rounded-xl sm:p-4 p-3 bg-neutral-800 flex sm:flex-col flex-row gap-2">
      <Link href={`/listings/${machine.slug}`}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_URL}${machine.image}`}
          width={500}
          height={500}
          alt="Placeholder"
          className="rounded-md sm:aspect-video aspect-square object-cover sm:w-full w-32"
          unoptimized
          onError={(e) => (e.target.src = "/images/jcb.jpeg")}
        />
      </Link>
      <div className="flex-1">
        <Link href={`/listings/${machine.slug}`} className="inline-block mt-1 text-white w-full">
          <p className="font-medium line-clamp-1">{machine.title}</p>
          <p className="text-xs line-clamp-2 text-gray-200">{machine.description}</p>
          <p className="flex items-center sm:text-sm text-xs gap-1 sm:mt-2 mt-1">
            <MapPin className="stroke-red-500 w-4 h-4" /> Location
          </p>
          <p className="text-sm text-gray-200">
            <span className="text-white sm:text-lg font-semibold">₹ {machine.dailyRate}</span>/day
          </p>
        </Link>
        <div className="sm:mt-2 mt-1 flex gap-2 w-full">
          <Button asChild className="flex-1">
            <Link href={`/listings/${machine.slug}`}>Book now</Link>
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={() => onToggleFavorite && onToggleFavorite(machine)}
          >
            <Heart
              className={`w-4 h-4 ${
                isFav ? "fill-red-500 text-red-500" : "text-gray-400"
              }`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;