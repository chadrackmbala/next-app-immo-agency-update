"use client";

import { useState } from "react";

type ProductGalleryProps = {
  images: {
    image: string;
  }[];
  titre: string;
};

export default function ProductGallery({
  images,
  titre,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === images.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1
    );
  };

  return (
    <>
      {images.map((item, index) => (
        <img
          key={index}
          src={`http://localhost:3001${item.image}`}
          alt={`${titre} ${index + 1}`}
          onClick={() => setSelectedIndex(index)}
          className="h-64 w-full cursor-pointer rounded-2xl object-cover transition duration-300 hover:scale-[1.02]"
        />
      ))}

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold shadow-lg"
            >
              ×
            </button>

            <button
              onClick={previousImage}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-2xl shadow-lg"
            >
              ‹
            </button>

            <img
              src={`http://localhost:3001${images[selectedIndex].image}`}
              alt={`${titre} ${selectedIndex + 1}`}
              className="h-[80vh] w-[95vw] max-w-[1400px] rounded-2xl object-contain shadow-2xl"
            />
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-2xl shadow-lg"
            >
              ›
            </button>

            <div className="mt-4 text-center text-white">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}