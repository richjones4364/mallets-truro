"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

export function CheckStockDialog() {
  const [open, setOpen] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setOpen(false)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">
          Check Stock
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            Check Stock Availability
          </DialogTitle>
          <DialogDescription>
            Looking for a specific item? Fill out the form below and we'll get
            back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
            <p className="text-lg font-semibold">Thank you!</p>
            <p className="text-sm text-muted-foreground">
              We'll check our stock and contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input id="phone" name="phone" type="tel" />
            </div>
            <div className="space-y-2">
              <label htmlFor="item" className="text-sm font-medium">
                Item You're Looking For
              </label>
              <Input
                id="item"
                name="item"
                placeholder="e.g., Stanley hammer, Le Creuset casserole"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Additional Details (Optional)
              </label>
              <Textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Any specific requirements or questions..."
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">
                Submit Enquiry
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

