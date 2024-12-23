"use client";
import styles from "./h-scroll.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import TopImage from "../../public/images/horizontal-scroll/top-image.svg";
import ReturnHome from "../components/return-home/returnHome";

gsap.registerPlugin(ScrollTrigger);

export default function Blocks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const mm = gsap.matchMedia();

      // Desktop Animation
      mm.add("(min-width: 1024px)", () => {
        const totalWidth = container.scrollWidth - window.innerWidth;

        gsap.to(container, {
          x: -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: container.parentElement as HTMLElement,
            start: "top top",
            end: `+=${totalWidth * 2}`,
            pin: true,
            scrub: true,
          },
        });
      });

      // Mobile Animation (Vertical Fallback)
      mm.add("(max-width: 1023px)", () => {
        gsap.set(container, { clearProps: "all" });
        console.log("Mobile fallback: Horizontal scroll disabled");
      });
    }
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <ReturnHome color='#d6ccc2' />
      <div className={styles.sectionOne}>
        <h2>Curated collection of fashion and leisure products</h2>

        <div className={styles.homeRight}>
          <div className={styles.topImage}>
            <TopImage />
          </div>
          <p>
            Explore our thoughtfully curated collection of fashion and leisure
            products, designed to bring elegance, comfort, and quality to your
            everyday life. From timeless wardrobe essentials to stylish
            accessories, each piece is crafted with attention to detail and a
            focus on versatility, ensuring you look and feel your best in any
            setting.
          </p>
        </div>
      </div>
      <div className={styles.containerWrapper}>
        <div ref={containerRef} className={styles.container}>
          <div className={styles.box}>
            <div className={styles.div1}>
              <img src={"/images/horizontal-scroll/image1.jpg"} alt='' />
            </div>
            <div className={styles.div2}>
              Quality products designed for everyday luxury and comfort.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.div1}>
              <img src={"/images/horizontal-scroll/image2.jpg"} alt='' />
            </div>
            <div className={styles.div2}>
              Quality products designed for everyday luxury and comfort.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.div1}>
              <img src={"/images/horizontal-scroll/image3.jpg"} alt='' />
            </div>
            <div className={styles.div2}>
              Quality products designed for everyday luxury and comfort.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.div1}>
              <img src={"/images/horizontal-scroll/image4.jpg"} alt='' />
            </div>
            <div className={styles.div2}>
              Quality products designed for everyday luxury and comfort.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.div1}>
              <img src={"/images/horizontal-scroll/image5.jpg"} alt='' />
            </div>
            <div className={styles.div2}>
              Quality products designed for everyday luxury and comfort.
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.div1}>
              <img src={"/images/horizontal-scroll/image6.jpg"} alt='' />
            </div>
            <div className={styles.div2}>
              Quality products designed for everyday luxury and comfort.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionTwo}>
        <div className={styles.box}>
          <sup>1</sup>
          <h4>Glow</h4>
          <p>
            Achieve radiant, healthy skin with beauty products crafted for
            nourishment and lasting results.
          </p>
        </div>
        <div className={styles.box}>
          <sup>2</sup>
          <h4>Style</h4>
          <p>
            Discover timeless fashion essentials that combine elegance, comfort,
            and versatility for every occasion
          </p>
        </div>
        <div className={styles.box}>
          <sup>3</sup>
          <h4>Chic</h4>
          <p>
            Elevate your look with accessories and trends that highlight your
            unique style effortlessly
          </p>
        </div>
        <div className={styles.box}>
          <sup>4</sup>
          <h4>Care</h4>
          <p>
            Pamper yourself with beauty products designed for self-care,
            relaxation, and rejuvenation
          </p>
        </div>
      </div>
      <div className={styles.sectionThree}>
        <div className={styles.imageWrapper}>
          <img src='/images/horizontal-scroll/yoga.jpg' alt='' />
        </div>
        <div className={styles.content}>
          <h2>Rejuvenate Your Senses at Our Luxury Spa</h2>
          <p>
            Escape the stresses of everyday life and indulge in a world of
            tranquility at our luxury spa. We offer a serene retreat where
            relaxation, rejuvenation, and self-care come together. From soothing
            massages to revitalizing facials and premium body treatments, every
            experience is designed to restore your mind, body, and spirit. Our
            expert therapists and calming ambiance ensure you leave feeling
            refreshed, recharged, and radiant. Treat yourself to the ultimate
            wellness experience and discover the peace you deserve. Your journey
            to relaxation starts here.
          </p>
        </div>
      </div>
    </div>
  );
}
