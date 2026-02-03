"use client";

import { motion } from "framer-motion";

interface Blob {
  color: string;
  size: number;
  duration: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const blobs: Blob[] = [
  {
    color: "rgba(26, 16, 40, 0.8)",
    size: 600,
    top: "-10%",
    left: "-5%",
    duration: 18,
  },
  {
    color: "rgba(15, 26, 46, 0.7)",
    size: 550,
    top: "20%",
    right: "-10%",
    duration: 22,
  },
  {
    color: "rgba(201, 168, 76, 0.04)",
    size: 500,
    bottom: "-5%",
    left: "30%",
    duration: 25,
  },
  {
    color: "rgba(20, 12, 35, 0.6)",
    size: 480,
    bottom: "10%",
    right: "10%",
    duration: 15,
  },
];

export default function MeshGradient() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          initial={{ scale: 1, rotate: 0 }}
          animate={{
            scale: [1, 1.15, 0.95, 1.08, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: blob.size,
            height: blob.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: "blur(120px)",
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
        />
      ))}
    </div>
  );
}
