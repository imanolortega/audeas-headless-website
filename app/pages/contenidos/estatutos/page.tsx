import { Section, Container } from '@/components/craft'
import BackButton from '@/components/back'
import { TableDemo } from '@/components/table/table'

const data = [
  {
    año: '2018',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2019',
    cantidad: '2',
    link: '#',
  },
  {
    año: '2020',
    cantidad: '2',
    link: '#',
  },
  {
    año: '2021',
    cantidad: '2',
    link: '#',
  },
  {
    año: '2022',
    cantidad: '1',
    link: '#',
  },
  {
    año: '2023',
    cantidad: '1',
    link: '#',
  },
  {
    año: '2024',
    cantidad: '1',
    link: '#',
  },
]

export default async function Page() {
  return (
    <Section>
      <Container className="md:pb-2">
        <BackButton />
        <h1 className="md:pt-12">Estatutos</h1>
      </Container>
      <Container>
        <TableDemo
          data={data}
          caption="Estatutos vigentes y pasados de nuestra institución"
        />
      </Container>
    </Section>
  )
}
