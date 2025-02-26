import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Link from 'next/link'

interface TableProps {
  data: Array<{
    año: string
    cantidad: string
    link: string
  }>
  caption: string
}

export function TableDemo({ data, caption }: TableProps) {
  return (
    <Table>
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Año</TableHead>
          <TableHead>Cantidad</TableHead>
          <TableHead className="text-right">Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.año}>
            <TableCell className="font-medium">{item.año}</TableCell>
            <TableCell>{item.cantidad}</TableCell>
            <TableCell className="text-right">
              <Link href={`/${item.link}`}>Descargar</Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
