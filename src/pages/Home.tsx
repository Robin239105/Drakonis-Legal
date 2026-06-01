import PageWrapper from '../components/layout/PageWrapper';
import Hero from '../components/home/Hero';
import StatsBar from '../components/home/StatsBar';
import PracticeAreaPreview from '../components/home/PracticeAreaPreview';
import WhyDrakonis from '../components/home/WhyDrakonis';
import FeaturedCases from '../components/home/FeaturedCases';
import AttorneyPreview from '../components/home/AttorneyPreview';
import Testimonials from '../components/home/Testimonials';
import NewsPreview from '../components/home/NewsPreview';
import GlobalPresence from '../components/home/GlobalPresence';
import ConsultationCTA from '../components/home/ConsultationCTA';

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <StatsBar />
      <PracticeAreaPreview />
      <WhyDrakonis />
      <FeaturedCases />
      <AttorneyPreview />
      <Testimonials />
      <NewsPreview />
      <GlobalPresence />
      <ConsultationCTA />
    </PageWrapper>
  );
}
