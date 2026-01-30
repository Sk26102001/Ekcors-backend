"use client";

import React, { useState } from "react";
import {
    Wrench,
    FileText,
    Truck,
    IndianRupee,
    MapPin,
    Image as ImageIcon,
    CheckCircle2
} from "lucide-react";
import { addMachinery } from "@/api/machineryApis";

export default function AddMachineryPage() {
    const [files, setFiles] = useState([]);
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
        pricePerHour: "",
        pricePerDay: "",
        pricePerMonth: "",
        availability: true,
        images: [],
        address: "",
        city: "",
        state: "",
        pincode: "",
        latitude: "",
        longitude: ""
    });

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };

    const handleImages = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(prev => [...prev, ...selectedFiles]); // store files, not base64
    };

    const handleSubmit = async () => {
        const fd = new FormData();

        // append text fields
        Object.keys(form).forEach(key => {
            if (!["images"].includes(key)) {
                fd.append(key, form[key]);
            }
        });

        // append files
        files.forEach(file => {
            fd.append("images", file);
        });

        try {
            const res = await addMachinery(fd); // SEND FORMDATA
            console.log(res);
        } catch (error) {
            console.log(error);
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
                    <Input label="Machinery Title" icon={<Wrench size={16} />} value={form.title} onChange={(v) => handleChange("title", v)} />
                    <Select label="Category" value={form.category} onChange={(v) => handleChange("category", v)}
                        options={['Excavator', 'Bulldozer', 'Crane', 'Loader', 'Dump Truck', 'Concrete Mixer', 'Roller', 'Grader', 'Backhoe', 'Other']} />
                    <Input label="Brand" value={form.brand} onChange={(v) => handleChange("brand", v)} />
                    <Input label="Model" value={form.model} onChange={(v) => handleChange("model", v)} />
                    <Input label="Year" value={form.year} onChange={(v) => handleChange("year", v)} />
                    <Input label="Capacity (e.g. 20 Ton)" value={form.capacity} onChange={(v) => handleChange("capacity", v)} />
                </div>

                <Textarea label="Description" value={form.description} onChange={(v) => handleChange("description", v)} />

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
                    <Input label="Price / Hour" icon={<IndianRupee size={16} />} value={form.pricePerHour} onChange={(v) => handleChange("pricePerHour", v)} />
                    <Input label="Price / Day" icon={<IndianRupee size={16} />} value={form.pricePerDay} onChange={(v) => handleChange("pricePerDay", v)} />
                    <Input label="Price / Month" icon={<IndianRupee size={16} />} value={form.pricePerMonth} onChange={(v) => handleChange("pricePerMonth", v)} />
                </div>

                {/* IMAGES */}
                <SectionHeading title="Machinery Images" />
                <label className="border-2 border-dashed border-neutral-700 rounded-xl p-6 flex items-center justify-center cursor-pointer hover:border-[#fbb316]">
                    <ImageIcon className="mr-2" /> Upload Images
                    <input type="file" multiple className="hidden" onChange={handleImages} />
                </label>

                <div className="grid grid-cols-3 gap-4">
                    {form.images.map((img, i) => (
                        <img key={i} src={img} className="rounded-xl h-32 object-cover" />
                    ))}
                </div>

                {/* LOCATION */}
                <SectionHeading title="Location" />
                <div className="grid md:grid-cols-3 gap-6">
                    <Input label="Address" value={form.address} onChange={(v) => handleChange("address", v)} />
                    <Input label="City" value={form.city} onChange={(v) => handleChange("city", v)} />
                    <Input label="State" value={form.state} onChange={(v) => handleChange("state", v)} />
                    <Input label="Pincode" value={form.pincode} onChange={(v) => handleChange("pincode", v)} />
                    <Input label="Latitude" value={form.latitude} onChange={(v) => handleChange("latitude", v)} />
                    <Input label="Longitude" value={form.longitude} onChange={(v) => handleChange("longitude", v)} />
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-[#fbb316] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#e0a114] flex items-center gap-2"
                >
                    <CheckCircle2 size={18} /> Submit Machinery
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

function Input({ label, value, onChange, icon }) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-zinc-500 uppercase font-bold">{label}</label>
            <div className="relative">
                {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">{icon}</div>}
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm ${icon && 'pl-10'}`}
                />
            </div>
        </div>
    );
}

function Select({ label, value, onChange, options }) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-zinc-500 uppercase font-bold">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm"
            >
                {options.map(o => <option key={o}>{o}</option>)}
            </select>
        </div>
    );
}

function Textarea({ label, value, onChange }) {
    return (
        <div className="space-y-2">
            <label className="text-xs text-zinc-500 uppercase font-bold">{label}</label>
            <textarea
                rows={4}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-3 text-sm"
            />
        </div>
    );
}
