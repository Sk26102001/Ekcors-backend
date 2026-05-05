
"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/useAuth";
import {
    Wrench,
    FileText,
    Truck,
    IndianRupee,
    MapPin,
    Image as ImageIcon,
    CheckCircle2,
    X,
    Loader2,
    AlertCircle
} from "lucide-react";
import { addMachinery } from "@/api/machineryApis";
import { toast } from "sonner";

export default function AddMachineryPage() {
    const { user, userLoading } = useAuth();
    const router = useRouter();

    // Redirect non‑vendors or unauthenticated users
// Redirect non‑vendors and non‑admins to sign‑in
useEffect(() => {
    if (!userLoading) {
        if (!user) {
            router.replace("/sign-in?redirect=/user/add-machinery");
        } else if (user.role !== "vendor" && user.role !== "admin") {
            router.replace("/sign-in?redirect=/user/add-machinery");
        }
    }
}, [user, userLoading, router]);

    const [files, setFiles] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);
    
    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "Excavator",
        brand: "",
        model: "",
        year: "",
        capacity: "",
        fuelType: "Diesel",
        transmission: "Hydraulic",
        condition: "Good",
        baseHourlyRate: "",
        dailyCapPrice: "",
        weeklyCapPrice: "",
        monthlyCapPrice: "",
        availability: true,
        images: [],
        address: "",
        city: "",
        state: "",
        pincode: "",
        latitude: "",
        longitude: ""
    });

    // Show loading while checking authentication
   if (userLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;
}

if (!user || (user.role !== "vendor" && user.role !== "admin")) {
    return null; // or a message, but redirect will happen
}

    // If not vendor, this will never be shown because of redirect,
    // but we keep a fallback.
    if (!user || user.role !== "vendor") {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white">
                <AlertCircle className="h-12 w-12 text-red-500 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
                <p className="text-gray-400">Only registered vendors can add machinery.</p>
                <button
                    onClick={() => router.push("/")}
                    className="mt-6 px-4 py-2 bg-yellowClr text-black rounded-lg"
                >
                    Go Home
                </button>
            </div>
        );
    }

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };

    const handleImages = (e) => {
        const selectedFiles = Array.from(e.target.files);
        const validFiles = selectedFiles.filter(file => file.type.startsWith('image/'));
        
        if (validFiles.length !== selectedFiles.length) {
            toast.error("Only image files are allowed");
        }
        
        if (validFiles.length + files.length > 10) {
            toast.error("Maximum 10 images allowed");
            return;
        }
        
        const newPreviewUrls = validFiles.map(file => URL.createObjectURL(file));
        
        setFiles(prev => [...prev, ...validFiles]);
        setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
        
        toast.success(`${validFiles.length} image(s) added`);
    };

    const removeImage = (index) => {
        URL.revokeObjectURL(previewUrls[index]);
        setFiles(prev => prev.filter((_, i) => i !== index));
        setPreviewUrls(prev => prev.filter((_, i) => i !== index));
        toast.info("Image removed");
    };

    const validateForm = () => {
        if (!form.title.trim()) {
            toast.error("Please enter machinery title");
            return false;
        }
        if (!form.description.trim()) {
            toast.error("Please enter description");
            return false;
        }
        if (files.length === 0) {
            toast.error("Please upload at least one image");
            return false;
        }
        if (!form.baseHourlyRate || parseFloat(form.baseHourlyRate) <= 0) {
            toast.error("Please enter a valid hourly rate");
            return false;
        }
        if (!form.address.trim() || !form.city.trim() || !form.state.trim()) {
            toast.error("Please complete location details");
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        const fd = new FormData();
    
        Object.keys(form).forEach(key => {
            if (!["images"].includes(key)) {
                const value = form[key];
                if (value !== undefined && value !== null && value !== "") {
                    fd.append(key, String(value));
                }
            }
        });
    
        files.forEach(file => {
            fd.append("images", file);
        });
    
        try {
            const res = await addMachinery(fd);
            if (res && (res.success === true || res.status === 'success')) {
                toast.success(res.message || "Machinery added successfully!");
                // Reset form
                setForm({
                    title: "",
                    description: "",
                    category: "Excavator",
                    brand: "",
                    model: "",
                    year: "",
                    capacity: "",
                    fuelType: "Diesel",
                    transmission: "Hydraulic",
                    condition: "Good",
                    baseHourlyRate: "",
                    dailyCapPrice: "",
                    weeklyCapPrice: "",
                    monthlyCapPrice: "",
                    availability: true,
                    images: [],
                    address: "",
                    city: "",
                    state: "",
                    pincode: "",
                    latitude: "",
                    longitude: ""
                });
                setFiles([]);
                setPreviewUrls([]);
            } else if (res && res.message) {
                toast.success(res.message);
                // Reset form anyway if message indicates success
                setForm({
                    title: "",
                    description: "",
                    category: "Excavator",
                    brand: "",
                    model: "",
                    year: "",
                    capacity: "",
                    fuelType: "Diesel",
                    transmission: "Hydraulic",
                    condition: "Good",
                    baseHourlyRate: "",
                    dailyCapPrice: "",
                    weeklyCapPrice: "",
                    monthlyCapPrice: "",
                    availability: true,
                    images: [],
                    address: "",
                    city: "",
                    state: "",
                    pincode: "",
                    latitude: "",
                    longitude: ""
                });
                setFiles([]);
                setPreviewUrls([]);
            } else {
                toast.error(res?.message || "Failed to add machinery");
            }
        } catch (error) {
            console.log(error);
            if (error.message?.includes('EBUSY')) {
                toast.error("File is busy. Please wait a moment and try again.");
            } else if (error.message?.includes('413')) {
                toast.error("File too large. Please upload smaller images.");
            } else {
                toast.error(error.message || "Network error. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto text-white">
            <header className="mb-10">
                <h1 className="text-3xl font-bold">Add Machinery</h1>
                <p className="text-zinc-400 mt-1">
                    List your equipment so customers can book it.
                </p>
            </header>

            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-12">

                {/* BASIC INFO */}
                <SectionHeading title="Basic Information" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Input label="Machinery Title" icon={<Wrench size={16} />} value={form.title} onChange={(v) => handleChange("title", v)} required />
                    <Select label="Category" value={form.category} onChange={(v) => handleChange("category", v)}
                        options={['Excavator', 'Bulldozer', 'Crane', 'Loader', 'Dump Truck', 'Concrete Mixer', 'Roller', 'Grader', 'Backhoe', 'Other']} />
                    <Input label="Brand" value={form.brand} onChange={(v) => handleChange("brand", v)} />
                    <Input label="Model" value={form.model} onChange={(v) => handleChange("model", v)} />
                    <Input label="Year" value={form.year} onChange={(v) => handleChange("year", v)} />
                    <Input label="Capacity (e.g. 20 Ton)" value={form.capacity} onChange={(v) => handleChange("capacity", v)} />
                </div>

                <Textarea label="Description" value={form.description} onChange={(v) => handleChange("description", v)} required />

                {/* TECH DETAILS */}
                <SectionHeading title="Technical Details" />
                <div className="grid md:grid-cols-3 gap-6">
                    <Select label="Fuel Type" value={form.fuelType} onChange={(v) => handleChange("fuelType", v)} options={['Diesel', 'Electric', 'Petrol', 'Hybrid']} />
                    <Select label="Transmission" value={form.transmission} onChange={(v) => handleChange("transmission", v)} options={['Manual', 'Automatic', 'Hydraulic']} />
                    <Select label="Condition" value={form.condition} onChange={(v) => handleChange("condition", v)} options={['New', 'Like New', 'Good', 'Used']} />
                </div>

                {/* PRICING */}
                <SectionHeading title="Pricing" />
                <div className="grid md:grid-cols-3 gap-6">
                    <Input label="Hourly Rate" icon={<IndianRupee size={16} />} value={form.baseHourlyRate} onChange={(v) => handleChange("baseHourlyRate", v)} required type="number" />
                    <Input label="Daily Price" icon={<IndianRupee size={16} />} value={form.dailyCapPrice} onChange={(v) => handleChange("dailyCapPrice", v)} type="number" />
                    <Input label="Weekly Price" icon={<IndianRupee size={16} />} value={form.weeklyCapPrice} onChange={(v) => handleChange("weeklyCapPrice", v)} type="number" />
                    <Input label="Monthly Price" icon={<IndianRupee size={16} />} value={form.monthlyCapPrice} onChange={(v) => handleChange("monthlyCapPrice", v)} type="number" />
                </div>

                {/* IMAGES */}
                <SectionHeading title="Machinery Images" />
                <label className="border-2 border-dashed border-neutral-700 rounded-xl p-6 flex items-center justify-center cursor-pointer hover:border-[#fbb316] transition-colors">
                    <ImageIcon className="mr-2" /> Upload Images
                    <input ref={fileInputRef} type="file" multiple className="hidden" onChange={handleImages} accept="image/*" />
                </label>

                {previewUrls.length > 0 && (
                    <div className="grid grid-cols-3 gap-4">
                        {previewUrls.map((url, idx) => (
                            <div key={idx} className="relative group">
                                <img src={url} alt={`Preview ${idx + 1}`} className="rounded-xl h-32 w-full object-cover border border-neutral-700" />
                                <button
                                    onClick={() => removeImage(idx)}
                                    className="absolute top-2 right-2 p-1 bg-red-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* LOCATION */}
                <SectionHeading title="Location" />
                <div className="grid md:grid-cols-3 gap-6">
                    <Input label="Address" value={form.address} onChange={(v) => handleChange("address", v)} required />
                    <Input label="City" value={form.city} onChange={(v) => handleChange("city", v)} required />
                    <Input label="State" value={form.state} onChange={(v) => handleChange("state", v)} required />
                    <Input label="Pincode" value={form.pincode} onChange={(v) => handleChange("pincode", v)} />
                    <Input label="Latitude" value={form.latitude} onChange={(v) => handleChange("latitude", v)} />
                    <Input label="Longitude" value={form.longitude} onChange={(v) => handleChange("longitude", v)} />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-[#fbb316] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#e0a114] flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            <CheckCircle2 size={18} />
                            Submit Machinery
                        </>
                    )}
                </button>

            </div>
        </div>
    );
}

function SectionHeading({ title }) {
    return (
        <div className="flex items-center gap-4 mb-4">
            <h3 className="text-sm font-bold text-[#fbb316] uppercase tracking-[0.2em]">{title}</h3>
            <div className="h-[1px] w-full bg-neutral-800"></div>
        </div>
    );
}

function Input({ label, value, onChange, icon, required = false, type = "text" }) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-zinc-500 uppercase font-bold flex items-center gap-1">
                {label}
                {required && <span className="text-[#fbb316] text-xs">*</span>}
            </label>
            <div className="relative">
                {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">{icon}</div>}
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm focus:outline-none focus:border-[#fbb316] transition-colors ${icon && 'pl-10'}`}
                />
            </div>
        </div>
    );
}

function Select({ label, value, onChange, options, required = false }) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-zinc-500 uppercase font-bold flex items-center gap-1">
                {label}
                {required && <span className="text-[#fbb316] text-xs">*</span>}
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm focus:outline-none focus:border-[#fbb316] transition-colors"
            >
                {options.map(o => <option key={o}>{o}</option>)}
            </select>
        </div>
    );
}

function Textarea({ label, value, onChange, required = false }) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-zinc-500 uppercase font-bold flex items-center gap-1">
                {label}
                {required && <span className="text-[#fbb316] text-xs">*</span>}
            </label>
            <textarea
                rows={4}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm focus:outline-none focus:border-[#fbb316] transition-colors resize-none"
            />
        </div>
    );
}













// "use client";

// import React, { useState, useRef } from "react";
// import {
//     Wrench,
//     FileText,
//     Truck,
//     IndianRupee,
//     MapPin,
//     Image as ImageIcon,
//     CheckCircle2,
//     X,
//     Loader2,
//     AlertCircle
// } from "lucide-react";
// import { addMachinery } from "@/api/machineryApis";
// import { toast } from "sonner";

// export default function AddMachineryPage() {
//     const [files, setFiles] = useState([]);
//     const [previewUrls, setPreviewUrls] = useState([]);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const fileInputRef = useRef(null);
    
//     const [form, setForm] = useState({
//         title: "",
//         description: "",
//         category: "Excavator",
//         brand: "",
//         model: "",
//         year: "",
//         capacity: "",
//         fuelType: "Diesel",
//         transmission: "Hydraulic",
//         condition: "Good",
//         baseHourlyRate: "",
//         dailyCapPrice: "",
//         weeklyCapPrice: "",
//         monthlyCapPrice: "",
//         availability: true,
//         images: [],
//         address: "",
//         city: "",
//         state: "",
//         pincode: "",
//         latitude: "",
//         longitude: ""
//     });

//     const handleChange = (key, value) => {
//         setForm({ ...form, [key]: value });
//     };

//     const handleImages = (e) => {
//         const selectedFiles = Array.from(e.target.files);
//         const validFiles = selectedFiles.filter(file => file.type.startsWith('image/'));
        
//         if (validFiles.length !== selectedFiles.length) {
//             toast.error("Only image files are allowed");
//         }
        
//         if (validFiles.length + files.length > 10) {
//             toast.error("Maximum 10 images allowed");
//             return;
//         }
        
//         const newPreviewUrls = validFiles.map(file => URL.createObjectURL(file));
        
//         setFiles(prev => [...prev, ...validFiles]);
//         setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
        
//         toast.success(`${validFiles.length} image(s) added`);
//     };

//     const removeImage = (index) => {
//         URL.revokeObjectURL(previewUrls[index]);
//         setFiles(prev => prev.filter((_, i) => i !== index));
//         setPreviewUrls(prev => prev.filter((_, i) => i !== index));
//         toast.info("Image removed");
//     };

//     const validateForm = () => {
//         if (!form.title.trim()) {
//             toast.error("Please enter machinery title");
//             return false;
//         }
//         if (!form.description.trim()) {
//             toast.error("Please enter description");
//             return false;
//         }
//         if (files.length === 0) {
//             toast.error("Please upload at least one image");
//             return false;
//         }
//         if (!form.baseHourlyRate || parseFloat(form.baseHourlyRate) <= 0) {
//             toast.error("Please enter a valid hourly rate");
//             return false;
//         }
//         if (!form.address.trim() || !form.city.trim() || !form.state.trim()) {
//             toast.error("Please complete location details");
//             return false;
//         }
//         return true;
//     };

//     // const handleSubmit = async () => {
//     //     if (!validateForm()) return;
        
//     //     setIsSubmitting(true);
//     //     const fd = new FormData();

//     //     Object.keys(form).forEach(key => {
//     //         if (!["images"].includes(key)) {
//     //             const value = form[key];
//     //             if (value !== undefined && value !== null && value !== "") {
//     //                 fd.append(key, String(value));
//     //             }
//     //         }
//     //     });

//     //     files.forEach(file => {
//     //         fd.append("images", file);
//     //     });

//     //     try {
//     //         const res = await addMachinery(fd);
//     //         if (res.status) {
//     //             toast.success(res.message || "Machinery added successfully!");
//     //             // Reset form
//     //             setForm({
//     //                 title: "",
//     //                 description: "",
//     //                 category: "Excavator",
//     //                 brand: "",
//     //                 model: "",
//     //                 year: "",
//     //                 capacity: "",
//     //                 fuelType: "Diesel",
//     //                 transmission: "Hydraulic",
//     //                 condition: "Good",
//     //                 baseHourlyRate: "",
//     //                 dailyCapPrice: "",
//     //                 weeklyCapPrice: "",
//     //                 monthlyCapPrice: "",
//     //                 availability: true,
//     //                 images: [],
//     //                 address: "",
//     //                 city: "",
//     //                 state: "",
//     //                 pincode: "",
//     //                 latitude: "",
//     //                 longitude: ""
//     //             });
//     //             setFiles([]);
//     //             setPreviewUrls([]);
//     //         } else {
//     //             toast.error(res.message || "Failed to add machinery");
//     //         }
//     //     } catch (error) {
//     //         console.log(error);
//     //         toast.error("Network error. Please try again.");
//     //     } finally {
//     //         setIsSubmitting(false);
//     //     }
//     // };
//     const handleSubmit = async () => {
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
//     const fd = new FormData();

//     Object.keys(form).forEach(key => {
//         if (!["images"].includes(key)) {
//             const value = form[key];
//             if (value !== undefined && value !== null && value !== "") {
//                 fd.append(key, String(value));
//             }
//         }
//     });

//     files.forEach(file => {
//         fd.append("images", file);
//     });

//     try {
//         const res = await addMachinery(fd);
//         // Since your axios instance returns response.data directly,
//         // check if res has success property or message
//         if (res && (res.success === true || res.status === 'success')) {
//             toast.success(res.message || "Machinery added successfully!");
//             // Reset form
//             setForm({
//                 title: "",
//                 description: "",
//                 category: "Excavator",
//                 brand: "",
//                 model: "",
//                 year: "",
//                 capacity: "",
//                 fuelType: "Diesel",
//                 transmission: "Hydraulic",
//                 condition: "Good",
//                 baseHourlyRate: "",
//                 dailyCapPrice: "",
//                 weeklyCapPrice: "",
//                 monthlyCapPrice: "",
//                 availability: true,
//                 images: [],
//                 address: "",
//                 city: "",
//                 state: "",
//                 pincode: "",
//                 latitude: "",
//                 longitude: ""
//             });
//             setFiles([]);
//             setPreviewUrls([]);
//         } else if (res && res.message) {
//             toast.success(res.message);
//             // Reset form anyway if message indicates success
//             setForm({
//                 title: "",
//                 description: "",
//                 category: "Excavator",
//                 brand: "",
//                 model: "",
//                 year: "",
//                 capacity: "",
//                 fuelType: "Diesel",
//                 transmission: "Hydraulic",
//                 condition: "Good",
//                 baseHourlyRate: "",
//                 dailyCapPrice: "",
//                 weeklyCapPrice: "",
//                 monthlyCapPrice: "",
//                 availability: true,
//                 images: [],
//                 address: "",
//                 city: "",
//                 state: "",
//                 pincode: "",
//                 latitude: "",
//                 longitude: ""
//             });
//             setFiles([]);
//             setPreviewUrls([]);
//         } else {
//             toast.error(res?.message || "Failed to add machinery");
//         }
//     } catch (error) {
//         console.log(error);
//         if (error.message?.includes('EBUSY')) {
//             toast.error("File is busy. Please wait a moment and try again.");
//         } else if (error.message?.includes('413')) {
//             toast.error("File too large. Please upload smaller images.");
//         } else {
//             toast.error(error.message || "Network error. Please try again.");
//         }
//     } finally {
//         setIsSubmitting(false);
//     }
// };

//     return (
//         <div className="w-full max-w-6xl mx-auto text-white">
//             <header className="mb-10">
//                 <h1 className="text-3xl font-bold">Add Machinery</h1>
//                 <p className="text-zinc-400 mt-1">
//                     List your equipment so customers can book it.
//                 </p>
//             </header>

//             <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-12">

//                 {/* BASIC INFO */}
//                 <SectionHeading title="Basic Information" />
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <Input label="Machinery Title" icon={<Wrench size={16} />} value={form.title} onChange={(v) => handleChange("title", v)} required />
//                     <Select label="Category" value={form.category} onChange={(v) => handleChange("category", v)}
//                         options={['Excavator', 'Bulldozer', 'Crane', 'Loader', 'Dump Truck', 'Concrete Mixer', 'Roller', 'Grader', 'Backhoe', 'Other']} />
//                     <Input label="Brand" value={form.brand} onChange={(v) => handleChange("brand", v)} />
//                     <Input label="Model" value={form.model} onChange={(v) => handleChange("model", v)} />
//                     <Input label="Year" value={form.year} onChange={(v) => handleChange("year", v)} />
//                     <Input label="Capacity (e.g. 20 Ton)" value={form.capacity} onChange={(v) => handleChange("capacity", v)} />
//                 </div>

//                 <Textarea label="Description" value={form.description} onChange={(v) => handleChange("description", v)} required />

//                 {/* TECH DETAILS */}
//                 <SectionHeading title="Technical Details" />
//                 <div className="grid md:grid-cols-3 gap-6">
//                     <Select label="Fuel Type" value={form.fuelType} onChange={(v) => handleChange("fuelType", v)} options={['Diesel', 'Electric', 'Petrol', 'Hybrid']} />
//                     <Select label="Transmission" value={form.transmission} onChange={(v) => handleChange("transmission", v)} options={['Manual', 'Automatic', 'Hydraulic']} />
//                     <Select label="Condition" value={form.condition} onChange={(v) => handleChange("condition", v)} options={['New', 'Like New', 'Good', 'Used']} />
//                 </div>

//                 {/* PRICING */}
//                 <SectionHeading title="Pricing" />
//                 <div className="grid md:grid-cols-3 gap-6">
//                     <Input label="Hourly Rate" icon={<IndianRupee size={16} />} value={form.baseHourlyRate} onChange={(v) => handleChange("baseHourlyRate", v)} required type="number" />
//                     <Input label="Daily Price" icon={<IndianRupee size={16} />} value={form.dailyCapPrice} onChange={(v) => handleChange("dailyCapPrice", v)} type="number" />
//                     <Input label="Weekly Price" icon={<IndianRupee size={16} />} value={form.weeklyCapPrice} onChange={(v) => handleChange("weeklyCapPrice", v)} type="number" />
//                     <Input label="Monthly Price" icon={<IndianRupee size={16} />} value={form.monthlyCapPrice} onChange={(v) => handleChange("monthlyCapPrice", v)} type="number" />
//                 </div>

//                 {/* IMAGES */}
//                 <SectionHeading title="Machinery Images" />
//                 <label className="border-2 border-dashed border-neutral-700 rounded-xl p-6 flex items-center justify-center cursor-pointer hover:border-[#fbb316] transition-colors">
//                     <ImageIcon className="mr-2" /> Upload Images
//                     <input ref={fileInputRef} type="file" multiple className="hidden" onChange={handleImages} accept="image/*" />
//                 </label>

//                 {previewUrls.length > 0 && (
//                     <div className="grid grid-cols-3 gap-4">
//                         {previewUrls.map((url, idx) => (
//                             <div key={idx} className="relative group">
//                                 <img src={url} alt={`Preview ${idx + 1}`} className="rounded-xl h-32 w-full object-cover border border-neutral-700" />
//                                 <button
//                                     onClick={() => removeImage(idx)}
//                                     className="absolute top-2 right-2 p-1 bg-red-600 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
//                                 >
//                                     <X size={14} />
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 )}

//                 {/* LOCATION */}
//                 <SectionHeading title="Location" />
//                 <div className="grid md:grid-cols-3 gap-6">
//                     <Input label="Address" value={form.address} onChange={(v) => handleChange("address", v)} required />
//                     <Input label="City" value={form.city} onChange={(v) => handleChange("city", v)} required />
//                     <Input label="State" value={form.state} onChange={(v) => handleChange("state", v)} required />
//                     <Input label="Pincode" value={form.pincode} onChange={(v) => handleChange("pincode", v)} />
//                     <Input label="Latitude" value={form.latitude} onChange={(v) => handleChange("latitude", v)} />
//                     <Input label="Longitude" value={form.longitude} onChange={(v) => handleChange("longitude", v)} />
//                 </div>

//                 <button
//                     onClick={handleSubmit}
//                     disabled={isSubmitting}
//                     className="bg-[#fbb316] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#e0a114] flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                     {isSubmitting ? (
//                         <>
//                             <Loader2 size={18} className="animate-spin" />
//                             Submitting...
//                         </>
//                     ) : (
//                         <>
//                             <CheckCircle2 size={18} />
//                             Submit Machinery
//                         </>
//                     )}
//                 </button>

//             </div>
//         </div>
//     );
// }

// function SectionHeading({ title }) {
//     return (
//         <div className="flex items-center gap-4 mb-4">
//             <h3 className="text-sm font-bold text-[#fbb316] uppercase tracking-[0.2em]">{title}</h3>
//             <div className="h-[1px] w-full bg-neutral-800"></div>
//         </div>
//     );
// }

// function Input({ label, value, onChange, icon, required = false, type = "text" }) {
//     return (
//         <div className="space-y-2">
//             <label className="text-xs text-zinc-500 uppercase font-bold flex items-center gap-1">
//                 {label}
//                 {required && <span className="text-[#fbb316] text-xs">*</span>}
//             </label>
//             <div className="relative">
//                 {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">{icon}</div>}
//                 <input
//                     type={type}
//                     value={value}
//                     onChange={(e) => onChange(e.target.value)}
//                     className={`w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm focus:outline-none focus:border-[#fbb316] transition-colors ${icon && 'pl-10'}`}
//                 />
//             </div>
//         </div>
//     );
// }

// function Select({ label, value, onChange, options, required = false }) {
//     return (
//         <div className="space-y-2">
//             <label className="text-xs text-zinc-500 uppercase font-bold flex items-center gap-1">
//                 {label}
//                 {required && <span className="text-[#fbb316] text-xs">*</span>}
//             </label>
//             <select
//                 value={value}
//                 onChange={(e) => onChange(e.target.value)}
//                 className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm focus:outline-none focus:border-[#fbb316] transition-colors"
//             >
//                 {options.map(o => <option key={o}>{o}</option>)}
//             </select>
//         </div>
//     );
// }

// function Textarea({ label, value, onChange, required = false }) {
//     return (
//         <div className="space-y-2">
//             <label className="text-xs text-zinc-500 uppercase font-bold flex items-center gap-1">
//                 {label}
//                 {required && <span className="text-[#fbb316] text-xs">*</span>}
//             </label>
//             <textarea
//                 rows={4}
//                 value={value}
//                 onChange={(e) => onChange(e.target.value)}
//                 className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm focus:outline-none focus:border-[#fbb316] transition-colors resize-none"
//             />
//         </div>
//     );
// }




















// "use client";

// import React, { useState } from "react";
// import {
//     Wrench,
//     FileText,
//     Truck,
//     IndianRupee,
//     MapPin,
//     Image as ImageIcon,
//     CheckCircle2
// } from "lucide-react";
// import { addMachinery } from "@/api/machineryApis";
// import { toast } from "sonner";

// export default function AddMachineryPage() {
//     const [files, setFiles] = useState([]);
//     const [form, setForm] = useState({
//         title: "",
//         description: "",
//         category: "Excavator",
//         brand: "",
//         model: "",
//         year: "",
//         capacity: "",
//         fuelType: "Diesel",
//         transmission: "Hydraulic",
//         condition: "Good",
//         baseHourlyRate: "",
//         dailyCapPrice: "",
//         weeklyCapPrice: "",
//         monthlyCapPrice: "",
//         availability: true,
//         images: [],
//         address: "",
//         city: "",
//         state: "",
//         pincode: "",
//         latitude: "",
//         longitude: ""
//     });

//     const handleChange = (key, value) => {
//         setForm({ ...form, [key]: value });
//     };

//     const handleImages = (e) => {
//         const selectedFiles = Array.from(e.target.files);
//         setFiles(prev => [...prev, ...selectedFiles]); // store files, not base64
//     };

//     const handleSubmit = async () => {
//         const fd = new FormData();

//         // append text fields
//         Object.keys(form).forEach(key => {
//             if (!["images"].includes(key)) {
//                 fd.append(key, form[key]);
//             }
//         });

//         // append files
//         files.forEach(file => {
//             fd.append("images", file);
//         });

//         try {
//             const res = await addMachinery(fd); // SEND FORMDATA
//             if (res.status) {
//                 toast.success(res.message);
//             }
//             console.log(res);
//         } catch (error) {
//             console.log(error);
//         }
//     };


//     return (
//         <div className="w-full max-w-6xl mx-auto text-white">
//             <header className="mb-10">
//                 <h1 className="text-3xl font-bold">Add Machinery</h1>
//                 <p className="text-zinc-400 mt-1">
//                     List your equipment so customers can book it.
//                 </p>
//             </header>

//             <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 space-y-12">

//                 {/* BASIC INFO */}
//                 <SectionHeading title="Basic Information" />
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <Input label="Machinery Title" icon={<Wrench size={16} />} value={form.title} onChange={(v) => handleChange("title", v)} />
//                     <Select label="Category" value={form.category} onChange={(v) => handleChange("category", v)}
//                         options={['Excavator', 'Bulldozer', 'Crane', 'Loader', 'Dump Truck', 'Concrete Mixer', 'Roller', 'Grader', 'Backhoe', 'Other']} />
//                     <Input label="Brand" value={form.brand} onChange={(v) => handleChange("brand", v)} />
//                     <Input label="Model" value={form.model} onChange={(v) => handleChange("model", v)} />
//                     <Input label="Year" value={form.year} onChange={(v) => handleChange("year", v)} />
//                     <Input label="Capacity (e.g. 20 Ton)" value={form.capacity} onChange={(v) => handleChange("capacity", v)} />
//                 </div>

//                 <Textarea label="Description" value={form.description} onChange={(v) => handleChange("description", v)} />

//                 {/* TECH DETAILS */}
//                 <SectionHeading title="Technical Details" />
//                 <div className="grid md:grid-cols-3 gap-6">
//                     <Select label="Fuel Type" value={form.fuelType} onChange={(v) => handleChange("fuelType", v)} options={['Diesel', 'Electric', 'Petrol', 'Hybrid']} />
//                     <Select label="Transmission" value={form.transmission} onChange={(v) => handleChange("transmission", v)} options={['Manual', 'Automatic', 'Hydraulic']} />
//                     <Select label="Condition" value={form.condition} onChange={(v) => handleChange("condition", v)} options={['New', 'Like New', 'Good', 'Used']} />
//                 </div>

//                 {/* PRICING */}
//                 <SectionHeading title="Pricing" />
//                 <div className="grid md:grid-cols-3 gap-6">
//                     <Input label="Hourly Rate" icon={<IndianRupee size={16} />} value={form.baseHourlyRate} onChange={(v) => handleChange("baseHourlyRate", v)} />
//                     <Input label="Daily Price" icon={<IndianRupee size={16} />} value={form.dailyCapPrice} onChange={(v) => handleChange("dailyCapPrice", v)} />
//                     <Input label="Weekly Price" icon={<IndianRupee size={16} />} value={form.weeklyCapPrice} onChange={(v) => handleChange("weeklyCapPrice", v)} />
//                     <Input label="Monthly Price" icon={<IndianRupee size={16} />} value={form.monthlyCapPrice} onChange={(v) => handleChange("monthlyCapPrice", v)} />
//                 </div>

//                 {/* IMAGES */}
//                 <SectionHeading title="Machinery Images" />
//                 <label className="border-2 border-dashed border-neutral-700 rounded-xl p-6 flex items-center justify-center cursor-pointer hover:border-[#fbb316]">
//                     <ImageIcon className="mr-2" /> Upload Images
//                     <input type="file" multiple className="hidden" onChange={handleImages} />
//                 </label>

//                 <div className="grid grid-cols-3 gap-4">
//                     {form.images.map((img, i) => (
//                         <img key={i} src={img} className="rounded-xl h-32 object-cover" />
//                     ))}
//                 </div>

//                 {/* LOCATION */}
//                 <SectionHeading title="Location" />
//                 <div className="grid md:grid-cols-3 gap-6">
//                     <Input label="Address" value={form.address} onChange={(v) => handleChange("address", v)} />
//                     <Input label="City" value={form.city} onChange={(v) => handleChange("city", v)} />
//                     <Input label="State" value={form.state} onChange={(v) => handleChange("state", v)} />
//                     <Input label="Pincode" value={form.pincode} onChange={(v) => handleChange("pincode", v)} />
//                     <Input label="Latitude" value={form.latitude} onChange={(v) => handleChange("latitude", v)} />
//                     <Input label="Longitude" value={form.longitude} onChange={(v) => handleChange("longitude", v)} />
//                 </div>

//                 <button
//                     onClick={handleSubmit}
//                     className="bg-[#fbb316] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#e0a114] flex items-center gap-2"
//                 >
//                     <CheckCircle2 size={18} /> Submit Machinery
//                 </button>

//             </div>
//         </div>
//     );
// }

// function SectionHeading({ title }) {
//     return (
//         <div className="flex items-center gap-4 mb-4">
//             <h3 className="text-sm font-bold text-[#fbb316] uppercase tracking-[0.2em]">{title}</h3>
//             <div className="h-[1px] w-full bg-neutral-800"></div>
//         </div>
//     );
// }

// function Input({ label, value, onChange, icon }) {
//     return (
//         <div className="space-y-2">
//             <label className="text-xs text-zinc-500 uppercase font-bold">{label}</label>
//             <div className="relative">
//                 {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">{icon}</div>}
//                 <input
//                     type="text"
//                     value={value}
//                     onChange={(e) => onChange(e.target.value)}
//                     className={`w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm ${icon && 'pl-10'}`}
//                 />
//             </div>
//         </div>
//     );
// }

// function Select({ label, value, onChange, options }) {
//     return (
//         <div className="space-y-2">
//             <label className="text-xs text-zinc-500 uppercase font-bold">{label}</label>
//             <select
//                 value={value}
//                 onChange={(e) => onChange(e.target.value)}
//                 className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm"
//             >
//                 {options.map(o => <option key={o}>{o}</option>)}
//             </select>
//         </div>
//     );
// }

// function Textarea({ label, value, onChange }) {
//     return (
//         <div className="space-y-2">
//             <label className="text-xs text-zinc-500 uppercase font-bold">{label}</label>
//             <textarea
//                 rows={4}
//                 value={value}
//                 onChange={(e) => onChange(e.target.value)}
//                 className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm"
//             />
//         </div>
//     );
// }
