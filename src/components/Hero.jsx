'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const words = ['Strategies', 'Marketing Ideas', 'Video Content'];

export default function Hero() {
  const textRef = useRef();
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    words.forEach(word => {
      tl.to(textRef.current, {
        duration: 0.8,
        opacity: 0,
        onComplete: () => textRef.current.textContent = word,
      }).to(textRef.current, { duration: 0.8, opacity: 1 });
    });
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Fresh <span ref={textRef} className="inline-block opacity-0">Strategies</span>
      </h1>
      <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
        Learn More
      </button>
    </div>
  );
}
