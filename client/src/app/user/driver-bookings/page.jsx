





'use client'

import { useEffect, useState } from "react";
import { PlusCircle, Trash2, Edit2, UserCheck } from "lucide-react";
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
import { addDriver, getCurrentVendorDriver, deleteDriver, updateDriver } from "@/api/userApis";
import { toast } from "sonner";
import Image from "next/image";

export default function DriversPage() {
  const [drivers, setDrivers] = useState([])
  const [open, setOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [editingDriver, setEditingDriver] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  async function fetchDrivers() {
    try {
      const res = await getCurrentVendorDriver()
      setDrivers(res?.data?.drivers || [])
    } catch (err) {
      console.log(err)
      toast.error("Failed to fetch drivers")
    }
  }

  useEffect(() => {
    fetchDrivers()
  }, [])

  async function handleAddDriver(e) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      drivingLicenseNumber: formData.get('drivingLicenseNumber'),
      aadharNumber: formData.get('aadharNumber'),
      password: formData.get('password'),
    }

    // Validation
    if (!data.fullName) {
      toast.error("Please enter full name")
      setIsSubmitting(false)
      return
    }
    if (!data.email) {
      toast.error("Please enter email")
      setIsSubmitting(false)
      return
    }
    if (!data.mobile || data.mobile.length !== 10) {
      toast.error("Please enter valid 10-digit mobile number")
      setIsSubmitting(false)
      return
    }
    if (!data.drivingLicenseNumber) {
      toast.error("Please enter driver license number")
      setIsSubmitting(false)
      return
    }
    if (!data.aadharNumber || data.aadharNumber.length !== 12) {
      toast.error("Please enter valid 12-digit Aadhar number")
      setIsSubmitting(false)
      return
    }
    if (!data.password || data.password.length < 6) {
      toast.error("Password must be at least 6 characters")
      setIsSubmitting(false)
      return
    }

    try {
      const res = await addDriver(data)
      if (res.status === 'success') {
        toast.success(res.message || "Driver added successfully")
        setOpen(false)
        e.target.reset()
        fetchDrivers()
      } else {
        toast.error(res.message || "Failed to add driver")
      }
    } catch (err) {
      console.log(err)
      toast.error(err.message || "Failed to add driver")
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleDeleteDriver(driverId, driverName) {
    if (!confirm(`Are you sure you want to delete driver "${driverName}"?`)) {
      return
    }

    setIsDeleting(true)
    try {
      const res = await deleteDriver(driverId)
      if (res.status === 'success') {
        toast.success(res.message || "Driver deleted successfully")
        fetchDrivers()
      } else {
        toast.error(res.message || "Failed to delete driver")
      }
    } catch (err) {
      console.log(err)
      toast.error(err.message || "Failed to delete driver")
    } finally {
      setIsDeleting(false)
    }
  }

  async function handleUpdateDriver(e) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
      drivingLicenseNumber: formData.get('drivingLicenseNumber'),
      aadharNumber: formData.get('aadharNumber'),
    }

    const password = formData.get('password')
    if (password) {
      data.password = password
    }

    // Validation
    if (!data.fullName) {
      toast.error("Please enter full name")
      setIsSubmitting(false)
      return
    }
    if (!data.email) {
      toast.error("Please enter email")
      setIsSubmitting(false)
      return
    }
    if (!data.mobile || data.mobile.length !== 10) {
      toast.error("Please enter valid 10-digit mobile number")
      setIsSubmitting(false)
      return
    }
    if (!data.drivingLicenseNumber) {
      toast.error("Please enter driver license number")
      setIsSubmitting(false)
      return
    }
    if (!data.aadharNumber || data.aadharNumber.length !== 12) {
      toast.error("Please enter valid 12-digit Aadhar number")
      setIsSubmitting(false)
      return
    }

    try {
      const res = await updateDriver(editingDriver._id, data)
      if (res.status === 'success') {
        toast.success(res.message || "Driver updated successfully")
        setEditOpen(false)
        setEditingDriver(null)
        fetchDrivers()
      } else {
        toast.error(res.message || "Failed to update driver")
      }
    } catch (err) {
      console.log(err)
      toast.error(err.message || "Failed to update driver")
    } finally {
      setIsSubmitting(false)
    }
  }

  const openEditDialog = (driver) => {
    setEditingDriver(driver)
    setEditOpen(true)
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
                <FieldLabel htmlFor="fullname">Full name *</FieldLabel>
                <Input
                  id="fullname"
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                  required
                />
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="email">Email *</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="mobile">Mobile *</FieldLabel>
                <Input
                  id="mobile"
                  name="mobile"
                  type="number"
                  onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                  placeholder="Enter 10-digit mobile number"
                  required
                />
              </Field>
              <div className="grid md:grid-cols-2 md:gap-4 gap-3">
                <Field className="gap-2">
                  <FieldLabel htmlFor="dl">Driver License Number *</FieldLabel>
                  <Input
                    id="dl"
                    name="drivingLicenseNumber"
                    type="text"
                    placeholder="Enter driver license number"
                    required
                  />
                </Field>
                <Field className="gap-2">
                  <FieldLabel htmlFor="aadharNumber">Aadhar Number *</FieldLabel>
                  <Input
                    id="aadharNumber"
                    name="aadharNumber"
                    type="number"
                    onInput={(e) => e.target.value = e.target.value.slice(0, 12)}
                    placeholder="Enter 12-digit aadhar number"
                    required
                  />
                </Field>
              </div>
              <Field className="gap-2">
                <FieldLabel htmlFor="password">Password *</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Minimum 6 characters"
                  required
                />
              </Field>
              <Button type="submit" className={'w-full'} disabled={isSubmitting}>
                {isSubmitting ? "Adding..." : "Add Driver"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Edit Driver Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="bg-neutral-700 border-neutral-700 text-white">
          <DialogHeader>
            <DialogTitle>Edit Driver</DialogTitle>
            <DialogDescription className={'hidden'}>
              Edit driver details
            </DialogDescription>
          </DialogHeader>
          {editingDriver && (
            <form className="space-y-3" onSubmit={handleUpdateDriver}>
              <Field className="gap-2">
                <FieldLabel htmlFor="edit-fullname">Full name *</FieldLabel>
                <Input
                  id="edit-fullname"
                  type="text"
                  name="fullName"
                  defaultValue={editingDriver.fullName}
                  placeholder="Enter full name"
                  required
                />
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="edit-email">Email *</FieldLabel>
                <Input
                  id="edit-email"
                  name="email"
                  type="email"
                  defaultValue={editingDriver.email}
                  placeholder="Enter email address"
                  
                />
              </Field>
              <Field className="gap-2">
                <FieldLabel htmlFor="edit-mobile">Mobile *</FieldLabel>
                <Input
                  id="edit-mobile"
                  name="mobile"
                  type="number"
                  defaultValue={editingDriver.mobile}
                  onInput={(e) => e.target.value = e.target.value.slice(0, 10)}
                  placeholder="Enter mobile number"
                  required
                />
              </Field>
              <div className="grid md:grid-cols-2 md:gap-4 gap-3">
                <Field className="gap-2">
                  <FieldLabel htmlFor="edit-dl">Driver License Number *</FieldLabel>
                  <Input
                    id="edit-dl"
                    name="drivingLicenseNumber"
                    type="text"
                    defaultValue={editingDriver.drivingLicenseNumber}
                    placeholder="Enter driver license number"
                    required
                  />
                </Field>
                <Field className="gap-2">
                  <FieldLabel htmlFor="edit-aadharNumber">Aadhar Number *</FieldLabel>
                  <Input
                    id="edit-aadharNumber"
                    name="aadharNumber"
                    type="number"
                    defaultValue={editingDriver.aadharNumber}
                    onInput={(e) => e.target.value = e.target.value.slice(0, 12)}
                    placeholder="Enter aadhar number"
                    required
                  />
                </Field>
              </div>
              <Field className="gap-2">
                <FieldLabel htmlFor="edit-password">Password (Optional)</FieldLabel>
                <Input
                  id="edit-password"
                  name="password"
                  type="password"
                  placeholder="Leave blank to keep current password"
                />
                <FieldDescription className="text-xs text-neutral-400">
                  Only enter if you want to change the password
                </FieldDescription>
              </Field>
              <Button type="submit" className={'w-full'} disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update Driver"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Drivers List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {drivers?.length > 0 ? (
          drivers?.map((driver) => (
            <div key={driver._id} className="sm:p-6 p-4 bg-[#262626] rounded-2xl border border-neutral-800">
              <div className="flex items-start gap-4">
                <Image
                  src={driver?.avatar || '/images/default-avatar.jpg'}
                  alt={driver?.fullName}
                  width={100}
                  height={100}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="flex-1">
                  <h4 className="font-bold mb-1">{driver?.fullName}</h4>
                  <p className="sm:text-sm text-xs text-neutral-300">Email: {driver?.email}</p>
                  <p className="sm:text-sm text-xs text-neutral-300">Mobile: {driver?.mobile}</p>
                  <p className="sm:text-sm text-xs text-neutral-300">DL: {driver?.drivingLicenseNumber}</p>
                  <p className="sm:text-sm text-xs text-neutral-300">Aadhar: {driver?.aadharNumber}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <Button 
                  className={'flex-1 bg-red-500 text-white hover:bg-red-600'}
                  onClick={() => handleDeleteDriver(driver._id, driver.fullName)}
                  disabled={isDeleting}
                >
                  <Trash2 className="w-4 h-4 mr-1" /> Delete
                </Button>
                <Button 
                  className={'flex-1'}
                  onClick={() => openEditDialog(driver)}
                >
                  <Edit2 className="w-4 h-4 mr-1" /> Edit
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12 bg-[#262626] rounded-2xl border border-neutral-800">
            <UserCheck className="w-16 h-16 text-neutral-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Drivers Yet</h3>
            <p className="text-neutral-400 mb-4">Add your first driver to get started</p>
            {/* <Button onClick={() => setOpen(true)}>
              <PlusCircle /> Add Driver
            </Button> */}
          </div>
        )}
      </div>
    </div>
  );
}