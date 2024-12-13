"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import styles from "./sidebarMenu.module.css";

export default function SidebarMenu() {
  const [svgContent, setSvgContent] = useState<string>("");
  const [svgContentArrow, setSvgContentArrow] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState(false);
  const linkListRef = useRef<HTMLDivElement>(null);
  const sideBarRef = useRef<HTMLDivElement>(null);

  // Animate Dropdown Links and Sidebar
  useEffect(() => {
    if (showDropdown && linkListRef.current && sideBarRef.current) {
      const sideBar = sideBarRef.current;
      const links = gsap.utils.toArray<HTMLElement>(`.${styles.link}`);
      gsap.fromTo(
        links,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
        },
      );
      gsap.fromTo(
        sideBar,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
      );
    }
  }, [showDropdown]);

  // Fetch the SVG Text
  useEffect(() => {
    const fetchSvgText = async () => {
      try {
        const response = await fetch("/images/svg-text-10.svg");
        const svgText = await response.text();
        setSvgContent(svgText);
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    };
    fetchSvgText();
  }, []);

  useEffect(() => {
    const fetchSvgArrow = async () => {
      try {
        const response = await fetch("/images/arrow.svg");
        const svgArrow = await response.text();
        setSvgContentArrow(svgArrow);
      } catch (error) {
        console.error("Error fetching SVG:", error);
      }
    };
    fetchSvgArrow();
  }, []);

  // Animate Both SVGs
  useEffect(() => {
    if (svgContent) {
      requestAnimationFrame(() => {
        const paths = Array.from(document.querySelectorAll(`.svg-container path`)).reverse();
        const arrowPaths = document.querySelectorAll(`.svg-container-arrow path`);
  
        paths.forEach((path) => {
          const pathLength = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
            stroke: "#fff",
            strokeWidth: .2,
            fill: "#fff",
            fillOpacity: 0,
          });
        });
  
        arrowPaths.forEach((arPath) => {
          const pathLength = arPath.getTotalLength();
          gsap.set(arPath, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
            stroke: "#fff",
            strokeWidth: .2,
            fill: "#fff",
            fillOpacity: 0,
          });
        });
  
        const tl = gsap.timeline();
        tl.to([...paths, ...arrowPaths], {
          strokeDashoffset: 0,
          duration: .3,
          ease: "power2.out",
          stagger: 0.1,
          fillOpacity: 1,

        });
      });
    }
  }, [svgContent]);

  return (
    <div className={styles.sidebarSection}>
          <div
        className={styles.sideBarTextContainer}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <div
          className={`${styles.svgContainer} svg-container`}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        ></div>

        <div
          className={`${styles.arrow} svg-container-arrow`}
          dangerouslySetInnerHTML={{ __html: svgContentArrow }}
        ></div>
      </div>

      {showDropdown && (
        <div className={styles.sideBar} ref={sideBarRef}>
          <div className={styles.dropdownMenu} ref={linkListRef}>
            <div className={styles.link}>Chocolate Ice-Cream</div>
            <div className={styles.link}>Vanilla Ice-Cream</div>
            <div className={styles.link}>Strawberry Ice-Cream</div>
            <div className={styles.link}>Cherry Ice-Cream</div>
            <div className={styles.link}>Mocha Ice-Cream</div>
          </div>
        </div>
      )}
    </div>
  );
}
