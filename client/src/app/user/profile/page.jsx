"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from "next/navigation";
import { 
    User, Mail, Phone, MapPin, Camera, Edit2, 
    Save, X, ShieldCheck, Building2, CreditCard, 
    Briefcase, Award, Upload, Globe, Hash
} from "lucide-react";

export default function UserProfile() {
    const params = useParams();
    const role = params?.role || "customer";

    const [isEditing, setIsEditing] = useState(false);
    
    const [user, setUser] = useState({
        name: "Rajesh Kumar",
        email: "rajesh.kumar@ekcors.com",
        phone: "+91 98765 43210",
        address: "123 Business Park",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400001",
        companyName: "EkCors Logistics",
        gstNumber: "27AAAAA0000A1Z5",
        profession: "Contractor",
        licenseNumber: "DL-1420230005678",
        experience: "10",
        aadharNumber: "XXXX-XXXX-1234",
        avatar: "" 
    });

    const [tempUser, setTempUser] = useState({ ...user });

    useEffect(() => {
        setTempUser({ ...user });
    }, [user]);

    const handleSave = () => {
        setUser(tempUser);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempUser(user);
        setIsEditing(false);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempUser({ ...tempUser, avatar: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-full text-white max-w-6xl mx-auto p-4 md:p-6">
            <header className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-bold capitalize tracking-tight">{role} Profile</h1>
                    <p className="text-zinc-400 mt-1">Manage your identity, security, and business information.</p>
                </div>
                
                {!isEditing ? (
                    <button 
                        onClick={() => setIsEditing(true)}
                        className="bg-[#fbb316] text-neutral-900 font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 hover:bg-[#e0a114] transition-all shadow-lg"
                    >
                        <Edit2 size={18} /> Edit Profile
                    </button>
                ) : (
                    <div className="flex gap-3">
                        <button 
                            onClick={handleSave}
                            className="bg-green-600 text-white font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 hover:bg-green-700 transition shadow-lg"
                        >
                            <Save size={18} /> Save
                        </button>
                        <button 
                            onClick={handleCancel}
                            className="bg-neutral-800 text-zinc-400 border border-neutral-700 font-bold py-2.5 px-6 rounded-xl flex items-center gap-2 hover:bg-neutral-700 transition"
                        >
                            <X size={18} /> Cancel
                        </button>
                    </div>
                )}
            </header>

            <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
                {/* Banner Background */}
                <div className="h-32 bg-gradient-to-r from-[#fbb316]/10 via-neutral-800 to-neutral-900 border-b border-neutral-800"></div>
                
                <div className="px-6 md:px-10 pb-10">
                    {/* Hero Section */}
                    <div className="relative -mt-12 mb-10 flex flex-col sm:flex-row items-end gap-6">
                        <div className="relative group">
                            <div className="w-36 h-36 bg-neutral-800 rounded-3xl border-4 border-neutral-900 flex items-center justify-center text-[#fbb316] shadow-xl overflow-hidden">
                                {tempUser.avatar ? (
                                    <img src={tempUser.avatar} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <User size={70} strokeWidth={1.5} />
                                )}
                            </div>
                            {isEditing && (
                                <label className="absolute -bottom-2 -right-2 p-3 bg-[#fbb316] text-neutral-900 rounded-2xl hover:scale-110 transition-transform shadow-xl cursor-pointer">
                                    <Camera size={20} />
                                    <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                                </label>
                            )}
                        </div>
                        
                        <div className="flex-1 mb-2">
                            <h2 className="text-3xl font-bold">{user.name}</h2>
                            <div className="flex items-center gap-2 text-[#fbb316] mt-1">
                                <ShieldCheck size={18} />
                                <span className="text-sm font-semibold uppercase tracking-widest">Verified {role}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {/* 1. Personal Details */}
                        <section>
                            <SectionHeading title="Personal Details" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <InputField label="Full Name" value={tempUser.name} icon={<User size={18}/>} isEditing={isEditing} 
                                    onChange={(val) => setTempUser({...tempUser, name: val})} />
                                <InputField label="Email Address" value={tempUser.email} icon={<Mail size={18}/>} isEditing={isEditing} 
                                    onChange={(val) => setTempUser({...tempUser, email: val})} />
                                <InputField label="Phone Number" value={tempUser.phone} icon={<Phone size={18}/>} isEditing={isEditing} 
                                    onChange={(val) => setTempUser({...tempUser, phone: val})} />
                            </div>
                        </section>

                        {/* 2. Address Information */}
                        <section>
                            <SectionHeading title="Address Information" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="md:col-span-2 lg:col-span-1">
                                    <InputField label="Street Address" value={tempUser.address} icon={<MapPin size={18}/>} isEditing={isEditing} 
                                        onChange={(val) => setTempUser({...tempUser, address: val})} />
                                </div>
                                <InputField label="City" value={tempUser.city} icon={<Building2 size={18}/>} isEditing={isEditing} 
                                    onChange={(val) => setTempUser({...tempUser, city: val})} />
                                <div className="grid grid-cols-2 gap-4">
                                    <InputField label="State" value={tempUser.state} isEditing={isEditing} 
                                        onChange={(val) => setTempUser({...tempUser, state: val})} />
                                    <InputField label="Pincode" value={tempUser.pincode} isEditing={isEditing} 
                                        onChange={(val) => setTempUser({...tempUser, pincode: val})} />
                                </div>
                            </div>
                        </section>

                        {/* 3. Role Specific / Business Details */}
                        <section className="bg-neutral-800/30 p-6 rounded-2xl border border-neutral-800">
                            <SectionHeading title={`${role.charAt(0).toUpperCase() + role.slice(1)} Details`} />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {role === "vendor" && (
                                    <>
                                        <InputField label="Company Name" value={tempUser.companyName} icon={<Building2 size={18}/>} isEditing={isEditing} 
                                            onChange={(val) => setTempUser({...tempUser, companyName: val})} />
                                        <InputField label="GST Number" value={tempUser.gstNumber} icon={<CreditCard size={18}/>} isEditing={isEditing} 
                                            onChange={(val) => setTempUser({...tempUser, gstNumber: val})} />
                                    </>
                                )}

                                {role === "customer" && (
                                    <InputField label="Profession" value={tempUser.profession} icon={<Briefcase size={18}/>} isEditing={isEditing} 
                                        onChange={(val) => setTempUser({...tempUser, profession: val})} />
                                )}

                                {role === "driver" && (
                                    <>
                                        <InputField label="License Number" value={tempUser.licenseNumber} icon={<Award size={18}/>} isEditing={isEditing} 
                                            onChange={(val) => setTempUser({...tempUser, licenseNumber: val})} />
                                        <InputField label="Aadhar Number" value={tempUser.aadharNumber} icon={<Hash size={18}/>} isEditing={isEditing} 
                                            onChange={(val) => setTempUser({...tempUser, aadharNumber: val})} />
                                        <InputField label="Experience (Years)" value={tempUser.experience} icon={<Briefcase size={18}/>} isEditing={isEditing} 
                                            onChange={(val) => setTempUser({...tempUser, experience: val})} />
                                        
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Documents</label>
                                            <div className="h-[52px] border-2 border-dashed border-neutral-700 rounded-xl flex items-center justify-center text-zinc-500 text-sm hover:border-[#fbb316] hover:text-[#fbb316] transition-all cursor-pointer bg-neutral-900/50">
                                                <Upload size={16} className="mr-2"/> Upload License Copy
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Sub-components for cleaner code
function SectionHeading({ title }) {
    return (
        <div className="flex items-center gap-4 mb-6">
            <h3 className="text-sm font-bold text-[#fbb316] uppercase tracking-[0.2em] whitespace-nowrap">{title}</h3>
            <div className="h-[1px] w-full bg-neutral-800"></div>
        </div>
    );
}

function InputField({ label, value, icon, isEditing, onChange }) {
    return (
        <div className="space-y-2 group">
            <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1 group-focus-within:text-[#fbb316] transition-colors">
                {label}
            </label>
            <div className="relative">
                {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#fbb316] transition-colors">{icon}</div>}
                <input 
                    disabled={!isEditing}
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`w-full bg-neutral-950/50 border transition-all duration-200 outline-none rounded-2xl p-3.5 text-sm ${icon ? 'pl-12' : 'px-5'} 
                        ${isEditing 
                            ? 'border-neutral-700 focus:border-[#fbb316] focus:ring-1 focus:ring-[#fbb316]/20 bg-neutral-800' 
                            : 'border-transparent text-zinc-400 cursor-not-allowed'}`}
                />
            </div>
        </div>
    );
}