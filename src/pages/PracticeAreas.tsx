import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeader from '../components/ui/SectionHeader';
import PracticeGrid from '../components/practice/PracticeGrid';
import ConsultationCTA from '../components/home/ConsultationCTA';
import bgPracticeAreas from '../assets/images/bg_practice_areas.png';

export default function PracticeAreas() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${bgPracticeAreas})` }} />
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Practice Areas' }]} />
          <h1 className="font-heading text-warm-white mt-6">Areas of Excellence</h1>
          <p className="text-xl text-gray-light font-body mt-4 max-w-3xl">
            Full-service litigation capability across ten core practice areas, delivered with strategic depth and global reach.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="page-section bg-obsidian">
        <div className="container-custom max-w-4xl text-center">
          <p className="text-gray-light font-body text-lg leading-relaxed mb-6">
            Drakonis Legal provides comprehensive litigation services across ten interconnected practice areas. Our approach is built on the principle that complex disputes rarely fall neatly within a single legal discipline — they require the coordination of multiple areas of expertise, deployed with strategic precision.
          </p>
          <p className="text-gray-light font-body text-lg leading-relaxed mb-6">
            Each of our practice areas is led by recognised leaders in their field, supported by teams of experienced associates and specialists who bring depth and rigour to every matter. Our global platform ensures that we can handle disputes wherever they arise, with local expertise and international coordination.
          </p>
          <p className="text-gray-light font-body text-lg leading-relaxed">
            We invite you to explore our practice areas and discover how Drakonis Legal can bring the strategic depth, courtroom experience, and global reach that your most important matters demand.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="page-section bg-navy-deep pt-8">
        <div className="container-custom">
          <PracticeGrid />
        </div>
      </section>

      <ConsultationCTA />
    </PageWrapper>
  );
}
