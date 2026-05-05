'use client';

import { useParams, useRouter } from "next/navigation";
import { useMachinery } from "@/context/useMachinery";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CategoryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { machinery } = useMachinery();
  const slug = params?.slug;

  // Category data mapping
  const getCategoryData = (slug) => {
    const categories = {
      'earthmoving': {
        name: 'Earthmoving',
        title: 'Earthmoving Equipment',
        description: 'Find the best earthmoving equipment for your construction needs. Excavators, bulldozers, loaders, and more available for rent.',
        image: '/images/categories/earthmoving.png',
        keywords: ['Excavator', 'Bulldozer', 'Loader', 'Backhoe', 'Grader', 'Dozer']
      },
      'concrete': {
        name: 'Concrete',
        title: 'Concrete Equipment',
        description: 'Professional concrete mixing and pumping equipment. Perfect for construction projects of any scale.',
        image: '/images/categories/concrete.png',
        keywords: ['Concrete Mixer', 'Concrete Pump', 'Batching Plant']
      },
      'lifting': {
        name: 'Lifting',
        title: 'Lifting Equipment',
        description: 'Safe and efficient lifting solutions. Cranes, forklifts, and material handling equipment available.',
        image: '/images/categories/lifting.png',
        keywords: ['Crane', 'Forklift', 'Scissor Lift', 'Boom Lift', 'Hoist']
      },
      'road': {
        name: 'Road',
        title: 'Road Construction Equipment',
        description: 'Heavy-duty road construction and compaction equipment. Rollers, pavers, and more.',
        image: '/images/categories/road.png',
        keywords: ['Roller', 'Paver', 'Compactor', 'Road Roller']
      },
      'power-equipment': {
        name: 'Power Equipment',
        title: 'Power Equipment',
        description: 'Reliable power generation and compression equipment for industrial use.',
        image: '/images/categories/power.png',
        keywords: ['Generator', 'Compressor', 'Welding Machine']
      }
    };
    return categories[slug] || null;
  };

  const category = getCategoryData(slug);

  // Filter machinery based on category keywords
  const getFilteredMachinery = () => {
    if (!category || !machinery) return [];
    
    return machinery.filter((item) => {
      const itemCategory = item?.category?.toLowerCase() || '';
      return category.keywords.some((keyword) => 
        itemCategory.includes(keyword.toLowerCase())
      );
    });
  };

  const filteredMachinery = getFilteredMachinery();

  // Loading state
  if (!machinery) {
    return (
      <div className="min-h-screen bg-neutral-700 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellowClr mx-auto"></div>
          <p className="text-white mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  // Category not found
  if (!category) {
    return (
      <div className="min-h-screen bg-neutral-700 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <p className="text-neutral-300 mb-8">The category you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-700">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-neutral-800 to-neutral-900 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-yellowClr hover:text-yellowClr/80 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>

          {/* Category Hero */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellowClr mb-4">
                {category.title}
              </h1>
              <p className="text-neutral-300 text-base md:text-lg mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellowClr font-bold text-2xl">{filteredMachinery.length}</span>
                <span className="text-neutral-400">equipment available</span>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-neutral-700/50 rounded-full p-6">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={250}
                  height={250}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Machinery Listing Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {filteredMachinery.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Available {category.name} Equipment
              </h2>
              <Button asChild variant="outline" className="border-yellowClr text-yellowClr hover:bg-yellowClr hover:text-black">
                <Link href="/listings">View All Equipment</Link>
              </Button>
            </div>

            {/* Machinery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredMachinery.map((item, index) => (
                <ProductCard key={item._id || index} data={item} />
              ))}
            </div>
          </>
        ) : (
          // No Equipment Found
          <div className="text-center py-16 bg-neutral-800/50 rounded-2xl">
            <div className="max-w-md mx-auto px-4">
              <h3 className="text-2xl font-semibold text-white mb-3">No Equipment Found</h3>
              <p className="text-neutral-300 mb-6">
                We don't have any {category.name.toLowerCase()} equipment available right now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/">Browse Other Categories</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/user/add-machinery">List Your Equipment</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Other Categories Section */}
      {filteredMachinery.length > 0 && (
        <div className="border-t border-neutral-600 py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-8">
              Explore Other Categories
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {['earthmoving', 'concrete', 'lifting', 'road', 'power-equipment'].map((catSlug) => {
                if (catSlug === slug) return null;
                const catData = getCategoryData(catSlug);
                return (
                  <Link
                    key={catSlug}
                    href={`/categories/${catSlug}`}
                    className="bg-neutral-800 rounded-xl p-4 text-center hover:bg-neutral-700 transition-all group"
                  >
<div className="w-24 h-24 mx-auto mb-3">
  <Image
    src={catData.image}
    alt={catData.name}
    width={96}
    height={96}
    className="object-contain group-hover:scale-110 transition-transform"
    unoptimized
  />
</div>
                    <p className="text-white text-sm font-medium group-hover:text-yellowClr">
                      {catData.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellowClr/10 to-yellowClr/5 rounded-2xl p-6 md:p-8 text-center border border-yellowClr/20">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Need a Specific Machine?
          </h3>
          <p className="text-neutral-300 mb-6 text-sm md:text-base">
            Can't find what you're looking for? List your own machinery or contact us for custom requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-yellowClr text-black hover:bg-yellowClr/90">
              <Link href="/user/add-machinery">List Your Machine</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}