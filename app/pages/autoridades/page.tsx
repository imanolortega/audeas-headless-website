import { Section, Container } from '@/components/craft'
import BackButton from '@/components/back'
import PersonGrid from '@/components/persons-grid/person-card-grid'
import PersonCard from '@/components/persons/person-card'

export default async function Page() {
  const people = [
    {
      image: '/path/to/noemi_bejarano.jpg',
      name: 'Dra. Noemí Bejarano',
      role: 'Vocal Regional - Región NOA',
    },
    {
      image: '/path/to/esteban_jockers.jpg',
      name: 'Ing. Esteban Jockers',
      role: 'Vocal Regional - Región Cuyo - Patagonia',
    },
    {
      image: '/path/to/lia_molas.jpg',
      name: 'Dra. Lía Molas',
      role: 'Vocal Regional - Región Centro',
    },
    {
      image: '/path/to/mario_urbani.jpg',
      name: 'Ing. Agr. Mario Urbani',
      role: 'Vocal Regional - Región NEA',
    },
    {
      image: '/path/to/elena_craig.jpg',
      name: 'Ing. Agr. Elena Craig',
      role: 'Vocal Regional - Región Pampeana',
    },
  ]

  return (
    <Section>
      <Container className="md:pb-2">
        <BackButton />
        <h1 className="md:pt-12">Autoridades</h1>
      </Container>
      <Container>
        <h2 className="text-center text-2xl font-bold mb-6">Presidencia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          <PersonCard
            person={{
              image: '/path/to/myriam_villarreal.jpg',
              name: 'Dra. Myriam Villarreal',
              role: 'Presidente',
            }}
          />
          <PersonCard
            person={{
              image: '/path/to/jorge_dutto.jpg',
              name: 'Ing. Jorge Dutto',
              role: 'Vicepresidente.',
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
