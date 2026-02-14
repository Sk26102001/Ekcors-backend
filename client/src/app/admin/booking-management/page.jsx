"use client";

import React from "react";
import { Eye, CheckCircle, XCircle } from "lucide-react";

const bookings = [
  {
    id: "BK-1001",
    customer: "Amit Sharma",
    machine: "JCB",
    date: "12 Sep 2025",
    amount: "₹4,500",
    status: "Pending",
  },
  {
    id: "BK-1002",
    customer: "Rohit Verma",
    machine: "Crane",
    date: "10 Sep 2025",
    amount: "₹12,000",
    status: "Approved",
  },
  {
    id: "BK-1003",
    customer: "Neha Singh",
    machine: "Excavator",
    date: "08 Sep 2025",
    amount: "₹9,800",
    status: "Cancelled",
  },
];

export default function page() {
  return (
    <div className="text-white">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#fbb316]">
          Booking Management
        </h1>
        <p className="text-zinc-400 mt-1">
          View and manage all equipment bookings
        </p>
      </div>

      {/* Table */}
      <div className="bg-[#262626] border border-neutral-800 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#1f1f1f] text-zinc-400 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Booking ID</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Machine</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Amount</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t border-neutral-800 hover:bg-[#2d2d2d] transition"
              >
                <td className="px-6 py-4 font-medium">{booking.id}</td>
                <td className="px-6 py-4">{booking.customer}</td>
                <td className="px-6 py-4">{booking.machine}</td>
                <td className="px-6 py-4">{booking.date}</td>
                <td className="px-6 py-4">{booking.amount}</td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        booking.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : booking.status === "Approved"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    `}
                  >
                    {booking.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700">
                      <Eye size={16} />
                    </button>

                    <button className="p-2 rounded-lg bg-green-600/20 text-green-400 hover:bg-green-600/30">
                      <CheckCircle size={16} />
                    </button>

                    <button className="p-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30">
                      <XCircle size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
