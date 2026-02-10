"use client";

import React from "react";
import { Eye, Ban, CheckCircle, UserPlus } from "lucide-react";

const users = [
  {
    id: "USR-001",
    name: "Ankit Sharma",
    email: "ankit.sharma@gmail.com",
    phone: "+91 98765 11122",
    role: "Customer",
    status: "Active",
  },
  {
    id: "USR-002",
    name: "Pooja Verma",
    email: "pooja.verma@gmail.com",
    phone: "+91 99887 22334",
    role: "Vendor",
    status: "Pending",
  },
  {
    id: "USR-003",
    name: "Rahul Singh",
    email: "rahul.singh@gmail.com",
    phone: "+91 91234 55667",
    role: "Driver",
    status: "Blocked",
  },
];

export default function UserManagement() {
  return (
    <div className="text-white">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#fbb316]">
            User Management
          </h1>
          <p className="text-zinc-400 mt-1">
            Manage customers, vendors, and drivers
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#fbb316] text-neutral-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-yellow-500 transition">
          <UserPlus size={18} />
          Add User
        </button>
      </div>

      {/* Table */}
      <div className="bg-[#262626] border border-neutral-800 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[#1f1f1f] text-zinc-400 uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">User ID</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">Role</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-neutral-800 hover:bg-[#2d2d2d] transition"
              >
                <td className="px-6 py-4 font-medium">{user.id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.phone}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-neutral-800 text-zinc-300 text-xs font-semibold">
                    {user.role}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${
                        user.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : user.status === "Pending"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }
                    `}
                  >
                    {user.status}
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
