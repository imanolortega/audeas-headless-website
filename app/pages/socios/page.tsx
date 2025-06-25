import { Section, Container } from '@/components/craft';
import BackButton from '@/components/back';

import Logos from '@/components/logos/logos';

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
    </Section>
  );
}
