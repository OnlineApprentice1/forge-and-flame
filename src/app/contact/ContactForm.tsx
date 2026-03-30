"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full px-4 py-3 type-body bg-base-200 border-2 border-base-300 focus:outline-none focus:border-primary placeholder:text-base-content/40";
const labelClasses = "block type-small mb-1.5";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="card-standard p-8 text-center"
        style={{ borderColor: "var(--clr-accent)" }}
      >
        <h3
          className="type-card mb-3"
          style={{ color: "var(--clr-accent)" }}
        >
          Message Received
        </h3>
        <p
          className="type-body mb-6"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          We&rsquo;ll be in touch within one business day. If your project is
          urgent, call us directly at{" "}
          <a
            href="tel:+18075550173"
            className="font-semibold"
            style={{ color: "var(--clr-primary)" }}
          >
            {siteConfig.phone}
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-profile-ghost"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className={labelClasses}
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClasses}
            style={{ color: "var(--clr-text-primary)" }}
            aria-required="true"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className={labelClasses}
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClasses}
            style={{ color: "var(--clr-text-primary)" }}
            aria-required="true"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className={labelClasses}
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(807) 555-0000"
            className={inputClasses}
            style={{ color: "var(--clr-text-primary)" }}
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className={labelClasses}
            style={{ color: "var(--clr-text-secondary)" }}
          >
            Service Type
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={inputClasses}
            style={{
              color: formData.service
                ? "var(--clr-text-primary)"
                : "var(--clr-text-muted)",
            }}
          >
            <option value="">Select a service</option>
            <option value="custom-fabrication">Custom Fabrication</option>
            <option value="structural-welding">Structural Welding</option>
            <option value="ornamental-ironwork">Ornamental Ironwork</option>
            <option value="mobile-welding">Mobile Welding</option>
            <option value="repairs-restoration">Repairs &amp; Restoration</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className={labelClasses}
          style={{ color: "var(--clr-text-secondary)" }}
        >
          Project Description *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your project — materials, dimensions, timeline, location, any special requirements..."
          className={`${inputClasses} resize-y`}
          style={{ color: "var(--clr-text-primary)" }}
          aria-required="true"
        />
      </div>

      {status === "error" && (
        <p
          className="type-small"
          style={{ color: "var(--clr-primary)" }}
          role="alert"
        >
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-profile inline-flex items-center gap-2"
      >
        {status === "submitting" ? "Sending..." : "Send Request"}
        {status !== "submitting" && (
          <ArrowRight size={16} aria-hidden="true" />
        )}
      </button>
    </form>
  );
}
