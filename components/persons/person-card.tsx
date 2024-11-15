import Image from 'next/image'

import { cn } from '@/lib/utils'

interface Person {
  image: string
  name: string
  role: string
}

export default function PersonCard({ person }: { person: Person }) {
  return (
    <div
      className={cn(
        'border border-audeas/30 p-4 bg-background/70 rounded-lg flex justify-between flex-col not-prose gap-8',
        'hover:bg-background transition-all',
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="h-48 w-full overflow-hidden relative rounded-md border flex items-center justify-center">
          <Image
            className="h-full w-full object-cover"
            src={person.image}
            alt={person.name}
            width={400}
            height={200}
          />
        </div>
        <div className="text-xl text-audeas font-bold group-hover:underline decoration-muted-foreground underline-offset-4 decoration-dotted transition-all">
          {person.name}
        </div>
        <div className="text-sm text-muted-foreground">{person.role}</div>
      </div>
    </div>
  )
}
