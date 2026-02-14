"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import {
    Clock,
    CheckCircle2,
    AlertCircle,
    Search,
    Filter,
    ArrowUpRight,
    Package,
} from "lucide-react";

export default function OrdersPage() {
    const params = useParams();
    const role = params?.role || "customer";

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedBooking, setSelectedBooking] = useState(null);
    const [showDriverModal, setShowDriverModal] = useState(false);

    // ✅ Fetch Vendor Bookings
    useEffect(() => {
        // if (role !== "vendor") return;

        async function fetchBookings() {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/bookings/vendor-bookings`,
                    { withCredentials: true }
                );
                setOrders(res.data.data);
            } catch (err) {
                toast.error("Failed to load bookings");
            } finally {
                setLoading(false);
            }
        }

        fetchBookings();
    }, [role]);

    // ✅ Accept
    const openAssignDriver = (booking) => {
        setSelectedBooking(booking);
        setShowDriverModal(true);
    };

    // ✅ Decline
    const declineBooking = async (bookingId) => {
        try {
            await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/bookings/update-status/${bookingId}`,
                { status: "cancelled" },
                { withCredentials: true }
            );

            toast.success("Booking declined");

            setOrders((prev) =>
                prev.map((b) =>
                    b._id === bookingId ? { ...b, status: "cancelled" } : b
                )
            );
        } catch (err) {
            toast.error(err?.response?.data?.message || "Failed");
        }
    };

    return (
        <div className="w-full text-white max-w-6xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-semibold capitalize">{role} Orders</h1>
                <p className="text-zinc-400">
                    View and manage all service requests and bookings
                </p>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <StatCard
                    label="Active Orders"
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

            {/* Table */}
            <div className="bg-neutral-800/50 rounded-2xl border border-neutral-800 overflow-hidden shadow-xl">
                <div className="p-4 border-b border-neutral-800 flex justify-between items-center">
                    <div className="relative w-72">
                        <Search
                            className="absolute left-3 top-2.5 text-zinc-500"
                            size={18}
                        />
                        <input
                            placeholder="Search orders..."
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
                        No bookings yet
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-neutral-900/50 text-zinc-500 text-xs uppercase">
                                    <th className="p-4">Order</th>
                                    <th className="p-4">Machine</th>
                                    <th className="p-4">Customer</th>
                                    <th className="p-4">Driver</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Amount</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order._id} className="border-t border-neutral-800">
                                        <td className="p-4 text-[#fbb316]">
                                            {order._id.slice(-6).toUpperCase()}
                                        </td>

                                        <td className="p-4 flex gap-2 items-center">
                                            <Package size={16} />
                                            {order.vehicle?.title}
                                        </td>

                                        <td className="p-4">{order.user?.name}</td>
                                        <td className="p-4">
                                            {order.driver?.name || "-"}
                                        </td>

                                        <td className="p-4 text-zinc-400">
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </td>

                                        <td className="p-4">₹{order.totalAmount}</td>

                                        <td className="p-4">
                                            <StatusBadge status={order.status} />
                                        </td>

                                        <td className="p-4 text-center">
                                            {order.status === "pending" ? (
                                                <div className="flex gap-2 justify-center">
                                                    <button
                                                        onClick={() => openAssignDriver(order)}
                                                        className="px-3 py-1 text-xs bg-green-600 rounded-lg"
                                                    >
                                                        Accept
                                                    </button>

                                                    <button
                                                        onClick={() => declineBooking(order._id)}
                                                        className="px-3 py-1 text-xs bg-red-600 rounded-lg"
                                                    >
                                                        Decline
                                                    </button>
                                                </div>
                                            ) : (
                                                <ArrowUpRight size={18} />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {showDriverModal && (
                <DriverAssignModal
                    booking={selectedBooking}
                    onClose={() => setShowDriverModal(false)}
                    onAssigned={(updated) => {
                        setOrders((prev) =>
                            prev.map((b) => (b._id === updated._id ? updated : b))
                        );
                    }}
                />
            )}
        </div>
    );
}

/* ---------------- Helper Components ---------------- */

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
        pending: "bg-yellow-500/10 text-yellow-500",
        cancelled: "bg-red-500/10 text-red-500",
    };

    return (
        <span className={`px-2 py-1 rounded ${styles[status]}`}>
            {status}
        </span>
    );
}

function DriverAssignModal({ booking, onClose, onAssigned }) {
    const [drivers, setDrivers] = useState([]);
    const [selected, setSelected] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchDrivers() {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/users/vendor-drivers`,
                    { withCredentials: true }
                );
                console.log(res)

                // 🔥 Correct backend structure
                setDrivers(res.data.data.drivers);
            } catch (err) {
                toast.error("Failed to load drivers");
            } finally {
                setLoading(false);
            }
        }

        fetchDrivers();
    }, []);

    const assignDriver = async () => {
        if (!selected) {
            toast.error("Please select a driver");
            return;
        }

        try {
            const res = await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/bookings/assign-driver/${booking._id}`,
                { driverId: selected },
                { withCredentials: true }
            );


            toast.success("Driver assigned");
            onAssigned(res.data.data);
            onClose();
        } catch (err) {
            toast.error(err?.response?.data?.message || "Failed");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-700 w-full max-w-md">
                <h3 className="text-lg font-semibold mb-4">
                    Assign Driver
                </h3>

                {loading ? (
                    <p className="text-sm text-zinc-400">Loading drivers...</p>
                ) : drivers.length === 0 ? (
                    <p className="text-sm text-red-400">
                        No drivers found. Please add drivers first.
                    </p>
                ) : (
                    <select
                        value={selected}
                        onChange={(e) => setSelected(e.target.value)}
                        className="w-full bg-neutral-800 border border-neutral-700 p-2 rounded-lg mb-4"
                    >
                        <option value="">Select driver</option>
                        {drivers.map((d) => (
                            <option key={d._id} value={d._id}>
                                {d.fullName}
                            </option>
                        ))}
                    </select>
                )}

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-neutral-700 rounded-lg"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={assignDriver}
                        className="bg-[#fbb316] text-black px-4 py-2 rounded-lg"
                        disabled={loading || drivers.length === 0}
                    >
                        Assign
                    </button>
                </div>
            </div>
        </div>
    );
}

