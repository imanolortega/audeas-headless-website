import { Section, Container } from '@/components/craft';
import BackButton from '@/components/back';
import { TableDemo } from '@/components/table/table';

const data = [
  {
    año: '2019',
    cantidad: '2',
    link: 'pages/contenidos/2019-declaraciones',
  },
  {
    año: '2017',
    cantidad: '3',
    link: 'pages/contenidos/2017-declaraciones',
  },

  {
    año: '2016',
    cantidad: '3',
    link: 'pages/contenidos/2016-declaraciones',
  },
  {
    año: '2015',
    cantidad: '1',
    link: 'pages/contenidos/2015-declaraciones',
  },
];

export default async function Page() {
  return (
    <Section>
      <Container className="md:pb-2">
        <BackButton />
        <h1 className="md:pt-12">Declaraciones</h1>
      </Container>
      <Container>
        <TableDemo
          data={data}
          caption="Declaraciones para descargar de los últimos años"
        />
      </Container>
    </Section>
  );
}
