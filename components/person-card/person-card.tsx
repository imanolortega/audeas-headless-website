import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

interface PersonCardProps {
  image: string
  name: string
  role: string
}

function PersonCard({ image, name, role }: PersonCardProps) {
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <CardHeader className="flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover"
        />
      </CardHeader>
      <CardContent className="text-center p-4">
        <CardTitle className="text-lg font-semibold text-gray-800">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {role}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default PersonCard
