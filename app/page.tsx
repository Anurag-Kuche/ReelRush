// app/page.tsx
import ReelPlayer from "@/components/ReelPlayer";

export default function Home() {
  const reels = ["/reels/sample1.mp4", "/reels/sample2.mp4"]; // Add more

  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll">
      {reels.map((reel, index) => (
        <div key={index} className="snap-start h-screen">
          <ReelPlayer src={reel} />
        </div>
      ))}
    </div>
  );
}
