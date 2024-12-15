"use client";
import styles from "./movingImages.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "./images/clothes-group/clothes-5.jpg",
  "./images/clothes-group/clothes-6.jpg",
  "./images/clothes-group/clothes-7.jpg",
  "./images/clothes-group/clothes-8.jpg",
  "./images/clothes-group/clothes-9.jpg",
  "./images/clothes-group/clothes-10.jpg",
  "./images/clothes-group/clothes-11.jpg",
  "./images/clothes-group/clothes-12.jpg",
  "./images/clothes-group/clothes-13.jpg",
  "./images/clothes-group/clothes-14.jpg",
];

export default function MovingImages() {
  const sectionPinRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const createLayers = Array.from({ length: 3 }, (_, index) => index + 1);

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
        },
      });

      imagesRef.current.forEach((image, index) => {
        tl.fromTo(
          image,
          { opacity: 0, scale: 5 },
          {
            opacity: 1,
            scale: 1,
            duration: 5,
            ease: "power2.out",
          },
          `+=${0.2}`
        );
      });

      tl.fromTo(
        overlay,
        { opacity: 0 },
        {
          opacity: 0.5,
          duration: 1,
          ease: "power1.out",
          stagger: 1,
        }
      );

      tl.fromTo(
        title,
        { opecity: 0, scale: 5 },
        { opacity: 1, scale: 1, duration: 5, ease: "power1.out" }
      );
    }
  }, []);

  return (
    <section className={styles.sectionWrapperPin} ref={sectionPinRef}>
      <section className={styles.sectionContainer} ref={sectionRef}>
        <div className={styles.imageGroup}>
          {images.map((src, index) => (
            <div
              key={index}
              className={styles.imageWrapper}
              ref={(el) => {
                imagesRef.current[index] = el!;
              }}
            >
              <img
                key={index}
                className={styles.img}
                src={src}
                alt={`clothes-${index}`}
              />
            </div>
          ))}
        </div>
        <div ref={titleRef} className={styles.articleTitle}>
          The New Era of Style: Where Timeless Elegance Meets Bold Innovation
        </div>

        <div ref={overlayRef} className={styles.overlay}>
          {createLayers.map((layer, index) => (
            <div key={index} className={styles.layer}></div>
          ))}
        </div>
      </section>
    </section>
  );
}
