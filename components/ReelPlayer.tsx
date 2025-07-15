"use client";
import React, { useState } from "react";
import { Heart, HeartIcon, MessageCircle, Send, User } from "lucide-react";

const ReelPlayer = ({ src }: { src: string }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-black relative">
      {/* Video */}
      <video
        src={src}
        className="aspect-[9/16] h-full max-h-screen max-w-[360px] rounded-lg shadow-lg object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
      />

      {/* Overlay */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[360px] px-4 text-white flex justify-between items-end z-10">
        {/* Left: Username & Caption */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="text-sm">@anurag</span>
          </div>
          <p className="text-xs">This is an awesome reel! 🔥</p>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col items-center gap-4 mb-4">
          <button
            onClick={handleLike}
            className={`transition-transform duration-200 ${
              liked ? "scale-125 text-red-500" : "scale-100 text-white"
            }`}
          >
            {liked ? <HeartIcon fill="currentColor" className="w-6 h-6" /> : <Heart className="w-6 h-6" />}
          </button>

          <button className="hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5" />
          </button>

          <button className="hover:scale-110 transition-transform">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReelPlayer;
