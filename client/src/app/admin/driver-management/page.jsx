



"use client";

import React, { useState } from "react";
import { Eye, CheckCircle, XCircle, UserPlus, X } from "lucide-react";

const initialDrivers = [
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
  const [drivers, setDrivers] = useState(initialDrivers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDriver, setNewDriver] = useState({
    name: "",
    phone: "",
    license: "",
    experience: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDriver((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDriver = (e) => {
    e.preventDefault();

    if (!newDriver.name || !newDriver.phone || !newDriver.license) {
      alert("Please fill all required fields!");
      return;
    }

    const newId = `DR-${String(drivers.length + 1).padStart(3, "0")}`;

    const driverToAdd = {
      id: newId,
      name: newDriver.name,
      phone: newDriver.phone,
      license: newDriver.license,
      experience: newDriver.experience || "0 Years",
      status: "Pending",
    };

    setDrivers((prev) => [...prev, driverToAdd]);

    // Reset form and close modal
    setNewDriver({ name: "", phone: "", license: "", experience: "" });
    setIsModalOpen(false);
  };

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

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#fbb316] text-neutral-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-yellow-500 transition"
        >
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

      {/* Add Driver Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-[#262626] border border-neutral-800 rounded-2xl w-full max-w-md mx-4 overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-neutral-800">
              <h2 className="text-xl font-semibold text-[#fbb316]">Add New Driver</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-400 hover:text-white transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddDriver} className="p-6 space-y-5">
              <div>
                <label className="block text-zinc-400 text-sm mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={newDriver.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#1f1f1f] border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fbb316]"
                  placeholder="Enter driver full name"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-sm mb-1.5">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={newDriver.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#1f1f1f] border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fbb316]"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-sm mb-1.5">
                  License Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="license"
                  value={newDriver.license}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#1f1f1f] border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fbb316]"
                  placeholder="DL-1420230005678"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-sm mb-1.5">
                  Experience (optional)
                </label>
                <input
                  type="text"
                  name="experience"
                  value={newDriver.experience} 
                  onChange={handleInputChange}
                  className="w-full bg-[#1f1f1f] border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fbb316]"
                  placeholder="8 Years"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#fbb316] hover:bg-yellow-500 text-neutral-900 font-semibold rounded-lg transition"
                >
                  Add Driver
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}