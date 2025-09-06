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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSrc, setCurrentSrc] = useState(questions[0].video);

  // Preload the next video in the background
  useEffect(() => {
    if (currentIndex + 1 < questions.length) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = questions[currentIndex + 1].video;
      link.type = "video/mp4";
      document.head.appendChild(link);
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setCurrentSrc(questions[currentIndex + 1].video);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <video
        key={currentSrc}
        src={currentSrc}
        controls
        autoPlay
        preload="auto"
        width={640}
      />
      <button
        onClick={handleNext}
        disabled={currentIndex + 1 >= questions.length}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
