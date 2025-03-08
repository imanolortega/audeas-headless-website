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
    {
      id: 1,
      src: '/partners/fauba-audeas.jpg',
      url: 'https://www.agro.uba.ar/',
    },
    {
      id: 2,
      src: '/partners/unca-audeas.jpg',
      url: 'https://agrarias.unca.edu.ar/',
    },
    { id: 3, src: '/partners/uncpba-audeas.jpg', url: '#' },
    {
      id: 4,
      src: '/partners/uncaus-audeas.jpg',
      url: 'https://uncaus.edu.ar/',
    },
    {
      id: 5,
      src: '/partners/uncoma-audeas.jpg',
      url: 'https://facaweb.uncoma.edu.ar/',
    },
    { id: 6, src: '/partners/unc-audeas.jpg', url: 'https://agro.unc.edu.ar/' },
    {
      id: 7,
      src: '/partners/uncuyo-audeas.jpg',
      url: 'https://fca.uncuyo.edu.ar/',
    },
    {
      id: 8,
      src: '/partners/uner-audeas.jpg',
      url: 'https://fca.uner.edu.ar/',
    },
    { id: 9, src: '/partners/unf-audeas.jpg', url: 'https://frn.unf.edu.ar/' },
    {
      id: 10,
      src: '/partners/unju-audeas.jpg',
      url: 'https://www.fca.unju.edu.ar/',
    },
    {
      id: 11,
      src: '/partners/unlpam-audeas.png',
      url: 'https://www.agro.unlpam.edu.ar',
    },
    {
      id: 12,
      src: '/partners/unlp-audeas.jpg',
      url: 'https://www.agro.unlp.edu.ar/',
    },
    {
      id: 13,
      src: '/partners/unlar-audeas.jpg',
      url: 'https://www.unlar.edu.ar/index.php/unlar/departamentos-academicos/ciencias-y-tecnologias-aplicadas-a-la-produccion-al-ambiente-y-al-urbanismo',
    },
    {
      id: 14,
      src: '/partners/undec-audeas.jpg',
      url: 'https://www.undec.edu.ar/ingenieria-agronomica/',
    },
    {
      id: 15,
      src: '/partners/unl-audeas.jpg',
      url: 'https://www.fca.unl.edu.ar/',
    },
    {
      id: 16,
      src: '/partners/unicen-azul-audeas.jpg',
      url: 'https://www.faa.unicen.edu.ar/',
    },
    { id: 17, src: '/partners/uncpba-audeas.jpg', url: '#' },
    {
      id: 18,
      src: '/partners/uner-audeas.jpg',
      url: 'https://fca.uner.edu.ar/',
    },
    {
      id: 19,
      src: '/partners/unr-audeas.png',
      url: 'https://fcagr.unr.edu.ar/',
    },
    {
      id: 20,
      src: '/partners/unlz-audeas.jpg',
      url: 'https://agrarias.unlz.edu.ar/',
    },
    {
      id: 21,
      src: '/partners/unlu-audeas.jpg',
      url: 'https://www.unlu.edu.ar/dpto-tecnologia.html',
    },
    {
      id: 22,
      src: '/partners/unmdp-audeas.jpg',
      url: 'https://agrarias.campus.mdp.edu.ar/',
    },
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
