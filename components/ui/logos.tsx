import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'

export default function CarouselSpacing() {
  const images = [
    { src: '/partners/fauba-audeas.jpg', url: 'https://www.agro.uba.ar/' },
    { src: '/partners/unca-audeas.jpg', url: 'https://agrarias.unca.edu.ar/' },
    { src: '/partners/uncpba-audeas.jpg', url: '#' },
    { src: '/partners/uncaus-audeas.jpg', url: 'https://uncaus.edu.ar/' },
    {
      src: '/partners/uncoma-audeas.jpg',
      url: 'https://facaweb.uncoma.edu.ar/',
    },
    { src: '/partners/unc-audeas.jpg', url: 'https://agro.unc.edu.ar/' },
    { src: '/partners/uncuyo-audeas.jpg', url: 'https://fca.uncuyo.edu.ar/' },
    { src: '/partners/uner-audeas.jpg', url: 'https://fca.uner.edu.ar/' },
    { src: '/partners/unf-audeas.jpg', url: 'https://frn.unf.edu.ar/' },
    { src: '/partners/unju-audeas.jpg', url: 'https://www.fca.unju.edu.ar/' },
    {
      src: '/partners/unlpam-audeas.jpg',
      url: 'https://www.agro.unlpam.edu.ar',
    },
    { src: '/partners/unlp-audeas.jpg', url: 'https://www.agro.unlp.edu.ar/' },
    {
      src: '/partners/unlar-audeas.jpg',
      url: 'https://www.unlar.edu.ar/index.php/unlar/departamentos-academicos/ciencias-y-tecnologias-aplicadas-a-la-produccion-al-ambiente-y-al-urbanismo',
    },
    {
      src: '/partners/undec-audeas.jpg',
      url: 'https://www.undec.edu.ar/ingenieria-agronomica/',
    },
    {
      src: '/partners/unicen-azul-audeas.jpg',
      url: 'https://www.faa.unicen.edu.ar/',
    },
    { src: '/partners/uncpba-audeas.jpg', url: '#' },
    { src: '/partners/uner-audeas.jpg', url: 'https://fca.uner.edu.ar/' },
    { src: '/partners/unr-audeas.png', url: 'https://fcagr.unr.edu.ar/' },
  ]

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full max-w-full"
    >
      <CarouselContent className="flex -ml-1 gap-1">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="pl-1 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
          >
            <div className="p-1">
              <Card>
                <CardContent className="p-0 aspect-square flex items-center justify-center">
                  <Link
                    href={image.url}
                    target="_blank"
                    className="block aspect-square w-full relative"
                  >
                    <Image
                      src={image.src}
                      alt={`Imagen ${index + 1}`}
                      fill
                      sizes="(min-width: 1024px) 150px, 100px"
                      className="!m-0 rounded-lg object-cover"
                    />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
