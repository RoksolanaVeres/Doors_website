import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import doorImg1 from "../assets/doors-img/live-doors-images/live-1.jpg";
import doorImg2 from "../assets/doors-img/live-doors-images/live-2.jpg";
import doorImg3 from "../assets/doors-img/live-doors-images/live-3.jpg";
import doorImg4 from "../assets/doors-img/live-doors-images/live-4.jpg";
import doorImg5 from "../assets/doors-img/live-doors-images/live-5.jpg";
import doorImg6 from "../assets/doors-img/live-doors-images/live-6.jpg";
import doorImg7 from "../assets/doors-img/live-doors-images/live-7.jpg";
import doorImg8 from "../assets/doors-img/live-doors-images/live-8.jpg";
import doorImg9 from "../assets/doors-img/live-doors-images/live-9.jpg";
import doorImg10 from "../assets/doors-img/live-doors-images/live-10.jpg";
import doorImg11 from "../assets/doors-img/live-doors-images/live-11.jpg";

export default function DoorsCarousel() {
    const ourDoors = [
      doorImg1,
      doorImg2,
      doorImg3,
      doorImg4,
      doorImg5,
      doorImg6,
      doorImg7,
      doorImg8,
      doorImg9,
      doorImg10,
      doorImg11,
    ];
    return (
      <Carousel
        className="size-[400px]"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="">
          {ourDoors.map((doorImg, index) => {
            return (
              <CarouselItem key={index}>
                <img src={doorImg} className="size-[400px] object-cover" />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
}