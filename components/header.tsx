"use client";
import styles from "./header.module.css";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStumbleupon } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const linkListRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.title}>Animations & Visual Effects</div>
      </header>
    </>
  );
}
