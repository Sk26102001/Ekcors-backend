'use client'

import { useEffect, useState } from "react";
import { PlusCircle, UserCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { addDriver, getCurrentVendorDriver } from "@/api/userApis";
import { toast } from "sonner";
import Image from "next/image";

export default function DriversPage() {
  const [drivers, setDrivers] = useState([])
  const [open, setOpen] = useState(false)

  async function fetchDrivers() {
    try {
      const res = await getCurrentVendorDriver()
      console.log(res?.data?.drivers)
      setDrivers(res?.data?.drivers)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchDrivers()
  }, [])


  async function handleAddDriver(e) {
    e.preventDefault()

    const data = new FormData(e.target)
    const formData = Object.fromEntries(data)

    try {
      const res = await addDriver(formData)
      if (res.status === 'success') {
        toast.success(res.message)
        setOpen(false)
        e.target.reset()
      }
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center md:mb-8 mb-6">
        <h1 className="sm:text-3xl text-xl font-bold">Driver Management</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle /> Add Driver
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-neutral-700 border-neutral-700 text-white">
            <DialogHeader>
              <DialogTitle>Add Driver</DialogTitle>
              <DialogDescription className={'hidden'}>
                Add a new driver
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-3" onSubmit={handleAddDriver}>
              <Field className="gap-2">
                <FieldLabel htmlFor="fullname">Full name</FieldLabel>
                <Input
                  id="fullname"
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                />
                {/* <FieldDescription>
                  Choose a unique username for your account.
                </FieldDescription> */}
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                />
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="mobile">Mobile</FieldLabel>
                <Input
                  id="mobile"
                  name="mobile"
                  type="number"
                  onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                  placeholder="Enter mobile number"
                />
              </Field>
              <div className="grid md:grid-cols-2 md:gap-4 gap-3">
                <Field className="gap-2">
                  <FieldLabel htmlFor="dl">Driver License Number</FieldLabel>
                  <Input
                    id="dl"
                    name="drivingLicenseNumber"
                    type="text"
                    placeholder="Enter driver license number"
                  />
                </Field>
                <Field className="gap-2">
                  <FieldLabel htmlFor="aadharNumber">Aadhar Number</FieldLabel>
                  <Input
                    id="aadharNumber"
                    name="aadharNumber"
                    type="number"
                    placeholder="Enter aadhar number"
                  />
                </Field>
              </div>
              <Field className="gap-2">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="*********"
                />
              </Field>
              <Button type="submit" className={'w-full'}>
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {drivers?.map((driver) => (

          <div key={driver._id} className="sm:p-6 p-4 bg-[#262626] rounded-2xl border border-neutral-800 flex items-start gap-4">
            <Image
              src={driver?.avatar || '/images/default-avatar.jpg'}
              alt={driver?.fullName}
              width={100}
              height={100}
              className="w-16 h-16 object-cover rounded-full"
            />
            <div>
              <h4 className="font-bold mb-1">{driver?.fullName}</h4>
              <p className="sm:text-sm text-xs text-zinc-500">Email: {driver?.email}</p>
              <p className="sm:text-sm text-xs text-zinc-500">DL no.: {driver?.drivingLicenseNumber} </p>
              <p className="sm:text-sm text-xs text-zinc-500">Aadhar no.: {driver?.aadharNumber} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}