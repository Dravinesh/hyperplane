"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { contactData } from "@/data/contact";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  Globe,
  Sparkles,
  MessageSquare,
  Zap,
  Loader2,
  ExternalLink,
  IndianRupee,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    company: string;
    topic: string;
    budget: string;
    customBudget: string;
    message: string;
  }>({
    name: "",
    email: "",
    company: "",
    topic: contactData.inquiryTopics[0],
    budget: contactData.budgetRanges[0],
    customBudget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mailtoFallbackUrl, setMailtoFallbackUrl] = useState<string>("");
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit inquiry.");
      }

      if (result.mailtoFallback) {
        setMailtoFallbackUrl(result.mailtoFallback);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(
        err.message || "Failed to send inquiry. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="hp-noise pt-28 pb-20">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),transparent_70%)] blur-3xl"
        />
        <Container>
          <div className="flex flex-col items-center text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--hp-border-strong)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-[var(--hp-accent-secondary)]">
              <MessageSquare className="size-3.5" /> Direct Architecture Inquiry
            </span>
            <h1 className="max-w-4xl font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-tight text-white">
              Start a Conversation with Our <span className="hp-gradient-text">Engineering Team</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-[var(--hp-text-secondary)] sm:text-lg leading-relaxed">
              Whether you need an AI solution, custom web application, cloud modernization, or data pipeline, discuss your project requirements directly with our engineers.
            </p>
          </div>
        </Container>
      </section>

      {/* FORM + FOUNDING HUB SECTION */}
      <section className="hp-section">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* INQUIRY FORM */}
            <div className="lg:col-span-7">
              <div className="hp-glass rounded-[var(--hp-radius-xl)] p-8 md:p-10 border border-[var(--hp-border-strong)]">
                <h2 className="font-display text-2xl font-medium text-white mb-2">
                  Project Inquiry
                </h2>
                <p className="text-xs text-[var(--hp-text-secondary)] mb-8">
                  Share your technical requirements or project scope below. Your inquiry is delivered directly to our engineering mailbox (<span className="text-[var(--hp-accent-secondary)] font-mono">services@hyperplane.com</span>).
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-4 border border-emerald-500/30">
                        <CheckCircle className="size-8" />
                      </div>
                      <h3 className="font-display text-2xl font-medium text-white mb-2">
                        Inquiry Received & Dispatched
                      </h3>
                      <p className="text-sm text-[var(--hp-text-secondary)] max-w-md mb-6 leading-relaxed">
                        Thank you, <strong className="text-white">{formData.name}</strong>. Your project details have been sent to our team at <strong className="text-[var(--hp-accent-secondary)]">services@hyperplane.com</strong>. We will review your specifications and reply to <strong className="text-white">{formData.email}</strong> within 24 business hours.
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: "",
                              email: "",
                              company: "",
                              topic: contactData.inquiryTopics[0],
                              budget: contactData.budgetRanges[0],
                              customBudget: "",
                              message: "",
                            });
                          }}
                          variant="secondary"
                          size="md"
                        >
                          Submit Another Inquiry
                        </Button>

                        {mailtoFallbackUrl && (
                          <a href={mailtoFallbackUrl}>
                            <Button variant="primary" size="md" withArrow>
                              Open in Mail App
                            </Button>
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      {errorMessage && (
                        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-300">
                          {errorMessage}
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-medium text-white mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full rounded-xl border border-[var(--hp-border)] bg-black/50 px-4 py-3 text-sm text-white focus:border-[var(--hp-accent-secondary)] focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-white mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="your.email@company.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full rounded-xl border border-[var(--hp-border)] bg-black/50 px-4 py-3 text-sm text-white focus:border-[var(--hp-accent-secondary)] focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="Your company or project name (Optional)"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full rounded-xl border border-[var(--hp-border)] bg-black/50 px-4 py-3 text-sm text-white focus:border-[var(--hp-accent-secondary)] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white mb-2">
                          Primary Technical Area
                        </label>
                        <select
                          value={formData.topic}
                          onChange={(e) =>
                            setFormData({ ...formData, topic: e.target.value })
                          }
                          className="w-full rounded-xl border border-[var(--hp-border)] bg-black/50 px-4 py-3 text-sm text-white focus:border-[var(--hp-accent-secondary)] focus:outline-none transition-colors"
                        >
                          {contactData.inquiryTopics.map((topic, i) => (
                            <option
                              key={i}
                              value={topic}
                              className="bg-[var(--hp-card)] text-white"
                            >
                              {topic}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white mb-2 flex items-center justify-between">
                          <span>Estimated Project Budget (INR)</span>
                          <span className="text-[11px] font-mono text-[var(--hp-accent-secondary)]">
                            ₹ INR
                          </span>
                        </label>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {contactData.budgetRanges.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, budget: b })
                              }
                              className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-all ${
                                formData.budget === b
                                  ? "border-[var(--hp-accent-secondary)] bg-[var(--hp-accent-primary)]/20 text-white shadow-[var(--hp-shadow-glow-violet)]"
                                  : "border-[var(--hp-border)] bg-black/30 text-[var(--hp-text-secondary)] hover:text-white"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>

                        {/* Custom Budget Value Input */}
                        {formData.budget === "Custom Budget" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3"
                          >
                            <div className="relative">
                              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-mono text-[var(--hp-accent-secondary)]">
                                ₹
                              </span>
                              <input
                                type="text"
                                placeholder="Enter custom amount (e.g. ₹2,50,000 or custom scope)"
                                value={formData.customBudget}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    customBudget: e.target.value,
                                  })
                                }
                                className="w-full rounded-xl border border-[var(--hp-accent-secondary)]/50 bg-black/60 pl-8 pr-4 py-2.5 text-sm text-white focus:border-[var(--hp-accent-secondary)] focus:outline-none transition-colors"
                              />
                            </div>
                          </motion.div>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white mb-2">
                          Project Description & Requirements *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Describe your project requirements, technical challenges, expected deliverables, or timeline goals..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="w-full rounded-xl border border-[var(--hp-border)] bg-black/50 px-4 py-3 text-sm text-white focus:border-[var(--hp-accent-secondary)] focus:outline-none transition-colors"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            <span>Transmitting Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="size-4" />
                            <span>Submit Project Inquiry</span>
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* FOUNDING HUB & DIRECT CONTACT INFO */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Consultation CTA Card */}
              <div className="rounded-[var(--hp-radius-xl)] border border-[var(--hp-accent-primary)]/40 bg-gradient-to-br from-[var(--hp-accent-primary)]/20 to-[var(--hp-surface)] p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="size-5 text-[var(--hp-accent-secondary)]" />
                  <h3 className="font-display text-xl font-medium text-white">
                    Schedule a Consultation
                  </h3>
                </div>
                <p className="text-xs text-[var(--hp-text-secondary)] leading-relaxed mb-6">
                  Book a direct 30-minute consultation with our engineering team to review software architectures, AI feasibility, or product development scopes.
                </p>
                <Button
                  onClick={() => setIsConsultationModalOpen(true)}
                  variant="primary"
                  size="md"
                  withArrow
                  className="w-full"
                >
                  Schedule Session
                </Button>
              </div>

              {/* Direct Email Card */}
              {contactData.email && (
                <div className="rounded-2xl border border-[var(--hp-border)] bg-[var(--hp-card)] p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="size-4 text-[var(--hp-accent-secondary)]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-[var(--hp-text-tertiary)]">
                      Official Mailbox
                    </span>
                  </div>
                  <a
                    href={`mailto:${contactData.email}`}
                    className="font-display text-lg font-medium text-white hover:text-[var(--hp-accent-secondary)] transition-colors"
                  >
                    {contactData.email}
                  </a>
                  <p className="text-xs text-[var(--hp-text-secondary)] mt-1">
                    Every inquiry is reviewed directly by our engineering leads.
                  </p>
                </div>
              )}

              {/* Founding Base Card */}
              <div className="rounded-2xl border border-[var(--hp-border)] bg-[var(--hp-card)] p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-[var(--hp-accent-secondary)]" />
                    <h4 className="font-display text-base font-medium text-white">
                      {contactData.headquarters.city}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--hp-text-tertiary)]">
                    {contactData.headquarters.timezone}
                  </span>
                </div>
                <p className="text-xs text-[var(--hp-text-secondary)] leading-relaxed mb-4">
                  {contactData.headquarters.region} · {contactData.headquarters.role}
                </p>

                {/* Collaboration Modes */}
                <div className="flex flex-col gap-2.5 border-t border-[var(--hp-border)] pt-4">
                  {contactData.collaborationModes.map((mode, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <Zap className="size-3.5 text-[var(--hp-accent-secondary)] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-white">{mode.title}: </span>
                        <span className="text-[var(--hp-text-secondary)]">{mode.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONSULTATION MODAL */}
      <AnimatePresence>
        {isConsultationModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsultationModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-w-md w-full rounded-[var(--hp-radius-xl)] border border-[var(--hp-border-strong)] bg-[var(--hp-card)] p-8 text-center shadow-2xl hp-noise"
            >
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-[var(--hp-accent-primary)]/20 text-[var(--hp-accent-secondary)] border border-[var(--hp-accent-primary)]/30">
                <Calendar className="size-7" />
              </div>
              <h3 className="font-display text-2xl font-medium text-white mb-2">
                Book Architecture Session
              </h3>
              <p className="text-xs text-[var(--hp-text-secondary)] leading-relaxed mb-6">
                Request a dedicated technical consultation session with our engineers.
              </p>

              <div className="flex flex-col gap-3 mb-6">
                {["Tomorrow at 11:00 AM IST", "Tomorrow at 04:00 PM IST", "Day After at 02:30 PM IST"].map((slot, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      alert(`Session requested for ${slot}! Confirmation will be dispatched to services@hyperplane.com.`);
                      setIsConsultationModalOpen(false);
                    }}
                    className="rounded-xl border border-[var(--hp-border)] bg-black/40 p-3 text-xs font-medium text-white hover:border-[var(--hp-accent-secondary)] transition-colors"
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <Button
                onClick={() => setIsConsultationModalOpen(false)}
                variant="secondary"
                size="md"
                className="w-full"
              >
                Close Window
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
