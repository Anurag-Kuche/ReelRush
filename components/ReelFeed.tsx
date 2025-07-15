// components/ReelFeed.tsx
"use client";
import React, { useRef, useEffect } from "react";
import ReelPlayer from "./ReelPlayer";

const reels = [
  "/reel1.mp4",
  "/reel2.mp4",
  "/reel3.mp4",
  // add more reel URLs
];

const ReelFeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video");
          if (video) {
            if (entry.isIntersecting) {
              video.play();
            } else {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.9 }
    );

    const children = containerRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {reels.map((src, index) => (
        <div key={index} className="snap-start h-screen">
          <ReelPlayer src={src} />
        </div>
      ))}
    </div>
  );
};

export default ReelFeed;
