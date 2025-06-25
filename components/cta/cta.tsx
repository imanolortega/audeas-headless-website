// React and Next.js imports
import Link from 'next/link';

// Third-party library imports
import Balancer from 'react-wrap-balancer';

// UI component imports
import { Button } from '@/components/ui/button';

// Custom components
import { Container, Section } from '@/components/craft';

const CTA = () => {
  return (
    <Section className="bg-background">
      <Container className="flex flex-col gap-6">
        <h3 className="!my-0 md:text-3xl md:font-semibold">¿Quiénes somos?</h3>
        <h4 className="text-muted-foreground">
          <Balancer>
            Somos el nexo de las principales instituciones universitarias en Educación Agropecuaria
            y Forestal.
          </Balancer>
          <Balancer>
            Facilitamos el intercambio científico y académico para fortalecer la formación y el
            desarrollo profesional.
          </Balancer>
        </h4>
        <div className="not-prose flex items-center gap-2">
          <Button className="bg-audeas text-white hover:bg-audeas/90" asChild>
            <Link href="#">Contacto</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/pages/institucional">Más información {'->'}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
