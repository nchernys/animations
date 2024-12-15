"use client";
import ProductList from "@/components/productList";
import GiftCard from "@/components/giftCard";
import Chart from "@/components/chart";
import FallCollection from "@/components/old/fallCollection";
import SidebarMenu from "@/components/sidebarMenu";
import MovingImages from "@/components/movingImages";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./pages.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <>
      <SidebarMenu />
      <Chart />
      <GiftCard />
      <ProductList />
      <MovingImages />
    </>
  );
}
