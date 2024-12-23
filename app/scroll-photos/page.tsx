"use client";
import styles from "./movingImages.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import ReturnHome from "../components/return-home/returnHome";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "/images/clothes-group/clothes-5.jpg",
  "/images/clothes-group/clothes-6.jpg",
  "/images/clothes-group/clothes-7.jpg",
  "/images/clothes-group/clothes-8.jpg",
  "/images/clothes-group/clothes-9.jpg",
  "/images/clothes-group/clothes-10.jpg",
];

export default function MovingImages() {
  const sectionPinRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const createLayers = Array.from({ length: 3 }, (_, index) => index + 1);

  const angle = ["-15deg", "0deg", "5deg", "-10deg", "0deg", "15deg"];

  useEffect(() => {
    const sectionPin = sectionPinRef.current;
    const section = sectionRef.current;
    const title = titleRef.current;
    const overlay = overlayRef.current;

    const scrollDistance = window.innerHeight * 8;

    if (section) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollDistance}`,
          scrub: true,
          pin: true,
          markers: false,
          onEnter: () => {
            ScrollTrigger.refresh();
          },
        },
      });

      tl.fromTo(
        title,
        { opecity: 0, scale: 5 },
        { opacity: 1, scale: 1, duration: 5, ease: "power1.out" }
      );

      imagesRef.current.forEach((image, index) => {
        tl.fromTo(
          image,
          { opacity: 0, scale: 5, rotate: "15deg", y: 0 },
          {
            opacity: 1,
            scale: 1,
            y: index === 1 || index === 3 ? "-2rem" : "0",
            rotate: angle[index],
            duration: 5,
            ease: "power2.out",
          },
          `+=${0.2}`
        );
      });
    }
  }, []);

  return (
    <>
      <section className={styles.sectionWrapperPin} ref={sectionPinRef}>
        <section className={styles.sectionContainer} ref={sectionRef}>
          <ReturnHome color={"#ffffff4d"} />

          <div ref={titleRef} className={styles.articleTitle}>
            The New Era of Style: Where Timeless Elegance Meets Bold Innovation
          </div>
          <div className={styles.imageGroup}>
            {images.map((src, index) => (
              <div
                key={index}
                className={styles.imageWrapper}
                ref={(el) => {
                  imagesRef.current[index] = el!;
                }}
              >
                <div className={styles.innerWrapper}>
                  <img
                    key={index}
                    className={styles.Image}
                    src={src}
                    alt={`clothes-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
