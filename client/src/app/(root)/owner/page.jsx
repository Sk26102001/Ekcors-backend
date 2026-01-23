"use client"; // <--- Add this at the very top

import React, { useState } from 'react';
import { 
    Plus, 
    Truck, 
    Settings, 
    Trash2, 
    LayoutDashboard, 
    Package, 
    AlertCircle,
    X
} from "lucide-react";

const initialFleet = [
    { id: 1, name: "Hydraulic Excavator 320G", category: "Excavator", status: "Available", price: "₹15,000" },
    { id: 2, name: "Mobile Crane 50T", category: "Crane", status: "Rented", price: "₹45,000" },
];

export default function page() {
    const [fleet, setFleet] = useState(initialFleet);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-neutral-700 text-white">
            <div className="flex flex-col md:flex-row">
                {/* Desktop Sidebar */}
                <aside className="w-full md:w-64 bg-neutral-800 p-6 border-r border-neutral-600 md:min-h-screen">
                    <h2 className="text-yellowClr text-2xl font-bold mb-8">EkCors Admin</h2>
                    <nav className="space-y-2">
                        <button className="w-full flex items-center gap-3 text-yellowClr bg-yellowClr/10 p-3 rounded-xl">
                            <LayoutDashboard size={20} />
                            <span className="font-medium">Inventory</span>
                        </button>
                        <button className="w-full flex items-center gap-3 text-zinc-400 hover:text-white p-3 transition">
                            <Package size={20} />
                            <span>Bookings</span>
                        </button>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:p-10">
                    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                        <div>
                            <h1 className="text-3xl font-semibold">Fleet Management</h1>
                            <p className="text-zinc-400">Add or edit your construction machinery</p>
                        </div>
                        <button 
                            onClick={() => setIsModalOpen(true)}
                            className="bg-yellowClr hover:scale-105 transition-transform text-neutral-900 font-bold py-3 px-6 rounded-2xl flex items-center gap-2"
                        >
                            <Plus size={20} />
                            List New Machine
                        </button>
                    </header>

                    {/* Fleet Table */}
                    <div className="bg-neutral-800 rounded-3xl border border-neutral-600 overflow-hidden">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-neutral-900/50 text-zinc-400 text-sm">
                                <tr>
                                    <th className="p-5 font-medium">Machine</th>
                                    <th className="p-5 font-medium">Status</th>
                                    <th className="p-5 font-medium">Daily Rate</th>
                                    <th className="p-5 font-medium text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-600">
                                {fleet.map((item) => (
                                    <tr key={item.id} className="hover:bg-neutral-600/20 transition">
                                        <td className="p-5 flex items-center gap-3">
                                            <div className="p-2 bg-yellowClr/10 rounded-lg text-yellowClr">
                                                <Truck size={20} />
                                            </div>
                                            <span className="font-medium">{item.name}</span>
                                        </td>
                                        <td className="p-5">
                                            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                                                item.status === 'Available' 
                                                ? 'bg-green-500/10 text-green-500' 
                                                : 'bg-yellow-500/10 text-yellow-500'
                                            }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="p-5 font-mono text-yellowClr">{item.price}</td>
                                        <td className="p-5 text-right">
                                            <button className="text-zinc-400 hover:text-red-500 p-2 transition">
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>

            {/* Simple Modal Backdrop */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
                    <div className="bg-neutral-800 w-full max-w-md rounded-3xl border border-neutral-600 p-8 relative">
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-zinc-400 hover:text-white"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-6">Add New Machine</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="text-sm text-zinc-400 block mb-1">Machine Name</label>
                                <input type="text" className="w-full bg-neutral-700 border border-neutral-600 rounded-xl p-3 focus:outline-none focus:border-yellowClr transition" placeholder="e.g. JCB 3DX Eco" />
                            </div>
                            <div>
                                <label className="text-sm text-zinc-400 block mb-1">Daily Rental Price (₹)</label>
                                <input type="number" className="w-full bg-neutral-700 border border-neutral-600 rounded-xl p-3 focus:outline-none focus:border-yellowClr transition" placeholder="5000" />
                            </div>
                            <button type="button" className="w-full bg-yellowClr text-neutral-900 font-bold py-4 rounded-xl mt-4">
                                Save Listing
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}