import { Section, Container } from '@/components/craft';
import BackButton from '@/components/back';
import Logos from '@/components/logos/logos';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const socios = [
  { universidad: "Universidad Nacional de Buenos Aires", facultad: "Facultad de Agronomía", autoridad: "Dra. Ing. Agr. Adriana M. Rodríguez" },
  { universidad: "Universidad Nacional de Catamarca", facultad: "Facultad de Ciencias Agrarias", autoridad: "Dr. Eduardo de la Orden" },
  { universidad: "Universidad Nacional del Centro de la Provincia de Buenos Aires", facultad: "Facultad de Agronomía", autoridad: "Ing. Agr. Mag. Liliana Monterroso" },
  { universidad: "Universidad Nacional del Chaco Austral", facultad: "Departamento de Ciencias Básicas y Aplicadas", autoridad: "D° Ing. Zoo. Marcelo Dominguéz" },
  { universidad: "Universidad Nacional de Chilecito", facultad: "Escuela de Ciencias Naturales", autoridad: "D° Ing.(Mg) Juan J. Meleh" },
  { universidad: "Universidad Nacional del Comahue", facultad: "Facultad de Ciencias Agrarias", autoridad: "Decano - Ing. Agr. (Mg.) Esteban Jockers" },
  { universidad: "Universidad Nacional de Córdoba", facultad: "Facultad de Ciencias Agropecuarias", autoridad: "Decano - Ing. Agr. (Esp.) Jorge Dutto" },
  { universidad: "Universidad Nacional de Cuyo", facultad: "Facultad de Ciencias Agrarias", autoridad: "Decana - Dra. Ing. Agr. María Flavia Filippini" },
  { universidad: "Universidad Nacional del Sur", facultad: "Facultad de Agronomía", autoridad: "Decano - Mg. Rodrigo Damián Bravo" },
  { universidad: "Universidad Nacional de Entre Ríos", facultad: "Facultad de Ciencias Agropecuarias", autoridad: "Decano - Ing. Agr. Ph.D. Pedro A. Barbagelata" },
  { universidad: "Universidad Nacional de Formosa", facultad: "Facultad de Recursos Naturales", autoridad: "Decano - Ing. Carlos Martínez" },
  { universidad: "Universidad Nacional de Jujuy", facultad: "Facultad de Ciencias Agrarias", autoridad: "Decana - Dra. Noemí del Valle Bejarano (Noni)" },
  { universidad: "Universidad Nacional de La Pampa", facultad: "Facultad de Agronomía", autoridad: "Decana - Dra. María Lía Molas" },
  { universidad: "Universidad Nacional de La Pampa", facultad: "Facultad de Ciencias Exactas y Naturales", autoridad: "Decana - Lic. Nora Claudia Ferreyra" },
  { universidad: "Universidad Nacional de La Plata", facultad: "Facultad de Ciencias Agrarias y Forestales", autoridad: "Decano - Ing. Agr. Ricardo Andreau" },
  { universidad: "Universidad Nacional de La Rioja", facultad: "Dep. Cs. y Tec. Apl. a la Prod., al Ambiente y al Urbanismo", autoridad: "Decano - Arq. Luis Cabrera Villafañe" },
  { universidad: "Universidad Nacional del Litoral", facultad: "Facultad de Ciencias Agrarias", autoridad: "Decano Msc. Oscar Ernesto Osan" },
  { universidad: "Universidad Nacional de Lomas de Zamora", facultad: "Facultad de Ciencias Agrarias", autoridad: "Decano: Ing. Agr. MSc. Urretabizkaya, Nestor" },
  { universidad: "Universidad Nacional de Luján", facultad: "Departamento de Tecnología", autoridad: "Decana: Dra. Santadino, Marina Vilma" },
  { universidad: "Universidad Nacional de Mar del Plata", facultad: "Facultad de Ciencias Agrarias", autoridad: "Decano: Dr. Ruffinengo Sergio" },
  { universidad: "Universidad Nacional de Misiones", facultad: "Facultad de Ciencias Forestales", autoridad: "Decano - Ing. Forestal - Romero Fabian" },
  { universidad: "Universidad Nacional del Nordeste", facultad: "Facultad de Ciencias Agrarias", autoridad: "Decano - Ing. Agr. (Dr.) Mario H. Urbani" },
  { universidad: "Universidad Nacional del Noroeste de la Provincia de Bs. As.", facultad: "Escuela de Ciencias Agrarias, Naturales y Ambientales", autoridad: "Dir.a: Dra.: Pasquinelli, Virginia" },
  { universidad: "Universidad Nacional de Río Cuarto", facultad: "Facultad de Agronomía y Veterinaria", autoridad: "Decano - Prof. Liboá Rosendo" },
  { universidad: "Universidad Nacional de Río Negro", facultad: "Escuela de Producción, Tecnología y Medio Ambiente", autoridad: "Dr. Carlos Bezic" },
  { universidad: "Universidad Nacional de Rosario", facultad: "Facultad de Ciencias Agrarias", autoridad: "Decano - Ing. Agr. Palazzesi Pablo José" },
  { universidad: "Universidad Nacional de Salta", facultad: "Facultad de Ciencias Naturales", autoridad: "Decana - Dra. Marta Cristina Sanz" },
  { universidad: "Universidad Nacional de San Antonio de Areco", facultad: "Escuela de Desarrollo Productivo y Tecnológico", autoridad: "Decano-Dir: Ing. Agr. Palma Oscar" },
  { universidad: "Universidad Nacional de San Juan", facultad: "Facultad de Ingeniería", autoridad: "Decana - Dra. Ing. Andrea Diaz" },
  { universidad: "Universidad Nacional de San Luis", facultad: "Facultad de Ingeniería y Ciencias Agropecuarias", autoridad: "Decano - Dr. Ing. Federico Martín Serra - Vice decano Ing. Guillermo Martínez" },
  { universidad: "Universidad Nacional de Santiago del Estero", facultad: "Facultad de Agronomía y Agroindustrias", autoridad: "Decana - Dra. Eve Liz Coronel" },
  { universidad: "Universidad Nacional de Santiago del Estero", facultad: "Facultad de Ciencias Forestales", autoridad: "Decana - Dra. Amelia Nancy Giannuzzo" },
  { universidad: "Universidad Nacional de Tucumán", facultad: "Facultad de Agronomía y Zootecnia", autoridad: "Decana - Ing. Agr. Susana del Valle Monserrat" },
  { universidad: "Universidad Nacional de Villa María", facultad: "Facultad de Ciencias Básicas y Aplicadas", autoridad: "Decana - Dra. Morgante Carolina A." },
  { universidad: "Universidad Nacional del Comahue", facultad: "Centro Regional Universitario San Martín de los Andes (CRUSMA)", autoridad: "D° Mg. Ariel Mortoro" },
];

export default async function Page() {
  return (
    <Section>
      <Container className="md:pb-2">
        <BackButton />
        <h1 className="md:pt-12">Socios</h1>
      </Container>
      <Container>
        <Logos showTitle={false} />
      </Container>
      <Container>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center text-bold">Universidad</TableHead>
              <TableHead className="text-center text-bold">Facultad</TableHead>
              <TableHead className="text-center text-bold">Autoridad</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {socios.map((socio, index) => (
              <TableRow key={index}>
                <TableCell className='px-2 md:px-4'>{socio.universidad}</TableCell>
                <TableCell className='px-2 md:px-4'>{socio.facultad}</TableCell>
                <TableCell className='px-2 md:px-4'>{socio.autoridad}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Section>
  );
}