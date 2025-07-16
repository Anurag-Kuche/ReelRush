"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UploadPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!videoFile || !caption) return alert("Please provide video and caption");

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("caption", caption);
    formData.append("userId", session?.user?.id || "");

    const res = await fetch("/api/reels/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Reel uploaded!");
      router.push("/");
    } else {
      alert("Upload failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Your Reel</h1>

      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      {videoPreview && (
        <video
          src={videoPreview}
          controls
          className="w-full mb-4 rounded-lg"
        />
      )}

      <textarea
        className="w-full p-2 border rounded mb-4"
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />

      <button
        className="bg-black text-white px-4 py-2 rounded w-full"
        onClick={handleSubmit}
      >
        Upload Reel
      </button>
    </div>
  );
}
