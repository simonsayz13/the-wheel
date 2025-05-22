"use client";
import dynamic from "next/dynamic";

// Dynamically import the Wheel with SSR disabled
const Wheel = dynamic(
  () => import("react-custom-roulette").then((mod) => mod.Wheel),
  {
    ssr: false,
  }
);

export default Wheel;
