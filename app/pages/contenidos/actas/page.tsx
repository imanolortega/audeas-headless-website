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
    link: '#',
  },
  {
    año: '2018',
    cantidad: '3',
    link: 'pages/contenidos/2018-descargar',
  },
  {
    año: '2017',
    cantidad: '2',
    link: '#',
  },
  {
    año: '2016',
    cantidad: '',
    link: '#',
  },
  {
    año: '2015',
    cantidad: '',
    link: '#',
  },
  {
    año: '2014',
    cantidad: '',
    link: '#',
  },
  {
    año: '2013',
    cantidad: '',
    link: '#',
  },
  {
    año: '2012',
    cantidad: '',
    link: '#',
  },
  {
    año: '2011',
    cantidad: '',
    link: '#',
  },
  {
    año: '2010',
    cantidad: '',
    link: '#',
  },
  {
    año: '2009',
    cantidad: '',
    link: '#',
  },
  {
    año: '2008',
    cantidad: '',
    link: '#',
  },
  {
    año: '2007',
    cantidad: '',
    link: '#',
  },
  {
    año: '2006',
    cantidad: '',
    link: '#',
  },
  {
    año: '2005',
    cantidad: '',
    link: '#',
  },
  {
    año: '2004',
    cantidad: '',
    link: '#',
  },
  {
    año: '2003',
    cantidad: '',
    link: '#',
  },
  {
    año: '2002',
    cantidad: '',
    link: '#',
  },
  {
    año: '2001',
    cantidad: '',
    link: '#',
  },
  {
    año: '2000',
    cantidad: '',
    link: '#',
  },
  {
    año: '1999',
    cantidad: '',
    link: '#',
  },
  {
    año: '1998',
    cantidad: '',
    link: '#',
  },
  {
    año: '1997',
    cantidad: '',
    link: '#',
  },
  {
    año: '1996',
    cantidad: '',
    link: '#',
  },
  {
    año: '1995',
    cantidad: '',
    link: '#',
  },
  {
    año: '1994',
    cantidad: '',
    link: '#',
  },
  {
    año: '1993',
    cantidad: '',
    link: '#',
  },
  {
    año: '1992',
    cantidad: '',
    link: '#',
  },
  {
    año: '1991',
    cantidad: '',
    link: '#',
  },
  {
    año: '1990',
    cantidad: '',
    link: '#',
  },
  {
    año: '1989',
    cantidad: '',
    link: '#',
  },
  {
    año: '1988',
    cantidad: '',
    link: '#',
  },
  {
    año: '1987',
    cantidad: '',
    link: '#',
  },
  {
    año: '1986',
    cantidad: '',
    link: '#',
  },
  {
    año: '1985',
    cantidad: '',
    link: '#',
  },
  {
    año: '1984',
    cantidad: '',
    link: '#',
  },
  {
    año: '1983',
    cantidad: '',
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
