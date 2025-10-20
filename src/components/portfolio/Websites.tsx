"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import ImageGalleryModal from "./ImageGalleryModal";

interface WebsiteCardProps {
  id: number;
  category: string;
  technologies: string[];
  title: string;
  description: string;
  images: (string | StaticImageData)[];
}

export default function Websites({ id, category, technologies, title, description, images }: WebsiteCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-slate-900/70 rounded-2xl overflow-hidden border border-emerald-500/30 shadow-lg shadow-emerald-500/20 transition-transform duration-300 group hover:-translate-y-1 cursor-pointer"
      >
        {/* Project Image */}
        <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 relative overflow-hidden">
          {images.length > 0 ? (
            <>
              <Image
                src={images[0]}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-sm font-medium bg-emerald-500/90 px-4 py-2 rounded-lg">
                  View Gallery ({images.length})
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 bg-slate-800/40 backdrop-blur-sm flex items-center justify-center">
              <svg
                className="w-16 h-16 text-emerald-400/50 group-hover:text-emerald-400 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>
        
        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-emerald-200 font-semibold">
              {title}
            </span>
            <span className="text-xs text-emerald-200/90 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
              {category}
            </span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-emerald-200 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <ImageGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={images}
        projectTitle={title}
      />
    </>
  );
}
