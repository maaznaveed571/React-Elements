import { useEffect, useRef, useState } from "react";
import { AnamEvent, createClient, type AnamClient } from "@anam-ai/js-sdk";
import { Loader } from "lucide-react";

const AnumAI = ({ sessionToken }: { sessionToken: string }) => {
    const anamClientRef = useRef<AnamClient | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [transcript, setTranscript] = useState<string>("");
    const [isListening, setIsListening] = useState(false);


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
                client.addListener(AnamEvent.MESSAGE_STREAM_EVENT_RECEIVED, (event) => {
                    setTranscript((prev) => `${prev ? prev : ""} ${event.content}`);
                });
                client.addListener(AnamEvent.INPUT_AUDIO_STREAM_STARTED, (event) => {
                    if (event) {
                        setIsListening(true);
                    } else {
                        setIsListening(false);
                    }
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
                onClick={() => setIsListening(!isListening)}
                className={`
        relative px-6 py-3 rounded-full text-white font-semibold
        transition-all duration-300
        ${isListening ? "bg-red-600 animate-glow" : "bg-gray-700"}
      `}
            >
                🎤 {isListening ? "Listening..." : "Start"}
            </button>

            {transcript !== "" && <p>{transcript}</p>}
        </div>
    );
};

export default AnumAI;
