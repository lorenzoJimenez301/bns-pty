"use client";

import "flowbite";

import { Carousel } from "flowbite-react";
import Image from "next/image";

export function Carrusel({ url1, url2, hidden }) {
  const customTheme = {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
      snap: "snap-x",
    },
    item: {
      base: "relative w-full h-full", // para que el item ocupe todo el espacio
      wrapper: {
        on: "w-full h-full shrink-0 snap-center cursor-grab",
        off: "w-full h-full shrink-0 snap-center cursor-default",
      },
    },
  };
  return (
    <div className={hidden}>
      <Carousel theme={customTheme} slideInterval={5000}>
        <Image
          width={1920}
          height={570}
          className="relative w-full h-full object-fit"
          src={url2}
          alt="Imagen generica de banner"
        />
        <Image
          width={1920}
          height={570}
          className="relative w-full h-full object-fit"
          src={url1}
          alt="Imagen generica de banner"
        />
      </Carousel>
    </div>
  );
}
