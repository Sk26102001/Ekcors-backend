"use client";

import React from "react";
import { Eye, CheckCircle, XCircle, UserPlus } from "lucide-react";

const drivers = [
  {
    id: "DR-001",
    name: "Rakesh Kumar",
    phone: "+91 98765 43210",
    license: "DL-1420230005678",
    experience: "8 Years",
    status: "Active",
  },
  {
    id: "DR-002",
    name: "Sunil Verma",
    phone: "+91 99887 66554",
    license: "DL-1120210009123",
    experience: "5 Years",
    status: "Pending",
  },
  {
    id: "DR-003",
    name: "Amit Singh",
    phone: "+91 91234 56789",
    license: "DL-0920200003345",
    experience: "10 Years",
    status: "Blocked",
  },
];

export default function page() {
  return (
    <div className="text-white">
      {/* Page Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#fbb316]">
            Driver Management
          </h1>
          <p className="text-zinc-400 mt-1">
            Manage drivers, documents, and availability
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#fbb316] text-neutral-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-yellow-500 transition">
          <UserPlus size={18} />
          Add Driver
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#262626] border border-neutral-800 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#1f1f1f] text-zinc-400 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Driver ID</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">License No.</th>
              <th className="px-6 py-4 text-left">Experience</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {drivers.map((driver) => (
              <tr
                key={driver.id}
                className="border-t border-neutral-800 hover:bg-[#2d2d2d] transition"
              >
                <td className="px-6 py-4 font-medium">{driver.id}</td>
                <td className="px-6 py-4">{driver.name}</td>
                <td className="px-6 py-4">{driver.phone}</td>
                <td className="px-6 py-4">{driver.license}</td>
                <td className="px-6 py-4">{driver.experience}</td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        driver.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : driver.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    `}
                  >
                    {driver.status}
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
