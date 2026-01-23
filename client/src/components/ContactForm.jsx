"use client"

// import { postEnquiry } from "@/apis/controllers"
// import { Waveform } from "ldrs/react"
// import "ldrs/react/Waveform.css"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

function ContactForm({ width }) {
    const [loading, setLoading] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        // try {
        //     const formData = new FormData(event.target)
        //     const data = Object.fromEntries(formData)
        //     const phoneRegex = /^(?:\+91|0)?\s*[6-9]\d{9}$/
        //     if (!phoneRegex.test(data.phone.trim())) {
        //         throw new Error("Invalid phone number format.")
        //     }

        //     const res = await postEnquiry(data)
        //     if (!res.success) {
        //         throw new Error(res.message)
        //     }

        //     toast.success("Message sent successfully")
        //     event.target.reset()
        //     setLoading(false)
        // } catch (error) {
        //     toast.error(error.message)
        // } finally {
        //     setLoading(false)
        // }
    }

    return (
        <>
            <div className={`rounded-2xl border bg-white p-6 shadow-lg ${width}`}>
                <form className="space-y-4 md:space-y-4" onSubmit={onSubmit}>
                    <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} />
                    <div className="grid w-full items-center gap-2">
                        <Label htmlFor="name">Full name</Label>
                        <Input type="text" name="name" id="name" placeholder="type fullname" required />
                    </div>
                    <div className="grid w-full items-center gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="type your email" />
                    </div>
                    <div className="grid w-full items-center gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="type phone number"
                            required
                            onInput={(e) => {
                                e.target.value = e.target.value
                                    .replace(/[^\d+\s]/g, "")
                                    .replace(/(?!^)\+/g, "")
                                    .replace(/(\s{2,})/g, " ")
                            }}
                        />
                    </div>
                    <div className="grid w-full gap-2">
                        <Label htmlFor="message">Your message</Label>
                        <Textarea placeholder="message..." name="message" id="message" className={"h-24"} />
                    </div>
                    <Button type="submit" className="bg-yellowClr hover:bg-yellowClr/80 w-full">
                        {loading ? <Waveform size="20" stroke="3" speed="1.25" color="white" /> : "Submit"}
                    </Button>
                </form>
            </div>
        </>
    )
}

export default ContactForm
