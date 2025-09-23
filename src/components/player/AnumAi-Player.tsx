import { useEffect, useRef, useState } from "react";
import { AnamEvent, createClient, type AnamClient } from "@anam-ai/js-sdk";
import { Loader } from "lucide-react";

const AnumAI = ({ sessionToken }: { sessionToken: string }) => {
  const anamClientRef = useRef<AnamClient | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const stopVideoStreaming = async () => {
    if (anamClientRef.current) {
      try {
        await anamClientRef.current.stopStreaming();
        console.log("Stopped stream");
      } catch (err) {
        console.error("Error stopping stream:", err);
      }

      anamClientRef.current = null;
      if (videoRef?.current) {
        videoRef.current.srcObject = null;
        videoRef.current.load();
      }
    }
  };
  useEffect(() => {
    const setup = async () => {
      stopVideoStreaming();

      const client = createClient(sessionToken, {
        disableInputAudio: true,
      });
      anamClientRef.current = client;

      try {
        await client.streamToVideoElement(`video-element-${sessionToken}`);

        client.addListener(AnamEvent.SESSION_READY, () => {
          setLoading(false);
        });
      } catch (err) {
        console.error("Error starting stream:", err);
      }
    };

    setup();

    return () => {
      // Cleanup on unmount or sessionToken change
      if (anamClientRef?.current) {
        anamClientRef?.current.stopStreaming();
      }
    };
  }, [sessionToken]);

  return (
    <div className="relative flex-1">
      {loading && (
        <div className="bg-gray-500 min-w-full h-full flex justify-center items-center absolute top-0 left-0 right-0">
          <Loader className="animate-spin text-[2rem]" />
        </div>
      )}
      <video
        ref={videoRef}
        id={`video-element-${sessionToken}`}
        autoPlay
        playsInline
        onCanPlayThrough={() => setLoading(false)}
      ></video>
      <button
        type="button"
        onClick={() => {
          anamClientRef.current?.stopStreaming();
        }}
      >
        stop Play
      </button>
    </div>
  );
};

export default AnumAI;
