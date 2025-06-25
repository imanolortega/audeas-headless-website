import { Section, Container } from '@/components/craft';
import BackButton from '@/components/back';
import PersonCard from '@/components/persons/person-card';
import PersonGrid from '@/components/persons-grid/person-card-grid';

export default async function Page() {
  const people = [
    {
      image: '/staff/noemi-bejarano.jpg',
      name: 'Dra. Noemí Bejarano',
      role: 'Vocal Regional',
      description: 'Región NOA',
      size: 'w-64 h-64',
    },
    {
      image: '/staff/esteban-jockers.jpg',
      name: 'Ing. Esteban Jockers',
      role: 'Vocal Regional',
      description: 'Región Cuyo - Patagonia',
      size: 'w-64 h-64',
    },
    {
      image: '/staff/lia-molas.png',
      name: 'Dra. Lía Molas',
      role: 'Vocal Regional',
      description: 'Región Centro',
      size: 'w-64 h-64',
    },
    {
      image: '/staff/mario-urbani.jpg',
      name: 'Ing. Agr. Mario Urbani',
      role: 'Vocal Regional',
      description: 'Región NEA',
      size: 'w-64 h-64',
    },
    {
      image: '/staff/elena-craig.jpeg',
      name: 'Ing. Agr. Elena Craig',
      role: 'Vocal Regional',
      description: 'Región Pampeana',
      size: 'w-64 h-64',
    },
  ];

  return (
    <Section>
      <Container className="md:pb-2">
        <BackButton />
        <h1 className="md:pt-12">Autoridades</h1>
      </Container>
      <Container>
        <h2 className="!font-bold text-center text-2xl mb-6">Presidencia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center mx-auto px-4">
          <PersonCard
            person={{
              image: '/staff/myriam-villarreal.jpg',
              name: 'Dra. Myriam Villarreal',
              role: 'Presidente ',
              description: 'Decana de la Facultad de Agronomía y Agroindustrias de la UNSE',
              size: 'w-72 h-64',
            }}
          />
          <PersonCard
            person={{
              image: '/staff/jorge-dutto.jpeg',
              name: 'Ing. Jorge Dutto',
              role: 'Vicepresidente ',
              description: 'Decano de la Facultad de Ciencias Agropecuarias de la UNC',
              size: 'w-72 h-64',
            }}
          />
        </div>
      </Container>
      <Container>
        <h2 className="text-center">Vocales</h2>
        <PersonGrid people={people} />
      </Container>
    </Section>
  );
}
