"use client";

import { useState, useEffect } from "react";

const greetings = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "Olá",
  "Hallo",
  "Namaste",
  "مرحباً",
  "안녕하세요",
  "こんにちは",
  "你好",
  "ሰላም",
];

export default function Loader() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === greetings.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
            document.body.style.overflow = "auto";
            setTimeout(() => setHidden(true), 800); // Wait for slide-up CSS
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 250);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`loader-overlay ${isLoaded ? "slide-up" : ""}`}>
      <h1 className="loader-greeting" key={index}>
        {greetings[index]}
      </h1>
    </div>
  );
}
