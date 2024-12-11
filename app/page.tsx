import ProductList from "@/components/productList";
import Box from "@/components/boxSection";
import FallCollection from "@/components/fallCollection";
import SidebarMenu from "@/components/sidebarMenu";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import styles from "./pages.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  return (
    <>
    <SidebarMenu />
    <ProductList />
    <Box />
    <FallCollection />
    </>
  );
}
