import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your personal information in compliance with PIPEDA.`,
};

export default function PrivacyPage() {
  return (
    <section className="section-bg-deep">
      <div className="max-w-4xl mx-auto section-standard px-6 lg:px-8">
        <h1 className="type-section mb-2">Privacy Policy</h1>
        <p className="type-small text-base-content/50 mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="type-card mb-4">1. Introduction</h2>
            <p className="type-body text-base-content/80">
              {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the
              privacy of all individuals who interact with our website or engage our services.
              This Privacy Policy describes how we collect, use, disclose, and safeguard your
              personal information in accordance with the{" "}
              <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA),
              S.C. 2000, c. 5, and any applicable provincial privacy legislation in Ontario.
            </p>
            <p className="type-body text-base-content/80 mt-3">
              By using our website at{" "}
              <a href={siteConfig.url} className="text-accent underline underline-offset-2">
                {siteConfig.url}
              </a>{" "}
              or contacting us to request services, you consent to the practices described in this
              policy.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">2. Accountability</h2>
            <p className="type-body text-base-content/80">
              {siteConfig.name} is responsible for personal information under our control. Our
              principal contact for privacy-related matters is reachable at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent underline underline-offset-2">
                {siteConfig.email}
              </a>. We have designated this individual as our Privacy Officer for the purposes of
              PIPEDA compliance.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">3. Information We Collect</h2>
            <p className="type-body text-base-content/80 mb-3">
              We collect only the personal information that is necessary for the identified purposes.
              This may include:
            </p>
            <ul className="list-disc list-inside type-body text-base-content/80 space-y-2 ml-2">
              <li>
                <strong>Contact form submissions:</strong> your name, email address, phone number,
                and any project details you choose to share when requesting a quote or enquiry.
              </li>
              <li>
                <strong>Service communications:</strong> correspondence related to quotes, project
                scope, invoicing, and follow-up.
              </li>
              <li>
                <strong>Technical data:</strong> IP address, browser type, operating system,
                referring URLs, and pages visited — collected automatically when you access our
                website via cookies and similar technologies (see Section 6 below).
              </li>
              <li>
                <strong>Google Analytics (if enabled):</strong> aggregated, anonymised traffic
                data used to understand how visitors use our website. This data does not identify
                you personally.
              </li>
            </ul>
            <p className="type-body text-base-content/80 mt-3">
              We do not knowingly collect personal information from individuals under the age of 18
              without verifiable parental consent.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">4. Identifying Purposes</h2>
            <p className="type-body text-base-content/80 mb-3">
              We collect personal information for the following identified purposes, as required
              under PIPEDA Principle 2:
            </p>
            <ul className="list-disc list-inside type-body text-base-content/80 space-y-2 ml-2">
              <li>To respond to your enquiries and communicate about requested services</li>
              <li>To prepare and deliver project quotes, estimates, and invoices</li>
              <li>To perform welding, fabrication, and related metalwork services</li>
              <li>To send service-related email communications (not unsolicited marketing)</li>
              <li>To analyse and improve our website&apos;s performance and usability</li>
              <li>To comply with our legal and regulatory obligations under Ontario and Canadian law</li>
            </ul>
            <p className="type-body text-base-content/80 mt-3">
              We will not use or disclose your personal information for purposes other than those
              for which it was collected, except with your consent or as required by law.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">5. Consent</h2>
            <p className="type-body text-base-content/80">
              By submitting our contact form or communicating with us by phone or email, you provide
              express consent for us to collect and use your personal information for the purposes
              set out in Section 4. You may withdraw your consent at any time by contacting us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent underline underline-offset-2">
                {siteConfig.email}
              </a>, subject to legal or contractual restrictions.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">6. Cookies and Tracking</h2>
            <p className="type-body text-base-content/80">
              Our website may use first-party and third-party cookies to enhance your browsing
              experience and to analyse traffic. Cookies are small text files stored on your device.
              You may control or disable cookies through your browser settings; however, doing so
              may affect the functionality of certain features. If we enable Google Analytics, its
              data collection is governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                Google&apos;s Privacy Policy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">7. Limiting Use, Disclosure, and Retention</h2>
            <p className="type-body text-base-content/80">
              We do not sell, rent, or trade your personal information to third parties for
              marketing or commercial purposes. We may share information with service providers
              (such as email delivery or payment processors) acting on our behalf under appropriate
              confidentiality obligations. We retain personal information only as long as necessary
              to fulfil the identified purposes or as required by law, after which it is securely
              destroyed or anonymised.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">8. Data Security</h2>
            <p className="type-body text-base-content/80">
              We implement reasonable administrative, technical, and physical safeguards to protect
              your personal information against unauthorised access, disclosure, copying, use, or
              modification. These measures are appropriate to the sensitivity of the information.
              However, no method of transmission over the Internet is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">9. Individual Access Rights</h2>
            <p className="type-body text-base-content/80">
              Under PIPEDA, you have the right to request access to the personal information we
              hold about you, to challenge its accuracy, and to request corrections. To exercise
              these rights, submit a written request to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent underline underline-offset-2">
                {siteConfig.email}
              </a>. We will respond within 30 calendar days of receiving your request, or notify
              you if an extension is required.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">10. Challenging Compliance</h2>
            <p className="type-body text-base-content/80">
              If you believe we have not complied with this Privacy Policy or PIPEDA, you may
              direct your concern to our Privacy Officer at the contact address below. If your
              concern is not resolved to your satisfaction, you have the right to contact the
              Office of the Privacy Commissioner of Canada at{" "}
              <a
                href="https://www.priv.gc.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                www.priv.gc.ca
              </a>.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">11. Changes to This Policy</h2>
            <p className="type-body text-base-content/80">
              We may update this Privacy Policy periodically to reflect changes in our practices
              or applicable law. Any amendments will be posted on this page with a revised
              &quot;last updated&quot; date. We encourage you to review this policy regularly.
              Your continued use of our website following any update constitutes acceptance of
              the revised policy.
            </p>
          </div>

          <div className="border-t border-base-content/10 pt-8">
            <h2 className="type-card mb-4">Contact</h2>
            <p className="type-body text-base-content/80 mb-4">
              Questions, requests, or complaints regarding this Privacy Policy or our data
              practices should be directed to:
            </p>
            <address className="not-italic type-body text-base-content/80 space-y-1">
              <p><strong>{siteConfig.name}</strong></p>
              <p>{siteConfig.location.city}, {siteConfig.location.province}</p>
              <p>
                Phone:{" "}
                <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="text-accent">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent">
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
