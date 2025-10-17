"use client";

import { useState } from "react";
import Navbar from "@/components/overall/navbar";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, cloud solutions, and digital transformation consulting. Our team specializes in creating custom solutions tailored to your specific business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timeline estimates during the initial consultation phase.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an agile development methodology with regular sprints and client feedback sessions. Our process includes discovery, design, development, testing, deployment, and ongoing support. You'll have full visibility throughout the entire project lifecycle.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes! We offer various maintenance and support packages to ensure your project continues to run smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements based on your needs.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with modern technologies including React, Next.js, Node.js, TypeScript, Python, AWS, and many more. We carefully select the best technology stack for each project based on your requirements and long-term goals.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Project costs vary based on complexity, features, and timeline. We provide transparent pricing and detailed quotes after understanding your requirements. We offer flexible engagement models including fixed-price, time & materials, and dedicated team options.",
    },
    {
      question: "Can you help with an existing project?",
      answer:
        "Absolutely! We can help improve, maintain, or scale your existing applications. Our team can conduct code reviews, implement new features, optimize performance, or completely refactor your codebase if needed.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Yes, we love working with startups! We understand the unique challenges startups face and offer flexible solutions that can scale with your growth. We can help you build MVPs, validate ideas, and iterate quickly based on market feedback.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[100px]"></div>

      {/* Navigation */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col pt-20">
        <section className="py-24 px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
                FAQs
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our services, process, and
                how we can help bring your project to life.
              </p>
            </div>

            {/* FAQs List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-emerald-400 transition-transform duration-300 flex-shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-400 mb-6">
                Can't find the answer you're looking for? We'd love to hear from
                you.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
