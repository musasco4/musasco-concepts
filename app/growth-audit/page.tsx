"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const AUDIT_STEPS = [
  {
    icon: Target,
    title: "Attract Assessment",
    description:
      "We evaluate how effectively your business attracts the right customers through paid ads, organic search, and brand visibility.",
  },
  {
    icon: TrendingUp,
    title: "Convert Assessment",
    description:
      "We review your landing pages, website experience, and customer journey to identify where attention is lost before becoming revenue.",
  },
  {
    icon: BarChart3,
    title: "Scale Assessment",
    description:
      "We examine your tracking, analytics, and optimization systems to determine whether growth is measurable and repeatable.",
  },
];

const DELIVERABLES = [
  "Identify the biggest bottlenecks in your current customer journey",
  "Discover specific growth opportunities you may be missing",
  "Receive clear, prioritized recommended next steps",
  "Understand which engine (Attract, Convert, or Scale) to fix first",
  "Get a no-obligation Growth Blueprint tailored to your business",
];

const QUALIFIES = [
  "Businesses already operating and generating some revenue",
  "Businesses looking to grow but unsure where to start",
  "Businesses experiencing stalled or unpredictable growth",
  "Businesses tired of scattered vendors and disconnected marketing",
];

export default function GrowthAuditPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: null,
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          formType: "growth-audit",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Email sending failed");
      }

      setStatus({
        type: "success",
        message:
          "Your Growth Audit request has been received. We'll reach out within 24 hours on business days.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Growth Audit submission error:", error);

      setStatus({
        type: "error",
        message:
          "We couldn't submit your request right now. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <main id="main-content" className="w-full min-w-0">
        {/* Hero */}
        <section
          id="growth-audit-hero"
          className="relative w-full overflow-hidden bg-charcoal-900 pb-20 pt-16 text-white lg:pb-28 lg:pt-24"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-grid-faint opacity-[0.03]"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]"
            aria-hidden="true"
          />

          <Container className="relative z-10 mx-auto max-w-3xl text-center">
            <RevealOnScroll>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-500">
                FREE • NO OBLIGATION
              </p>

              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
                Find Out Where Your Growth Is Stalling.
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-300">
                A Growth Audit identifies exactly which part of your customer
                journey is leaking revenue — and gives you a clear, specific
                plan to fix it. No pressure, no obligation, just clarity.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="#audit-form" size="lg">
                  Start My Free Audit
                </Button>

                <Link
                  href="/pricing"
                  className="text-sm font-medium text-charcoal-400 transition-colors hover:text-white"
                >
                  Already know what you need? See Pricing →
                </Link>
              </div>
            </RevealOnScroll>
          </Container>
        </section>

        {/* What We Assess */}
        <Section background="primary" ariaLabel="What we assess">
          <Container className="mx-auto max-w-5xl">
            <RevealOnScroll className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
                What We Look At
              </h2>

              <p className="mt-4 text-lg text-charcoal-600">
                Every Growth Audit evaluates three core engines of your
                business.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
              {AUDIT_STEPS.map((step, i) => (
                <RevealOnScroll key={step.title} delay={i * 0.1}>
                  <Card
                    variant="flat"
                    hover
                    className="flex h-full flex-col p-8"
                  >
                    <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-emerald-50">
                      <step.icon
                        className="size-6 text-emerald-600"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mb-3 font-display text-xl font-bold text-charcoal-900">
                      {step.title}
                    </h3>

                    <p className="flex-1 text-sm leading-relaxed text-charcoal-600">
                      {step.description}
                    </p>
                  </Card>
                </RevealOnScroll>
              ))}
            </div>
          </Container>
        </Section>

        {/* What You Get */}
        <Section background="subtle" ariaLabel="What you get">
          <Container className="mx-auto max-w-3xl">
            <RevealOnScroll className="mb-10">
              <h2 className="text-center font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
                What You Get
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="space-y-4">
                {DELIVERABLES.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-lg border border-charcoal-100 bg-white p-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />

                    <span className="text-base leading-relaxed text-charcoal-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </Container>
        </Section>

        {/* Who It Is For */}
        <Section background="primary" ariaLabel="Who this is for">
          <Container className="mx-auto max-w-3xl">
            <RevealOnScroll className="mb-10">
              <h2 className="text-center font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
                Who This Is For
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {QUALIFIES.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4">
                    <ArrowRight
                      className="mt-1 size-4 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-relaxed text-charcoal-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </Container>
        </Section>

        {/* Audit Intake Form */}
        <section
          id="audit-form"
          className="w-full bg-charcoal-900 py-16 text-white lg:py-24"
        >
          <Container className="mx-auto max-w-2xl">
            <RevealOnScroll className="mb-12 text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Start?
              </h2>

              <p className="mt-4 text-lg text-charcoal-300">
                Tell us a bit about your business and we&apos;ll reach out
                within 24 hours to schedule your free Growth Audit.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <Card
                variant="raised"
                className="bg-white p-6 text-charcoal-900 sm:p-8 lg:p-10"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Status message */}
                  {status.type && (
                    <div
                      role={status.type === "error" ? "alert" : "status"}
                      className={
                        status.type === "success"
                          ? "rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
                          : "rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                      }
                    >
                      <div className="flex items-start gap-3">
                        {status.type === "success" ? (
                          <CheckCircle2
                            className="mt-0.5 size-5 shrink-0 text-emerald-600"
                            aria-hidden="true"
                          />
                        ) : (
                          <span className="mt-0.5 font-bold">!</span>
                        )}

                        <span>{status.message}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="audit-firstName"
                        className="text-sm font-medium text-charcoal-900"
                      >
                        First Name *
                      </label>

                      <input
                        id="audit-firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        autoComplete="given-name"
                        className="w-full rounded-md border border-charcoal-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                        placeholder="Jane"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="audit-lastName"
                        className="text-sm font-medium text-charcoal-900"
                      >
                        Last Name *
                      </label>

                      <input
                        id="audit-lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        autoComplete="family-name"
                        className="w-full rounded-md border border-charcoal-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="audit-email"
                      className="text-sm font-medium text-charcoal-900"
                    >
                      Email *
                    </label>

                    <input
                      id="audit-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full rounded-md border border-charcoal-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="audit-company"
                      className="text-sm font-medium text-charcoal-900"
                    >
                      Company / Business Name
                    </label>

                    <input
                      id="audit-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      className="w-full rounded-md border border-charcoal-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      placeholder="Your Business Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="audit-message"
                      className="text-sm font-medium text-charcoal-900"
                    >
                      What&apos;s your biggest growth challenge right now? *
                    </label>

                    <textarea
                      id="audit-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full resize-none rounded-md border border-charcoal-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600"
                      placeholder="Tell us briefly what's holding your growth back..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Submitting Request..."
                      : "Request My Free Growth Audit"}
                  </Button>

                  <p className="mt-4 text-center text-xs text-charcoal-500">
                    No obligation. We typically respond within 24 hours on
                    business days.
                  </p>
                </form>
              </Card>
            </RevealOnScroll>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}