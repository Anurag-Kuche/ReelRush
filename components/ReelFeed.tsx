"use client";
import { useEffect, useRef } from "react";
import ReelPlayer from "./ReelPlayer";
//reel in const reel
const reels = ["/reels/sample1.mp4", "/reels/sample1.mp4"];

const ReelFeed = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target.querySelector("video") as HTMLVideoElement;
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
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory"
    >
      {reels.map((src, i) => (
        <div key={i} className="h-screen w-full snap-start">
          <ReelPlayer src={src} />
        </div>
      ))}
    </div>
  );
};

export default ReelFeed;
