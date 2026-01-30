


"use client";

import React, { useState } from 'react';
import { useParams } from "next/navigation";
import { 
    ShoppingCart, 
    Truck, 
    Clock, 
    CheckCircle2, 
    AlertCircle, 
    Search,
    Filter,
    ArrowUpRight,
    Package
} from "lucide-react";

export default function OrdersPage() {
    const params = useParams();
    const role = params?.role || "customer";

    // Mock Data - In a real app, you'd fetch this based on the role
    const [orders] = useState([
        { 
            id: "ORD-7721", 
            item: "Excavator 300G", 
            customer: "Amit Sharma", 
            vendor: "EkCors Logistics",
            driver: "Suresh Raina",
            date: "2026-01-24", 
            amount: "₹45,000", 
            status: "In Transit" 
        },
        { 
            id: "ORD-8842", 
            item: "Tower Crane L2", 
            customer: "Priya Singh", 
            vendor: "Mega Builders",
            driver: "Ramesh Kumar",
            date: "2026-01-22", 
            amount: "₹1,20,000", 
            status: "Completed" 
        }
    ]);

    return (
        <div className="w-full text-white max-w-6xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold capitalize">{role} Orders</h1>
                <p className="text-zinc-400">View and manage all service requests and bookings</p>
            </header>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <StatCard label="Active Orders" count="12" icon={<Clock className="text-[#fbb316]" />} />
                <StatCard label="Completed" count="148" icon={<CheckCircle2 className="text-green-500" />} />
                <StatCard label="Cancelled" count="3" icon={<AlertCircle className="text-red-500" />} />
            </div>

            {/* Table Section */}
            <div className="bg-neutral-800/50 rounded-2xl border border-neutral-800 overflow-hidden shadow-xl">
                <div className="p-4 border-b border-neutral-800 flex flex-col md:flex-row gap-4 justify-between items-center bg-neutral-900/30">
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-2.5 text-zinc-500" size={18} />
                        <input 
                            type="text" 
                            placeholder="Search orders..." 
                            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2 pl-10 text-sm outline-none focus:border-[#fbb316] transition"
                        />
                    </div>
                    <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition text-sm px-4 py-2 border border-neutral-700 rounded-lg">
                        <Filter size={16} /> Filter
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-neutral-900/50 text-zinc-500 text-[10px] uppercase tracking-widest font-bold">
                                <th className="p-4">Order ID</th>
                                <th className="p-4">Machine/Item</th>
                                
                                {/* --- ROLE SPECIFIC COLUMNS --- */}
                                {role === "vendor" && <th className="p-4">Customer</th>}
                                {role === "customer" && <th className="p-4">Vendor</th>}
                                {role === "driver" && <th className="p-4">Pickup Location</th>}
                                {(role === "vendor" || role === "customer") && <th className="p-4">Driver</th>}

                                <th className="p-4">Date</th>
                                <th className="p-4">Amount</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 text-sm">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-neutral-700/20 transition-colors">
                                    <td className="p-4 font-medium text-[#fbb316]">{order.id}</td>
                                    <td className="p-4 flex items-center gap-3">
                                        <div className="p-2 bg-neutral-800 rounded-lg">
                                            <Package size={16} className="text-zinc-400"/>
                                        </div>
                                        {order.item}
                                    </td>

                                    {/* --- ROLE SPECIFIC DATA --- */}
                                    {role === "vendor" && <td className="p-4">{order.customer}</td>}
                                    {role === "customer" && <td className="p-4">{order.vendor}</td>}
                                    {role === "driver" && <td className="p-4">Mumbai Hub</td>}
                                    {(role === "vendor" || role === "customer") && <td className="p-4">{order.driver}</td>}

                                    <td className="p-4 text-zinc-400">{order.date}</td>
                                    <td className="p-4 font-semibold">{order.amount}</td>
                                    <td className="p-4">
                                        <StatusBadge status={order.status} />
                                    </td>
                                    <td className="p-4 text-center">
                                        <button className="p-2 hover:bg-neutral-700 rounded-lg transition group">
                                            <ArrowUpRight size={18} className="text-zinc-500 group-hover:text-[#fbb316]" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Helper Components
function StatCard({ label, count, icon }) {
    return (
        <div className="bg-neutral-800/50 border border-neutral-800 p-5 rounded-2xl flex items-center justify-between">
            <div>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">{label}</p>
                <h3 className="text-2xl font-bold">{count}</h3>
            </div>
            <div className="p-3 bg-neutral-900 rounded-xl">
                {icon}
            </div>
        </div>
    );
}

function StatusBadge({ status }) {
    const styles = {
        "Completed": "bg-green-500/10 text-green-500 border-green-500/20",
        "In Transit": "bg-blue-500/10 text-blue-500 border-blue-500/20",
        "Pending": "bg-[#fbb316]/10 text-[#fbb316] border-[#fbb316]/20",
        "Cancelled": "bg-red-500/10 text-red-500 border-red-500/20",
    };

    return (
        <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${styles[status] || styles["Pending"]}`}>
            {status}
        </span>
    );
}