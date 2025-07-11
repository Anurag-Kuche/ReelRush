// components/ReelPlayer.tsx
"use client";
import React from "react";

const ReelPlayer = ({ src }: { src: string }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      <video
        src={src}
        className="h-full object-cover"
        controls
        autoPlay
        loop
        mute
      />
    </div>
  );
};

export default ReelPlayer;
