"use client";

import React from "react";
import { Eye, Edit, Trash2, PlusCircle } from "lucide-react";

const machines = [
  {
    id: "MC-001",
    name: "JCB Backhoe Loader",
    category: "Earthmoving",
    vendor: "Sharma Equipments",
    price: "₹2,500 / day",
    status: "Available",
  },
  {
    id: "MC-002",
    name: "Hydraulic Crane",
    category: "Lifting",
    vendor: "Om Sai Rentals",
    price: "₹5,000 / day",
    status: "Booked",
  },
  {
    id: "MC-003",
    name: "Concrete Mixer",
    category: "Construction",
    vendor: "BuildMax Pvt Ltd",
    price: "₹1,200 / day",
    status: "Inactive",
  },
];

export default function page() {
  return (
    <div className="text-white">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#fbb316]">
            Machine & Equipment
          </h1>
          <p className="text-zinc-400 mt-1">
            Manage machines, pricing, and availability
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#fbb316] text-neutral-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-yellow-500 transition">
          <PlusCircle size={18} />
          Add Machine
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#262626] border border-neutral-800 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#1f1f1f] text-zinc-400 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Machine ID</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Vendor</th>
              <th className="px-6 py-4 text-left">Price</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {machines.map((machine) => (
              <tr
                key={machine.id}
                className="border-t border-neutral-800 hover:bg-[#2d2d2d] transition"
              >
                <td className="px-6 py-4 font-medium">{machine.id}</td>
                <td className="px-6 py-4">{machine.name}</td>
                <td className="px-6 py-4">{machine.category}</td>
                <td className="px-6 py-4">{machine.vendor}</td>
                <td className="px-6 py-4">{machine.price}</td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        machine.status === "Available"
                          ? "bg-green-500/20 text-green-400"
                          : machine.status === "Booked"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    `}
                  >
                    {machine.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-3">
                    <button className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700">
                      <Eye size={16} />
                    </button>

                    <button className="p-2 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30">
                      <Edit size={16} />
                    </button>

                    <button className="p-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30">
                      <Trash2 size={16} />
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
