"use client";

import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

export default function FaceDetection({
  onDetected,
}: {
  onDetected: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    let intervalId: NodeJS.Timeout;

    const startCamera = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);

      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play().catch(() => {});
        }

        intervalId = setInterval(async () => {
          if (videoRef.current) {
            const detections = await faceapi.detectAllFaces(
              videoRef.current,
              new faceapi.TinyFaceDetectorOptions()
            );
            if (detections.length > 0) {
              stopCamera();
              onDetected();
            }
          }
        }, 500);
      } catch (err) {
        console.error("Camera error:", err);
      }
    };

    const stopCamera = () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      clearInterval(intervalId);
    };

    startCamera();
    return () => stopCamera();
  }, [onDetected]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className="w-72 h-56 rounded-md border border-green-600"
    />
  );
}
