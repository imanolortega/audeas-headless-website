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
    link: 'pages/contenidos/2017-descargar',
  },
  {
    año: '2016',
    cantidad: '3',
    link: 'pages/contenidos/2016-descargar',
  },
  {
    año: '2015',
    cantidad: '3',
    link: 'pages/contenidos/2015-descargar',
  },
  {
    año: '2014',
    cantidad: '3',
    link: 'pages/contenidos/2014-descargar',
  },
  {
    año: '2013',
    cantidad: '3',
    link: 'pages/contenidos/2013-descargar',
  },
  {
    año: '2012',
    cantidad: '3',
    link: 'pages/contenidos/2012-descargar',
  },
  {
    año: '2011',
    cantidad: '3',
    link: 'pages/contenidos/2011-descargar',
  },
  {
    año: '2010',
    cantidad: '3',
    link: 'pages/contenidos/2010-descargar',
  },
  {
    año: '2009',
    cantidad: '3',
    link: 'pages/contenidos/2009-descargar',
  },
  {
    año: '2008',
    cantidad: '3',
    link: 'pages/contenidos/2008-descargar',
  },
  {
    año: '2006',
    cantidad: '3',
    link: 'pages/contenidos/2006-descargar',
  },
  {
    año: '2005',
    cantidad: '3',
    link: 'pages/contenidos/2005-descargar',
  },
  {
    año: '2004',
    cantidad: '3',
    link: 'pages/contenidos/2004-descargar',
  },
  {
    año: '2003',
    cantidad: '3',
    link: 'pages/contenidos/2003-descargar',
  },
  {
    año: '2002',
    cantidad: '3',
    link: 'pages/contenidos/2002-descargar',
  },
  {
    año: '2001',
    cantidad: '1',
    link: 'pages/contenidos/2001-descargar',
  },
  {
    año: '2000',
    cantidad: '1',
    link: 'pages/contenidos/2000-descargar',
  },
  {
    año: '1999',
    cantidad: '1',
    link: 'pages/contenidos/1999-descargar',
  },
  {
    año: '1998',
    cantidad: '1',
    link: 'pages/contenidos/1998-descargar',
  },
  {
    año: '1997',
    cantidad: '1',
    link: 'pages/contenidos/1997-descargar',
  },
  {
    año: '1996',
    cantidad: '1',
    link: 'pages/contenidos/1996-descargar',
  },
  {
    año: '1995',
    cantidad: '1',
    link: 'pages/contenidos/1995-descargar',
  },
  {
    año: '1994',
    cantidad: '1',
    link: 'pages/contenidos/1994-descargar',
  },
  {
    año: '1993',
    cantidad: '1',
    link: 'pages/contenidos/1993-descargar',
  },
  {
    año: '1992',
    cantidad: '1',
    link: 'pages/contenidos/1992-descargar',
  },
  {
    año: '1991',
    cantidad: '1',
    link: 'pages/contenidos/1991-descargar',
  },
  {
    año: '1990',
    cantidad: '1',
    link: 'pages/contenidos/1990-descargar',
  },
  {
    año: '1988',
    cantidad: '1',
    link: 'pages/contenidos/1988-descargar',
  },
  {
    año: '1987',
    cantidad: '1',
    link: 'pages/contenidos/1987-descargar',
  },
  {
    año: '1985',
    cantidad: '1',
    link: 'pages/contenidos/1985-descargar',
  },
  {
    año: '1984',
    cantidad: '1',
    link: 'pages/contenidos/1984-descargar',
  },
  {
    año: '1983',
    cantidad: '1',
    link: 'pages/contenidos/1983-descargar',
  },
]

export default async function Page() {
  return (
    <Section>
      <Container className="md:pb-2">
        <BackButton />
        <h1 className="md:pt-12 sm:pt-6">Actas</h1>
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
