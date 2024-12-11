"use client";
import React from "react";
import styles from "./button.module.css";

export default function Button({
  color,
  shadow,
  children,
}: {
  color: string;
  shadow: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <button
        style={{ backgroundColor: color, boxShadow: `0 0 10px ${shadow}` }}
        className={`${styles.button} button`}
      >
        {children}
      </button>
    </>
  );
}
