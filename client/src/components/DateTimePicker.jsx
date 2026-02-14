"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"

export function DateTimePicker({
    label,
    date,
    time,
    onDateChange,
    onTimeChange,
}) {
    const [open, setOpen] = useState(false)

    return (
        <div className="space-y-3">
            <FieldGroup className="sm:flex-row sm:gap-4 gap-3">
                <Field className="gap-2">
                    <FieldLabel>{label} Date</FieldLabel>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-44 justify-between font-normal bg-neutral-800 border-neutral-700 text-white hover:text-white hover:bg-neutral-900"
                            >
                                {date ? format(date, "PPP") : "Select date"}
                                <ChevronDownIcon className="ml-2 h-4 w-4 opacity-70" />
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent
                            className="w-auto overflow-hidden p-0"
                            align="start"
                        >
                            <Calendar
                                mode="single"
                                selected={date}
                                captionLayout="dropdown"
                                defaultMonth={date}
                                onSelect={(selectedDate) => {
                                    onDateChange(selectedDate)
                                    setOpen(false)
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                </Field>
                <Field className="w-36 gap-2">
                    <FieldLabel>{label} Time</FieldLabel>
                    <Input
                        type="time"
                        value={time}
                        onChange={(e) => onTimeChange(e.target.value)}
                        className="bg-neutral-800 border-neutral-700 text-white hover:text-white hover:bg-neutral-900"
                    />
                </Field>
            </FieldGroup>
        </div>
    )
}
