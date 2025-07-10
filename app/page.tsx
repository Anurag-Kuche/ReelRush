import ReelPlayer from "@/components/ReelPlayer";

export default function Home() {
  const reels = ["/reels/sample1.mp4", "/reels/sample2.mp4"];

  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll">
      {reels.map((reel, index) => (
        <div key={index} className="snap-start h-screen">
          <ReelPlayer src={reel} />
        </div>
      ))}
    </div>
  );
}
