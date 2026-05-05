// // app/booking/page.jsx
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import {
//   ShoppingCart,
//   Calendar,
//   Clock,
//   Truck,
//   Trash2,
//   Edit,
//   CheckCircle,
//   AlertCircle,
//   CreditCard,
//   MapPin,
//   Fuel,
//   Wrench,
//   DollarSign,
//   Tag,
//   User,
//   Phone,
//   Mail,
//   MessageSquare,
// } from "lucide-react";

// export const metadata = {
//   title: "My Bookings | EK CORS Rental Cart",
//   description: "View and manage your equipment rental bookings, track orders, and proceed to checkout.",
// };

// export default function BookingPage() {
//   // Mock booking data (cart items)
//   const bookings = [
//     {
//       id: "BKG-1001",
//       equipment: "Excavator CAT 330",
//       image: "https://placehold.co/400x300?text=Excavator",
//       quantity: 1,
//       dailyRate: 450,
//       startDate: "2026-05-10",
//       endDate: "2026-05-17",
//       status: "Confirmed",
//       deliveryRequired: true,
//       location: "North Zone A",
//       fuelPolicy: "Full to Full",
//     },
//     {
//       id: "BKG-1002",
//       equipment: "Wheel Loader L220",
//       image: "https://placehold.co/400x300?text=Loader",
//       quantity: 2,
//       dailyRate: 320,
//       startDate: "2026-05-12",
//       endDate: "2026-05-19",
//       status: "Pending",
//       deliveryRequired: true,
//       location: "Material Yard",
//       fuelPolicy: "Return with same level",
//     },
//     {
//       id: "BKG-1003",
//       equipment: "Haul Truck 45T",
//       image: "https://placehold.co/400x300?text=Truck",
//       quantity: 1,
//       dailyRate: 620,
//       startDate: "2026-05-15",
//       endDate: "2026-05-22",
//       status: "Draft",
//       deliveryRequired: false,
//       location: "Pickup from depot",
//       fuelPolicy: "Full to Full",
//     },
//   ];

//   // Calculate totals
//   const subtotal = bookings.reduce((sum, item) => {
//     const days = Math.ceil((new Date(item.endDate) - new Date(item.startDate)) / (1000 * 60 * 60 * 24));
//     return sum + (item.dailyRate * item.quantity * days);
//   }, 0);
//   const deliveryFee = bookings.some(b => b.deliveryRequired) ? 150 : 0;
//   const tax = subtotal * 0.1; // 10% tax
//   const total = subtotal + deliveryFee + tax;

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="sm:min-h-48 min-h-40 bg-[url('/images/about-hero.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center relative">
//         <div className="absolute bg-yellow-500/20 backdrop-blur-[2px] inset-0"></div>
//         <div className="h-full w-full flex flex-col justify-center items-center relative z-10 space-y-2">
//           <h1 className="text-white text-3xl font-semibold">My Bookings</h1>
//           <Breadcrumb>
//             <BreadcrumbList>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/" className="text-gray-400 hover:text-yellowClr">Home</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbPage className="text-gray-300">Bookings</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="bg-neutral-900">
//         <div className="container mx-auto px-4 py-8 md:py-12">
          
//           {/* Page Header */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
//                 <ShoppingCart className="h-7 w-7 text-yellowClr" />
//                 Your Rental Cart
//               </h2>
//               <p className="text-gray-400 mt-1">{bookings.length} item(s) in your booking cart</p>
//             </div>
//             <button className="bg-yellowClr text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellowClr/90 transition flex items-center gap-2">
//               <CreditCard className="h-4 w-4" />
//               Proceed to Checkout
//             </button>
//           </div>

//           {/* Bookings List - Cart Style */}
//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Left Column: Cart Items */}
//             <div className="lg:col-span-2 space-y-6">
//               {bookings.map((booking) => {
//                 const start = new Date(booking.startDate);
//                 const end = new Date(booking.endDate);
//                 const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
//                 const itemTotal = booking.dailyRate * booking.quantity * days;

//                 return (
//                   <div key={booking.id} className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden hover:border-yellowClr/30 transition-all">
//                     <div className="flex flex-col sm:flex-row">
//                       {/* Equipment Image */}
//                       <div className="sm:w-32 h-32 bg-neutral-700 relative">
//                         <img src={booking.image} alt={booking.equipment} className="w-full h-full object-cover" />
//                       </div>
//                       {/* Details */}
//                       <div className="flex-1 p-4">
//                         <div className="flex flex-wrap justify-between items-start gap-2">
//                           <div>
//                             <div className="flex items-center gap-2 flex-wrap">
//                               <h3 className="text-white font-bold text-lg">{booking.equipment}</h3>
//                               <span className={`text-xs px-2 py-0.5 rounded-full ${
//                                 booking.status === "Confirmed" ? "bg-green-500/20 text-green-300" :
//                                 booking.status === "Pending" ? "bg-yellow-500/20 text-yellow-300" :
//                                 "bg-gray-500/20 text-gray-300"
//                               }`}>{booking.status}</span>
//                             </div>
//                             <p className="text-gray-400 text-sm mt-1">Booking ID: {booking.id}</p>
//                           </div>
//                           <div className="flex gap-2">
//                             <button className="p-1.5 bg-neutral-700 rounded-lg hover:bg-yellowClr/20 transition">
//                               <Edit className="h-4 w-4 text-gray-300 hover:text-yellowClr" />
//                             </button>
//                             <button className="p-1.5 bg-neutral-700 rounded-lg hover:bg-red-500/20 transition">
//                               <Trash2 className="h-4 w-4 text-gray-300 hover:text-red-400" />
//                             </button>
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-sm">
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <Calendar className="h-4 w-4 text-yellowClr" />
//                             <span>{start.toLocaleDateString()} → {end.toLocaleDateString()}</span>
//                             <span className="text-gray-500">({days} days)</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <Truck className="h-4 w-4 text-yellowClr" />
//                             <span>{booking.deliveryRequired ? "Delivery required" : "Customer pickup"}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <Fuel className="h-4 w-4 text-yellowClr" />
//                             <span>{booking.fuelPolicy}</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <MapPin className="h-4 w-4 text-yellowClr" />
//                             <span>{booking.location}</span>
//                           </div>
//                         </div>

//                         <div className="flex justify-between items-center mt-3 pt-2 border-t border-neutral-700">
//                           <div className="flex items-center gap-2">
//                             <span className="text-gray-400">Quantity:</span>
//                             <div className="flex items-center border border-neutral-600 rounded">
//                               <button className="px-2 py-0.5 text-white hover:bg-neutral-700">-</button>
//                               <span className="px-3 text-white">{booking.quantity}</span>
//                               <button className="px-2 py-0.5 text-white hover:bg-neutral-700">+</button>
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <p className="text-gray-400 text-xs">${booking.dailyRate} / day</p>
//                             <p className="text-yellowClr font-bold text-lg">${itemTotal.toFixed(2)}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}

//               {bookings.length === 0 && (
//                 <div className="bg-neutral-800 rounded-xl p-12 text-center border border-neutral-700">
//                   <ShoppingCart className="h-16 w-16 text-gray-600 mx-auto mb-3" />
//                   <p className="text-gray-400 text-lg">Your booking cart is empty</p>
//                   <button className="mt-4 bg-yellowClr text-black px-5 py-2 rounded-lg font-medium inline-flex items-center gap-2">
//                     Browse Equipment
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Right Column: Order Summary */}
//             <div className="lg:col-span-1">
//               <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-5 sticky top-24">
//                 <h3 className="text-white font-bold text-xl mb-4">Order Summary</h3>
                
//                 <div className="space-y-3 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Subtotal</span>
//                     <span className="text-white">${subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Delivery Fee</span>
//                     <span className="text-white">${deliveryFee.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Tax (10%)</span>
//                     <span className="text-white">${tax.toFixed(2)}</span>
//                   </div>
//                   <div className="border-t border-neutral-700 pt-3 mt-2">
//                     <div className="flex justify-between font-bold">
//                       <span className="text-white">Total</span>
//                       <span className="text-yellowClr text-xl">${total.toFixed(2)}</span>
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">Including all fees and taxes</p>
//                   </div>
//                 </div>

//                 {/* Contact Information */}
//                 <div className="mt-6 pt-4 border-t border-neutral-700">
//                   <h4 className="text-white font-semibold flex items-center gap-2 mb-3"><User className="h-4 w-4 text-yellowClr" /> Rental Contact</h4>
//                   <div className="space-y-2 text-xs">
//                     <div className="flex items-center gap-2 text-gray-300"><User className="h-3 w-3" /> John Doe</div>
//                     <div className="flex items-center gap-2 text-gray-300"><Mail className="h-3 w-3" /> john.doe@example.com</div>
//                     <div className="flex items-center gap-2 text-gray-300"><Phone className="h-3 w-3" /> +880 1712 345678</div>
//                   </div>
//                   <button className="w-full mt-3 text-xs text-yellowClr flex items-center justify-center gap-1">Edit Contact Info</button>
//                 </div>

//                 {/* Promo Code */}
//                 <div className="mt-4">
//                   <div className="flex gap-2">
//                     <input type="text" placeholder="Promo code" className="flex-1 bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-yellowClr" />
//                     <button className="bg-yellowClr/20 text-yellowClr px-3 py-2 rounded-lg text-sm font-medium hover:bg-yellowClr/30 transition">Apply</button>
//                   </div>
//                 </div>

//                 {/* Checkout Button */}
//                 <button className="w-full mt-6 bg-yellowClr text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellowClr/90 transition">
//                   <CreditCard className="h-5 w-5" />
//                   Proceed to Checkout
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-3">
//                   By completing this booking you agree to our <a href="#" className="text-yellowClr">Terms & Conditions</a> and <a href="#" className="text-yellowClr">Rental Policy</a>.
//                 </p>
//               </div>

//               {/* Help Section */}
//               <div className="bg-neutral-800/50 rounded-xl p-4 mt-6 border border-neutral-700">
//                 <div className="flex items-center gap-2 text-yellowClr mb-2"><MessageSquare className="h-4 w-4" /><span className="text-sm font-semibold">Need help?</span></div>
//                 <p className="text-xs text-gray-400">Call us at <span className="text-white">+88 0179 2020 468</span> or email <span className="text-white">info@ekcors.com</span></p>
//               </div>
//             </div>
//           </div>

//           {/* Similar Equipment Recommendations */}
//           <div className="mt-12 pt-6 border-t border-neutral-800">
//             <h3 className="text-white text-xl font-semibold mb-4">You might also need</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//               {[
//                 { name: "Compactor", rate: 180, img: "https://placehold.co/400x300?text=Compactor" },
//                 { name: "Forklift", rate: 210, img: "https://placehold.co/400x300?text=Forklift" },
//                 { name: "Generator", rate: 95, img: "https://placehold.co/400x300?text=Generator" },
//                 { name: "Skid Steer", rate: 275, img: "https://placehold.co/400x300?text=SkidSteer" },
//               ].map((item, idx) => (
//                 <div key={idx} className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-yellowClr/50 transition">
//                   <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
//                   <div className="p-2 text-center">
//                     <p className="text-white text-sm font-medium">{item.name}</p>
//                     <p className="text-yellowClr text-xs">${item.rate}/day</p>
//                     <button className="mt-1 text-xs text-yellowClr">+ Add</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




// 'use client';

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import {
//   ShoppingCart,
//   Calendar,
//   Truck,
//   Trash2,
//   Edit,
//   CreditCard,
//   MapPin,
//   Fuel,
//   User,
//   Phone,
//   Mail,
//   MessageSquare,
// } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { bookMachinery } from "@/api/userApis";
// import { toast } from "sonner";
// import { useState } from "react";

// export default function BookingPage() {
//   const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
//   const [checkoutLoading, setCheckoutLoading] = useState(false);

//   // Calculate total for a single cart item (matches detail page logic)
//   const calculateItemTotal = (item) => {
//     const start = new Date(item.startDateTime);
//     const end = new Date(item.endDateTime);
//     const diffMs = end - start;
//     const totalHours = Math.ceil(diffMs / (1000 * 60 * 60));

//     if (totalHours <= 0) return 0;

//     const hourlyRate = Number(item.baseHourlyRate) || 0;
//     const dailyRate = Number(item.dailyCapPrice) || 0;
//     const weeklyRate = Number(item.weeklyCapPrice) || 0;
//     const monthlyRate = Number(item.monthlyCapPrice) || 0;

//     let amount = 0;
//     if (totalHours <= 4) {
//       amount = totalHours * hourlyRate;
//     } else {
//       let totalDays = Math.floor(totalHours / 24);
//       let remainingHours = totalHours % 24;

//       const months = Math.floor(totalDays / 30);
//       amount += months * monthlyRate;
//       totalDays = totalDays % 30;

//       const weeks = Math.floor(totalDays / 7);
//       amount += weeks * weeklyRate;
//       totalDays = totalDays % 7;

//       if (totalDays > 0) {
//         let dailyAmount = totalDays * dailyRate;
//         if (totalDays > 2 && totalDays < 7) {
//           dailyAmount = Math.min(dailyAmount, weeklyRate);
//         }
//         amount += dailyAmount;
//       }

//       if (remainingHours > 0) {
//         if (remainingHours <= 4) {
//           amount += remainingHours * hourlyRate;
//         } else {
//           amount += dailyRate;
//         }
//       }
//     }
//     return amount * item.quantity;
//   };

//   const subtotal = cartItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);
//   const deliveryFee = 0; // Customize if needed
//   const tax = subtotal * 0.1;
//   const total = subtotal + deliveryFee + tax;

//   const handleCheckout = async () => {
//     if (cartItems.length === 0) {
//       toast.error("Cart is empty");
//       return;
//     }
//     setCheckoutLoading(true);
//     let successCount = 0;
//     for (const item of cartItems) {
//       try {
//         await bookMachinery({
//           vehicleId: item.machineryId,
//           startDateTime: new Date(item.startDateTime),
//           endDateTime: new Date(item.endDateTime),
//           quantity: item.quantity,
//           location: { address: "" }, // adjust if you have address
//         });
//         successCount++;
//       } catch (err) {
//         console.error(err);
//         toast.error(`Failed to book ${item.title}`);
//       }
//     }
//     if (successCount === cartItems.length) {
//       toast.success(`Successfully booked ${successCount} item(s)!`);
//       clearCart();
//     } else if (successCount > 0) {
//       toast.warning(`Partially booked: ${successCount} of ${cartItems.length} items`);
//     }
//     setCheckoutLoading(false);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="sm:min-h-48 min-h-40 bg-[url('/images/about-hero.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center relative">
//         <div className="absolute bg-yellow-500/20 backdrop-blur-[2px] inset-0"></div>
//         <div className="h-full w-full flex flex-col justify-center items-center relative z-10 space-y-2">
//           <h1 className="text-white text-3xl font-semibold">My Bookings</h1>
//           <Breadcrumb>
//             <BreadcrumbList>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/" className="text-gray-400 hover:text-yellowClr">Home</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbPage className="text-gray-300">Bookings</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="bg-neutral-900">
//         <div className="container mx-auto px-4 py-8 md:py-12">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
//                 <ShoppingCart className="h-7 w-7 text-yellowClr" />
//                 Your Rental Cart
//               </h2>
//               <p className="text-gray-400 mt-1">{cartItems.length} item(s) in your booking cart</p>
//             </div>
//             <button
//               onClick={handleCheckout}
//               disabled={checkoutLoading}
//               className="bg-yellowClr text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellowClr/90 transition flex items-center gap-2"
//             >
//               <CreditCard className="h-4 w-4" />
//               {checkoutLoading ? "Processing..." : "Proceed to Checkout"}
//             </button>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Left Column: Cart Items */}
//             <div className="lg:col-span-2 space-y-6">
//               {cartItems.map((item) => {
//                 const start = new Date(item.startDateTime);
//                 const end = new Date(item.endDateTime);
//                 const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
//                 const itemTotal = calculateItemTotal(item);

//                 return (
//                   <div key={item.id} className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden hover:border-yellowClr/30 transition-all">
//                     <div className="flex flex-col sm:flex-row">
//                       <div className="sm:w-32 h-32 bg-neutral-700 relative">
//                         <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
//                       </div>
//                       <div className="flex-1 p-4">
//                         <div className="flex flex-wrap justify-between items-start gap-2">
//                           <div>
//                             <h3 className="text-white font-bold text-lg">{item.title}</h3>
//                             <p className="text-gray-400 text-sm mt-1">Quantity: {item.quantity}</p>
//                           </div>
//                           <div className="flex gap-2">
//                             <button className="p-1.5 bg-neutral-700 rounded-lg hover:bg-yellowClr/20 transition">
//                               <Edit className="h-4 w-4 text-gray-300 hover:text-yellowClr" />
//                             </button>
//                             <button
//                               onClick={() => removeFromCart(item.id)}
//                               className="p-1.5 bg-neutral-700 rounded-lg hover:bg-red-500/20 transition"
//                             >
//                               <Trash2 className="h-4 w-4 text-gray-300 hover:text-red-400" />
//                             </button>
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-sm">
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <Calendar className="h-4 w-4 text-yellowClr" />
//                             <span>{start.toLocaleDateString()} → {end.toLocaleDateString()}</span>
//                             <span className="text-gray-500">({days} days)</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <Truck className="h-4 w-4 text-yellowClr" />
//                             <span>Delivery optional</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <Fuel className="h-4 w-4 text-yellowClr" />
//                             <span>Full to Full</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <MapPin className="h-4 w-4 text-yellowClr" />
//                             <span>Vendor location</span>
//                           </div>
//                         </div>

//                         <div className="flex justify-between items-center mt-3 pt-2 border-t border-neutral-700">
//                           <div className="flex items-center gap-2">
//                             <span className="text-gray-400">Quantity:</span>
//                             <div className="flex items-center border border-neutral-600 rounded">
//                               <button
//                                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                                 className="px-2 py-0.5 text-white hover:bg-neutral-700"
//                               >
//                                 -
//                               </button>
//                               <span className="px-3 text-white">{item.quantity}</span>
//                               <button
//                                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                                 className="px-2 py-0.5 text-white hover:bg-neutral-700"
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <p className="text-gray-400 text-xs">₹{item.dailyCapPrice} / day</p>
//                             <p className="text-yellowClr font-bold text-lg">₹{itemTotal.toFixed(2)}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}

//               {cartItems.length === 0 && (
//                 <div className="bg-neutral-800 rounded-xl p-12 text-center border border-neutral-700">
//                   <ShoppingCart className="h-16 w-16 text-gray-600 mx-auto mb-3" />
//                   <p className="text-gray-400 text-lg">Your booking cart is empty</p>
//                   <a href="/listings" className="inline-block mt-4 bg-yellowClr text-black px-5 py-2 rounded-lg font-medium">
//                     Browse Equipment
//                   </a>
//                 </div>
//               )}
//             </div>

//             {/* Right Column: Order Summary */}
//             <div className="lg:col-span-1">
//               <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-5 sticky top-24">
//                 <h3 className="text-white font-bold text-xl mb-4">Order Summary</h3>
//                 <div className="space-y-3 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Subtotal</span>
//                     <span className="text-white">₹{subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Delivery Fee</span>
//                     <span className="text-white">₹{deliveryFee.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Tax (10%)</span>
//                     <span className="text-white">₹{tax.toFixed(2)}</span>
//                   </div>
//                   <div className="border-t border-neutral-700 pt-3 mt-2">
//                     <div className="flex justify-between font-bold">
//                       <span className="text-white">Total</span>
//                       <span className="text-yellowClr text-xl">₹{total.toFixed(2)}</span>
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">Including all fees and taxes</p>
//                   </div>
//                 </div>

//                 <div className="mt-6 pt-4 border-t border-neutral-700">
//                   <h4 className="text-white font-semibold flex items-center gap-2 mb-3">
//                     <User className="h-4 w-4 text-yellowClr" /> Rental Contact
//                   </h4>
//                   <div className="space-y-2 text-xs">
//                     <div className="flex items-center gap-2 text-gray-300"><User className="h-3 w-3" /> John Doe</div>
//                     <div className="flex items-center gap-2 text-gray-300"><Mail className="h-3 w-3" /> john.doe@example.com</div>
//                     <div className="flex items-center gap-2 text-gray-300"><Phone className="h-3 w-3" /> +880 1712 345678</div>
//                   </div>
//                   <button className="w-full mt-3 text-xs text-yellowClr flex items-center justify-center gap-1">Edit Contact Info</button>
//                 </div>

//                 <div className="mt-4">
//                   <div className="flex gap-2">
//                     <input type="text" placeholder="Promo code" className="flex-1 bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-yellowClr" />
//                     <button className="bg-yellowClr/20 text-yellowClr px-3 py-2 rounded-lg text-sm font-medium hover:bg-yellowClr/30 transition">Apply</button>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleCheckout}
//                   disabled={checkoutLoading}
//                   className="w-full mt-6 bg-yellowClr text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellowClr/90 transition"
//                 >
//                   <CreditCard className="h-5 w-5" />
//                   {checkoutLoading ? "Processing..." : "Proceed to Checkout"}
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-3">
//                   By completing this booking you agree to our <a href="#" className="text-yellowClr">Terms & Conditions</a> and <a href="#" className="text-yellowClr">Rental Policy</a>.
//                 </p>
//               </div>

//               <div className="bg-neutral-800/50 rounded-xl p-4 mt-6 border border-neutral-700">
//                 <div className="flex items-center gap-2 text-yellowClr mb-2">
//                   <MessageSquare className="h-4 w-4" /><span className="text-sm font-semibold">Need help?</span>
//                 </div>
//                 <p className="text-xs text-gray-400">Call us at <span className="text-white">+88 0179 2020 468</span> or email <span className="text-white">info@ekcors.com</span></p>
//               </div>
//             </div>
//           </div>

//           {/* Similar Equipment Recommendations - optional */}
//           <div className="mt-12 pt-6 border-t border-neutral-800">
//             <h3 className="text-white text-xl font-semibold mb-4">You might also need</h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//               {[
//                 { name: "Compactor", rate: 180, img: "https://placehold.co/400x300?text=Compactor" },
//                 { name: "Forklift", rate: 210, img: "https://placehold.co/400x300?text=Forklift" },
//                 { name: "Generator", rate: 95, img: "https://placehold.co/400x300?text=Generator" },
//                 { name: "Skid Steer", rate: 275, img: "https://placehold.co/400x300?text=SkidSteer" },
//               ].map((item, idx) => (
//                 <div key={idx} className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-yellowClr/50 transition">
//                   <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
//                   <div className="p-2 text-center">
//                     <p className="text-white text-sm font-medium">{item.name}</p>
//                     <p className="text-yellowClr text-xs">₹{item.rate}/day</p>
//                     <button className="mt-1 text-xs text-yellowClr">+ Add</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }







// 'use client';

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import {
//   ShoppingCart,
//   Calendar,
//   Truck,
//   Trash2,
//   Edit,
//   CreditCard,
//   MapPin,
//   Fuel,
//   User,
//   Phone,
//   Mail,
//   MessageSquare,
//   Plus,
// } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useAuth } from "@/context/AuthContext";
// import { useMachinery } from "@/context/useMachinery";
// import { bookMachinery } from "@/api/userApis";
// import { toast } from "sonner";
// import { useState, useMemo } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function BookingPage() {
//   const { cartItems, removeFromCart, updateQuantity, clearCart, addToCart } = useCart();
//   const { user, userLoading } = useAuth();
//   const { machinery } = useMachinery();
//   const [checkoutLoading, setCheckoutLoading] = useState(false);

//   // Helper to get image URL
//   const getImageUrl = (item) => {
//     const imgPath = item.image || item.images?.[0];
//     if (!imgPath) return '/images/jcb.jpeg';
//     return imgPath.startsWith('http') ? imgPath : `${process.env.NEXT_PUBLIC_API_URL}${imgPath}`;
//   };

//   // Recommendations: exclude items already in cart, limit to 4
//   const recommendations = useMemo(() => {
//     if (!machinery.length) return [];
//     const cartIds = new Set(cartItems.map(item => item.machineryId));
//     const filtered = machinery.filter(m => !cartIds.has(m._id));
//     // Shuffle and take first 4
//     return filtered.sort(() => 0.5 - Math.random()).slice(0, 4);
//   }, [machinery, cartItems]);

//   const handleAddToCart = (machine) => {
//     addToCart({
//       id: machine._id,
//       machineryId: machine._id,
//       title: machine.title,
//       dailyCapPrice: machine.dailyCapPrice,
//       baseHourlyRate: machine.baseHourlyRate,
//       image: machine.images?.[0],
//       quantity: 1,
//       // Default rental dates: today to tomorrow (you can improve)
//       startDateTime: new Date().toISOString(),
//       endDateTime: new Date(Date.now() + 86400000).toISOString(),
//     });
//     toast.success(`${machine.title} added to cart`);
//   };

//   // Calculate total for a single cart item
//   const calculateItemTotal = (item) => {
//     const start = new Date(item.startDateTime);
//     const end = new Date(item.endDateTime);
//     const diffMs = end - start;
//     const totalHours = Math.ceil(diffMs / (1000 * 60 * 60));

//     if (totalHours <= 0) return 0;

//     const hourlyRate = Number(item.baseHourlyRate) || 0;
//     const dailyRate = Number(item.dailyCapPrice) || 0;
//     const weeklyRate = Number(item.weeklyCapPrice) || 0;
//     const monthlyRate = Number(item.monthlyCapPrice) || 0;

//     let amount = 0;
//     if (totalHours <= 4) {
//       amount = totalHours * hourlyRate;
//     } else {
//       let totalDays = Math.floor(totalHours / 24);
//       let remainingHours = totalHours % 24;

//       const months = Math.floor(totalDays / 30);
//       amount += months * monthlyRate;
//       totalDays = totalDays % 30;

//       const weeks = Math.floor(totalDays / 7);
//       amount += weeks * weeklyRate;
//       totalDays = totalDays % 7;

//       if (totalDays > 0) {
//         let dailyAmount = totalDays * dailyRate;
//         if (totalDays > 2 && totalDays < 7) {
//           dailyAmount = Math.min(dailyAmount, weeklyRate);
//         }
//         amount += dailyAmount;
//       }

//       if (remainingHours > 0) {
//         if (remainingHours <= 4) {
//           amount += remainingHours * hourlyRate;
//         } else {
//           amount += dailyRate;
//         }
//       }
//     }
//     return amount * item.quantity;
//   };

//   const subtotal = cartItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);
//   const deliveryFee = 0;
//   const tax = subtotal * 0.1;
//   const total = subtotal + deliveryFee + tax;

//   const handleCheckout = async () => {
//     if (cartItems.length === 0) {
//       toast.error("Cart is empty");
//       return;
//     }
//     setCheckoutLoading(true);
//     let successCount = 0;
//     for (const item of cartItems) {
//       try {
//         await bookMachinery({
//           vehicleId: item.machineryId,
//           startDateTime: new Date(item.startDateTime),
//           endDateTime: new Date(item.endDateTime),
//           quantity: item.quantity,
//           location: { address: item.location?.address || "" },
//         });
//         successCount++;
//       } catch (err) {
//         console.error(err);
//         toast.error(`Failed to book ${item.title}`);
//       }
//     }
//     if (successCount === cartItems.length) {
//       toast.success(`Successfully booked ${successCount} item(s)!`);
//       clearCart();
//     } else if (successCount > 0) {
//       toast.warning(`Partially booked: ${successCount} of ${cartItems.length} items`);
//     }
//     setCheckoutLoading(false);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="sm:min-h-48 min-h-40 bg-[url('/images/about-hero.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center relative">
//         <div className="absolute bg-yellow-500/20 backdrop-blur-[2px] inset-0"></div>
//         <div className="h-full w-full flex flex-col justify-center items-center relative z-10 space-y-2">
//           <h1 className="text-white text-3xl font-semibold">My Bookings</h1>
//           <Breadcrumb>
//             <BreadcrumbList>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/" className="text-gray-400 hover:text-yellowClr">Home</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbPage className="text-gray-300">Bookings</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="bg-neutral-900">
//         <div className="container mx-auto px-4 py-8 md:py-12">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
//                 <ShoppingCart className="h-7 w-7 text-yellowClr" />
//                 Your Rental Cart
//               </h2>
//               <p className="text-gray-400 mt-1">{cartItems.length} item(s) in your booking cart</p>
//             </div>
//             <button
//               onClick={handleCheckout}
//               disabled={checkoutLoading}
//               className="bg-yellowClr text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellowClr/90 transition flex items-center gap-2"
//             >
//               <CreditCard className="h-4 w-4" />
//               {checkoutLoading ? "Processing..." : "Proceed to Checkout"}
//             </button>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Left Column: Cart Items */}
//             <div className="lg:col-span-2 space-y-6">
//               {cartItems.map((item) => {
//                 const start = new Date(item.startDateTime);
//                 const end = new Date(item.endDateTime);
//                 const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
//                 const itemTotal = calculateItemTotal(item);

//                 return (
//                   <div key={item.id} className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden hover:border-yellowClr/30 transition-all">
//                     <div className="flex flex-col sm:flex-row">
//                       <div className="sm:w-32 h-32 bg-neutral-700 relative">
//                         <Image
//                           src={getImageUrl(item)}
//                           alt={item.title}
//                           width={128}
//                           height={128}
//                           className="w-full h-full object-cover"
//                           unoptimized
//                         />
//                       </div>
//                       <div className="flex-1 p-4">
//                         <div className="flex flex-wrap justify-between items-start gap-2">
//                           <div>
//                             <h3 className="text-white font-bold text-lg">{item.title}</h3>
//                             <p className="text-gray-400 text-sm mt-1">Quantity: {item.quantity}</p>
//                           </div>
//                           <div className="flex gap-2">
//                             <button className="p-1.5 bg-neutral-700 rounded-lg hover:bg-yellowClr/20 transition">
//                               <Edit className="h-4 w-4 text-gray-300 hover:text-yellowClr" />
//                             </button>
//                             <button
//                               onClick={() => removeFromCart(item.id)}
//                               className="p-1.5 bg-neutral-700 rounded-lg hover:bg-red-500/20 transition"
//                             >
//                               <Trash2 className="h-4 w-4 text-gray-300 hover:text-red-400" />
//                             </button>
//                           </div>
//                         </div>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-sm">
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <Calendar className="h-4 w-4 text-yellowClr" />
//                             <span>{start.toLocaleDateString()} → {end.toLocaleDateString()}</span>
//                             <span className="text-gray-500">({days} days)</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <Truck className="h-4 w-4 text-yellowClr" />
//                             <span>Delivery optional</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <Fuel className="h-4 w-4 text-yellowClr" />
//                             <span>Full to Full</span>
//                           </div>
//                           <div className="flex items-center gap-2 text-gray-300">
//                             <MapPin className="h-4 w-4 text-yellowClr" />
//                             <span>{item.location?.city || "Vendor location"}</span>
//                           </div>
//                         </div>

//                         <div className="flex justify-between items-center mt-3 pt-2 border-t border-neutral-700">
//                           <div className="flex items-center gap-2">
//                             <span className="text-gray-400">Quantity:</span>
//                             <div className="flex items-center border border-neutral-600 rounded">
//                               <button
//                                 onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                                 className="px-2 py-0.5 text-white hover:bg-neutral-700"
//                               >
//                                 -
//                               </button>
//                               <span className="px-3 text-white">{item.quantity}</span>
//                               <button
//                                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                                 className="px-2 py-0.5 text-white hover:bg-neutral-700"
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </div>
//                           <div className="text-right">
//                             <p className="text-gray-400 text-xs">₹{item.dailyCapPrice} / day</p>
//                             <p className="text-yellowClr font-bold text-lg">₹{itemTotal.toFixed(2)}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}

//               {cartItems.length === 0 && (
//                 <div className="bg-neutral-800 rounded-xl p-12 text-center border border-neutral-700">
//                   <ShoppingCart className="h-16 w-16 text-gray-600 mx-auto mb-3" />
//                   <p className="text-gray-400 text-lg">Your booking cart is empty</p>
//                   <Link href="/listings" className="inline-block mt-4 bg-yellowClr text-black px-5 py-2 rounded-lg font-medium">
//                     Browse Equipment
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Right Column: Order Summary with Real User Info */}
//             <div className="lg:col-span-1">
//               <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-5 sticky top-24">
//                 <h3 className="text-white font-bold text-xl mb-4">Order Summary</h3>
//                 <div className="space-y-3 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Subtotal</span>
//                     <span className="text-white">₹{subtotal.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Delivery Fee</span>
//                     <span className="text-white">₹{deliveryFee.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Tax (10%)</span>
//                     <span className="text-white">₹{tax.toFixed(2)}</span>
//                   </div>
//                   <div className="border-t border-neutral-700 pt-3 mt-2">
//                     <div className="flex justify-between font-bold">
//                       <span className="text-white">Total</span>
//                       <span className="text-yellowClr text-xl">₹{total.toFixed(2)}</span>
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">Including all fees and taxes</p>
//                   </div>
//                 </div>

//                 {/* Real user contact info */}
//                 <div className="mt-6 pt-4 border-t border-neutral-700">
//                   <h4 className="text-white font-semibold flex items-center gap-2 mb-3">
//                     <User className="h-4 w-4 text-yellowClr" /> Rental Contact
//                   </h4>
//                   {userLoading ? (
//                     <p className="text-sm text-gray-400">Loading...</p>
//                   ) : user ? (
//                     <div className="space-y-2 text-xs">
//                       <div className="flex items-center gap-2 text-gray-300">
//                         <User className="h-3 w-3" /> {user.name || "User"}
//                       </div>
//                       <div className="flex items-center gap-2 text-gray-300">
//                         <Mail className="h-3 w-3" /> {user.email}
//                       </div>
//                       <div className="flex items-center gap-2 text-gray-300">
//                         <Phone className="h-3 w-3" /> {user.phone || "Not provided"}
//                       </div>
//                     </div>
//                   ) : (
//                     <p className="text-sm text-gray-400">Please <Link href="/sign-in" className="text-yellowClr">log in</Link> to see your contact details.</p>
//                   )}
//                 </div>

//                 <div className="mt-4">
//                   <div className="flex gap-2">
//                     <input
//                       type="text"
//                       placeholder="Promo code"
//                       className="flex-1 bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-white text-sm placeholder:text-gray-400 focus:outline-none focus:border-yellowClr"
//                     />
//                     <button className="bg-yellowClr/20 text-yellowClr px-3 py-2 rounded-lg text-sm font-medium hover:bg-yellowClr/30 transition">
//                       Apply
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   onClick={handleCheckout}
//                   disabled={checkoutLoading}
//                   className="w-full mt-6 bg-yellowClr text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-yellowClr/90 transition"
//                 >
//                   <CreditCard className="h-5 w-5" />
//                   {checkoutLoading ? "Processing..." : "Proceed to Checkout"}
//                 </button>

//                 <p className="text-xs text-gray-500 text-center mt-3">
//                   By completing this booking you agree to our{" "}
//                   <Link href="/terms" className="text-yellowClr">Terms & Conditions</Link> and{" "}
//                   <Link href="/rental-policy" className="text-yellowClr">Rental Policy</Link>.
//                 </p>
//               </div>

//               <div className="bg-neutral-800/50 rounded-xl p-4 mt-6 border border-neutral-700">
//                 <div className="flex items-center gap-2 text-yellowClr mb-2">
//                   <MessageSquare className="h-4 w-4" />
//                   <span className="text-sm font-semibold">Need help?</span>
//                 </div>
//                 <p className="text-xs text-gray-400">
//                   Call us at <span className="text-white">+91 98765 43210</span> or email{" "}
//                   <span className="text-white">info@ekcors.com</span>
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Recommendations Section - Real Data */}
//           {recommendations.length > 0 && (
//             <div className="mt-12 pt-6 border-t border-neutral-800">
//               <h3 className="text-white text-xl font-semibold mb-4">You might also need</h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {recommendations.map((machine) => (
//                   <div
//                     key={machine._id}
//                     className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-yellowClr/50 transition group"
//                   >
//                     <Link href={`/listings/${machine.slug || machine._id}`}>
//                       <Image
//                         src={getImageUrl(machine)}
//                         alt={machine.title}
//                         width={400}
//                         height={200}
//                         className="w-full h-32 object-cover group-hover:scale-105 transition duration-300"
//                         unoptimized
//                       />
//                     </Link>
//                     <div className="p-2 text-center">
//                       <Link href={`/listings/${machine.slug || machine._id}`}>
//                         <p className="text-white text-sm font-medium line-clamp-1 hover:text-yellowClr transition">
//                           {machine.title}
//                         </p>
//                       </Link>
//                       <p className="text-yellowClr text-xs mt-1">
//                         ₹{machine.dailyCapPrice || machine.baseHourlyRate || '—'}/day
//                       </p>
//                       <button
//                         onClick={() => handleAddToCart(machine)}
//                         className="mt-2 w-full text-xs bg-yellowClr/10 hover:bg-yellowClr/20 text-yellowClr py-1 rounded flex items-center justify-center gap-1 transition"
//                       >
//                         <Plus size={12} /> Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }




'use client';

import { useState, useEffect, useMemo } from 'react';
import { useCart } from '@/context/CartContext';
import { useMachinery } from '@/context/useMachinery';
import { bookMachinery, getCurrentUser } from '@/api/userApis';
import { toast } from 'sonner';
import Link from 'next/link';
import Image from 'next/image';
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {
  ShoppingCart, Calendar, Truck, Trash2, Edit, CreditCard,
  MapPin, Fuel, User, Phone, Mail, MessageSquare, Plus
} from "lucide-react";

// ✅ Helper function must be defined before it is used and always return a number
const calculateItemTotal = (item) => {
  if (!item) return 0;
  const start = new Date(item.startDateTime);
  const end = new Date(item.endDateTime);
  if (isNaN(start) || isNaN(end)) return 0; // invalid dates
  const diffMs = end - start;
  const totalHours = Math.ceil(diffMs / (1000 * 60 * 60));
  if (totalHours <= 0) return 0;

  const hourlyRate = Number(item.baseHourlyRate) || 0;
  const dailyRate = Number(item.dailyCapPrice) || 0;
  const weeklyRate = Number(item.weeklyCapPrice) || 0;
  const monthlyRate = Number(item.monthlyCapPrice) || 0;

  let amount = 0;
  if (totalHours <= 4) {
    amount = totalHours * hourlyRate;
  } else {
    let totalDays = Math.floor(totalHours / 24);
    let remainingHours = totalHours % 24;

    const months = Math.floor(totalDays / 30);
    amount += months * monthlyRate;
    totalDays = totalDays % 30;

    const weeks = Math.floor(totalDays / 7);
    amount += weeks * weeklyRate;
    totalDays = totalDays % 7;

    if (totalDays > 0) {
      let dailyAmount = totalDays * dailyRate;
      if (totalDays > 2 && totalDays < 7) {
        dailyAmount = Math.min(dailyAmount, weeklyRate);
      }
      amount += dailyAmount;
    }

    if (remainingHours > 0) {
      if (remainingHours <= 4) {
        amount += remainingHours * hourlyRate;
      } else {
        amount += dailyRate;
      }
    }
  }
  // quantity must exist, default to 1
  const quantity = item.quantity ?? 1;
  return amount * quantity;
};

export default function BookingPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, addToCart } = useCart();
  const { machinery } = useMachinery();
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await getCurrentUser();
        setUser(res?.data?.user || res?.user || null);
      } catch (err) {
        console.error('Failed to fetch user:', err);
      } finally {
        setUserLoading(false);
      }
    };
    fetchUser();
  }, []);

  const getImageUrl = (item) => {
    const imgPath = item.image || item.images?.[0];
    if (!imgPath) return '/images/jcb.jpeg';
    return imgPath.startsWith('http') ? imgPath : `${process.env.NEXT_PUBLIC_API_URL}${imgPath}`;
  };

  const recommendations = useMemo(() => {
    if (!machinery.length) return [];
    const cartIds = new Set(cartItems.map(item => item.machineryId));
    const filtered = machinery.filter(m => !cartIds.has(m._id));
    return filtered.sort(() => 0.5 - Math.random()).slice(0, 4);
  }, [machinery, cartItems]);

  const handleAddToCart = (machine) => {
    addToCart({
      id: machine._id,
      machineryId: machine._id,
      title: machine.title,
      dailyCapPrice: machine.dailyCapPrice,
      baseHourlyRate: machine.baseHourlyRate,
      weeklyCapPrice: machine.weeklyCapPrice,
      monthlyCapPrice: machine.monthlyCapPrice,
      image: machine.images?.[0],
      quantity: 1,
      startDateTime: new Date().toISOString(),
      endDateTime: new Date(Date.now() + 86400000).toISOString(),
    });
    toast.success(`${machine.title} added to cart`);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + calculateItemTotal(item), 0);
  const deliveryFee = 0;
  const tax = subtotal * 0.1;
  const total = subtotal + deliveryFee + tax;

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    setCheckoutLoading(true);
    let successCount = 0;
    for (const item of cartItems) {
      try {
        await bookMachinery({
          vehicleId: item.machineryId,
          startDateTime: new Date(item.startDateTime),
          endDateTime: new Date(item.endDateTime),
          quantity: item.quantity,
          location: { address: item.location?.address || "" },
        });
        successCount++;
      } catch (err) {
        console.error(err);
        toast.error(`Failed to book ${item.title}`);
      }
    }
    if (successCount === cartItems.length) {
      toast.success(`Successfully booked ${successCount} item(s)!`);
      clearCart();
    } else if (successCount > 0) {
      toast.warning(`Partially booked: ${successCount} of ${cartItems.length} items`);
    }
    setCheckoutLoading(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="sm:min-h-48 min-h-40 bg-[url('/images/about-hero.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center relative">
        <div className="absolute bg-yellow-500/20 backdrop-blur-[2px] inset-0"></div>
        <div className="h-full w-full flex flex-col justify-center items-center relative z-10 space-y-2">
          <h1 className="text-white text-3xl font-semibold">My Bookings</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/" className="text-gray-400 hover:text-yellowClr">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage className="text-gray-300">Bookings</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <div className="bg-neutral-900">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                <ShoppingCart className="h-7 w-7 text-yellowClr" />
                Your Rental Cart
              </h2>
              <p className="text-gray-400 mt-1">{cartItems.length} item(s) in your booking cart</p>
            </div>
            <button onClick={handleCheckout} disabled={checkoutLoading} className="bg-yellowClr text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellowClr/90 transition flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              {checkoutLoading ? "Processing..." : "Proceed to Checkout"}
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items Column */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => {
                const start = new Date(item.startDateTime);
                const end = new Date(item.endDateTime);
                const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
                const itemTotal = calculateItemTotal(item); // ✅ now always a number

                return (
                  <div key={item.id} className="bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-32 h-32 bg-neutral-700 relative">
                        <Image src={getImageUrl(item)} alt={item.title} width={148} height={128} className="w-full h-full object-cover" unoptimized />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div><h3 className="text-white font-bold text-lg">{item.title}</h3><p className="text-gray-400 text-sm mt-1">Quantity: {item.quantity}</p></div>
                          <div className="flex gap-2">
                            <button className="p-1.5 bg-neutral-700 rounded-lg"><Edit className="h-4 w-4 text-gray-300" /></button>
                            <button onClick={() => removeFromCart(item.id)} className="p-1.5 bg-neutral-700 rounded-lg"><Trash2 className="h-4 w-4 text-gray-300 hover:text-red-400" /></button>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-sm">
                          <div className="flex items-center gap-2 text-gray-300"><Calendar className="h-4 w-4 text-yellowClr" />{start.toLocaleDateString()} → {end.toLocaleDateString()} <span className="text-gray-500">({days} days)</span></div>
                          <div className="flex items-center gap-2 text-gray-300"><Truck className="h-4 w-4 text-yellowClr" />Delivery optional</div>
                          <div className="flex items-center gap-2 text-gray-300"><Fuel className="h-4 w-4 text-yellowClr" />Full to Full</div>
                          <div className="flex items-center gap-2 text-gray-300"><MapPin className="h-4 w-4 text-yellowClr" />{item.location?.city || "Vendor location"}</div>
                        </div>
                        <div className="flex justify-between items-center mt-3 pt-2 border-t border-neutral-700">
                          <div className="flex items-center gap-2"><span className="text-gray-400">Quantity:</span>
                            <div className="flex items-center border border-neutral-600 rounded">
                              <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)} className="px-2 py-0.5 text-white">-</button>
                              <span className="px-3 text-white">{item.quantity ?? 1}</span>
                              <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)} className="px-2 py-0.5 text-white">+</button>
                            </div>
                          </div>
                          <div className="text-right"><p className="text-gray-400 text-xs">₹{item.dailyCapPrice || 0} / day</p><p className="text-yellowClr font-bold text-lg">₹{itemTotal.toFixed(2)}</p></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {cartItems.length === 0 && (
                <div className="bg-neutral-800 rounded-xl p-12 text-center border border-neutral-700">
                  <ShoppingCart className="h-16 w-16 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-400 text-lg">Your booking cart is empty</p>
                  <Link href="/listings" className="inline-block mt-4 bg-yellowClr text-black px-5 py-2 rounded-lg font-medium">Browse Equipment</Link>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-800 rounded-xl border border-neutral-700 p-5 sticky top-24">
                <h3 className="text-white font-bold text-xl mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-gray-400">Subtotal</span><span className="text-white">₹{subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Delivery Fee</span><span className="text-white">₹{deliveryFee.toFixed(2)}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Tax (10%)</span><span className="text-white">₹{tax.toFixed(2)}</span></div>
                  <div className="border-t border-neutral-700 pt-3 mt-2"><div className="flex justify-between font-bold"><span className="text-white">Total</span><span className="text-yellowClr text-xl">₹{total.toFixed(2)}</span></div><p className="text-xs text-gray-500 mt-1">Including all fees and taxes</p></div>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-700">
                  <h4 className="text-white font-semibold flex items-center gap-2 mb-3"><User className="h-4 w-4 text-yellowClr" /> Rental Contact</h4>
                  {userLoading ? <p className="text-sm text-gray-400">Loading...</p> : user ? (
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-gray-300"><User className="h-3 w-3" /> {user.name || "User"}</div>
                      <div className="flex items-center gap-2 text-gray-300"><Mail className="h-3 w-3" /> {user.email}</div>
                      <div className="flex items-center gap-2 text-gray-300"><Phone className="h-3 w-3" /> {user.phone || "Not provided"}</div>
                    </div>
                  ) : <p className="text-sm text-gray-400">Please <Link href="/sign-in" className="text-yellowClr">log in</Link> to see your contact details.</p>}
                </div>
                <button onClick={handleCheckout} disabled={checkoutLoading} className="w-full mt-6 bg-yellowClr text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2"><CreditCard className="h-5 w-5" />{checkoutLoading ? "Processing..." : "Proceed to Checkout"}</button>
                <p className="text-xs text-gray-500 text-center mt-3">By completing this booking you agree to our <Link href="/terms" className="text-yellowClr">Terms & Conditions</Link> and <Link href="/rental-policy" className="text-yellowClr">Rental Policy</Link>.</p>
              </div>
              <div className="bg-neutral-800/50 rounded-xl p-4 mt-6 border border-neutral-700">
                <div className="flex items-center gap-2 text-yellowClr mb-2"><MessageSquare className="h-4 w-4" /><span className="text-sm font-semibold">Need help?</span></div>
                <p className="text-xs text-gray-400">Call us at <span className="text-white">+91 98765 43210</span> or email <span className="text-white">info@ekcors.com</span></p>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="mt-12 pt-6 border-t border-neutral-800">
              <h3 className="text-white text-xl font-semibold mb-4">You might also need</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {recommendations.map((machine) => (
                  <div key={machine._id} className="bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-yellowClr/50 transition group">
                    <Link href={`/listings/${machine.slug || machine._id}`}>
                      <Image src={getImageUrl(machine)} alt={machine.title} width={400} height={200} className="w-full h-32 object-cover group-hover:scale-105 transition" unoptimized />
                    </Link>
                    <div className="p-2 text-center">
                      <Link href={`/listings/${machine.slug || machine._id}`}><p className="text-white text-sm font-medium line-clamp-1 hover:text-yellowClr">{machine.title}</p></Link>
                      <p className="text-yellowClr text-xs mt-1">₹{machine.dailyCapPrice || machine.baseHourlyRate || '—'}/day</p>
                      <button onClick={() => handleAddToCart(machine)} className="mt-2 w-full text-xs bg-yellowClr/10 hover:bg-yellowClr/20 text-yellowClr py-1 rounded flex items-center justify-center gap-1"><Plus size={12} /> Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}