"use client";

import Image from "next/image";
import { Mail, Phone, MessageCircle, PhoneCall } from "lucide-react";
import Navbar from "@/components/overall/navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import Form from "@/components/contact/form";
import bgImage from "@/app/bg.png";
import { gaEvent, adsConversion, makeAdsSendTo } from "@/lib/gtag";

export default function ContactPage() {
  const { t } = useLanguage();
  const whatsappNumber = "526242392710";
  const phoneNumbers = [
    { display: "+52 624 239 2710", href: "tel:+526242392710" },
    { display: "+52 56 63 95 4818", href: "tel:+525663954818" },
  ];
  const ADS_ID = "AW-17656232046";
  const ADS_LABEL_WHATSAPP = process.env.NEXT_PUBLIC_ADS_CONV_LABEL_WHATSAPP;
  const ADS_LABEL_CALL = process.env.NEXT_PUBLIC_ADS_CONV_LABEL_CALL;
  const SEND_TO_WHATSAPP = makeAdsSendTo(ADS_ID, ADS_LABEL_WHATSAPP);
  const SEND_TO_CALL = makeAdsSendTo(ADS_ID, ADS_LABEL_CALL);

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt=""
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/90" />
      </div>

      <Navbar />

      <div className="relative z-10 flex flex-col pt-24">
        <section className="pb-24 px-8 md:px-12">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                {t("contact.badge")}
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                {t("contact.title")} {" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  {t("contact.titleHighlight")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300/85 max-w-2xl mx-auto">
                {t("contact.subtitle")}
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
              <Form />

              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-7 shadow-2xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white leading-tight">
                        {t("contact.emailTitle")}
                      </h3>
                      <p className="text-sm text-slate-300/80">
                        websartificial@gmail.com
                      </p>
                    </div>
                  </div>
                  <a
                    href="mailto:websartificial@gmail.com"
                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors"
                  >
                    websartificial@gmail.com
                  </a>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-slate-950/80 p-7 shadow-2xl shadow-emerald-500/10 transition-transform duration-300 hover:-translate-y-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-300/90">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white leading-tight">
                        {t("contact.phoneTitle")}
                      </h3>
                      <p className="text-sm text-slate-300/80">+52 624 239 2710</p>
                      <p className="text-sm text-slate-300/80">+52 56 63 95 4818</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        gaEvent("contact_whatsapp_click", { location: "contact_page", number: whatsappNumber });
                        adsConversion(SEND_TO_WHATSAPP);
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:text-emerald-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                    {phoneNumbers.map((phone) => (
                      <a
                        key={phone.href}
                        href={phone.href}
                        onClick={() => {
                          gaEvent("contact_phone_click", { location: "contact_page", phone: phone.display });
                          adsConversion(SEND_TO_CALL);
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:text-emerald-200"
                      >
                        <PhoneCall className="w-4 h-4" />
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
