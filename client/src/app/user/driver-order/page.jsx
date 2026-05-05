"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
    Clock,
    CheckCircle2,
    AlertCircle,
    Search,
    Filter,
    Package,
} from "lucide-react";
import { getDriverBookings } from "@/api/userApis";

export default function DriverOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    /* ================= FETCH DRIVER BOOKINGS ================= */
    useEffect(() => {
        async function fetchBookings() {
            try {
                const res = await getDriverBookings();

                setOrders(res.data);
            } catch (err) {
                toast.error("Failed to load bookings");
            } finally {
                setLoading(false);
            }
        }

        fetchBookings();
    }, []);

    /* ================= STATUS UPDATE ================= */

    const updateStatus = async (id, status) => {
        try {
            await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/bookings/update-status/${id}`,
                { status },
                { withCredentials: true }
            );

            toast.success("Status updated");

            setOrders((prev) =>
                prev.map((o) =>
                    o._id === id ? { ...o, status } : o
                )
            );
        } catch (err) {
            toast.error(err?.response?.data?.message || "Failed");
        }
    };

    console.log(orders)

    return (
        <div className="w-full text-white max-w-6xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold">Driver Orders</h1>
                <p className="text-zinc-400">
                    Manage assigned bookings and deliveries
                </p>
            </header>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <StatCard
                    label="Active"
                    count={orders.filter((o) => o.status !== "completed").length}
                    icon={<Clock className="text-[#fbb316]" />}
                />
                <StatCard
                    label="Completed"
                    count={orders.filter((o) => o.status === "completed").length}
                    icon={<CheckCircle2 className="text-green-500" />}
                />
                <StatCard
                    label="Cancelled"
                    count={orders.filter((o) => o.status === "cancelled").length}
                    icon={<AlertCircle className="text-red-500" />}
                />
            </div>

            {/* ================= TABLE ================= */}
            <div className="bg-neutral-800/50 rounded-2xl border border-neutral-800 overflow-hidden shadow-xl">
                <div className="p-4 border-b border-neutral-800 flex justify-between">
                    <div className="relative w-72">
                        <Search
                            className="absolute left-3 top-2.5 text-zinc-500"
                            size={18}
                        />
                        <input
                            placeholder="Search..."
                            className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2 pl-10"
                        />
                    </div>

                    <button className="flex gap-2 text-sm px-4 py-2 border border-neutral-700 rounded-lg">
                        <Filter size={16} /> Filter
                    </button>
                </div>

                {loading ? (
                    <div className="p-10 text-center text-zinc-400">Loading...</div>
                ) : orders.length === 0 ? (
                    <div className="p-10 text-center text-zinc-400">
                        No assigned orders
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-neutral-900/50 text-zinc-500 text-xs uppercase">
                                    <th className="p-4">Order</th>
                                    <th className="p-4">Machine</th>
                                    <th className="p-4">Customer</th>
                                    <th className="p-4">Schedule</th>
                                    <th className="p-4">Amount</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map((order) => (
                                    <tr
                                        key={order._id}
                                        className="border-t border-neutral-800"
                                    >
                                        <td className="p-4 text-[#fbb316]">
                                            {order._id.slice(-6).toUpperCase()}
                                        </td>

                                        <td className="p-4 flex gap-2 items-center">
                                            <Package size={16} />
                                            {order.vehicle?.title}
                                        </td>

                                        <td className="p-4">{order.user?.fullName}</td>

                                        <td className="p-4 text-zinc-400">
                                            {new Date(order.startDateTime).toLocaleString()}
                                            <br />
                                            {new Date(order.endDateTime).toLocaleString()}
                                        </td>

                                        <td className="p-4">₹{order.totalAmount}</td>

                                        <td className="p-4">
                                            <StatusBadge status={order.status} />
                                        </td>

                                        {/* ===== DRIVER ACTIONS ===== */}
                                        <td className="p-4 text-center">
                                            {order.status === "driver_assigned" && (
                                                <button
                                                    onClick={() =>
                                                        updateStatus(order._id, "started")
                                                    }
                                                    className="px-3 py-1 text-xs bg-blue-600 rounded-lg"
                                                >
                                                    Start Job
                                                </button>
                                            )}
                                            {order.status === "started" && (
                                                <button
                                                    onClick={() =>
                                                        updateStatus(order._id, "on_the_way")
                                                    }
                                                    className="px-3 py-1 text-xs bg-blue-600 rounded-lg"
                                                >
                                                    DEPART NOW
                                                </button>
                                            )}

                                            {order.status === "in_progress" && (
                                                <button
                                                    onClick={() =>
                                                        updateStatus(order._id, "completed")
                                                    }
                                                    className="px-3 py-1 text-xs bg-green-600 rounded-lg"
                                                >
                                                    Complete
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

/* ================= COMPONENTS ================= */

function StatCard({ label, count, icon }) {
    return (
        <div className="bg-neutral-800 p-5 rounded-xl flex justify-between">
            <div>
                <p className="text-xs text-zinc-500">{label}</p>
                <h3 className="text-2xl font-bold">{count}</h3>
            </div>
            <div>{icon}</div>
        </div>
    );
}

function StatusBadge({ status }) {
    const styles = {
        completed: "bg-green-500/10 text-green-500",
        driver_assigned: "bg-blue-500/10 text-blue-500",
        started: "bg-green-500/10 text-green-500",
        on_the_way: "bg-yellow-500/10 text-yellow-500",
        pending: "bg-orange-500/10 text-orange-500",
        cancelled: "bg-red-500/10 text-red-500",
    };

    return (
        <span className={`px-2 py-1 text-xs rounded-full uppercase ${styles[status]}`}>
            {status.replaceAll("_", " ")}
        </span>
    );
}
