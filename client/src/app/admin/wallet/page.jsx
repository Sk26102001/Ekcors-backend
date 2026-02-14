"use client";

import React from "react";
import {
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  Plus,
} from "lucide-react";

const transactions = [
  {
    id: "TXN-1001",
    user: "Rohit Sharma",
    type: "Credit",
    amount: "₹25,000",
    method: "UPI",
    date: "10 Feb 2026",
    status: "Success",
  },
  {
    id: "TXN-1002",
    user: "Amit Verma",
    type: "Debit",
    amount: "₹8,500",
    method: "Wallet",
    date: "09 Feb 2026",
    status: "Success",
  },
  {
    id: "TXN-1003",
    user: "Harpreet Singh",
    type: "Debit",
    amount: "₹15,200",
    method: "Wallet",
    date: "08 Feb 2026",
    status: "Pending",
  },
];

export default function Page() {
  return (
    <div className="text-white w-full">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#fbb316]">Wallet</h1>
          <p className="text-zinc-400 mt-1">
            Monitor wallet balance and transactions
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#fbb316] text-neutral-900 font-semibold px-5 py-2.5 rounded-lg hover:bg-yellow-500 transition whitespace-nowrap">
          <Plus size={18} />
          Add Balance
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#262626] border border-neutral-800 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <Wallet className="text-[#fbb316]" size={32} />
            <div>
              <p className="text-zinc-400 text-sm">Total Balance</p>
              <h2 className="text-2xl font-bold">₹1,25,000</h2>
            </div>
          </div>
        </div>

        <div className="bg-[#262626] border border-neutral-800 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <ArrowDownLeft className="text-green-400" size={32} />
            <div>
              <p className="text-zinc-400 text-sm">Total Credit</p>
              <h2 className="text-2xl font-bold text-green-400">
                ₹3,40,000
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-[#262626] border border-neutral-800 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <ArrowUpRight className="text-red-400" size={32} />
            <div>
              <p className="text-zinc-400 text-sm">Total Debit</p>
              <h2 className="text-2xl font-bold text-red-400">
                ₹2,15,000
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-[#262626] border border-neutral-800 rounded-2xl overflow-hidden">
        <table className="w-full text-sm table-fixed">
          <thead className="bg-[#1f1f1f] text-zinc-400 uppercase text-xs">
            <tr>
              <th className="px-4 py-4 text-left w-[140px]">Txn ID</th>
              <th className="px-4 py-4 text-left w-[180px]">User</th>
              <th className="px-4 py-4 text-left w-[100px]">Type</th>
              <th className="px-4 py-4 text-left w-[120px]">Amount</th>
              <th className="px-4 py-4 text-left w-[120px]">Method</th>
              <th className="px-4 py-4 text-left w-[140px]">Date</th>
              <th className="px-4 py-4 text-left w-[120px]">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className="border-t border-neutral-800 hover:bg-[#2d2d2d]"
              >
                <td className="px-4 py-4 truncate">{txn.id}</td>
                <td className="px-4 py-4 truncate">{txn.user}</td>
                <td className="px-4 py-4 truncate">
                  <span
                    className={`font-semibold ${
                      txn.type === "Credit"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {txn.type}
                  </span>
                </td>
                <td className="px-4 py-4 truncate">{txn.amount}</td>
                <td className="px-4 py-4 truncate">{txn.method}</td>
                <td className="px-4 py-4 truncate">{txn.date}</td>
                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap
                      ${
                        txn.status === "Success"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }
                    `}
                  >
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
