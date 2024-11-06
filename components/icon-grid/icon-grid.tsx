import { iconGridData } from '@/lib/data'
import Link from 'next/link'

export const IconGrid = () => {
  return (
    <article className="prose-m-none">
      <div className="grid md:grid-cols-3 gap-4 not-prose">
        {iconGridData.map((item, index) => {
          const IconComponent = item.icon
          return (
            <Link
              key={index}
              className="border border-audeas/40 h-48 bg-accent/75 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] hover:bg-accent/10 transition-all"
              href={item.href}
            >
              <IconComponent size={32} />
              <span>
                {item.title}
                <span className="block text-sm text-muted-foreground">
                  {item.description}
                </span>
              </span>
            </Link>
          )
        })}
      </div>
    </article>
  )
}
