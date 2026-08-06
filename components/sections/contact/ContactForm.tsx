"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { contactForm } from "@/lib/content/contact";
import { CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send message");
      }

      setSubmitStatus("success");
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <Card variant="raised" className="p-6 sm:p-8 lg:p-10 h-full flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 mb-6">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-charcoal-900 mb-2">
          Thank you.
        </h2>
        <p className="text-charcoal-600 max-w-md">
          Your request has been received. We will contact you shortly.
        </p>
        <Button 
          variant="secondary" 
          className="mt-8" 
          onClick={() => setSubmitStatus("idle")}
        >
          Send another message
        </Button>
      </Card>
    );
  }

  return (
    <Card variant="raised" className="p-6 sm:p-8 lg:p-10 h-full">
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold tracking-tight text-charcoal-900">
          {contactForm.headline}
        </h2>
        <p className="mt-2 text-charcoal-600">
          {contactForm.subheadline}
        </p>
      </div>

      {submitStatus === "error" && (
        <div className="mb-6 flex items-start gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="size-5 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="font-medium">Submission failed</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">{contactForm.fields.firstName.label}</Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder={contactForm.fields.firstName.placeholder}
              required={contactForm.fields.firstName.required}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">{contactForm.fields.lastName.label}</Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder={contactForm.fields.lastName.placeholder}
              required={contactForm.fields.lastName.required}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">{contactForm.fields.email.label}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={contactForm.fields.email.placeholder}
              required={contactForm.fields.email.required}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">{contactForm.fields.phone.label}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={contactForm.fields.phone.placeholder}
              required={contactForm.fields.phone.required}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="company">{contactForm.fields.company.label}</Label>
            <Input
              id="company"
              name="company"
              placeholder={contactForm.fields.company.placeholder}
              required={contactForm.fields.company.required}
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">{contactForm.fields.website.label}</Label>
            <Input
              id="website"
              name="website"
              type="url"
              placeholder={contactForm.fields.website.placeholder}
              required={contactForm.fields.website.required}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="businessType">{contactForm.fields.businessType.label}</Label>
          <Select
            id="businessType"
            name="businessType"
            required={contactForm.fields.businessType.required}
            defaultValue=""
            disabled={isSubmitting}
          >
            <option value="" disabled>
              {contactForm.fields.businessType.placeholder}
            </option>
            {contactForm.fields.businessType.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{contactForm.fields.message.label}</Label>
          <Textarea
            id="message"
            name="message"
            placeholder={contactForm.fields.message.placeholder}
            required={contactForm.fields.message.required}
            rows={4}
            disabled={isSubmitting}
          />
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="consent"
            name="consent"
            required
            className="mt-1"
            disabled={isSubmitting}
          />
          <Label htmlFor="consent" className="text-sm text-charcoal-600 font-normal cursor-pointer">
            {contactForm.consentLabel}
          </Label>
        </div>

        <Button type="submit" size="lg" className="w-full" loading={isSubmitting} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : contactForm.submitLabel}
        </Button>
      </form>
    </Card>
  );
}