import PageWrapper from '../components/layout/PageWrapper';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex items-center justify-center bg-obsidian px-4">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-heading font-bold text-gold mb-4">404</h1>
          <p className="text-xl text-gray-light font-body mb-8">This page does not exist.</p>
          <Button to="/" size="lg" variant="outline">Return to Home</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
