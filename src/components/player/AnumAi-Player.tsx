import { useEffect, useRef } from "react";
import { createClient, type AnamClient } from "@anam-ai/js-sdk";

const AnumAI = ({ sessionToken }: { sessionToken: string }) => {
    const anamClientRef = useRef<AnamClient | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    console.log(anamClientRef, "anamClientRef")
    console.log(videoRef, "videoRef")

    // Expose client to parent via ref
    console.log("isStreaming", anamClientRef?.current?.isStreaming());
    const stopVideoStreaming = async () => {
        if (anamClientRef.current) {
            try {
                await anamClientRef.current.stopStreaming();
                console.log("Stopped stream");
            } catch (err) {
                console.error("Error stopping stream:", err);
            }

            // Clean up after stopping
            anamClientRef.current = null;
            if (videoRef?.current) {
                videoRef.current.srcObject = null;
                videoRef.current.load();
            }
        }
    }
    useEffect(() => {
        const setup = async () => {
            // Clean up old client before creating a new one
            stopVideoStreaming()
            // ⚠️ wait a bit to let server release the old session
            await new Promise((res) => setTimeout(res, 1000));

            // Create new client
            const client = createClient(sessionToken);
            anamClientRef.current = client;

            try {
                await client.streamToVideoElement(`video-element-${sessionToken}`);
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
        <div>
            <video
                ref={videoRef}
                id={`video-element-${sessionToken}`}
                autoPlay
                playsInline
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
}

export default AnumAI;
