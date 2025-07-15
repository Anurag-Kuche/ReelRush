"use client";
import React from "react";
import { Heart, MessageCircle, Send, User } from "lucide-react"; // Install lucide-react

const ReelPlayer = ({ src }: { src: string }) => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video */}
      <video
        src={src}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay UI */}
      <div className="absolute bottom-0 left-0 w-full p-4 text-white flex justify-between items-end z-10">
        {/* Left side: Profile & caption */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User className="w-6 h-6" />
            <span>@username</span>
          </div>
          <p className="text-sm">This is a cool reel! 🔥</p>
        </div>

        {/* Right side: Actions */}
        <div className="flex flex-col items-center gap-4 mb-8 mr-4">
          <button className="hover:scale-110 transition-transform">
            <Heart className="w-6 h-6" />
          </button>
          <button className="hover:scale-110 transition-transform">
            <MessageCircle className="w-6 h-6" />
          </button>
          <button className="hover:scale-110 transition-transform">
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReelPlayer;
