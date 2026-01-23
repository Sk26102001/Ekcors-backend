// function page() {
//     return (
//         <>
//             <div>
                
//             </div>
//         </>
//     )
// }

// export default page






"use client";

import React, { useState } from 'react';
import { 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Camera, 
    Edit2, 
    Save, 
    X, 
    LayoutDashboard, 
    Package, 
    ShieldCheck
} from "lucide-react";

export default function UserProfile() {
    // State for user data
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: "Rajesh Kumar",
        email: "rajesh.kumar@ekcors.com",
        phone: "+91 98765 43210",
        location: "Mumbai, Maharashtra",
        role: "Fleet Owner",
        bio: "Providing heavy machinery solutions for over 10 years. Specializing in high-capacity cranes and earthmovers.",
        avatar: "" // Placeholder for image URL
    });

    // Temporary state for editing
    const [tempUser, setTempUser] = useState({ ...user });

    const handleSave = () => {
        setUser(tempUser);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempUser(user);
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-neutral-700 text-white font-sans">
            <div className="flex flex-col md:flex-row">
                {/* Desktop Sidebar (Matching your design) */}
                <aside className="w-full md:w-64 bg-neutral-800 p-6 border-r border-neutral-600 md:min-h-screen">
                    <h2 className="text-yellowClr text-2xl font-bold mb-8">EkCors Admin</h2>
                    <nav className="space-y-2">
                        <button className="w-full flex items-center gap-3 text-zinc-400 hover:text-white p-3 transition">
                            <LayoutDashboard size={20} />
                            <span>Inventory</span>
                        </button>
                        <button className="w-full flex items-center gap-3 text-zinc-400 hover:text-white p-3 transition">
                            <Package size={20} />
                            <span>Bookings</span>
                        </button>
                        <button className="w-full flex items-center gap-3 text-yellowClr bg-yellowClr/10 p-3 rounded-xl">
                            <User size={20} />
                            <span className="font-medium">Profile</span>
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:p-10 max-w-4xl">
                    <header className="mb-10">
                        <h1 className="text-3xl font-semibold">Account Settings</h1>
                        <p className="text-zinc-400">Manage your profile information and preferences</p>
                    </header>

                    {/* Profile Card */}
                    <div className="bg-neutral-800 rounded-3xl border border-neutral-600 overflow-hidden shadow-xl">
                        {/* Banner/Header Decor */}
                        <div className="h-32 bg-gradient-to-r from-yellowClr/20 to-neutral-800 border-b border-neutral-600"></div>
                        
                        <div className="px-8 pb-8">
                            {/* Profile Image & Name Section */}
                            <div className="relative -mt-12 mb-6 flex flex-col sm:flex-row items-end gap-4">
                                <div className="relative group">
                                    <div className="w-24 h-24 bg-neutral-700 rounded-2xl border-4 border-neutral-800 flex items-center justify-center text-yellowClr shadow-lg overflow-hidden">
                                        <User size={48} />
                                    </div>
                                    <button className="absolute bottom-0 right-0 p-2 bg-yellowClr text-neutral-900 rounded-lg hover:scale-110 transition shadow-lg">
                                        <Camera size={16} />
                                    </button>
                                </div>
                                <div className="flex-1 mb-2">
                                    <h2 className="text-2xl font-bold">{user.name}</h2>
                                    <div className="flex items-center gap-2 text-yellowClr text-sm font-medium">
                                        <ShieldCheck size={16} />
                                        {user.role}
                                    </div>
                                </div>
                                {!isEditing ? (
                                    <button 
                                        onClick={() => setIsEditing(true)}
                                        className="bg-neutral-700 hover:bg-neutral-600 border border-neutral-600 py-2 px-5 rounded-xl flex items-center gap-2 transition"
                                    >
                                        <Edit2 size={18} />
                                        Edit Profile
                                    </button>
                                ) : (
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={handleSave}
                                            className="bg-yellowClr text-neutral-900 font-bold py-2 px-5 rounded-xl flex items-center gap-2 hover:scale-105 transition"
                                        >
                                            <Save size={18} />
                                            Save
                                        </button>
                                        <button 
                                            onClick={handleCancel}
                                            className="bg-red-500/10 text-red-500 font-bold py-2 px-5 rounded-xl flex items-center gap-2 hover:bg-red-500/20 transition"
                                        >
                                            <X size={18} />
                                            Cancel
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                {/* Name Field */}
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-3.5 text-zinc-500" size={18} />
                                        <input 
                                            disabled={!isEditing}
                                            type="text"
                                            value={tempUser.name}
                                            onChange={(e) => setTempUser({...tempUser, name: e.target.value})}
                                            className={`w-full bg-neutral-900/50 border ${isEditing ? 'border-yellowClr/50 focus:border-yellowClr' : 'border-neutral-600'} rounded-xl p-3 pl-10 transition outline-none`}
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3.5 text-zinc-500" size={18} />
                                        <input 
                                            disabled={!isEditing}
                                            type="email"
                                            value={tempUser.email}
                                            onChange={(e) => setTempUser({...tempUser, email: e.target.value})}
                                            className={`w-full bg-neutral-900/50 border ${isEditing ? 'border-yellowClr/50 focus:border-yellowClr' : 'border-neutral-600'} rounded-xl p-3 pl-10 transition outline-none`}
                                        />
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3.5 text-zinc-500" size={18} />
                                        <input 
                                            disabled={!isEditing}
                                            type="text"
                                            value={tempUser.phone}
                                            onChange={(e) => setTempUser({...tempUser, phone: e.target.value})}
                                            className={`w-full bg-neutral-900/50 border ${isEditing ? 'border-yellowClr/50 focus:border-yellowClr' : 'border-neutral-600'} rounded-xl p-3 pl-10 transition outline-none`}
                                        />
                                    </div>
                                </div>

                                {/* Location Field */}
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">Location</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3.5 text-zinc-500" size={18} />
                                        <input 
                                            disabled={!isEditing}
                                            type="text"
                                            value={tempUser.location}
                                            onChange={(e) => setTempUser({...tempUser, location: e.target.value})}
                                            className={`w-full bg-neutral-900/50 border ${isEditing ? 'border-yellowClr/50 focus:border-yellowClr' : 'border-neutral-600'} rounded-xl p-3 pl-10 transition outline-none`}
                                        />
                                    </div>
                                </div>

                                {/* Bio Field (Full Width) */}
                                <div className="space-y-1 md:col-span-2">
                                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">About / Bio</label>
                                    <textarea 
                                        disabled={!isEditing}
                                        rows={3}
                                        value={tempUser.bio}
                                        onChange={(e) => setTempUser({...tempUser, bio: e.target.value})}
                                        className={`w-full bg-neutral-900/50 border ${isEditing ? 'border-yellowClr/50 focus:border-yellowClr' : 'border-neutral-600'} rounded-xl p-3 transition outline-none resize-none`}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Info */}
                    <p className="mt-6 text-center text-sm text-zinc-500">
                        Profile created on Jan 12, 2024. Your data is encrypted and secure.
                    </p>
                </main>
            </div>
        </div>
    );
}