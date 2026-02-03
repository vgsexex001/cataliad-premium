"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "ghost";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant,
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    setMagneticOffset({ x: deltaX * 4, y: deltaY * 4 });
  };

  const handleMouseLeave = () => {
    setMagneticOffset({ x: 0, y: 0 });
  };

  const isPrimary = variant === "primary";

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "9999px",
    fontWeight: 600,
    letterSpacing: "0.05em",
    cursor: "pointer",
    textDecoration: "none",
    padding: "14px 32px",
    fontSize: "14px",
    transition: "box-shadow 0.3s ease",
    border: isPrimary
      ? "1px solid transparent"
      : "1px solid rgba(255,255,255,0.15)",
    background: isPrimary ? "#c9a84c" : "transparent",
    color: isPrimary ? "#0a0a0a" : "#ffffff",
  };

  const motionProps = {
    ref: ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>,
    className,
    style: baseStyle,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: {
      x: magneticOffset.x,
      y: magneticOffset.y,
    },
    whileHover: isPrimary
      ? {
          y: -2,
          boxShadow: "0 8px 30px rgba(201,168,76,0.35)",
        }
      : {
          borderColor: "rgba(255,255,255,0.4)",
        },
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
