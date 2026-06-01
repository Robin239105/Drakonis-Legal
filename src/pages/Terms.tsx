import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';

export default function Terms() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-12 bg-navy-deep">
        <div className="container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Terms of Service' }]} />
          <h1 className="font-heading text-warm-white mt-6">Terms of Service</h1>
          <p className="text-sm text-gray-muted font-ui mt-2">Last updated: 1 January 2024</p>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12 text-gray-light font-body leading-relaxed">
            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the Drakonis Legal LLP website (the "Website"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Website. These terms apply to all visitors, users, and others who access or use the Website.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">2. Use of Website</h2>
              <p>The Website is provided for general informational purposes about Drakonis Legal LLP and its legal services. You may use the Website for lawful purposes only and in a manner consistent with all applicable laws and regulations. You agree not to use the Website in any way that could damage, disable, or impair the Website or interfere with any other party's use of the Website.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">3. No Legal Advice</h2>
              <p>The content on this Website is provided for general informational purposes only and does not constitute legal advice. Nothing on this Website should be construed as the provision of legal advice or the creation of a solicitor-client relationship. You should not act or refrain from acting based on any content on this Website without seeking appropriate legal advice from a qualified professional regarding your particular circumstances.</p>
              <p className="mt-3">The transmission of information through this Website, including the submission of enquiries through our consultation form, does not create a solicitor-client relationship between you and Drakonis Legal LLP. Until an engagement letter has been signed and a conflicts check completed, no solicitor-client relationship exists.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">4. Intellectual Property</h2>
              <p>All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of Drakonis Legal LLP or its content suppliers and is protected by United Kingdom and international intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from this Website without the prior written consent of Drakonis Legal LLP.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">5. Limitation of Liability</h2>
              <p>To the maximum extent permitted by applicable law, Drakonis Legal LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of, or inability to access or use, this Website.</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-warm-white mb-4">6. Governing Law</h2>
              <p>These Terms of Service shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law principles. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
              <p className="mt-3">If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. Our failure to enforce any right or provision of these terms shall not constitute a waiver of such right or provision.</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
