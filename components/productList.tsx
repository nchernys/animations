"use client";
import "../app/globals.css";
import ProductListItem from "./productListItem";
import styles from "./productList.module.css";
import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  use,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowIcon from "../public/images/glow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
  faXmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    image: "./images/clothes-2.jpg",
    title: "Winter Coat",
    price: "from $99.00",
    details:
      "Stay cozy and chic this winter with our stylish, warm, and timeless coats—perfect for every cold-weather occasion.",
  },
  {
    image: "./images/watch-1.jpg",
    title: "Watch Apple 13G",
    price: "from $125.00",
    details:
      "Elevate your style with our sleek, modern watch—precision, elegance, and timeless design for every occasion.",
  },
  {
    image: "./images/kids-2.jpg",
    title: "Kids X-mas Gifts",
    price: "from $7.99",
    details:
      "Discover fun, safe, and educational toys that inspire creativity and bring endless joy to kids of all ages.",
  },
  {
    image: "./images/makeup.jpg",
    title: "Laurel Makeup",
    price: "from $13.99",
    details:
      "Enhance your beauty with premium makeup products for every look, from natural elegance to bold glamour.",
  },
  {
    image: "./images/sports-1.jpg",
    title: "Bike Sports Power",
    price: "from $75.00",
    details:
      "Gear up with high-quality sports equipment and apparel for ultimate performance, comfort, and style in every game.",
  },
  {
    image: "./images/clothes-3.jpg",
    title: "Men's Suit",
    price: "from $215.89",
    details:
      "Discover our collection of elegant suits, tailored to perfection for timeless sophistication and modern style.",
  },
  {
    image: "./images/bag-1.jpg",
    title: "Tote Bag Matisse",
    price: "from $22.00",
    details:
      "Explore our casual yet stylish tote bags, designed for everyday convenience with a modern, fashionable touch.",
  },
];

export default function ProductList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const leftArrowRef = useRef<HTMLDivElement>(null);
  const rightArrowRef = useRef<HTMLDivElement>(null);
  const [currentProduct, setCurrentProduct] = useState<number>(-1);
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    if (containerRef.current) {
      const boxes = document.querySelectorAll(`.productBox`);
      gsap.fromTo(
        boxes,
        { opacity: 0, yPercent: 20, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          yPercent: 0,
          duration: 0.8,
          stagger: 0.4,
          ease: "elastic1.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "top top",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (currentProduct >= 0 && detailsRef.current) {
      const image = detailsRef.current.querySelector(`.${styles.image}`);
      const details = detailsRef.current.querySelector(`.${styles.details}`);

      gsap.fromTo(
        detailsRef.current,
        { opacity: 0, yPercent: -50, scale: 0.1 },
        { opacity: 1, yPercent: 0, scale: 1, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        image,
        { opacity: 0, xPercent: 10 },
        { opacity: 1, xPercent: 0, duration: 1, ease: "power2.out" }
      );

      gsap.fromTo(
        details,
        { opacity: 0, xPercent: -10 },
        { opacity: 1, xPercent: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [currentProduct]);

  const handleShowDetails = (index: number) => {
    setCurrentProduct(index);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const closeDetails = () => {
    setCurrentProduct(-1);
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollImages = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>
          Click a <span className={styles.underline}>card</span> to view the
          product details!
        </h2>
      </div>

      <div className={styles.leftArrow}>
        <FontAwesomeIcon
          onClick={() => scrollImages("left")}
          icon={faCircleChevronLeft}
        />
      </div>
      <div className={styles.rightArrow}>
        <FontAwesomeIcon
          onClick={() => scrollImages("right")}
          icon={faCircleChevronRight}
        />
      </div>
      <div ref={containerRef} className={styles.listContainer}>
        {items.map((item, index) => (
          <div
            key={index}
            className='productBox'
            onClick={() => handleShowDetails(index)}
          >
            <ProductListItem
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          </div>
        ))}
      </div>
      {currentProduct >= 0 && (
        <div ref={detailsRef} className={styles.productDetails}>
          <div className={styles.image}>
            <img src={items[currentProduct].image} alt='image' />
          </div>
          <div className={styles.details}>
            <h2 className={styles.productTitle}>
              {items[currentProduct].title}
            </h2>
            <p className={styles.productDescription}>
              {items[currentProduct].details}
            </p>
            <p className={styles.productPrice}>{items[currentProduct].price}</p>
            <div className={styles.productQuantity}>
              <div>
                {" "}
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <div> 1 </div>
              <div>
                {" "}
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <div className={styles.button}>
              ADD TO{" "}
              <span>
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
            </div>
          </div>

          <div className={styles.close} onClick={closeDetails}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      )}
    </div>
  );
}
