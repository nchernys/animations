"use client";
import styles from "./space.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Line from "@/public/images/space/connections.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Space() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const boxWrapper = boxWrapperRef.current;

      gsap.fromTo(
        boxWrapper,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: -100,
          opacity: 1,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=300%`,
            scrub: true,
            markers: true,
            pin: true,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.spaceContainer}>
      <div className={styles.videoWrapper}>
        <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src='/images/space/cosmos2.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <p className={styles.line}>
          <Line />
          <Line />
        </p>

        <div ref={boxWrapperRef} className={styles.boxWrapper}>
          <div className={styles.box}>
            <h2>Mars</h2>
            <p>
              Mars, known as the &quot;Red Planet,&quot; has a thin atmosphere,
              polar ice caps, towering volcanoes, and deep canyons. Its surface
              hints at ancient water, sparking curiosity about the potential for
              past or future life.
            </p>
          </div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}>
            <h2>Venus</h2>
            <p>
              Venus, Earth&apos;s &quot;sister planet,&quot; is shrouded in
              thick clouds of sulfuric acid, with a scorching surface hotter
              than Mercury. Its runaway greenhouse effect, dense atmosphere, and
              volcanic plains make it a fascinating yet hostile world.
            </p>
          </div>
          <div className={styles.box}>
            <h2>Pluto</h2>
            <p>
              Pluto, once considered the ninth planet, is a distant dwarf planet
              in the Kuiper Belt. With icy mountains, a thin atmosphere, and a
              heart-shaped glacier, it continues to intrigue scientists
              exploring the outer edges of our solar system.
            </p>
          </div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}>
            <h2>Saturns</h2>
            <p>
              Saturn, the jewel of the solar system, is famous for its stunning
              rings made of ice and rock. This gas giant, with its swirling
              storms and many moons, including Titan, continues to fascinate
              astronomers and space explorers.
            </p>
          </div>
          <div className={styles.box}>
            <h2>Mars</h2>
            <p>
              Mars, known as the &quot;Red Planet,&quot; has a thin atmosphere,
              polar ice caps, towering volcanoes, and deep canyons. Its surface
              hints at ancient water, sparking curiosity about the potential for
              past or future life.
            </p>
          </div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}>
            <h2>Venus</h2>
            <p>
              Venus, Earth&apos;s &quot;sister planet,&quot; is shrouded in
              thick clouds of sulfuric acid, with a scorching surface hotter
              than Mercury. Its runaway greenhouse effect, dense atmosphere, and
              volcanic plains make it a fascinating yet hostile world.
            </p>
          </div>
          <div className={styles.box}>
            <h2>Pluto</h2>
            <p>
              Pluto, once considered the ninth planet, is a distant dwarf planet
              in the Kuiper Belt. With icy mountains, a thin atmosphere, and a
              heart-shaped glacier, it continues to intrigue scientists
              exploring the outer edges of our solar system.
            </p>
          </div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}>
            <h2>Saturns</h2>
            <p>
              Saturn, the jewel of the solar system, is famous for its stunning
              rings made of ice and rock. This gas giant, with its swirling
              storms and many moons, including Titan, continues to fascinate
              astronomers and space explorers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
