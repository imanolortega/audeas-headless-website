import * as React from 'react'
import Image from 'next/image'

import { Section, Container } from '@/components/craft'
import { Card, CardContent } from '@/components/ui/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Balancer from 'react-wrap-balancer'
import { slidesData } from '@/lib/data'

const FeatureNine = () => {
  return (
    <Section className="md:p-4">
      <Container className="md:p-4">
        <Carousel className="mt-6 w-full">
          <CarouselContent className="-ml-1">
            {slidesData.map((slide, index) => (
              <CarouselItem key={index} className="pl-1">
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <div className="p-8 absolute bottom-0 z-50 bg-transparent">
                      <h3 className="md:text-4xl text-3xl md:font-semibold text-white">
                        <Balancer>{slide.title}</Balancer>
                      </h3>
                      <p className="text-muted">{slide.description}</p>
                    </div>
                    <CardContent className="not-prose flex w-full h-[28rem] items-center justify-center brightness-50">
                      <Image
                        loading="eager"
                        placeholder="blur"
                        blurDataURL="/audeas-asociacion-civil.webp"
                        src={slide.src}
                        alt={slide.title}
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
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </Container>
    </Section>
  )
}

export default FeatureNine
