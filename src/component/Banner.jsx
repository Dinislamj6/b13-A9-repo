"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Share Your Startup Ideas",
    description:
      "Turn your creative startup ideas into reality with IdeaVault.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 2,
    title: "Discover Trending Innovations",
    description:
      "Explore creative ideas shared by innovators worldwide.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    id: 3,
    title: "Collaborate And Grow",
    description:
      "Get feedback and improve your startup concepts together.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // next slide
  const nextSlide = () => {
    setCurrent(
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  // previous slide
  const prevSlide = () => {
    setCurrent(
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-center">

            <div className="max-w-6xl mx-auto px-6 text-white">

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {slide.title}
              </h1>

              <p className="text-lg md:text-xl max-w-2xl mb-6">
                {slide.description}
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
                Explore Ideas
              </button>

            </div>
          </div>
        </div>
      ))}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white px-4 py-2 rounded-full text-2xl"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white px-4 py-2 rounded-full text-2xl"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index
                ? "bg-white"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}