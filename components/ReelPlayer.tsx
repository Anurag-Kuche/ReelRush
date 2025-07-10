// components/ReelPlayer.tsx
"use client";
import React from "react";

const ReelPlayer = ({ src }: { src: string }) => {
  return (
    <video
      src={src}
      className="w-full h-screen object-cover"
      controls
      autoPlay
      loop
      muted
    />
  );
};

export default ReelPlayer;
