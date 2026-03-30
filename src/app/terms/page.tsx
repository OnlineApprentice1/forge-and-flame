import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms and conditions governing the welding and metal fabrication services provided by ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <section className="section-bg-deep">
      <div className="max-w-4xl mx-auto section-standard px-6 lg:px-8">
        <h1 className="type-section mb-2">Terms of Service</h1>
        <p className="type-small text-base-content/50 mb-12">
          Last updated: March 2026
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="type-card mb-4">1. Acceptance of Terms</h2>
            <p className="type-body text-base-content/80">
              By accessing our website at{" "}
              <a href={siteConfig.url} className="text-accent underline underline-offset-2">
                {siteConfig.url}
              </a>{" "}
              or engaging {siteConfig.name} to provide welding, fabrication, or related
              metalwork services, you agree to be bound by these Terms of Service and all
              applicable federal and provincial laws of Canada. If you do not agree with any
              of these terms, please do not use our website or services.
            </p>
            <p className="type-body text-base-content/80 mt-3">
              We reserve the right to update or modify these terms at any time without prior
              notice. Continued use of our website or services following any update constitutes
              your acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">2. Services Provided</h2>
            <p className="type-body text-base-content/80">
              {siteConfig.name} provides custom welding and metal fabrication services in
              {" "}{siteConfig.location.serviceArea}, including but not limited to: structural
              steel fabrication, ornamental ironwork, custom gates and railings, industrial
              equipment repair, artistic metalwork, and on-site welding. All services are
              subject to availability, project scope assessment, and our capacity at the time
              of booking. We reserve the right to decline any project at our sole discretion.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">3. Project Quotes and Estimates</h2>
            <p className="type-body text-base-content/80">
              All quotes and estimates provided by {siteConfig.name} are based on the
              information available at the time of assessment. Quotes are valid for 30 days
              from the date of issue unless otherwise stated in writing. Final pricing is
              confirmed in a written service agreement or work order prior to commencement of
              any work.
            </p>
            <p className="type-body text-base-content/80 mt-3">
              Estimates may be subject to revision if the actual scope of work, required
              materials, or site conditions discovered during the project differ materially
              from what was assessed during the quoting process. Any scope changes will be
              communicated and approved in writing before additional work proceeds.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">4. Payment Terms</h2>
            <p className="type-body text-base-content/80">
              Payment terms will be set out in your written service agreement. A deposit —
              typically 30–50% of the agreed project total — is required before fabrication
              or on-site work begins. The remaining balance is due upon completion and
              delivery or installation of the agreed work, unless alternative arrangements
              have been confirmed in writing.
            </p>
            <p className="type-body text-base-content/80 mt-3">
              Accepted payment methods will be specified in your service agreement. Late
              payments may be subject to interest at a rate of 1.5% per month (18% per
              annum), or the maximum rate permitted under Ontario law, whichever is lower,
              applied to any outstanding balance after the due date.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">5. Materials and Supplies</h2>
            <p className="type-body text-base-content/80">
              Where {siteConfig.name} supplies materials as part of a project, material costs
              will be itemised in your quote. We source materials from reputable suppliers and
              will notify you of any significant supply changes or price fluctuations before
              they affect your project cost. Client-supplied materials must meet our
              specifications; we accept no liability for defects originating from materials
              provided by the client.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">6. Cancellation and Rescheduling</h2>
            <p className="type-body text-base-content/80">
              Cancellations must be submitted in writing to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-accent underline underline-offset-2">
                {siteConfig.email}
              </a>. Cancellations received more than 5 business days before scheduled work
              commences are eligible for a full refund of any deposit, less any non-recoverable
              material costs already incurred. Cancellations received with fewer than 5 business
              days&apos; notice may forfeit the deposit in full. Work already completed at the
              time of cancellation will be invoiced at our standard rate.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">7. Warranty on Workmanship</h2>
            <p className="type-body text-base-content/80">
              {siteConfig.name} warrants that all fabrication and welding work will be
              performed in a professional and workmanlike manner, conforming to industry
              standards for the type of work completed. We provide a{" "}
              <strong>one-year workmanship warranty</strong> on structural welds and fabricated
              assemblies from the date of delivery or installation, covering defects in
              workmanship under normal use and conditions.
            </p>
            <p className="type-body text-base-content/80 mt-3">
              This warranty does not cover damage caused by misuse, modification by third
              parties, normal wear and tear, environmental corrosion without proper protective
              coating maintenance, or failures resulting from client-supplied materials. Warranty
              claims must be submitted in writing within the warranty period.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">8. Intellectual Property</h2>
            <p className="type-body text-base-content/80">
              All original designs, drawings, and technical specifications created by{" "}
              {siteConfig.name} remain our intellectual property unless expressly transferred
              in writing. Upon full payment, clients receive a licence to use the completed
              physical work as intended. Design files, templates, and proprietary processes
              are not transferred unless separately agreed in writing.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">9. Limitation of Liability</h2>
            <p className="type-body text-base-content/80">
              To the fullest extent permitted under Ontario and Canadian law,{" "}
              {siteConfig.name} shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to the provision
              of services, including loss of revenue, loss of profits, or loss of use, even
              if we have been advised of the possibility of such damages.
            </p>
            <p className="type-body text-base-content/80 mt-3">
              Our total aggregate liability for any claim arising from a specific project or
              service engagement shall not exceed the total amount paid by you for that
              specific engagement in the 12 months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">10. Health, Safety, and Site Access</h2>
            <p className="type-body text-base-content/80">
              Where work is performed on client premises, the client is responsible for
              ensuring safe and lawful site access for our personnel and equipment. The client
              must disclose any known hazards, underground utilities, structural concerns, or
              access restrictions prior to commencement of work. {siteConfig.name} reserves
              the right to stop work and remove personnel from any site deemed unsafe without
              penalty.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">11. Website Use</h2>
            <p className="type-body text-base-content/80">
              The content on our website is provided for general informational purposes only.
              While we endeavour to keep information accurate and current, we make no warranties
              regarding the completeness, accuracy, or suitability of any content. You may not
              reproduce, redistribute, or commercially exploit any website content without our
              express written consent.
            </p>
          </div>

          <div>
            <h2 className="type-card mb-4">12. Governing Law and Dispute Resolution</h2>
            <p className="type-body text-base-content/80">
              These Terms of Service are governed by and construed in accordance with the laws
              of the Province of Ontario and the federal laws of Canada applicable therein.
              Any dispute arising from or related to these terms or our services shall first
              be addressed through good-faith negotiation. If unresolved, disputes shall be
              subject to the exclusive jurisdiction of the courts of the Province of Ontario
              sitting in Thunder Bay.
            </p>
          </div>

          <div className="border-t border-base-content/10 pt-8">
            <h2 className="type-card mb-4">Contact</h2>
            <p className="type-body text-base-content/80 mb-4">
              Questions or concerns regarding these Terms of Service should be directed to:
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
