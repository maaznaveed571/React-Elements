import { useEffect, useState } from "react";

const questions = [
  { id: "5-EN", video: "/verbal-videos/1.mp4" },
  { id: "6-EN", video: "/verbal-videos/2.mp4" },
  { id: "7-EN", video: "/verbal-videos/3.mp4" },
  { id: "8-EN", video: "/verbal-videos/4.mp4" },
  { id: "9-EN", video: "/verbal-videos/5.mp4" },
  { id: "10-EN", video: "/verbal-videos/6.mp4" },
  { id: "11-EN", video: "/verbal-videos/7.mp4" },
  { id: "12-EN", video: "/verbal-videos/8.mp4" },
  { id: "13-EN", video: "/verbal-videos/9.mp4" },
  { id: "14-EN", video: "/verbal-videos/10.mp4" },
];

export default function AssessmentPlayer() {
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function preload() {
      const urls: string[] = [];
      for (const q of questions) {
        const res = await fetch(q.video);
        const blob = await res.blob();
        urls.push(URL.createObjectURL(blob)); // blob URL stored
      }
      setVideoUrls(urls);
    }
    preload();
  }, []);

  if (videoUrls.length === 0) {
    return <p>Loading all videos…</p>;
  }

  const handleNext = () => {
    if (currentIndex + 1 < videoUrls.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <video
        key={videoUrls[currentIndex]}
        src={videoUrls[currentIndex]}
        controls
        autoPlay
        width={640}
      />
      <button
        onClick={handleNext}
        disabled={currentIndex + 1 >= videoUrls.length}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
