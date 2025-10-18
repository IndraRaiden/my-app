"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { gaEvent, adsConversion, makeAdsSendTo } from "@/lib/gtag";

export default function Form() {
  const { t } = useLanguage();
  const ADS_ID = "AW-17656232046";
  const ADS_LABEL_LEAD = process.env.NEXT_PUBLIC_ADS_CONV_LABEL_LEAD;
  const SEND_TO_LEAD = makeAdsSendTo(ADS_ID, ADS_LABEL_LEAD);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xeorndvr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
        try {
          gaEvent("generate_lead", { method: "form", form_id: "contact_form" });
          adsConversion(SEND_TO_LEAD, { value: 1.0, currency: "MXN" });
        } catch {}
      } else {
        setStatus("error");
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-8 shadow-2xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 opacity-60" />
      <div className="absolute -right-24 -top-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative">
        {status === "success" && (
          <div className="mb-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm font-medium text-emerald-200">
            ✓ Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm font-medium text-red-200">
            ✗ {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
            >
              {t("contact.nameLabel")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-emerald-500/10 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 shadow-inner focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all"
              placeholder={t("contact.namePlaceholder")}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
            >
              {t("contact.emailLabel")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-emerald-500/10 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 shadow-inner focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all"
              placeholder={t("contact.emailPlaceholder")}
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
            >
              {t("contact.companyLabel")}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-emerald-500/10 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 shadow-inner focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all"
              placeholder={t("contact.companyPlaceholder")}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-slate-200 mb-2 tracking-wide"
            >
              {t("contact.messageLabel")}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-xl border border-emerald-500/10 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 shadow-inner focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all resize-none"
              placeholder={t("contact.messagePlaceholder")}
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {status === "submitting" ? "Sending..." : t("contact.sendMessage")}
          </button>
        </form>
      </div>
    </div>
  );
}
