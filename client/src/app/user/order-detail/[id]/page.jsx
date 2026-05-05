"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "@/context/useAuth";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";


const pickupIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [34, 34],
});

const dropIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
    iconSize: [34, 34],
});

const driverIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/743/743131.png",
    iconSize: [38, 38],
});


const steps = [
    "driver_assigned",
    "started",
    "on_the_way",
    "reached",
    "pending_payment",
    "completed",
];

export default function OrderDetailsPage() {
    const { id } = useParams();
    const { user } = useAuth();
    const role = user?.role;

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    const pickup = [26.4499, 80.3319];
    const drop = [26.48, 80.32];

    const [driver, setDriver] = useState([26.46, 80.325]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDriver((prev) => [
                prev[0] + (Math.random() - 0.5) * 0.001,
                prev[1] + (Math.random() - 0.5) * 0.001,
            ]);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    /* ================= FETCH ================= */

    useEffect(() => {
        async function fetchOrder() {
            try {
                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`,
                    { withCredentials: true }
                );
                setOrder(res.data.data);
            } catch {
                toast.error("Failed to load");
            } finally {
                setLoading(false);
            }
        }

        if (id) fetchOrder();
    }, [id]);

    const updateStatus = async (status) => {
        try {
            await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/bookings/update-status/${id}`,
                { status },
                { withCredentials: true }
            );
            setOrder((p) => ({ ...p, status }));
            toast.success("Updated");
        } catch {
            toast.error("Error");
        }
    };

    if (loading) return <div className="p-10">Loading...</div>;

    const currentStep = steps.indexOf(order?.status);

    const handlePayment = async () => {
        try {
            updateStatus("completed");
            toast.success("Payment successful");

        } catch {
            toast.error("Payment failed");
        }
    };


    return (
        <div className="max-w-7xl mx-auto space-y-6 p-4">
            {/* MAP */}
            <div className="rounded-xl overflow-hidden border bg-white shadow-sm">
                <MapContainer center={pickup} zoom={13} className="h-[420px]">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <Marker position={pickup} icon={pickupIcon} />
                    <Marker position={drop} icon={dropIcon} />
                    <Marker position={driver} icon={driverIcon} />

                    <Routing from={driver} to={drop} />
                </MapContainer>
            </div>

            {/* CONTENT */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* LEFT */}
                <div className="lg:col-span-2 space-y-6">
                    {/* PROGRESS */}
                    <div className="bg-neutral-800 rounded-xl shadow-sm p-6">
                        <h2 className="font-semibold mb-5 text-white">Trip Progress</h2>

                        <div className="flex flex-wrap gap-3">
                            {steps.map((step, i) => (
                                <div
                                    key={step}
                                    className={`px-4 py-2 rounded-full text-xs font-semibold uppercase ${i <= currentStep
                                        ? "bg-yellowClr/10 text-yellowClr"
                                        : "bg-gray-100/10 text-gray-200"
                                        }`}
                                >
                                    {step.replaceAll("_", " ")}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* BOOKING */}
                    <div className="bg-neutral-800 rounded-xl shadow-sm p-6">
                        <h2 className="font-semibold mb-4 text-white">Booking Details</h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <Info label="Start">
                                {new Date(order?.startDateTime).toLocaleString()}
                            </Info>

                            <Info label="End">
                                {new Date(order?.endDateTime).toLocaleString()}
                            </Info>

                            <Info label="Hours">{order?.totalHours}</Info>
                            <Info label="Amount">₹{order?.totalAmount}</Info>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="space-y-6">
                    {/* STATUS */}
                    <div className="bg-neutral-800 rounded-xl p-6 shadow-sm">
                        <p className="text-sm text-gray-300">Current Status</p>
                        <p className="text-lg font-semibold capitalize text-yellowClr">
                            {order?.status?.replaceAll("_", " ")}
                        </p>
                    </div>

                    {/* CUSTOMER */}
                    <div className="bg-neutral-800 rounded-xl p-6 shadow-sm">
                        <h3 className="font-semibold mb-4 text-white">Customer</h3>
                        <Info label="Name">{order?.user?.fullName}</Info>

                        {role === "driver" && (
                            <div className="space-y-2 mt-4">
                                <ActionBtn href={`tel:${order?.user?.mobile}`}>
                                    Call Customer
                                </ActionBtn>

                                <ActionBtn
                                    href={`https://wa.me/${order?.user?.mobile}`}
                                    target="_blank"
                                >
                                    WhatsApp
                                </ActionBtn>
                            </div>
                        )}
                    </div>

                    {/* DRIVER */}
                    {role === "driver" && (
                        <div className="bg-neutral-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold mb-4 text-white">Driver Actions</h3>

                            {order?.status === "driver_assigned" && (
                                <PrimaryBtn onClick={() => updateStatus("started")}>
                                    Start Job
                                </PrimaryBtn>
                            )}

                            {order?.status === "started" && (
                                <PrimaryBtn onClick={() => updateStatus("on_the_way")}>
                                    On the Way
                                </PrimaryBtn>
                            )}

                            {order?.status === "on_the_way" && (
                                <PrimaryBtn onClick={() => updateStatus("reached")}>
                                    Reached
                                </PrimaryBtn>
                            )}

                            {order?.status === "reached" && (
                                <PrimaryBtn
                                    onClick={() => updateStatus("pending_payment")}
                                >
                                    Request Payment
                                </PrimaryBtn>
                            )}
                        </div>
                    )}

                    {/* ================= USER PAYMENT ================= */}
                    {role === "vendor" && order?.status === "pending_payment" && (
                        <div className="bg-neutral-800 rounded-xl p-6 shadow-sm">
                            <h3 className="font-semibold mb-4 text-white">Payment</h3>

                            <PrimaryBtn onClick={() => handlePayment()}>
                                Pay Now ₹{order?.totalAmount}
                            </PrimaryBtn>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

/* ROUTING */
function Routing({ from, to }) {
    const map = useMap();

    useEffect(() => {
        if (!from || !to) return;

        const routing = L.Routing.control({
            waypoints: [L.latLng(...from), L.latLng(...to)],
            show: false,
        }).addTo(map);

        return () => map.removeControl(routing);
    }, [from, to]);

    return null;
}

/* UI */
function Info({ label, children }) {
    return (
        <div>
            <p className="text-sm text-gray-300">{label}</p>
            <p className="font-medium text-white">{children}</p>
        </div>
    );
}

function PrimaryBtn({ children, ...props }) {
    return (
        <button
            {...props}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
            {children}
        </button>
    );
}

function ActionBtn({ children, ...props }) {
    return (
        <a
            {...props}
            className="block bg-green-600 text-white py-2 rounded-lg text-center"
        >
            {children}
        </a>
    );
}
