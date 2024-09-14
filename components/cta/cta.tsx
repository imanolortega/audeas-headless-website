// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Container, Section } from "@/components/craft";

const CTA = () => {
  return (
    <Section className="bg-background">
      <Container className="flex flex-col gap-6">
        <h3 className="!my-0 md:text-3xl md:font-semibold">¿Quiénes somos?</h3>
        <h4 className="text-muted-foreground">
          <Balancer>
            Somos una Asociación Civil sin fines de lucro que agrupa a
            instituciones universitarias que ofrecen enseñanza superior en las áreas de
            Agropecuaria y/o Forestal.
          </Balancer>
        </h4>
        <div className="not-prose flex items-center gap-2">
          <Button className="bg-audeas text-white hover:bg-audeas/90" asChild>
            <Link href="#">Contactanos</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="#">Más información {"->"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
