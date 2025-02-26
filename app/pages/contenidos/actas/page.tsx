import { Section, Container } from '@/components/craft'
import BackButton from '@/components/back'
import { TableDemo } from '@/components/table/table'

const data = [
  {
    año: '2020',
    cantidad: '3',
    link: 'pages/contenidos/2020-descargar',
  },
  {
    año: '2019',
    cantidad: '3',
    link: 'pages/contenidos/2019-descargar',
  },
  {
    año: '2018',
    cantidad: '5',
    link: 'pages/contenidos/2018-descargar',
  },
  {
    año: '2017',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2016',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2015',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2014',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2013',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2012',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2011',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2010',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2009',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2008',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2007',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2006',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2005',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2004',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2003',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2002',
    cantidad: '3',
    link: '#',
  },
  {
    año: '2001',
    cantidad: '1',
    link: '#',
  },
  {
    año: '2000',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1999',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1998',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1997',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1996',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1995',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1994',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1993',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1992',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1991',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1990',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1989',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1988',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1987',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1986',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1985',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1984',
    cantidad: '1',
    link: '#',
  },
  {
    año: '1983',
    cantidad: '1',
    link: '#',
  },
]

export default async function Page() {
  return (
    <Section>
      <Container className="md:pb-2">
        <BackButton />
        <h1 className="md:pt-12">Actas</h1>
      </Container>
      <Container>
        <TableDemo
          data={data}
          caption="Accedé a todas las actas desde nuestra fundación"
        />
      </Container>
    </Section>
  )
}
