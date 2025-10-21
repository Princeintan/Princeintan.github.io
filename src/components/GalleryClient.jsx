// src/components/GalleryClient.jsx
import { useState } from "preact/hooks";

export default function GalleryClient({ images, featuredIndex = 0 }) {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* Responsive Image Grid */}
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            class={
              index === featuredIndex
                ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-md focus:outline-none"
                : "rounded-2xl overflow-hidden shadow-md focus:outline-none"
            }
            onClick={() => setActive(index)}
          >
            <img
              src={img.src}
              alt={img.alt}
              class="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {active !== null && (
        <div
          class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 sm:p-8"
          onClick={() => setActive(null)}
        >
          <div class="relative max-w-5xl w-full">
            <img
              src={images[active].src}
              alt={images[active].alt}
              class="w-full rounded-xl"
            />
            <p class="text-center text-gray-300 mt-2">{images[active].alt}</p>

            {/* Prev / Next buttons */}
            <button
              class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                setActive((active - 1 + images.length) % images.length);
              }}
            >
              ‹
            </button>
            <button
              class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                setActive((active + 1) % images.length);
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
