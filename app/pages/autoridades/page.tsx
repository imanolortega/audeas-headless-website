import { Section, Container } from '@/components/craft'
import BackButton from '@/components/back'
import PersonGrid from '@/components/persons-grid/person-card-grid'
import PersonCard from '@/components/persons/person-card'

export default async function Page() {
  const people = [
    {
      image: '/person-image.jpeg',
      name: 'Dra. Noemí Bejarano',
      role: 'Vocal Regional - Región NOA',
      size: 'w-64 h-64',
    },
    {
      image: '/person-image.jpeg',
      name: 'Ing. Esteban Jockers',
      role: 'Vocal Regional - Región Cuyo - Patagonia',
      size: 'w-64 h-64',
    },
    {
      image: '/person-image.jpeg',
      name: 'Dra. Lía Molas',
      role: 'Vocal Regional - Región Centro',
      size: 'w-64 h-64',
    },
    {
      image: '/person-image.jpeg',
      name: 'Ing. Agr. Mario Urbani',
      role: 'Vocal Regional - Región NEA',
      size: 'w-64 h-64',
    },
    {
      image: '/person-image.jpeg',
      name: 'Ing. Agr. Elena Craig',
      role: 'Vocal Regional - Región Pampeana',
      size: 'w-64 h-64',
    },
  ]

  return (
    <Section>
      <Container className="md:pb-2">
        <BackButton />
        <h1 className="md:pt-12">Autoridades</h1>
      </Container>
      <Container>
        <h2 className="font-bold text-center text-2xl font-bold mb-6">
          Presidencia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center mx-auto px-4">
          <PersonCard
            person={{
              image: '/myriam-villarreal.jpg',
              name: 'Dra. Myriam Villarreal',
              role: 'Presidente. Decana de la Facultad de Agronomía y Agroindustrias de la UNSE.',
              size: 'w-72 h-64',
            }}
          />
          <PersonCard
            person={{
              image: '/jorge-dutto.jpeg',
              name: 'Ing. Jorge Dutto',
              role: 'Vicepresidente. Decano de la Facultad de Ciencias Agropecuarias de la UNC.',
              size: 'w-72 h-64',
            }}
          />
        </div>
      </Container>
      <Container>
        <h2>Vocales</h2>
        <PersonGrid people={people} />
      </Container>
    </Section>
  )
}
