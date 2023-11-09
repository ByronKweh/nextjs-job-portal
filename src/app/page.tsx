"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-1/5 w-full">
        <Carousel>
          <div className="h-1/5">
            <img src="banners/banner-1.png" />
            <p className="legend">
              There is no work life balance, it is all LIFE.
            </p>
          </div>
          <div>
            <img src="banners/banner-2.jpg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="banners/banner-3.jpg" />

            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </main>
  );
}
