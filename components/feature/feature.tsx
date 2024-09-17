import * as React from "react";
import Image from "next/image";

import { Section, Container } from "@/components/craft";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Balancer from "react-wrap-balancer";

const photos = [
  {
    src: "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto/q_auto/g_auto/w_780/dpr_2.0/element/12/124334_shutterstock_244469683.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1507730690594-f21182eee8b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1720983627245-ca4a6913016f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeatureNine = () => {
  return (
    <Section className="md:p-4">
      <Container className="md:p-4">
        <Carousel className="mt-6 w-full">
          <CarouselContent className="-ml-1">
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="pl-1">
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <div className="p-8 absolute z-50 bg-transparent">
                      <h3 className="md:text-4xl text-3xl md:font-semibold	text-white">
                        <Balancer>Conocé Audeas</Balancer>
                      </h3>
                      <p className="text-muted">
                        {" "}
                        Somos una Asociación Civil sin fines de lucro que agrupa a instituciones universitarias oficialmente reconocidas en la República Argentina, tales como Facultades, escuelas, departamentos e institutos, que ofrecen enseñanza superior en las áreas de Agropecuaria y/o Forestal.
                      </p>
                    </div>
                    <CardContent className="not-prose flex w-full h-[28rem] items-center justify-center brightness-50">
                      <Image
                        loading='eager'
                        src={photo.src}
                        alt="Presets.com Example Image"
                        width={720}
                        height={300}
                        className="absolute inset-0 object-cover h-full w-full"
                      ></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  );
};

export default FeatureNine;
