"use client";
import React, { useState } from "react";

const ReelUpload = () => {
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [caption, setCaption] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoURL(url);
    }
  };

  const handleCaptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaption(e.target.value);
  };

  const handleReadyToUpload = () => {
    if (!videoURL || !caption) {
      alert("Please select a video and add a caption!");
      return;
    }
    console.log("Ready to upload:", { videoURL, caption });
    // 🔜 later: upload to Firebase/Cloudinary
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Your Reel 🎬</h1>

      {/* File Picker */}
      <input
        type="file"
        accept="video/mp4"
        onChange={handleFileChange}
        className="mb-4 text-sm"
      />

      {/* Caption Input */}
      <input
        type="text"
        placeholder="Write a caption..."
        value={caption}
        onChange={handleCaptionChange}
        className="w-full max-w-sm mb-4 p-2 rounded bg-gray-800 text-white"
      />

      {/* Video Preview */}
      {videoURL && (
        <div className="mb-4">
          <video
            src={videoURL}
            controls
            className="aspect-[9/16] w-[360px] max-h-[80vh] rounded-lg shadow-lg object-cover"
          />
          <p className="mt-2 text-center text-sm italic text-gray-400">"{caption}"</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleReadyToUpload}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
      >
        Upload Reel
      </button>
    </div>
  );
};

export default ReelUpload;
