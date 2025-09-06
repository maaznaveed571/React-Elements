"use client";
import { useState } from "react";

const questions = [
  { id: "5-EN", video: "/verbal-videos/1.mp4" },
  { id: "6-EN", video: "/verbal-videos/2.mp4" },
  { id: "7-EN", video: "/verbal-videos/3.mp4" },
  { id: "7-EN", video: "/verbal-videos/4.mp4" },
  { id: "7-EN", video: "/verbal-videos/5.mp4" },
  { id: "7-EN", video: "/verbal-videos/6.mp4" },
  { id: "7-EN", video: "/verbal-videos/7.mp4" },
  { id: "7-EN", video: "/verbal-videos/8.mp4" },
  { id: "7-EN", video: "/verbal-videos/9.mp4" },
  { id: "7-EN", video: "/verbal-videos/10.mp4" },
];

export default function AssessmentPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const currentVideo = questions[currentIndex].video;
  const nextVideo =
    currentIndex < questions.length - 1
      ? questions[currentIndex + 1].video
      : null;

  return (
    <div className="flex flex-col items-center gap-4">
      <video
        key={currentVideo} // reset player when video changes
        src={currentVideo}
        controls
        autoPlay
        preload="auto"
        className="rounded-lg shadow-md"
        width="640"
        height="360"
      />

      {/* Preload next video invisibly for instant switching */}
      {nextVideo && (
        <link rel="preload" as="video" href={nextVideo} type="video/mp4" />
      )}

      <button
        onClick={handleNext}
        disabled={currentIndex === questions.length - 1}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
      >
        Next Question
      </button>
    </div>
  );
}
