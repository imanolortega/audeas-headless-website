'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { ChevronLeft } from 'lucide-react'

export default function BackButton() {
  const router = useRouter()

  return (
    <Button variant="outline" size="sm" onClick={() => router.back()}>
      <ChevronLeft className="h-4 w-4" />
      <span>Atrás</span>
    </Button>
  )
}
