import { getAllPages } from '@/lib/wordpress'
import { Section, Container } from '@/components/craft'
import Link from 'next/link'

export default async function Page() {

  return (
    <Section>
      <Container>
        <p>Autoridades</p>
      </Container>
    </Section>
  )
}
