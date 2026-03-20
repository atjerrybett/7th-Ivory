import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | 7th Ivory Productions",
  description: "Terms of service for 7th Ivory Productions website.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-ivory-950 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-50 mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-invert prose-gold max-w-none">
          <p className="text-ivory-400 text-lg mb-8">
            Last updated: March 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-ivory-400">
              By accessing and using the 7th Ivory Productions website, you accept and agree 
              to be bound by the terms and conditions of this agreement. If you do not agree 
              to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              2. Services
            </h2>
            <p className="text-ivory-400">
              7th Ivory Productions provides film production services including but not limited 
              to commercials (TVCs), short films, documentaries, VR/360° content, and product 
              photography. All services are subject to separate agreements and contracts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              3. Intellectual Property
            </h2>
            <p className="text-ivory-400 mb-4">
              All content on this website, including text, graphics, logos, images, videos, 
              and software, is the property of 7th Ivory Productions or its content suppliers 
              and is protected by international copyright laws.
            </p>
            <p className="text-ivory-400">
              Portfolio work displayed on this website may be subject to additional copyright 
              protections held by our clients and collaborators.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              4. User Conduct
            </h2>
            <p className="text-ivory-400 mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc list-inside text-ivory-400 space-y-2 ml-4">
              <li>Use the site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Copy, reproduce, or distribute any content without permission</li>
              <li>Submit false or misleading information through our contact forms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              5. Project Inquiries
            </h2>
            <p className="text-ivory-400">
              Submitting an inquiry through our contact form does not constitute a binding 
              agreement. All projects require a formal contract and agreement before work 
              commences. Quotes and proposals are valid for 30 days unless otherwise stated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-ivory-400">
              7th Ivory Productions shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your use of or inability to 
              use this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              7. Changes to Terms
            </h2>
            <p className="text-ivory-400">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to the website. Your continued use of the site constitutes 
              acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              8. Governing Law
            </h2>
            <p className="text-ivory-400">
              These terms shall be governed by and construed in accordance with the laws of 
              the Republic of Kenya, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              9. Contact
            </h2>
            <p className="text-ivory-400">
              For questions regarding these Terms of Service, please contact us at:{" "}
              <a href="mailto:7th.ivory@gmail.com" className="text-gold hover:underline">
                7th.ivory@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
