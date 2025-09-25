import { useEffect, useRef, useState } from "react";
import { AnamEvent, createClient, MessageRole, type AnamClient } from "@anam-ai/js-sdk";
import { Loader } from "lucide-react";

const AnumAI = ({ sessionToken }: { sessionToken: string }) => {
  const anamClientRef = useRef<AnamClient | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [transcript, setTranscript] = useState<string>("");
  const [perosonaTranscript, setPerosonaTranscript] = useState<string>("");
  const [isListening, setIsListening] = useState(false);

  // Add this at the top of your component
  const cleanupAllSessions = async () => {
    // Force cleanup any existing sessions
    if (anamClientRef.current) {
      try {
        await anamClientRef.current.stopStreaming();
      } catch (err) {
        console.error("Error in cleanup:", err);
      } finally {
        anamClientRef.current = null;
      }
    }

    // Clear video element
    if (videoRef?.current) {
      videoRef.current.srcObject = null;
      videoRef.current.load();
    }

    // Add a longer delay to ensure server-side cleanup
    await new Promise((res) => setTimeout(res, 2000));
  };
  useEffect(() => {
    const setup = async () => {
      // Always cleanup first
      await cleanupAllSessions();

      const client = createClient(sessionToken);
      anamClientRef.current = client;

      client.addListener(AnamEvent.SESSION_READY, () => {
        setLoading(false);
      });

      try {
        await client.streamToVideoElement(`video-element-${sessionToken}`);
      } catch (err) {
        console.error("Error starting stream:", err);
        // Cleanup on error
        await cleanupAllSessions();
      }
    };

    setup();

    return () => {
      (async () => {
        if (anamClientRef.current) {
          try {
            await anamClientRef.current.stopStreaming();
          } catch (e) {
            console.error("Cleanup stopStreaming failed:", e);
          } finally {
            anamClientRef.current = null;
          }
        }
      })();
    };
  }, [sessionToken]);
  useEffect(() => {
    if (anamClientRef.current) {
      anamClientRef.current.addListener(
        AnamEvent.MESSAGE_STREAM_EVENT_RECEIVED,
        (event) => {
          if (event.role === MessageRole.PERSONA) {
            setPerosonaTranscript(event.content);
          } else if (event.role === MessageRole.USER) {
            setTranscript(event.content);
          }
        },
      );
      anamClientRef.current.addListener(
        AnamEvent.INPUT_AUDIO_STREAM_STARTED,
        (event) => {
          if (event) {
            setIsListening(true);
          } else {
            setIsListening(false);
          }
        },
      );
    }
  }, [loading]);

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
        muted // Add this
        onCanPlayThrough={() => setLoading(false)}
      ></video>
      <button
        onClick={() => setIsListening(!isListening)}
        className={`
        relative px-6 py-3 rounded-full text-white font-semibold
        transition-all duration-300
        ${isListening ? "bg-red-600 animate-glow" : "bg-gray-700"}
      `}
      >
        🎤 {isListening ? "Listening..." : "Start"}
      </button>

      <p>User Transcript</p>
      {transcript !== "" && <p>{transcript}</p>}
      <p>Persona Transcript</p>
      {perosonaTranscript !== "" && <p>{perosonaTranscript}</p>}
    </div>
  );
};

export default AnumAI;
