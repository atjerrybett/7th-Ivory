import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 7th Ivory Productions",
  description: "Privacy policy for 7th Ivory Productions website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-ivory-950 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-50 mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert prose-gold max-w-none">
          <p className="text-ivory-400 text-lg mb-8">
            Last updated: March 2026
          </p>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-ivory-400 mb-4">
              When you use our website, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-ivory-400 space-y-2 ml-4">
              <li>Contact information (name, email, phone number) when you submit our contact form</li>
              <li>Company/organization name and project details you provide</li>
              <li>Technical data such as IP address, browser type, and device information</li>
              <li>Usage data including pages visited and time spent on the site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-ivory-400 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-ivory-400 space-y-2 ml-4">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send project proposals and quotes</li>
              <li>Improve our website and services</li>
              <li>Send occasional updates about our work (only if you opt in)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              3. Data Protection
            </h2>
            <p className="text-ivory-400">
              We implement appropriate security measures to protect your personal information. 
              Your data is stored securely and is only accessible to authorized personnel who 
              need it to respond to your inquiry.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              4. Third-Party Services
            </h2>
            <p className="text-ivory-400">
              We may use third-party services such as analytics providers and form handling 
              services. These services have their own privacy policies governing the use of 
              your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              5. Your Rights
            </h2>
            <p className="text-ivory-400 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-ivory-400 space-y-2 ml-4">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-ivory-50 mb-4">
              6. Contact Us
            </h2>
            <p className="text-ivory-400">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
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
