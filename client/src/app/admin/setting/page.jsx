"use client";

import React, { useState } from "react";
import { Lock, Eye, EyeOff, Save, ShieldCheck } from "lucide-react";

export default function page() {
  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    // 🔐 API call goes here
    console.log("Password Updated", form);
  };

  return (
    <div className="min-h-screen  text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-neutral-950 border border-neutral-800 rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-[#fbb316]/10 text-[#fbb316] mb-4">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Security Settings
          </h1>
          <p className="text-zinc-400 mt-2 text-sm">
            Update your password to keep your admin account secure.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current Password */}
          <PasswordField
            label="Current Password"
            value={form.currentPassword}
            show={show.current}
            onToggle={() =>
              setShow({ ...show, current: !show.current })
            }
            onChange={(v) =>
              setForm({ ...form, currentPassword: v })
            }
          />

          {/* New Password */}
          <PasswordField
            label="New Password"
            value={form.newPassword}
            show={show.new}
            onToggle={() =>
              setShow({ ...show, new: !show.new })
            }
            onChange={(v) =>
              setForm({ ...form, newPassword: v })
            }
          />

          {/* Confirm Password */}
          <PasswordField
            label="Confirm New Password"
            value={form.confirmPassword}
            show={show.confirm}
            onToggle={() =>
              setShow({ ...show, confirm: !show.confirm })
            }
            onChange={(v) =>
              setForm({ ...form, confirmPassword: v })
            }
          />

          {/* Password Rules */}
          <div className="bg-neutral-800/40 border border-neutral-800 rounded-2xl p-4 text-sm text-zinc-400">
            <p className="mb-2 font-semibold text-zinc-300">
              Password requirements:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Minimum 8 characters</li>
              <li>At least one uppercase letter</li>
              <li>At least one number</li>
              <li>At least one special character</li>
            </ul>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#fbb316] text-neutral-900 font-bold py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#e0a114] transition shadow-lg"
          >
            <Save size={18} />
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}

/* ---------- Reusable Password Field ---------- */

function PasswordField({ label, value, show, onToggle, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
        {label}
      </label>
      <div className="relative">
        <Lock
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="••••••••"
          className="w-full bg-neutral-800 border border-neutral-700 rounded-2xl py-3 pl-12 pr-12 text-sm outline-none focus:border-[#fbb316] transition"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}
