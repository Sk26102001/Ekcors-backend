"use client";

import React from "react";
import { Eye, Ban, CheckCircle, Store, Plus } from "lucide-react";

const vendors = [
  {
    id: "VND-001",
    name: "Sharma Equipments",
    owner: "Rohit Sharma",
    email: "sharmaequip@gmail.com",
    phone: "+91 98765 44556",
    gst: "27ABCDE1234F1Z5",
    status: "Active",
  },
  {
    id: "VND-002",
    name: "Verma Machinery",
    owner: "Amit Verma",
    email: "verma.mach@gmail.com",
    phone: "+91 99887 33221",
    gst: "09FGHIJ5678K2L3",
    status: "Pending",
  },
  {
    id: "VND-003",
    name: "Singh Rentals",
    owner: "Harpreet Singh",
    email: "singh.rentals@gmail.com",
    phone: "+91 91234 99887",
    gst: "03LMNOP9876Q4R5",
    status: "Blocked",
  },
];

export default function Page() {
  return (
    <div className="text-white w-full">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#fbb316]">
            Vendor Management
          </h1>
          <p className="text-zinc-400 mt-1">
            Manage equipment vendors and suppliers
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#fbb316] text-neutral-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-yellow-500 transition whitespace-nowrap">
          <Plus size={18} />
          Add Vendor
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#262626] border border-neutral-800 rounded-2xl overflow-hidden">
        <table className="w-full text-sm table-fixed">
          <thead className="bg-[#1f1f1f] text-zinc-400 uppercase text-xs">
            <tr>
              <th className="px-4 py-4 text-left w-[120px]">Vendor ID</th>
              <th className="px-4 py-4 text-left w-[180px]">Vendor Name</th>
              <th className="px-4 py-4 text-left w-[140px]">Owner</th>
              <th className="px-4 py-4 text-left w-[200px]">Email</th>
              <th className="px-4 py-4 text-left w-[140px]">Phone</th>
              <th className="px-4 py-4 text-left w-[150px]">GST No.</th>
              <th className="px-4 py-4 text-left w-[110px]">Status</th>
              <th className="px-4 py-4 text-center w-[140px]">Actions</th>
            </tr>
          </thead>

          <tbody>
            {vendors.map((vendor) => (
              <tr
                key={vendor.id}
                className="border-t border-neutral-800 hover:bg-[#2d2d2d]"
              >
                <td className="px-4 py-4 truncate">{vendor.id}</td>

                <td className="px-4 py-4 flex items-center gap-2 truncate">
                  <Store size={16} className="text-[#fbb316] shrink-0" />
                  <span className="truncate">{vendor.name}</span>
                </td>

                <td className="px-4 py-4 truncate">{vendor.owner}</td>
                <td className="px-4 py-4 truncate">{vendor.email}</td>
                <td className="px-4 py-4 truncate">{vendor.phone}</td>
                <td className="px-4 py-4 truncate">{vendor.gst}</td>

                {/* Status */}
                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap
                      ${
                        vendor.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : vendor.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    `}
                  >
                    {vendor.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-green-600/20 text-green-400 hover:bg-green-600/30">
                      <CheckCircle size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30">
                      <Ban size={16} />
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
