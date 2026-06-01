import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';

export default function Privacy() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-12 bg-navy-deep">
        <div className="container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />
          <h1 className="font-heading text-warm-white mt-6">Privacy Policy</h1>
          <p className="text-sm text-gray-muted font-ui mt-2">Last updated: 1 January 2024</p>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12 text-gray-light font-body leading-relaxed">
            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">1. Data Controller</h2>
              <p>Drakonis Legal LLP ("we", "us", "our") is the data controller for personal data collected through this website and in the course of our legal practice. Our registered office is at 1 King's Bench Walk, Temple, London EC4Y 7DB. We are registered with the Information Commissioner's Office (ICO) under registration number ZA000000.</p>
              <p className="mt-3">Our Data Protection Officer can be contacted at dpo@drakonislegal.com or by writing to the registered office address above.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">2. What We Collect</h2>
              <p>We collect personal data that you provide directly to us, including: name, email address, telephone number, postal address, company name, and details of your legal matter when you submit an enquiry through our website. We also collect technical data automatically, including IP address, browser type, operating system, referring URLs, and browsing patterns on our website through cookies and similar technologies.</p>
              <p className="mt-3">In the course of providing legal services, we may collect additional personal data as necessary for the proper conduct of your matter, including financial information, identification documents, and sensitive personal data where relevant to your legal matter.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">3. How We Use Data</h2>
              <p>We use your personal data for the following purposes: responding to enquiries submitted through our website; providing legal services to our clients; complying with our regulatory obligations as a firm regulated by the Solicitors Regulation Authority; communicating with you about our services, events, and publications (where you have consented); and improving our website and services.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">4. Legal Basis</h2>
              <p>We process your personal data on the following legal bases under the UK GDPR: consent (for marketing communications); contractual necessity (for providing legal services); legitimate interests (for responding to enquiries and improving our services); and legal obligation (for regulatory compliance, anti-money laundering checks, and conflict of interest checks).</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">5. Data Retention</h2>
              <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected, subject to our regulatory obligations. For client matter data, we retain records for a minimum of six years following the conclusion of a matter, and longer where required by our professional obligations or applicable law. Website enquiry data is retained for 12 months unless an engagement is commenced.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">6. Your Rights</h2>
              <p>Under the UK GDPR, you have the following rights in relation to your personal data: the right of access; the right to rectification; the right to erasure (subject to our regulatory obligations); the right to restrict processing; the right to data portability; the right to object to processing; and rights relating to automated decision-making and profiling. To exercise any of these rights, please contact our Data Protection Officer at dpo@drakonislegal.com.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">7. Cookies</h2>
              <p>Our website uses cookies and similar technologies to enhance your browsing experience, analyse website traffic, and personalise content. We use strictly necessary cookies that are essential for the operation of our website, performance cookies that collect anonymous information about how visitors use our website, and functionality cookies that remember your preferences. You can manage your cookie preferences through your browser settings.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">8. Contact</h2>
              <p>If you have any questions about this privacy policy or our data processing practices, please contact our Data Protection Officer at dpo@drakonislegal.com or write to: Data Protection Officer, Drakonis Legal LLP, 1 King's Bench Walk, Temple, London EC4Y 7DB.</p>
              <p className="mt-3">If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
