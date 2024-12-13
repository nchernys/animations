"use client";
import styles from "./fallCollection.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "./images/clothes-group/clothes-5.jpg", "./images/clothes-group/clothes-6.jpg", "./images/clothes-group/clothes-7.jpg", "./images/clothes-group/clothes-8.jpg", "./images/clothes-group/clothes-9.jpg", "./images/clothes-group/clothes-10.jpg", "./images/clothes-group/clothes-11.jpg", "./images/clothes-group/clothes-12.jpg", "./images/clothes-group/clothes-13.jpg", "./images/clothes-group/clothes-14.jpg"
]

export default function FallCollection() {
  const fashionRef = useRef<HTMLDivElement>(null);
  const fashionContentRef = useRef<HTMLDivElement>(null);
 
  const cells = Array.from({ length: 100 }, (_, index) => index + 1);
  const blinds = Array.from({ length: 16 }, (_, index) => index + 1);


  useEffect(() => {
    const fashion = fashionRef.current;
    const fashionContent = fashionContentRef.current;

    if (fashion && fashionContent) {
      const blinds = gsap.utils.toArray(`.${styles.blindsItem}`) as HTMLElement[];
      const imgs = gsap.utils.toArray(`.${styles.img}`) as HTMLElement[];
      const cellsCollapse = gsap.utils.toArray(`.${styles.cell}`) as HTMLElement[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: fashion,
          start: "top 80%",
          end: "top center",
          toggleActions: "play none none none",
          markers: false,
        },
      });

     
      tl.set(blinds, { height: "2.2rem" }); 
      tl.to(blinds, {
        height: 0, 
        duration: 1,
        ease: "power2.out",
        delay: 1,
      });

     

      tl.fromTo(
        cellsCollapse,
        {
          scale: 1,
          yPercent: 0,
          xPercent: 0,
        },
        {
          duration: 0.3, 
          scale: 0.05,
          ease: "power4.in", 
          delay: 0.1,
          stagger: {
            grid: [10, 10],
            from: "center", 
            ease: "none",
            amount: .6, 
          },
        }
      );

      tl.fromTo(
        fashionContent,
        { opacity: 0, 
          scale: 0 },
        { opacity: 1, 
          scale: 1, 
          duration: .8, 
          ease: "elastic.out(1, .8)", 
          delay: 1 },
      );      
    }
  }, []);

  const handleClick = () => {};

  return (
    <div className={styles.section}>
      <div className={styles.promo}>
        <div className={styles.cellGroup} ref={fashionRef}>
          {cells.map((cell, index) => (
            <div key={index} className={styles.cell}></div>
          ))}
        </div>
        <div className={styles.content} ref={fashionContentRef}>
          <div>
            Redefine your style – bold, trendy, timeless fashion awaits!
          </div>
          <button onClick={handleClick} className={styles.button}>
            Shop
          </button>
        </div>
      </div>
      <div className={styles.image}>
        <img src="./images/clothes-4.jpg" alt="" />
        <div className={styles.blinds}>
        {blinds.map((item, index) => (
            <span key={index} className={styles.blindsItem} style={{top: `${index * 2.2}rem`}}></span>
          ))}
        </div>
       
      </div>
    </div>
  );
}
