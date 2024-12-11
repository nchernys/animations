"use client";
import styles from "./header.module.css";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStumbleupon } from "@fortawesome/free-brands-svg-icons";
import gsap from "gsap";



export default function Header() {
  const linkListRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Header */}
      <header className={styles.header}>
        <nav className={styles.navBar}>
          <FontAwesomeIcon icon={faStumbleupon} className={styles.logoIcon} />
          <ul className={styles.navList}>
            <li
              className={styles.listItem}
             
            > Sidebar Menu </li>

            <li className={styles.listItem}>Glowing Sliders</li>
            <li className={styles.listItem}>Text Animation</li>
            <li className={styles.listItem}>Ripple Effect</li>
          </ul>
          <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
        </nav>
      </header>

    
    </>
  );
}
