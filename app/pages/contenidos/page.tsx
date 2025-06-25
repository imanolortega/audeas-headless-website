import { contentsGridData } from '@/lib/data';
import { IconGrid } from '@/components/icon-grid/icon-grid';
import { Section, Container } from '@/components/craft';
import BackButton from '@/components/back';

export default async function Page() {
  return (
    <Section>
      <Container className="md:pb-2">
        <BackButton />
        <h1 className="md:pt-12">Contenidos</h1>
      </Container>
      <Container>
        <IconGrid iconGridData={contentsGridData} />
      </Container>
    </Section>
  );
}
