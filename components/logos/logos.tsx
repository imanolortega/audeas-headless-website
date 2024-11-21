import { Section, Container } from '../craft'
import CarouselSpacing from '../ui/logos'

export default function Logos({ showTitle = true }) {
  return (
    <Section>
      <Container>
        {showTitle && (
          <h3 className="text-center !mt-0 mb-2 md:text-3xl md:font-semibold">
            Socios
          </h3>
        )}
        <CarouselSpacing />
      </Container>
    </Section>
  )
}
