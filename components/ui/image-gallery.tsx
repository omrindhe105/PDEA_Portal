// import { BackgroundBeams } from "@/components/ui/background-beams-with-collision";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import LoginForm from "@/components/ui/LoginForm";
"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
export default function ImageGallery() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  return (
<Carousel 
className="w-full"
plugins={[plugin.current]}
>
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="rounded-3xl">
              <Image width={580} height={400} objectFit="contain" src={`/pic${index + 1}.jpg`} alt={`college Pictures ${index + 1}`} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}


