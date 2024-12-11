"use client";
import "../app/globals.css"; 
import ProductListItem from "./productListItem";
import styles from "./productList.module.css";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowIcon from "../public/images/glow.svg"; 

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    image: "./images/clothes-2.jpg",
    title: "Winter Coat",
    price: "from $99.00",
  },
  {
    image: "./images/watch-1.jpg",
    title: "Watch Apple 13G",
    price: "from $125.00",
  },
  {
    image: "./images/kids-2.jpg",
    title: "Kids X-mas Gifts",
    price: "from $7.99",
  },
  {
    image: "./images/makeup.jpg",
    title: "Laurel Makeup",
    price: "from $13.99",
  },
  {
    image: "./images/sports-1.jpg",
    title: "Bike Sports Power",
    price: "from $75.00",
  },
  {
    image: "./images/clothes-3.jpg",
    title: "Men's Suit",
    price: "from $215.89",
  },
  {
    image: "./images/bag-1.jpg",
    title: "Tote Bag Matisse",
    price: "from $22.00",
  },
];

export default function ProductList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    
    
        if (containerRef.current) {
        const boxes = document.querySelectorAll(`.productBox`);
        console.log("containerRef", containerRef)
        console.log("boxes", boxes);
        gsap.fromTo(
          boxes,
          { opacity: 0, yPercent: 20, scale: .8 },
          {
            opacity: 1,
            scale: 1,
            yPercent: 0,
            duration: .8,
            stagger: 0.4,
            ease: "elastic1.out",
            scrollTrigger: {
              trigger: containerRef.current, 
              start: "top 80%", 
              end: "top 20%", 
              toggleActions: "play none none none", 
            },
          }
        );
       
      }
  
     
  
  }, []);

  return (
  
    <div className={styles.container}>
       <div ref={containerRef} className={styles.listContainer}>
        {items.map((item, index) => (
         <div className="productBox">
            <ProductListItem
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              
            />
         </div>
        ))}
      </div>
      </div>
  );
}
