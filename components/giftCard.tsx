"use client";
import styles from "./giftCard.module.css";
import { useState, useEffect, useRef } from "react";
import WaveSvg from "./waveSVG";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./button";

gsap.registerPlugin(ScrollTrigger);

export default function GiftCard() {
  const giftcardRef = useRef<HTMLDivElement>(null);
  const promoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const giftcard = giftcardRef.current;
    const promo = promoRef.current;

    if (giftcard && promo) {
      const items = gsap.utils.toArray(giftcard.children) as HTMLElement[];
      const promoLines = promo.querySelectorAll(`.${styles.span}`);
      const btn = promo.querySelector(`.button`);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: giftcard,
          start: "top 40%",
          end: "bottom top",
          toggleActions: "play none none none",
          markers: false,
        },
      });

      tl.fromTo(
        giftcard,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
      );

      tl.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=.5",
      );

      items.forEach((item) => {
        const contentText = item.querySelectorAll(`.${styles.animatedText}`);
        const contentTextBottom = item.querySelector(
          `.${styles.animatedTextBottom}`,
        );

        contentText.forEach((text) => {
          if (text) {
            tl.fromTo(
              text,
              { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }, // Starting state
              {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Ending state
                duration: 1,
                ease: "power3.out",
              },
              "-=.3", // Correct relative positioning inside the method
            );
          }
        });
        if (contentTextBottom) {
          tl.add(
            gsap.fromTo(
              contentTextBottom,
              { opacity: 0, transform: "scale(0)" },
              {
                opacity: 1,
                transform: "scale(1)",
                duration: 0.85,
                ease: "elastic.out(1, 0.5)",
              },
            ),
            `-=${0.3}`,
          );
        }
      });

      tl.fromTo(
        promoLines,
        { y: "4.5rem" },
        {
          y: "0",
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.2,
        },
      );

      tl.fromTo(
        btn,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
          stagger: 0.2,
        },
      );
    }
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.glowContainer}>
        <div className={styles.sliderSection} ref={giftcardRef}>
          <div className={styles.wave1}>
            <WaveSvg color="#fb6f92" />
          </div>
          <div className={styles.wave2}>
            <WaveSvg color="#ff8fab" />
          </div>
          <div className={styles.image}>
            <img src="./images/headphones-2.png" alt="" />
          </div>
          <div className={styles.contentText}>
            <div className={`${styles.title} ${styles.animatedText}`}>
              Apple Music
            </div>
            <div className={`${styles.subtitle} ${styles.animatedText}`}>
              3 months{" "}
            </div>
            <div className={`${styles.subtitle2} ${styles.animatedText}`}>
              FREE
            </div>
            <div className={`${styles.subtitle3} ${styles.animatedTextBottom}`}>
              gift card
            </div>
          </div>
        </div>
      </div>
      <div className={styles.promo} ref={promoRef}>
        <div className={styles.innerPromo}>
          <div className={styles.wordContainer}>
            <span className={styles.span}>Buy </span>
          </div>
          <div className={styles.wordContainer}>
            <span className={styles.span}>Apple </span>
          </div>
          <div className={styles.wordContainer}>
            <span className={styles.span}>GX35P </span>
          </div>
          <div className={styles.wordContainer}>
            <span className={styles.span}>headphones </span>
          </div>
          <div className={styles.wordContainer}>
            <span className={styles.span}>and </span>
          </div>
          <div className={styles.wordContainer}>
            <span className={styles.span}>get </span>
          </div>
          <div className={styles.wordContainer}>
            <span className={styles.span}>a </span>
          </div>
          <div className={styles.wordContainer}>
            <span className={styles.span}>free </span>
          </div>
          <div className={styles.wordContainer}>
            <span className={styles.span}>Gift </span>
          </div>
          <div className={styles.wordContainer}>
            <span className={styles.span}>Card! </span>
          </div>
        </div>
        <Button color="#8935ff" shadow="#8935ff">
          Shop
        </Button>
      </div>
    </div>
  );
}
