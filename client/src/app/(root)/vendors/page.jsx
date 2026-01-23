// "use client";

// import React, { useState } from 'react';
// import { Truck, User, ArrowLeft, MapPin, Star, PhoneCall } from "lucide-react";
// import Image from "next/image";

// // Mock Data: In a real app, this comes from an API or Database
// const OWNERS_DATA = [
//     {
//         id: "owner-1",
//         name: "Singh Construction Equipments",
//         location: "Mumbai, MH",
//         rating: 4.8,
//         fleetSize: 12,
//         fleet: [
//             { id: "m1", name: "Hydraulic Excavator 320G", category: "Excavator", price: "₹15,000" },
//             { id: "m2", name: "Backhoe Loader 4CX", category: "Loader", price: "₹8,000" },
//         ]
//     },
//     {
//         id: "owner-2",
//         name: "Verma Heavy Rentals",
//         location: "Delhi, NCR",
//         rating: 4.5,
//         fleetSize: 8,
//         fleet: [
//             { id: "m3", name: "Mobile Crane 50T", category: "Crane", price: "₹45,000" },
//             { id: "m4", name: "Crawler Drill", category: "Drilling", price: "₹22,000" },
//         ]
//     }
// ];

// export default function page() {
//     const [selectedOwner, setSelectedOwner] = useState(null);

//     // If an owner is selected, show their specific listings
//     if (selectedOwner) {
//         return (
//             <div className="min-h-screen bg-neutral-700 text-white p-6 lg:p-12">
//                 <div className="max-w-6xl mx-auto">
//                     {/* Back Button */}
//                     <button 
//                         onClick={() => setSelectedOwner(null)}
//                         className="flex items-center gap-2 text-yellowClr hover:underline mb-8"
//                     >
//                         <ArrowLeft size={20} /> Back to all Owners
//                     </button>

//                     {/* Owner Header */}
//                     <div className="bg-neutral-800 rounded-3xl p-8 border border-neutral-600 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
//                         <div>
//                             <h1 className="text-4xl font-bold text-yellowClr mb-2">{selectedOwner.name}</h1>
//                             <div className="flex items-center gap-4 text-zinc-400">
//                                 <span className="flex items-center gap-1"><MapPin size={16}/> {selectedOwner.location}</span>
//                                 <span className="flex items-center gap-1 text-yellow-500"><Star size={16} fill="currentColor"/> {selectedOwner.rating}</span>
//                             </div>
//                         </div>
//                         <button className="bg-yellowClr text-neutral-900 font-bold py-3 px-8 rounded-2xl flex items-center gap-2 hover:scale-105 transition">
//                             <PhoneCall size={20} /> Contact Owner
//                         </button>
//                     </div>

//                     <h2 className="text-2xl font-semibold mb-6">Available Fleet</h2>
                    
//                     {/* Listings Grid */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {selectedOwner.fleet.map((item) => (
//                             <div key={item.id} className="bg-neutral-800 border border-neutral-600 rounded-3xl p-6 hover:border-yellowClr transition group">
//                                 <div className="bg-neutral-700 h-40 rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden">
//                                      <Truck size={60} className="text-neutral-600 group-hover:text-yellowClr/20 transition-colors" />
//                                      <span className="absolute bottom-3 left-3 bg-neutral-900/80 px-3 py-1 rounded-lg text-xs text-yellowClr">{item.category}</span>
//                                 </div>
//                                 <h3 className="text-xl font-bold mb-2">{item.name}</h3>
//                                 <div className="flex justify-between items-center">
//                                     <p className="text-2xl font-mono text-yellowClr">{item.price}<span className="text-xs text-zinc-400">/day</span></p>
//                                     <button className="bg-white text-neutral-900 text-sm font-bold py-2 px-4 rounded-xl hover:bg-yellowClr transition">
//                                         Book Now
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     // Default View: List of Owners
//     return (
//         <div className="min-h-screen bg-neutral-700 text-white p-6 lg:p-12">
//             <div className="max-w-6xl mx-auto">
//                 <header className="mb-12">
//                     <h1 className="text-4xl md:text-5xl font-bold text-yellowClr mb-4">Verified Equipment Owners</h1>
//                     <p className="text-zinc-400 text-lg">Browse trusted partners and their heavy machinery inventory.</p>
//                 </header>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {OWNERS_DATA.map((owner) => (
//                         <div 
//                             key={owner.id} 
//                             onClick={() => setSelectedOwner(owner)}
//                             className="bg-neutral-800 border border-neutral-600 rounded-[2rem] p-8 hover:bg-neutral-600/20 cursor-pointer transition group relative overflow-hidden"
//                         >
//                             {/* Decorative Background Icon */}
//                             <User size={120} className="absolute -right-10 -bottom-10 text-white/5 group-hover:text-yellowClr/10 transition-colors" />

//                             <div className="relative z-10">
//                                 <div className="flex justify-between items-start mb-6">
//                                     <div className="p-4 bg-yellowClr rounded-2xl text-neutral-900">
//                                         <User size={32} />
//                                     </div>
//                                     <span className="bg-green-500/10 text-green-500 text-xs font-bold px-4 py-2 rounded-full border border-green-500/20">
//                                         Verified Partner
//                                     </span>
//                                 </div>
                                
//                                 <h2 className="text-2xl font-bold group-hover:text-yellowClr transition-colors mb-1">{owner.name}</h2>
//                                 <p className="text-zinc-400 flex items-center gap-1 mb-6">
//                                     <MapPin size={16} /> {owner.location}
//                                 </p>

//                                 <div className="grid grid-cols-2 gap-4 border-t border-neutral-600 pt-6">
//                                     <div>
//                                         <p className="text-zinc-500 text-xs uppercase tracking-wider">Fleet Size</p>
//                                         <p className="text-xl font-bold">{owner.fleetSize} Machines</p>
//                                     </div>
//                                     <div>
//                                         <p className="text-zinc-500 text-xs uppercase tracking-wider">Rating</p>
//                                         <p className="text-xl font-bold text-yellowClr">★ {owner.rating}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }






// "use client";

// import React, { useState } from 'react';
// import { 
//   LayoutDashboard, 
//   Package, 
//   Truck, 
//   Star, 
//   MapPin, 
//   ChevronRight,
//   Search,
//   Filter
// } from "lucide-react";

// // Fake data — owner IDs as numbers, but object keys become strings automatically
// const mockOwners = [
//   { id: 1, name: "Ramesh Construction", location: "Dhanbad, Jharkhand", rating: 4.7, totalListings: 8 },
//   { id: 2, name: "S K Equipments", location: "Bokaro Steel City", rating: 4.2, totalListings: 5 },
//   { id: 3, name: "Jai Maa Machinery", location: "Asansol, West Bengal", rating: 4.9, totalListings: 12 },
//   { id: 4, name: "ABC Infra Rentals", location: "Ranchi, Jharkhand", rating: 4.0, totalListings: 3 },
// ];

// const mockFleet = {
//   1: [
//     { id: 101, name: "Hydraulic Excavator 320G", category: "Excavator", status: "Available", price: "₹15,000/day" },
//     { id: 102, name: "Mobile Crane 50T", category: "Crane", status: "Rented", price: "₹45,000/day" },
//     { id: 103, name: "JCB 3DX Eco Backhoe Loader", category: "Backhoe Loader", status: "Available", price: "₹9,500/day" },
//   ],
//   2: [
//     { id: 201, name: "Bulldozer D155", category: "Dozer", status: "Available", price: "₹28,000/day" },
//     { id: 202, name: "Wheel Loader 966M", category: "Loader", status: "Available", price: "₹22,000/day" },
//   ],
//   // add more owners here if needed
// };

// export default function OwnersDirectory() {
//   const [selectedOwner, setSelectedOwner] = useState(null);           // null | number
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredOwners = mockOwners.filter(owner =>
//     owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     owner.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // ── Safe fleet lookup ────────────────────────────────────────
//   const currentFleet = selectedOwner !== null && selectedOwner in mockFleet
//     ? mockFleet[selectedOwner] || []
//     : [];
//   // ─────────────────────────────────────────────────────────────

//   const handleSelectOwner = (id) => {
//     setSelectedOwner(id);
//   };

//   return (
//     <div className="min-h-screen bg-neutral-700 text-white">
//       <div className="flex flex-col md:flex-row">
//         {/* Sidebar – same style */}
//         <aside className="w-full md:w-64 bg-neutral-800 p-6 border-r border-neutral-600 md:min-h-screen">
//           <h2 className="text-yellowClr text-2xl font-bold mb-8">EkCors</h2>
//           <nav className="space-y-2">
//             <button className="w-full flex items-center gap-3 text-zinc-400 hover:text-white p-3 transition rounded-xl">
//               <LayoutDashboard size={20} />
//               <span className="font-medium">Browse Owners</span>
//             </button>
//             <button className="w-full flex items-center gap-3 text-zinc-400 hover:text-white p-3 transition rounded-xl">
//               <Package size={20} />
//               <span>My Bookings</span>
//             </button>
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-6 lg:p-10">
//           <header className="mb-10">
//             <h1 className="text-3xl font-semibold mb-2">
//               {selectedOwner ? "Owner's Fleet" : "Available Equipment Owners"}
//             </h1>
//             <p className="text-zinc-400">
//               {selectedOwner
//                 ? "Explore machines available for rent from this owner"
//                 : "Find trusted owners and their construction equipment in your area"}
//             </p>

//             {selectedOwner !== null && (
//               <button
//                 onClick={() => setSelectedOwner(null)}
//                 className="mt-4 text-yellowClr hover:underline flex items-center gap-1"
//               >
//                 ← Back to all owners
//               </button>
//             )}
//           </header>

//           {!selectedOwner && (
//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               <div className="flex-1 relative">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
//                 <input
//                   type="text"
//                   placeholder="Search owners or location..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full bg-neutral-800 border border-neutral-600 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-yellowClr transition"
//                 />
//               </div>
//               <button className="bg-neutral-800 border border-neutral-600 hover:border-yellowClr text-zinc-300 px-6 py-3 rounded-xl flex items-center gap-2 transition">
//                 <Filter size={20} />
//                 <span>Filters</span>
//               </button>
//             </div>
//           )}

//           {selectedOwner ? (
//             <div className="bg-neutral-800 rounded-3xl border border-neutral-600 overflow-hidden">
//               <table className="w-full text-left border-collapse">
//                 <thead className="bg-neutral-900/50 text-zinc-400 text-sm">
//                   <tr>
//                     <th className="p-5 font-medium">Machine</th>
//                     <th className="p-5 font-medium">Status</th>
//                     <th className="p-5 font-medium">Daily Rate</th>
//                     <th className="p-5 font-medium text-right">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-neutral-600">
//                   {currentFleet.map((item) => (
//                     <tr key={item.id} className="hover:bg-neutral-600/20 transition">
//                       <td className="p-5 flex items-center gap-3">
//                         <div className="p-2 bg-yellowClr/10 rounded-lg text-yellowClr">
//                           <Truck size={20} />
//                         </div>
//                         <div>
//                           <div className="font-medium">{item.name}</div>
//                           <div className="text-sm text-zinc-500">{item.category}</div>
//                         </div>
//                       </td>
//                       <td className="p-5">
//                         <span
//                           className={`text-xs font-bold px-3 py-1 rounded-full ${
//                             item.status === "Available"
//                               ? "bg-green-500/10 text-green-500"
//                               : "bg-yellow-500/10 text-yellow-500"
//                           }`}
//                         >
//                           {item.status}
//                         </span>
//                       </td>
//                       <td className="p-5 font-mono text-yellowClr">{item.price}</td>
//                       <td className="p-5 text-right">
//                         <button className="bg-yellowClr/20 hover:bg-yellowClr/30 text-yellowClr px-4 py-2 rounded-xl text-sm font-medium transition">
//                           View & Book
//                         </button>
//                       </td>
//                     </tr>
//                   ))}

//                   {currentFleet.length === 0 && (
//                     <tr>
//                       <td colSpan={4} className="p-10 text-center text-zinc-500">
//                         No machines listed yet
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredOwners.map((owner) => (
//                 <div
//                   key={owner.id}
//                   onClick={() => handleSelectOwner(owner.id)}
//                   className="bg-neutral-800 border border-neutral-600 rounded-3xl p-6 hover:border-yellowClr/50 hover:shadow-xl transition-all cursor-pointer group"
//                 >
//                   <div className="flex items-start justify-between mb-4">
//                     <div className="flex items-center gap-3">
//                       <div className="w-12 h-12 bg-yellowClr/10 rounded-xl flex items-center justify-center text-yellowClr">
//                         <Star size={24} />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold text-lg group-hover:text-yellowClr transition">
//                           {owner.name}
//                         </h3>
//                         <p className="text-sm text-zinc-400 flex items-center gap-1">
//                           <MapPin size={14} />
//                           {owner.location}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-yellowClr font-bold">{owner.rating} ★</div>
//                       <div className="text-xs text-zinc-500">{owner.totalListings} listings</div>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between text-sm pt-4 border-t border-neutral-700">
//                     <span className="text-zinc-400">View fleet</span>
//                     <ChevronRight size={18} className="text-yellowClr" />
//                   </div>
//                 </div>
//               ))}

//               {filteredOwners.length === 0 && (
//                 <div className="col-span-full text-center py-20 text-zinc-500">
//                   No owners found matching your search
//                 </div>
//               )}
//             </div>
//           )}
//         </main>
//       </div>
//     </div>
//   );
// }





// "use client";

// import React, { useState } from 'react';
// import { 
//     Truck, User, ArrowLeft, MapPin, Star, 
//     PhoneCall, ShieldCheck, ChevronRight, HardHat,
//     Search, SlidersHorizontal
// } from "lucide-react";

// const OWNERS_DATA = [
//     {
//         id: "owner-1",
//         name: "Singh Construction Equipments",
//         location: "Mumbai, MH",
//         rating: 4.8,
//         experience: "12 Years",
//         fleetSize: 12,
//         fleet: [
//             { id: "m1", name: "Hydraulic Excavator 320G", category: "Excavator", price: "15,000", condition: "Excellent" },
//             { id: "m2", name: "Backhoe Loader 4CX", category: "Loader", price: "8,000",availablity: "Available" },
//         ]
//     },
//     {
//         id: "owner-2",
//         name: "Verma Heavy Rentals",
//         location: "Delhi, NCR",
//         rating: 4.5,
//         experience: "8 Years",
//         fleetSize: 8,
//         fleet: [
//             { id: "m3", name: "Mobile Crane 50T", category: "Crane", price: "45,000", condition: "Certified" },
//             { id: "m4", name: "Crawler Drill", category: "Drilling", price: "22,000", availablity: "Rented" },
//         ]
//     }
// ];

// export default function page() {
//     const [selectedOwner, setSelectedOwner] = useState(null);

//     if (selectedOwner) {
//         return (
//             <div className="min-h-screen bg-[#1c1c1c] text-white">
//                 {/* Profile Hero Section */}
//                 <div className="bg-neutral-800 border-b border-neutral-700 pt-12 pb-20 px-6">
//                     <div className="max-w-7xl mx-auto">
//                         <button 
//                             onClick={() => setSelectedOwner(null)}
//                             className="flex items-center gap-2 text-zinc-400 hover:text-yellowClr transition mb-8 group"
//                         >
//                             <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform"/> Back to directory
//                         </button>
                        
//                         <div className="flex flex-col md:flex-row justify-between items-end gap-6">
//                             <div className="flex items-center gap-6">
//                                 <div className="size-24 bg-yellowClr rounded-3xl flex items-center justify-center text-neutral-900 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
//                                     <User size={48} />
//                                 </div>
//                                 <div>
//                                     <div className="flex items-center gap-3 mb-2">
//                                         <h1 className="text-4xl font-bold">{selectedOwner.name}</h1>
//                                         <ShieldCheck className="text-blue-400" size={24} />
//                                     </div>
//                                     <div className="flex gap-4 text-zinc-400">
//                                         <span className="flex items-center gap-1"><MapPin size={16}/> {selectedOwner.location}</span>
//                                         <span className="flex items-center gap-1 text-yellowClr"><Star size={16} fill="currentColor"/> {selectedOwner.rating} Rating</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button className="w-full md:w-auto bg-yellowClr hover:bg-yellow-500 text-neutral-900 font-bold py-4 px-10 rounded-2xl transition shadow-xl flex items-center justify-center gap-2">
//                                 <PhoneCall size={20} /> Contact for Booking
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Listing Section */}
//                 <div className="max-w-7xl mx-auto px-6 -mt-10">
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                         {selectedOwner.fleet.map((item) => (
//                             <div key={item.id} className="bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-[2rem] overflow-hidden group hover:border-yellowClr/50 transition-all duration-300 shadow-2xl">
//                                 <div className="aspect-video bg-neutral-900 relative flex items-center justify-center overflow-hidden">
//                                     <Truck size={64} className="text-neutral-700 group-hover:scale-110 transition-transform duration-500" />
//                                     <div className="absolute top-4 left-4 bg-yellowClr text-neutral-900 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
//                                         {item.availablity}
//                                     </div>
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="flex justify-between items-start mb-4">
//                                         <div>
//                                             <p className="text-yellowClr text-xs font-bold uppercase tracking-wider mb-1">{item.category}</p>
//                                             <h3 className="text-xl font-bold leading-tight">{item.name}</h3>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center justify-between border-t border-neutral-700 pt-6 mt-4">
//                                         <div>
//                                             <p className="text-zinc-500 text-xs">Daily Rental</p>
//                                             <p className="text-2xl font-black text-white">₹{item.price}</p>
//                                         </div>
//                                         <button className="bg-white/10 hover:bg-yellowClr hover:text-neutral-900 transition-colors p-4 rounded-2xl">
//                                             <ChevronRight size={20} />
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-[#1c1c1c] text-white p-6 lg:p-12">
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
//                     <div className="max-w-2xl">
//                         <div className="inline-flex items-center gap-2 bg-yellowClr/10 border border-yellowClr/20 text-yellowClr px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
//                             <HardHat size={14} /> Industrial Marketplace
//                         </div>
//                         <h1 className="text-5xl md:text-7xl font-black mb-6">Find Heavy <br/> <span className="text-yellowClr">Equipment.</span></h1>
//                         <p className="text-zinc-400 text-lg leading-relaxed">Connecting builders with India's most reliable machinery owners. Verified fleets, transparent pricing, zero downtime.</p>
//                     </div>
                    
//                     {/* Search Bar - Better Design */}
//                     <div className="w-full md:w-96 bg-neutral-800 p-2 rounded-[2rem] border border-neutral-700 flex items-center gap-3">
//                         <div className="pl-4 text-zinc-500"><Search size={20}/></div>
//                         <input className="bg-transparent flex-1 outline-none text-sm" placeholder="Search owners or machinery..." />
//                         <button className="p-3 bg-neutral-700 rounded-2xl text-yellowClr"><SlidersHorizontal size={20}/></button>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {OWNERS_DATA.map((owner) => (
//                         <div 
//                             key={owner.id} 
//                             onClick={() => setSelectedOwner(owner)}
//                             className="group relative bg-neutral-800 border border-neutral-700 rounded-[2.5rem] p-10 hover:border-yellowClr transition-all duration-500 cursor-pointer overflow-hidden"
//                         >
//                             {/* Visual Polish: Gradient Glow */}
//                             <div className="absolute -right-20 -top-20 size-64 bg-yellowClr/5 rounded-full blur-[80px] group-hover:bg-yellowClr/10 transition-colors" />

//                             <div className="relative z-10">
//                                 <div className="flex justify-between items-start mb-10">
//                                     <div className="size-16 bg-neutral-700 rounded-2xl flex items-center justify-center text-yellowClr group-hover:bg-yellowClr group-hover:text-neutral-900 transition-all duration-500 shadow-xl">
//                                         <User size={32} />
//                                     </div>
//                                     <div className="text-right">
//                                         <div className="flex items-center gap-1 text-yellowClr font-bold text-lg mb-1">
//                                             <Star size={18} fill="currentColor" /> {owner.rating}
//                                         </div>
//                                         <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Trust Score</p>
//                                     </div>
//                                 </div>

//                                 <h2 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">{owner.name}</h2>
//                                 <div className="flex items-center gap-2 text-zinc-400 mb-8">
//                                     <MapPin size={16} /> {owner.location} • {owner.experience} Exp
//                                 </div>

//                                 <div className="flex items-center justify-between bg-neutral-900/50 p-6 rounded-3xl border border-neutral-700/50">
//                                     <div>
//                                         <p className="text-[10px] text-zinc-500 uppercase font-black tracking-tighter mb-1">Active Fleet</p>
//                                         <p className="text-xl font-bold">{owner.fleetSize} Machines</p>
//                                     </div>
//                                     <div className="size-12 rounded-full border border-neutral-700 flex items-center justify-center group-hover:bg-yellowClr group-hover:border-yellowClr transition-colors">
//                                         <ChevronRight className="text-zinc-500 group-hover:text-neutral-900" size={24} />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }




// 'use client'

// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Input } from "@/components/ui/input";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"
// import { Button } from "@/components/ui/button"
// import { ArrowDownAZ, ArrowDownNarrowWide, ArrowDownWideNarrow, ArrowUpAZ, ArrowUpDown, ClockArrowDown, ClockArrowUp, SlidersHorizontal, X } from "lucide-react"
// import ProductCard from "@/components/ProductCard";
// import { Slider } from "@/components/ui/slider";
// import { useState } from "react";

// // export const metadata = {
// //     title: 'Listings',
// //     description: 'Generated by create next app',
// // }

// function page() {
//     const [priceRange, setPriceRange] = useState([0, 100]);

//     return (
//         <>
//             <section className="sm:min-h-48 min-h-40 bg-[url('/images/listing-bg.jpg')] bg-cover bg-center bg-no-repeat flex justify-center
//             items-center relative">
//                 <div className="absolute bg-yellow-500/20 backdrop-blur-[2px] inset-0"></div>
//                 <div className="h-full w-full flex flex-col justify-center items-center relative z-10 space-y-2">
//                     <h1 className="text-white text-3xl font-semibold">Vendors</h1>
//                     <Breadcrumb>
//                         <BreadcrumbList>
//                             <BreadcrumbItem>
//                                 <BreadcrumbLink href="/" className={'text-gray-400 hover:text-yellowClr'}>Home</BreadcrumbLink>
//                             </BreadcrumbItem>
//                             <BreadcrumbSeparator />
//                             <BreadcrumbItem>
//                                 <BreadcrumbPage className={'text-gray-300'}>Vendors</BreadcrumbPage>
//                             </BreadcrumbItem>
//                         </BreadcrumbList>
//                     </Breadcrumb>
//                 </div>
//             </section>
//             <section className="bg-neutral-800 md:px-6 px-4">
//                 <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-4 gap-2">
//                     <div className="md:block hidden h-fit top-16 sticky border-r border-neutral-700 py-6 pe-4">
//                         <div className="flex justify-between items-start mb-2">
//                             <p className="text-yellowClr font-medium">FILTERS</p>
//                             <Button variant={'outline'} className="text-xs h-7 px-2 gap-1"><X className="h-4" /> Clear</Button>
//                         </div>
//                         <div>
//                             <div className="border-b border-neutral-700 py-2 text-white">
//                                 <p className="font-semibold text-sm">Price Range</p>
//                                 <div className="space-y-4 mb-2">
//                                     <div>
//                                         <output className="w-full text-sm font-medium tabular-nums flex justify-between">
//                                             <span>₹{priceRange[0]}</span>
//                                             <span>₹{priceRange[1]}</span>
//                                         </output>
//                                     </div>
//                                     <Slider
//                                         value={priceRange}
//                                         min={21}
//                                         max={100}
//                                         onValueChange={setPriceRange}
//                                         onValueCommit={(val) => {
//                                             const [min, max] = val
//                                             const params = new URLSearchParams(searchParams.toString())
//                                             params.set('minAge', min)
//                                             params.set('maxAge', max)
//                                             router.replace(`/matrimony-profiles?${params.toString()}`, {
//                                                 scroll: false,
//                                             })
//                                         }}
//                                         aria-label="Dual range slider for Age"
//                                     />
//                                 </div>
//                             </div>
//                             <Accordion
//                                 type="single"
//                                 collapsible
//                                 className="w-full border-b border-neutral-700"
//                             >
//                                 <AccordionItem value="item-1">
//                                     <AccordionTrigger className={'text-white! font-semibold'}>Category</AccordionTrigger>
//                                     <AccordionContent className="flex flex-col gap-3 text-balance text-white!">
//                                         <div className="flex items-center gap-2">
//                                             <Checkbox id="bulldozer" />
//                                             <Label htmlFor="bulldozer">Bulldozer</Label>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <Checkbox id="crane" />
//                                             <Label htmlFor="crane">Crane</Label>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <Checkbox id="trucks" />
//                                             <Label htmlFor="trucks">Trucks</Label>
//                                         </div>
//                                     </AccordionContent>
//                                 </AccordionItem>
//                             </Accordion>
//                             <div className="py-2 text-white">
//                                 <p className="font-semibold text-sm">Distance</p>
//                                 <div className="space-y-4 mb-2">
//                                     <div>
//                                         <output className="w-full text-sm font-medium tabular-nums flex justify-between">
//                                             <span>{priceRange[0]}<span className="text-xs">km</span></span>
//                                             <span>{priceRange[1]}<span className="text-xs">km</span></span>
//                                         </output>
//                                     </div>
//                                     <Slider
//                                         value={priceRange}
//                                         min={21}
//                                         max={100}
//                                         onValueChange={setPriceRange}
//                                         onValueCommit={(val) => {
//                                             const [min, max] = val
//                                             const params = new URLSearchParams(searchParams.toString())
//                                             params.set('minAge', min)
//                                             params.set('maxAge', max)
//                                             router.replace(`/matrimony-profiles?${params.toString()}`, {
//                                                 scroll: false,
//                                             })
//                                         }}
//                                         aria-label="Dual range slider for Age"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="lg:col-span-4 md:col-span-3 py-6">
//                         <div className="bg-neutral-800 pb-4 flex sm:flex-row flex-col justify-between sm:items-start gap-2 md:static sticky top-[72px]">
//                             <div>
//                                 <p className="text-white text-xl font-semibold">All Listings</p>
//                                 <p className="text-sm text-gray-400">Showing 10 of 1,000 listings</p>
//                             </div>
//                             <div className="flex gap-2">
//                                 <Input type="text" className={'bg-white focus-visible:ring-0 focus-visible:border-yellowClr'} placeholder="Search" />
//                                 <DropdownMenu modal={false}>
//                                     <DropdownMenuTrigger asChild>
//                                         <Button className="gap-2">
//                                             <ArrowUpDown className="w-4 h-4" />
//                                             <span className="sm:inline hidden">Sort by</span>
//                                         </Button>
//                                     </DropdownMenuTrigger>

//                                     <DropdownMenuContent align="end" className="w-48">

//                                         <DropdownMenuItem >
//                                             <ClockArrowDown className="w-4 h-4" />
//                                             Newest to Oldest
//                                         </DropdownMenuItem>

//                                         <DropdownMenuItem >
//                                             <ClockArrowUp className="w-4 h-4" />
//                                             Oldest to Newest
//                                         </DropdownMenuItem>

//                                         <DropdownMenuSeparator />

//                                         <DropdownMenuItem>
//                                             <ArrowDownNarrowWide className="w-4 h-4" />
//                                             Price: Low to High
//                                         </DropdownMenuItem>

//                                         <DropdownMenuItem>
//                                             <ArrowDownWideNarrow className="w-4 h-4" />
//                                             Price: High to Low
//                                         </DropdownMenuItem>

//                                         <DropdownMenuSeparator />

//                                         <DropdownMenuItem >
//                                             <ArrowDownAZ className="w-4 h-4" />
//                                             Name: A to Z
//                                         </DropdownMenuItem>

//                                         <DropdownMenuItem >
//                                             <ArrowUpAZ className="w-4 h-4" />
//                                             Name: Z to A
//                                         </DropdownMenuItem>
//                                     </DropdownMenuContent>
//                                 </DropdownMenu>
//                             </div>
//                         </div>
//                         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-2">
//                             {Array.from({ length: 12 }, (_, index) => (
//                                 <ProductCard key={index} />
//                             ))}
//                         </div>
//                         <Pagination className={'mt-6 text-white'}>
//                             <PaginationContent>
//                                 <PaginationItem>
//                                     <PaginationPrevious href="#" />
//                                 </PaginationItem>
//                                 <PaginationItem>
//                                     <PaginationLink href="#" isActive>1</PaginationLink>
//                                 </PaginationItem>
//                                 <PaginationItem>
//                                     <PaginationLink href="#">2</PaginationLink>
//                                 </PaginationItem>
//                                 <PaginationItem>
//                                     <PaginationLink href="#">3</PaginationLink>
//                                 </PaginationItem>
//                                 <PaginationItem>
//                                     <PaginationNext href="#" />
//                                 </PaginationItem>
//                             </PaginationContent>
//                         </Pagination>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default page




// 'use client'

// import React, { useState } from "react";
// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { 
//     Search, MapPin, Star, Truck, 
//     Phone, Mail, X, ChevronRight, 
//     ArrowUpDown, ClockArrowDown, ArrowDownNarrowWide
// } from "lucide-react";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import ProductCard from "@/components/ProductCard";
// import { 
//     Pagination, 
//     PaginationContent, 
//     PaginationItem, 
//     PaginationLink, 
//     PaginationNext, 
//     PaginationPrevious 
// } from "@/components/ui/pagination";

// // Mock Data for Owners
// const OWNERS_LIST = [
//     {
//         id: 1,
//         name: "Rajesh Construction Co.",
//         location: "Mumbai, Maharashtra",
//         rating: 4.8,
//         reviews: 127,
//         machinesCount: 8,
//         description: "Leading construction equipment rental service with 15+ years of experience. We provide well-maintained machinery with skilled operators.",
//         initial: "R"
//     },
//     {
//         id: 2,
//         name: "Verma Heavy Lift",
//         location: "Delhi, NCR",
//         rating: 4.5,
//         reviews: 84,
//         machinesCount: 5,
//         description: "Specialized in crane rentals and heavy lifting solutions for urban infrastructure projects.",
//         initial: "V"
//     }
// ];

// export default function OwnersPage() {
//     const [selectedOwner, setSelectedOwner] = useState(null);

//     return (
//         <div className="bg-[#1c1c1c] min-h-screen">
//             {/* 1. Industrial Header Banner - Matches Image 2 & 3 style */}
//             <section className="sm:min-h-52 min-h-44 bg-[url('https://images.unsplash.com/photo-1581094288338-2314dddb7903?q=80&w=2070')] bg-cover bg-center bg-no-repeat flex justify-center items-center relative">
//                 <div className="absolute bg-black/60 backdrop-blur-[1px] inset-0"></div>
//                 <div className="h-full w-full flex flex-col justify-center items-center relative z-10 space-y-2">
//                     <h1 className="text-white text-4xl font-bold tracking-tight italic uppercase">
//                         Vendors
                      
//                     </h1>
//                     <Breadcrumb>
//                         <BreadcrumbList>
//                             <BreadcrumbItem>
//                                 <BreadcrumbLink href="/" className="text-gray-400 hover:text-yellow-500">Home</BreadcrumbLink>
//                             </BreadcrumbItem>
//                             <BreadcrumbSeparator />
//                             <BreadcrumbItem>
//                                 <BreadcrumbPage className="text-yellow font-bold  tracking-wider">
//                                  Vendors
//                                 </BreadcrumbPage>
//                             </BreadcrumbItem>
//                         </BreadcrumbList>
//                     </Breadcrumb>
//                 </div>
//             </section>

//             {/* 2. Main content area */}
//             <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                
//                 {!selectedOwner ? (
//                     /* --- VIEW A: DIRECTORY OF OWNERS --- */
//                     <>
//                         <div className="animate-in fade-in duration-500">
//                             <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
//                                 <div>
//                                     <h2 className="text-white text-2xl font-bold italic uppercase tracking-tighter">Partner Directory</h2>
//                                     <p className="text-zinc-500 text-sm">Showing verified equipment partners</p>
//                                 </div>
//                                 <div className="relative w-full md:w-96">
//                                     <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 h-4 w-4" />
//                                     <Input 
//                                         placeholder="Search by company or location..." 
//                                         className="pl-10 bg-neutral-900 border-neutral-800 text-white focus-visible:ring-yellow-500 h-12 rounded-xl"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 {OWNERS_LIST.map((owner) => (
//                                     <div 
//                                         key={owner.id}
//                                         onClick={() => setSelectedOwner(owner)}
//                                         className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-6 hover:border-yellow-500/50 cursor-pointer transition-all group"
//                                     >
//                                         <div className="flex items-start gap-5">
//                                             <div className="h-20 w-20 bg-neutral-800 rounded-2xl flex items-center justify-center text-yellow-500 text-3xl font-black border border-neutral-700 shadow-xl group-hover:scale-105 transition-transform">
//                                                 {owner.initial}
//                                             </div>
//                                             <div className="flex-1">
//                                                 <div className="flex items-center gap-2 mb-1">
//                                                     <h3 className="text-white text-xl font-bold group-hover:text-yellow-500 transition-colors tracking-tight">{owner.name}</h3>
//                                                     <span className="bg-yellow-500/10 text-yellow-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest border border-yellow-500/20">Verified</span>
//                                                 </div>
//                                                 <p className="flex items-center text-zinc-400 text-sm gap-1 mb-4 font-medium">
//                                                     <MapPin size={14} className="text-yellow-500" /> {owner.location}
//                                                 </p>
//                                                 <div className="flex items-center gap-5 text-sm">
//                                                     <div className="flex items-center gap-1 text-yellow-500 font-bold">
//                                                         <Star size={14} fill="currentColor"/> {owner.rating} 
//                                                         <span className="text-zinc-500 font-normal">({owner.reviews})</span>
//                                                     </div>
//                                                     <div className="flex items-center gap-1.5 text-zinc-300 font-bold bg-neutral-800/50 px-2 py-1 rounded-lg">
//                                                         <Truck size={14} className="text-yellow-500"/> {owner.machinesCount} Machines
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="bg-neutral-800 p-2 rounded-full text-zinc-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
//                                                 <ChevronRight size={18} />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </>
//                 ) : (
//                     /* --- VIEW B: OWNER DETAIL & FLEET LISTINGS --- */
//                     <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-10">
//                         {/* Profile Header - Matches Image 1 Layout */}
//                         <div className="bg-[#26262a] border border-zinc-800 rounded-[2rem] p-8 md:p-10 relative shadow-2xl">
//                             <button 
//                                 onClick={() => setSelectedOwner(null)}
//                                 className="absolute top-8 right-8 text-zinc-500 hover:text-white bg-zinc-800 p-2 rounded-full transition-colors"
//                             >
//                                 <X size={20} />
//                             </button>

//                             <div className="flex flex-col md:flex-row gap-10 items-start">
//                                 <div className="h-32 w-32 bg-[#333338] rounded-3xl flex items-center justify-center text-yellow-500 text-5xl font-black border border-zinc-700 shadow-inner">
//                                     {selectedOwner.initial}
//                                 </div>
                                
//                                 <div className="flex-1 space-y-6">
//                                     <div className="flex flex-wrap items-center gap-4">
//                                         <h2 className="text-white text-4xl font-bold tracking-tighter">{selectedOwner.name}</h2>
//                                         <span className="bg-yellow-500/10 text-yellow-500 text-xs px-4 py-1.5 rounded-xl font-bold border border-yellow-500/20 uppercase tracking-widest">Verified</span>
//                                     </div>
                                    
//                                     <div className="flex flex-wrap gap-6 items-center">
//                                         <p className="flex items-center text-zinc-300 gap-2 font-medium">
//                                             <MapPin size={20} className="text-yellow-500" /> {selectedOwner.location}
//                                         </p>
//                                         <div className="flex items-center gap-1 text-yellow-500 font-black text-lg">
//                                             <Star size={20} fill="currentColor" /> {selectedOwner.rating} 
//                                             <span className="text-zinc-500 font-medium text-sm ml-1">({selectedOwner.reviews} reviews)</span>
//                                         </div>
//                                         <div className="flex items-center gap-2 text-zinc-100 font-bold bg-zinc-700/30 px-4 py-1.5 rounded-xl">
//                                             <Truck size={20} className="text-yellow-500" /> {selectedOwner.machinesCount} machines listed
//                                         </div>
//                                     </div>

//                                     <p className="text-zinc-400 max-w-3xl text-base leading-relaxed font-medium">
//                                         {selectedOwner.description}
//                                     </p>

//                                     <div className="flex gap-4 pt-4">
//                                         <Button className="bg-[#3b3b41] hover:bg-yellow-500 hover:text-black text-white rounded-2xl px-8 h-14 gap-3 text-lg font-bold transition-all shadow-lg border-none">
//                                             <Phone size={20} /> Call Now
//                                         </Button>
//                                         <Button className="bg-[#3b3b41] hover:bg-yellow-500 hover:text-black text-white rounded-2xl px-8 h-14 gap-3 text-lg font-bold transition-all shadow-lg border-none">
//                                             <Mail size={20} /> Email
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Fleet Section - Matches Image 1 "Available Machinery" */}
//                         <div className="space-y-8">
//                             <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-neutral-800 pb-6">
//                                 <div className="flex items-center gap-3">
//                                     <Truck className="text-yellow-500 h-8 w-8" />
//                                     <h3 className="text-white text-3xl font-black italic uppercase tracking-widest">Available Machinery</h3>
//                                 </div>

//                                 <div className="flex gap-3 w-full sm:w-auto">
//                                     <Input placeholder="Search this fleet..." className="bg-neutral-900 border-neutral-800 text-white h-11 w-full sm:w-64" />
//                                     <DropdownMenu modal={false}>
//                                         <DropdownMenuTrigger asChild>
//                                             <Button variant="outline" className="border-neutral-700 h-11 bg-neutral-900 text-zinc-400 hover:bg-neutral-800">
//                                                 <ArrowUpDown className="w-4 h-4 mr-2" /> Sort
//                                             </Button>
//                                         </DropdownMenuTrigger>
//                                         <DropdownMenuContent align="end" className="bg-neutral-900 border-neutral-800 text-white">
//                                             <DropdownMenuItem className="focus:bg-yellow-500 focus:text-black"><ClockArrowDown className="w-4 h-4 mr-2" /> Newest</DropdownMenuItem>
//                                             <DropdownMenuItem className="focus:bg-yellow-500 focus:text-black"><ArrowDownNarrowWide className="w-4 h-4 mr-2" /> Price: Low-High</DropdownMenuItem>
//                                         </DropdownMenuContent>
//                                     </DropdownMenu>
//                                 </div>
//                             </div>
                            
//                             <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
//                                 {Array.from({ length: selectedOwner.machinesCount }).map((_, index) => (
//                                     <ProductCard key={index} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Pagination Section - Matches Image 2 & 3 */}
//                 <div className="mt-16 flex justify-center">
//                     <Pagination className="text-white">
//                         <PaginationContent>
//                             <PaginationItem>
//                                 <PaginationPrevious href="#" className="hover:bg-yellow-500 hover:text-black border-neutral-800" />
//                             </PaginationItem>
//                             <PaginationItem>
//                                 <PaginationLink href="#" isActive className="bg-yellow-500 text-black font-bold border-yellow-500">1</PaginationLink>
//                             </PaginationItem>
//                             <PaginationItem>
//                                 <PaginationLink href="#" className="border-neutral-800 hover:bg-neutral-800">2</PaginationLink>
//                             </PaginationItem>
//                             <PaginationItem>
//                                 <PaginationLink href="#" className="border-neutral-800 hover:bg-neutral-800">3</PaginationLink>
//                             </PaginationItem>
//                             <PaginationItem>
//                                 <PaginationNext href="#" className="hover:bg-yellow-500 hover:text-black border-neutral-800" />
//                             </PaginationItem>
//                         </PaginationContent>
//                     </Pagination>
//                 </div>
//             </section>
//         </div>
//     );
// }





// 'use client'

// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Input } from "@/components/ui/input";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"
// import { Button } from "@/components/ui/button"
// import { ArrowDownAZ, ArrowDownNarrowWide, ArrowDownWideNarrow, ArrowUpAZ, ArrowUpDown, ClockArrowDown, ClockArrowUp, SlidersHorizontal, X } from "lucide-react"
// import ProductCard from "@/components/OwnerCard";
// import { Slider } from "@/components/ui/slider";
// import { useState } from "react";
// import OwnerCard from "@/components/OwnerCard";

// // export const metadata = {
// //     title: 'Listings',
// //     description: 'Generated by create next app',
// // }

// function page() {
//     const [priceRange, setPriceRange] = useState([0, 100]);

//     return (
//         <>
//             <section className="sm:min-h-48 min-h-40 bg-[url('/images/listing-bg.jpg')] bg-cover bg-center bg-no-repeat flex justify-center
//             items-center relative">
//                 <div className="absolute bg-yellow-500/20 backdrop-blur-[2px] inset-0"></div>
//                 <div className="h-full w-full flex flex-col justify-center items-center relative z-10 space-y-2">
//                     <h1 className="text-white text-3xl font-semibold">Vendors</h1>
//                     <Breadcrumb>
//                         <BreadcrumbList>
//                             <BreadcrumbItem>
//                                 <BreadcrumbLink href="/" className={'text-gray-400 hover:text-yellowClr'}>Home</BreadcrumbLink>
//                             </BreadcrumbItem>
//                             <BreadcrumbSeparator />
//                             <BreadcrumbItem>
//                                 <BreadcrumbPage className={'text-gray-300'}>Vendors</BreadcrumbPage>
//                             </BreadcrumbItem>
//                         </BreadcrumbList>
//                     </Breadcrumb>
//                 </div>
//             </section>
//             <section className="bg-neutral-800 md:px-6 px-4">
//                 <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-4 gap-2">
//                     <div className="md:block hidden h-fit top-16 sticky border-r border-neutral-700 py-6 pe-4">
//                         <div className="flex justify-between items-start mb-2">
//                             <p className="text-yellowClr font-medium">FILTERS</p>
//                             <Button variant={'outline'} className="text-xs h-7 px-2 gap-1"><X className="h-4" /> Clear</Button>
//                         </div>
//                         <div>
//                             <div className="border-b border-neutral-700 py-2 text-white">
//                                 <p className="font-semibold text-sm">Price Range</p>
//                                 <div className="space-y-4 mb-2">
//                                     <div>
//                                         <output className="w-full text-sm font-medium tabular-nums flex justify-between">
//                                             <span>₹{priceRange[0]}</span>
//                                             <span>₹{priceRange[1]}</span>
//                                         </output>
//                                     </div>
//                                     <Slider
//                                         value={priceRange}
//                                         min={21}
//                                         max={100}
//                                         onValueChange={setPriceRange}
//                                         onValueCommit={(val) => {
//                                             const [min, max] = val
//                                             const params = new URLSearchParams(searchParams.toString())
//                                             params.set('minAge', min)
//                                             params.set('maxAge', max)
//                                             router.replace(`/matrimony-profiles?${params.toString()}`, {
//                                                 scroll: false,
//                                             })
//                                         }}
//                                         aria-label="Dual range slider for Age"
//                                     />
//                                 </div>
//                             </div>
//                             <Accordion
//                                 type="single"
//                                 collapsible
//                                 className="w-full border-b border-neutral-700"
//                             >
//                                 <AccordionItem value="item-1">
//                                     <AccordionTrigger className={'text-white! font-semibold'}>Category</AccordionTrigger>
//                                     <AccordionContent className="flex flex-col gap-3 text-balance text-white!">
//                                         <div className="flex items-center gap-2">
//                                             <Checkbox id="bulldozer" />
//                                             <Label htmlFor="bulldozer">Bulldozer</Label>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <Checkbox id="crane" />
//                                             <Label htmlFor="crane">Crane</Label>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <Checkbox id="trucks" />
//                                             <Label htmlFor="trucks">Trucks</Label>
//                                         </div>
//                                     </AccordionContent>
//                                 </AccordionItem>
//                             </Accordion>
//                             <div className="py-2 text-white">
//                                 <p className="font-semibold text-sm">Distance</p>
//                                 <div className="space-y-4 mb-2">
//                                     <div>
//                                         <output className="w-full text-sm font-medium tabular-nums flex justify-between">
//                                             <span>{priceRange[0]}<span className="text-xs">km</span></span>
//                                             <span>{priceRange[1]}<span className="text-xs">km</span></span>
//                                         </output>
//                                     </div>
//                                     <Slider
//                                         value={priceRange}
//                                         min={21}
//                                         max={100}
//                                         onValueChange={setPriceRange}
//                                         onValueCommit={(val) => {
//                                             const [min, max] = val
//                                             const params = new URLSearchParams(searchParams.toString())
//                                             params.set('minAge', min)
//                                             params.set('maxAge', max)
//                                             router.replace(`/matrimony-profiles?${params.toString()}`, {
//                                                 scroll: false,
//                                             })
//                                         }}
//                                         aria-label="Dual range slider for Age"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="lg:col-span-4 md:col-span-3 py-6">
//                         <div className="bg-neutral-800 pb-4 flex sm:flex-row flex-col justify-between sm:items-start gap-2 md:static sticky top-[72px]">
//                             <div>
//                                 <p className="text-white text-xl font-semibold">All Owners</p>
//                                 <p className="text-sm text-gray-400">Showing 10 of 1,000 Owners</p>
//                             </div>
//                             <div className="flex gap-2">
//                                 <Input type="text" className={'bg-white focus-visible:ring-0 focus-visible:border-yellowClr'} placeholder="Search" />
//                                 <DropdownMenu modal={false}>
//                                     <DropdownMenuTrigger asChild>
//                                         <Button className="gap-2">
//                                             <ArrowUpDown className="w-4 h-4" />
//                                             <span className="sm:inline hidden">Sort by</span>
//                                         </Button>
//                                     </DropdownMenuTrigger>

//                                     <DropdownMenuContent align="end" className="w-48">

//                                         <DropdownMenuItem >
//                                             <ClockArrowDown className="w-4 h-4" />
//                                             Newest to Oldest
//                                         </DropdownMenuItem>

//                                         <DropdownMenuItem >
//                                             <ClockArrowUp className="w-4 h-4" />
//                                             Oldest to Newest
//                                         </DropdownMenuItem>

//                                         <DropdownMenuSeparator />

//                                         <DropdownMenuItem>
//                                             <ArrowDownNarrowWide className="w-4 h-4" />
//                                             Price: Low to High
//                                         </DropdownMenuItem>

//                                         <DropdownMenuItem>
//                                             <ArrowDownWideNarrow className="w-4 h-4" />
//                                             Price: High to Low
//                                         </DropdownMenuItem>

//                                         <DropdownMenuSeparator />

//                                         <DropdownMenuItem >
//                                             <ArrowDownAZ className="w-4 h-4" />
//                                             Name: A to Z
//                                         </DropdownMenuItem>

//                                         <DropdownMenuItem >
//                                             <ArrowUpAZ className="w-4 h-4" />
//                                             Name: Z to A
//                                         </DropdownMenuItem>
//                                     </DropdownMenuContent>
//                                 </DropdownMenu>
//                             </div>
//                         </div>
//                         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-2">
//                             {Array.from({ length: 12 }, (_, index) => (
//                                 <OwnerCard key={index} />
//                             ))}

//                         </div>






//                                        ) : (
//                     /* --- VIEW B: OWNER DETAIL & FLEET LISTINGS --- */
//                     <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-10">
//                         {/* Profile Header - Matches Image 1 Layout */}
//                         <div className="bg-[#26262a] border border-zinc-800 rounded-[2rem] p-8 md:p-10 relative shadow-2xl">
//                             <button 
//                                 onClick={() => setSelectedOwner(null)}
//                                 className="absolute top-8 right-8 text-zinc-500 hover:text-white bg-zinc-800 p-2 rounded-full transition-colors"
//                             >
//                                 <X size={20} />
//                             </button>

//                             <div className="flex flex-col md:flex-row gap-10 items-start">
//                                 <div className="h-32 w-32 bg-[#333338] rounded-3xl flex items-center justify-center text-yellow-500 text-5xl font-black border border-zinc-700 shadow-inner">
//                                     {selectedOwner.initial}
//                                 </div>
                                
//                                 <div className="flex-1 space-y-6">
//                                     <div className="flex flex-wrap items-center gap-4">
//                                         <h2 className="text-white text-4xl font-bold tracking-tighter">{selectedOwner.name}</h2>
//                                         <span className="bg-yellow-500/10 text-yellow-500 text-xs px-4 py-1.5 rounded-xl font-bold border border-yellow-500/20 uppercase tracking-widest">Verified</span>
//                                     </div>
                                    
//                                     <div className="flex flex-wrap gap-6 items-center">
//                                         <p className="flex items-center text-zinc-300 gap-2 font-medium">
//                                             <MapPin size={20} className="text-yellow-500" /> {selectedOwner.location}
//                                         </p>
//                                         <div className="flex items-center gap-1 text-yellow-500 font-black text-lg">
//                                             <Star size={20} fill="currentColor" /> {selectedOwner.rating} 
//                                             <span className="text-zinc-500 font-medium text-sm ml-1">({selectedOwner.reviews} reviews)</span>
//                                         </div>
//                                         <div className="flex items-center gap-2 text-zinc-100 font-bold bg-zinc-700/30 px-4 py-1.5 rounded-xl">
//                                             <Truck size={20} className="text-yellow-500" /> {selectedOwner.machinesCount} machines listed
//                                         </div>
//                                     </div>

//                                     <p className="text-zinc-400 max-w-3xl text-base leading-relaxed font-medium">
//                                         {selectedOwner.description}
//                                     </p>

//                                     <div className="flex gap-4 pt-4">
//                                         <Button className="bg-[#3b3b41] hover:bg-yellow-500 hover:text-black text-white rounded-2xl px-8 h-14 gap-3 text-lg font-bold transition-all shadow-lg border-none">
//                                             <Phone size={20} /> Call Now
//                                         </Button>
//                                         <Button className="bg-[#3b3b41] hover:bg-yellow-500 hover:text-black text-white rounded-2xl px-8 h-14 gap-3 text-lg font-bold transition-all shadow-lg border-none">
//                                             <Mail size={20} /> Email
//                                         </Button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Fleet Section - Matches Image 1 "Available Machinery" */}
//                         <div className="space-y-8">
//                             <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-neutral-800 pb-6">
//                                 <div className="flex items-center gap-3">
//                                     <Truck className="text-yellow-500 h-8 w-8" />
//                                     <h3 className="text-white text-3xl font-black italic uppercase tracking-widest">Available Machinery</h3>
//                                 </div>

//                                 <div className="flex gap-3 w-full sm:w-auto">
//                                     <Input placeholder="Search this fleet..." className="bg-neutral-900 border-neutral-800 text-white h-11 w-full sm:w-64" />
//                                     <DropdownMenu modal={false}>
//                                         <DropdownMenuTrigger asChild>
//                                             <Button variant="outline" className="border-neutral-700 h-11 bg-neutral-900 text-zinc-400 hover:bg-neutral-800">
//                                                 <ArrowUpDown className="w-4 h-4 mr-2" /> Sort
//                                             </Button>
//                                         </DropdownMenuTrigger>
//                                         <DropdownMenuContent align="end" className="bg-neutral-900 border-neutral-800 text-white">
//                                             <DropdownMenuItem className="focus:bg-yellow-500 focus:text-black"><ClockArrowDown className="w-4 h-4 mr-2" /> Newest</DropdownMenuItem>
//                                             <DropdownMenuItem className="focus:bg-yellow-500 focus:text-black"><ArrowDownNarrowWide className="w-4 h-4 mr-2" /> Price: Low-High</DropdownMenuItem>
//                                         </DropdownMenuContent>
//                                     </DropdownMenu>
//                                 </div>
//                             </div>
                            
//                             <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
//                                 {Array.from({ length: selectedOwner.machinesCount }).map((_, index) => (
//                                     <ProductCard key={index} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
                


                        
//                         <Pagination className={'mt-6 text-white'}>
//                             <PaginationContent>
//                                 <PaginationItem>
//                                     <PaginationPrevious href="#" />
//                                 </PaginationItem>
//                                 <PaginationItem>
//                                     <PaginationLink href="#" isActive>1</PaginationLink>
//                                 </PaginationItem>
//                                 <PaginationItem>
//                                     <PaginationLink href="#">2</PaginationLink>
//                                 </PaginationItem>
//                                 <PaginationItem>
//                                     <PaginationLink href="#">3</PaginationLink>
//                                 </PaginationItem>
//                                 <PaginationItem>
//                                     <PaginationNext href="#" />
//                                 </PaginationItem>
//                             </PaginationContent>
//                         </Pagination>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default page














// 'use client'

// import {
//     Breadcrumb,
//     BreadcrumbItem,
//     BreadcrumbLink,
//     BreadcrumbList,
//     BreadcrumbPage,
//     BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
// import { Input } from "@/components/ui/input";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//     Pagination,
//     PaginationContent,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"
// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"
// import { Button } from "@/components/ui/button"
// import { 
//     ArrowDownAZ, ArrowDownNarrowWide, ArrowDownWideNarrow, ArrowUpAZ, ArrowUpDown, 
//     ClockArrowDown, ClockArrowUp, X, MapPin, Star, Truck, Phone, Mail 
// } from "lucide-react"
// import { Slider } from "@/components/ui/slider";
// import { useState } from "react";
// import OwnerCard from "@/components/OwnerCard";
// import ProductCard from "@/components/OwnerCard"; // Assuming these are similar

// function Page() {
//     const [priceRange, setPriceRange] = useState([0, 100]);
//     // 1. Added the missing state
//     const [selectedOwner, setSelectedOwner] = useState(null);

//     // Mock function to simulate selecting an owner (you can call this from OwnerCard)
//     const handleSelectOwner = () => {
//         setSelectedOwner({
//             name: "Rajesh Construction Co.",
//             initial: "M",
//             location: "Mumbai, Maharashtra",
//             rating: 4.8,
//             reviews: 124,
//             machinesCount: 8,
//             description: "Leading provider of logistics and heavy machinery solutions across India."
//         });
//     };

//     return (
//         <>
//             <section className="sm:min-h-48 min-h-40 bg-[url('/images/listing-bg.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center relative">
//                 <div className="absolute bg-yellow-500/20 backdrop-blur-[2px] inset-0"></div>
//                 <div className="h-full w-full flex flex-col justify-center items-center relative z-10 space-y-2">
//                     <h1 className="text-white text-3xl font-semibold">Vendors</h1>
//                     <Breadcrumb>
//                         <BreadcrumbList>
//                             <BreadcrumbItem>
//                                 <BreadcrumbLink href="/" className={'text-gray-400 hover:text-yellowClr'}>Home</BreadcrumbLink>
//                             </BreadcrumbItem>
//                             <BreadcrumbSeparator />
//                             <BreadcrumbItem>
//                                 <BreadcrumbPage className={'text-gray-300'}>Vendors</BreadcrumbPage>
//                             </BreadcrumbItem>
//                         </BreadcrumbList>
//                     </Breadcrumb>
//                 </div>
//             </section>

//             <section className="bg-neutral-800 md:px-6 px-4 min-h-screen">
//                 <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:gap-4 gap-2">
                    
//                     {/* LEFT SIDEBAR: Only show if no owner is selected */}
//                     {!selectedOwner && (
//                         <div className="md:block hidden h-fit top-16 sticky border-r border-neutral-700 py-6 pe-4">
//                             <div className="flex justify-between items-start mb-2">
//                                 <p className="text-yellow-500 font-medium">FILTERS</p>
//                                 <Button variant={'outline'} className="text-xs h-7 px-2 gap-1"><X className="h-4" /> Clear</Button>
//                             </div>
//                             <div className="border-b border-neutral-700 py-2 text-white">
//                                 <p className="font-semibold text-sm">Price Range</p>
//                                 <div className="space-y-4 mb-2">
//                                     <output className="w-full text-sm font-medium tabular-nums flex justify-between">
//                                         <span>₹{priceRange[0]}</span>
//                                         <span>₹{priceRange[1]}</span>
//                                     </output>
//                                     <Slider
//                                         value={priceRange}
//                                         min={0}
//                                         max={100}
//                                         onValueChange={setPriceRange}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     <div className={`${selectedOwner ? 'lg:col-span-5 md:col-span-4' : 'lg:col-span-4 md:col-span-3'} py-6`}>
                        
//                         {!selectedOwner ? (
//                             /* --- VIEW A: LIST OF OWNERS --- */
//                             <div className="space-y-6">
//                                 <div className="bg-neutral-800 pb-4 flex sm:flex-row flex-col justify-between sm:items-start gap-2 md:static sticky top-[72px] z-20">
//                                     <div>
//                                         <p className="text-white text-xl font-semibold">All Owners</p>
//                                         <p className="text-sm text-gray-400">Showing 12 Owners</p>
//                                     </div>
//                                     <div className="flex gap-2">
//                                         <Input type="text" className={'bg-white'} placeholder="Search" />
//                                         {/* <Button onClick={handleSelectOwner}>Sort by</Button> */}<Button  className="gap-2">
//                                              <ArrowUpDown className="w-4 h-4" />
//                                              <span className="sm:inline hidden">Sort by</span>
//                                          </Button>
//                                     </div>
//                                 </div>
//                                 <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 gap-2">
//                                     {Array.from({ length: 12 }).map((_, index) => (
//                                         <div key={index} onClick={handleSelectOwner} className="cursor-pointer">
//                                             <OwnerCard />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ) : (
//                             /* --- VIEW B: OWNER DETAIL --- */
//                             <div className="animate-in slide-in-from-bottom-4 duration-500 space-y-10">
//                                 <div className="bg-[#26262a] border-2 border-yellow-500 rounded-[2rem] p-8 md:p-10 relative shadow-2xl">
//                                     <button 
//                                         onClick={() => setSelectedOwner(null)}
//                                         className="absolute top-8 right-8 text-zinc-500 hover:text-white bg-zinc-800 p-2 rounded-full transition-colors"
//                                     >
//                                         <X size={20} />
//                                     </button>

//                                     <div className="flex flex-col md:flex-row gap-10 items-start">
//                                         <div className="h-32 w-32 bg-[#333338] rounded-3xl flex items-center justify-center text-yellow-500 text-5xl font-black border border-zinc-700">
//                                             {selectedOwner.initial}
//                                         </div>
                                        
//                                         <div className="flex-1 space-y-6">
//                                             <div className="flex flex-wrap items-center gap-4">
//                                                 <h2 className="text-white text-4xl font-bold tracking-tighter">{selectedOwner.name}</h2>
//                                                 <span className="bg-yellow-500/10 text-yellow-500 text-xs px-4 py-1.5 rounded-xl font-bold border border-yellow-500/20 uppercase tracking-widest">Verified</span>
//                                             </div>
                                            
//                                             <div className="flex flex-wrap gap-6 items-center">
//                                                 <p className="flex items-center text-zinc-300 gap-2 font-medium">
//                                                     <MapPin size={20} className="text-yellow-500" /> {selectedOwner.location}
//                                                 </p>
//                                                 <div className="flex items-center gap-1 text-yellow-500 font-black text-lg">
//                                                     <Star size={20} fill="currentColor" /> {selectedOwner.rating} 
//                                                     <span className="text-zinc-500 font-medium text-sm ml-1">({selectedOwner.reviews} reviews)</span>
//                                                 </div>
//                                             </div>

//                                             <p className="text-zinc-400 max-w-3xl text-base leading-relaxed">
//                                                 {selectedOwner.description}
//                                             </p>

//                                             <div className="flex gap-4 pt-4">
//                                                 <Button className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-2xl px-8 h-14 gap-3 text-lg font-bold">
//                                                     <Phone size={20} /> Call Now
//                                                 </Button>
//                                                 <Button variant="outline" className="border-zinc-700 text-white rounded-2xl px-8 h-14 gap-3 text-lg font-bold">
//                                                     <Mail size={20} /> Email
//                                                 </Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="space-y-8">
//                                     {/* <div className="flex items-center gap-3 border-b border-neutral-800 pb-6">
//                                         <Truck className="text-yellow-500 h-8 w-8" />
//                                         <h3 className="text-white text-3xl font-black  tracking-widest">Listed Machinery and Equipment</h3>
//                                         <p className="text-sm text-gray-400">Showing 12 Owners</p>
//                                     </div> */}
// <div className="bg-neutral-800 pb-4 flex sm:flex-row flex-col justify-between sm:items-center gap-4 md:static sticky top-[72px] z-20">
  
//   {/* LEFT: Icon + Text */}
//   <div className="flex items-center gap-3">
//     <Truck className="text-yellow-500 h-8 w-8" />

//     <div>
//       <p className="text-white text-2xl font-semibold">
//         All Machinery and Equipments
//       </p>
//       <p className="text-sm text-gray-400">
//         Showing 10 of 1,000 listings
//       </p>
//     </div>
//   </div>

//   {/* RIGHT: Search + Sort */}
//   <div className="flex gap-2">
//     <Input
//       type="text"
//       className="bg-white"
//       placeholder="Search"
//     />

//     <Button className="gap-2">
//       <ArrowUpDown className="w-4 h-4" />
//       <span className="sm:inline hidden">Sort by</span>
//     </Button>
//   </div>
// </div>

//                                     <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
//                                         {Array.from({ length: selectedOwner.machinesCount }).map((_, index) => (
//                                             <ProductCard key={index} />
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         {!selectedOwner && (
//                             <Pagination className={'mt-6 text-white'}>
//                                 <PaginationContent>
//                                     <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
//                                     <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
//                                     <PaginationItem><PaginationNext href="#" /></PaginationItem>
//                                 </PaginationContent>
//                             </Pagination>
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Page;






'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  ArrowUpDown,
  X,
  MapPin,
  Star,
  Truck,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import OwnerCard from "@/components/OwnerCard"
import ProductCard from "@/components/ProductCard"

const MACHINES_PER_PAGE = 8

export default function Page() {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedOwner, setSelectedOwner] = useState(null)
  const [machinePage, setMachinePage] = useState(1)

  const handleSelectOwner = () => {
    setSelectedOwner({
      name: "Rajesh Construction Co.",
    //   initial: "R",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      reviews: 124,
      machinesCount: 23,
      description:
        "Leading provider of heavy machinery and logistics solutions across India.",
    })
    setMachinePage(1)
  }

  const totalMachines = selectedOwner?.machinesCount || 0
  const totalPages = Math.ceil(totalMachines / MACHINES_PER_PAGE)
  const startIndex = (machinePage - 1) * MACHINES_PER_PAGE

  return (
    <>
      {/* HEADER */}
      <section className="sm:min-h-48 min-h-40 bg-[url('/images/listing-bg.jpg')] bg-cover bg-center flex items-center justify-center relative">
        <div className="absolute inset-0 bg-yellow-500/20 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center space-y-2">
          <h1 className="text-white text-3xl font-semibold">Vendors</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-400">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-300">
                  Vendors
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-neutral-800 min-h-screen px-6">
        <div className="grid lg:grid-cols-5 gap-6">

          {/* FILTERS */}
          {!selectedOwner && (
            <aside className="hidden md:block border-r border-neutral-700 py-6 pr-4 sticky top-16 h-fit">
              <p className="text-yellow-500 font-medium mb-4">FILTERS</p>
              <p className="text-white text-sm font-semibold mb-2">Price Range</p>
              <Slider
                value={priceRange}
                min={0}
                max={100}
                onValueChange={setPriceRange}
              />
            </aside>
          )}

          {/* MAIN CONTENT */}
          <div className={selectedOwner ? "lg:col-span-5" : "lg:col-span-4"}>

            {/* OWNER LIST */}
            {!selectedOwner && (
              <>
                <div className="flex justify-between items-center py-6">
                  <div>
                    <p className="text-white text-xl font-semibold">All Owners</p>
                    <p className="text-gray-400 text-sm">Showing 12 Owners</p>
                  </div>
                  <div className="flex gap-2">
                    <Input className="bg-white" placeholder="Search" />
                    <Button className="gap-2">
                      <ArrowUpDown className="h-4 w-4" />
                      Sort by
                    </Button>
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} onClick={handleSelectOwner} className="cursor-pointer">
                      <OwnerCard />
                    </div>
                  ))}
                </div>

                <Pagination className="mt-7 text-white mb-7">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                                                        <PaginationLink href="#">2</PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">3</PaginationLink>
                                                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </>
            )}

            {/* OWNER DETAILS */}
            {selectedOwner && (
              <div className="space-y-10 py-6 animate-in slide-in-from-bottom-4">

                {/* OWNER HEADER */}
                <div className="bg-[#26262a] border border-yellow-500 rounded-3xl p-8 relative">
                  <button
                    onClick={() => setSelectedOwner(null)}
                    className="absolute top-6 right-6 bg-zinc-800 p-2 rounded-full text-zinc-400 hover:text-white"
                  >
                    <X />
                  </button>

                  <div className="flex gap-8">
                    <div className="">
                      {/* {selectedOwner.initial} */}
                       <Image src="/images/default-avatar.jpg" width={200} height={200} className="w-30 h-30 border-2 border-yellowClr rounded-full object-cover" alt="vehicle" />
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-white text-4xl font-bold">
                        {selectedOwner.name}
                      </h2>

                      <p className="flex items-center gap-2 text-zinc-300">
                        <MapPin className="text-yellow-500" />
                        {selectedOwner.location}
                      </p>

                      <p className="flex items-center gap-2 text-yellow-500 font-bold">
                        <Star fill="currentColor" />
                        {selectedOwner.rating}
                        <span className="text-zinc-400 font-normal">
                          ({selectedOwner.reviews} reviews)
                        </span>
                      </p>

                      <p className="text-zinc-400 max-w-2xl">
                        {selectedOwner.description}
                      </p>

                      <div className="flex gap-4 pt-4">
                        <Button className="bg-yellow-500 text-black gap-2">
                          <Phone /> Call
                        </Button>
                        <Button variant="outline" className="gap-2 text-white">
                          <Mail /> Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* MACHINERY LIST */}
                {/* <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Truck className="text-yellow-500 h-7 w-7" />
                    <div>
                      <p className="text-white text-2xl font-semibold">
                        Machinery & Equipment
                      </p>
                      <p className="text-gray-400 text-sm">
                        Showing {totalMachines} items
                      </p>
                    </div>
                  </div>
                </div>
 */}



<div className="bg-neutral-800 pb-4 flex sm:flex-row flex-col justify-between sm:items-center gap-4 md:static sticky top-[72px] z-20">
  
  {/* LEFT: Icon + Text */}
  <div className="flex items-center gap-3">
    <Truck className="text-yellow-500 h-8 w-8" />

    <div>
      <p className="text-white text-2xl font-semibold">
        All Machinery and Equipments
      </p>
      <p className="text-sm text-gray-400">
        Showing 10 of 1,000 listings
      </p>
    </div>
  </div>

  {/* RIGHT: Search + Sort */}
  <div className="flex gap-2">
    <Input
      type="text"
      className="bg-white"
      placeholder="Search"
    />

    <Button className="gap-2">
      <ArrowUpDown className="w-4 h-4" />
      <span className="sm:inline hidden">Sort by</span>
    </Button>
  </div>
</div>



                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
                  {Array.from({
                    length: Math.min(
                      MACHINES_PER_PAGE,
                      totalMachines - startIndex
                    ),
                  }).map((_, i) => (
                    <ProductCard key={startIndex + i} />
                  ))}
                </div>

                {/* MACHINERY PAGINATION */}
                {totalPages > 1 && (
                  <Pagination className="mt-6 text-white">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            setMachinePage((p) => Math.max(1, p - 1))
                          }}
                        />
                      </PaginationItem>

                      {Array.from({ length: totalPages }).map((_, i) => (
                        <PaginationItem key={i}>
                          <PaginationLink
                            href="#"
                            isActive={machinePage === i + 1}
                            onClick={(e) => {
                              e.preventDefault()
                              setMachinePage(i + 1)
                            }}
                          >
                            {i + 1}
                          </PaginationLink>
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault()
                            setMachinePage((p) =>
                              Math.min(totalPages, p + 1)
                            )
                          }}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}






