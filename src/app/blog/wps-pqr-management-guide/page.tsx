import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Manage WPS and PQR Records for AWS D1.1 Compliance",
  description:
    "Complete guide to Welding Procedure Specification and Procedure Qualification Record management. Learn essential variable tracking, revision control systems, digital WPS libraries, and how to prevent citations with proper documentation.",
  alternates: { canonical: "/blog/wps-pqr-management-guide" },
};

export default function WpsPqrManagementGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Manage WPS and PQR Records for AWS D1.1 Compliance",
    description:
      "Complete guide to Welding Procedure Specification and Procedure Qualification Record management. Learn essential variable tracking, revision control systems, digital WPS libraries, and how to prevent citations with proper documentation.",
    datePublished: "2026-03-08",
    dateModified: "2026-03-08",
    author: {
      "@type": "Person",
      name: "Nolan Terry",
      url: "https://weldcert.io/blog/authors/nolan-terry",
    },
    publisher: {
      "@type": "Organization",
      name: "WeldCert",
      url: "https://weldcert.io",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://weldcert.io/blog/wps-pqr-management-guide",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.io" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://weldcert.io/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: "How to Manage WPS and PQR Records for AWS D1.1 Compliance",
        item: "https://weldcert.io/blog/wps-pqr-management-guide",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <ReadingProgressBar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Compliance</span>
              <span className="text-xs text-gray-400">March 8, 2026</span>
              <span className="text-xs text-gray-400">11 min read</span>
            </div>
            <AuthorByline slug="nolan-terry" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              How to Manage WPS and PQR Records for AWS D1.1 Compliance
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Complete guide to Welding Procedure Specification and Procedure Qualification Record management.
              Learn essential variable tracking, revision control systems, digital WPS libraries, and how to
              prevent citations with proper documentation.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            {/* 1 */}
            <h2>The Role of WPS and PQR Documents in AWS D1.1</h2>
            <p>
              Every welded joint on a structural steel project governed by AWS D1.1 must be made in accordance
              with a written Welding Procedure Specification. The WPS is the shop-floor instruction document
              that tells the welder exactly what variables to follow &mdash; process, filler metal classification,
              shielding gas composition and flow rate, preheat temperature, interpass limits, current range,
              voltage range, travel speed range, joint design, and position. Without a signed, current-revision
              WPS at the point of welding, the work is technically non-compliant regardless of the weld quality.
            </p>
            <p>
              Behind every WPS sits a Procedure Qualification Record. The PQR is the evidentiary document that
              proves the WPS produces acceptable results. It records the actual welding parameters used during
              the qualification test, along with the results of required mechanical tests &mdash; typically
              guided-bend specimens and reduced-section tensile tests under AWS D1.1 Clause 4, Part C. The PQR
              is a permanent record; once signed, it is never revised. If the procedure changes beyond the range
              of essential variables, a new PQR must be created.
            </p>
            <p>
              The distinction between these two documents is critical: the WPS is a living instruction that can
              be revised within the essential variable envelope established by its supporting PQR(s). The PQR is
              a fixed historical record of a specific test event. Conflating the two &mdash; or losing the
              traceability link between them &mdash; is one of the most common audit findings in structural
              welding shops.
            </p>
            <p>
              AWS D1.1 Clause 4.1.1 requires the contractor to prepare written WPSs and mandates that each WPS
              be qualified by testing in accordance with Clause 4, Part C, or be based on prequalified procedures
              per Clause 3. Even prequalified WPSs must be documented in writing and conform to all the
              stipulated limits. The code does not allow welding from memory or oral instruction.
            </p>

            {/* 2 */}
            <h2>AWS D1.1 Clause 4 Required Fields for a WPS</h2>
            <p>
              Clause 4 of AWS D1.1 specifies the information that must appear on every WPS. Missing any required
              field is a documentation deficiency that an inspector or auditor can cite. The following list covers
              the minimum content the code demands:
            </p>
            <ul>
              <li>
                <strong>Welding process(es)</strong> &mdash; SMAW, GMAW, FCAW, SAW, GTAW, or combinations
                thereof. If multiple processes are used on a single joint (e.g., GTAW root with FCAW fill),
                each process and its applicable range must be described separately.
              </li>
              <li>
                <strong>Base metal specification and grade</strong> &mdash; The specific ASTM or other recognized
                standard designation (e.g., ASTM A572 Grade 50). AWS D1.1 Table 3.1 groups base metals
                for prequalified procedures. For qualified procedures the PQR must document the actual
                specification welded.
              </li>
              <li>
                <strong>Filler metal classification</strong> &mdash; The complete AWS classification (e.g.,
                E7018-H4R, ER70S-6, E71T-1C H8). Brand name alone is insufficient; the classification ties
                back to the applicable AWS filler metal specification (A5.1, A5.18, A5.20, etc.).
              </li>
              <li>
                <strong>Preheat and interpass temperature</strong> &mdash; Minimum preheat per Table 3.3
                (prequalified) or as established by PQR testing. Maximum interpass temperature if specified.
              </li>
              <li>
                <strong>Electrical characteristics</strong> &mdash; Current type and polarity (DCEP, DCEN, AC),
                amperage range, voltage range. For GMAW, the transfer mode (short-circuit, globular, spray,
                or pulsed spray) must be specified.
              </li>
              <li>
                <strong>Shielding</strong> &mdash; Gas composition and flow rate range for gas-shielded processes.
                Flux trade name and classification for SAW.
              </li>
              <li>
                <strong>Position</strong> &mdash; The welding positions the WPS covers (1G, 2G, 3G, 4G for
                groove; 1F, 2F, 3F, 4F for fillet). Progression direction for vertical welding (uphill or
                downhill) must be stated.
              </li>
              <li>
                <strong>Joint design details</strong> &mdash; Groove type, groove angle, root opening, root face,
                backing type (steel, ceramic, no backing). A reference to the applicable joint detail drawing
                is recommended.
              </li>
              <li>
                <strong>Technique</strong> &mdash; Stringer or weave beads, single or multiple pass, single or
                multiple electrode, contact tube to work distance range.
              </li>
              <li>
                <strong>Post-weld heat treatment</strong> &mdash; If applicable, temperature range, hold time,
                heating and cooling rates.
              </li>
            </ul>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">WPS Field</th>
                    <th className="px-5 py-3 font-semibold">Code Reference</th>
                    <th className="px-5 py-3 font-semibold">Essential Variable?</th>
                    <th className="px-5 py-3 font-semibold">Common Deficiency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3">Welding Process</td>
                    <td className="px-5 py-3">Clause 4.8.1</td>
                    <td className="px-5 py-3">Yes</td>
                    <td className="px-5 py-3">Process listed but transfer mode omitted for GMAW</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Filler Metal Classification</td>
                    <td className="px-5 py-3">Clause 4.8.2</td>
                    <td className="px-5 py-3">Yes</td>
                    <td className="px-5 py-3">Brand name used instead of AWS classification</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Base Metal Group</td>
                    <td className="px-5 py-3">Table 4.9</td>
                    <td className="px-5 py-3">Yes</td>
                    <td className="px-5 py-3">Specification listed but group number missing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Preheat Temperature</td>
                    <td className="px-5 py-3">Table 3.3 / Clause 4.8.4</td>
                    <td className="px-5 py-3">Yes (minimum)</td>
                    <td className="px-5 py-3">No minimum stated or below code-required minimum</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Electrical Parameters</td>
                    <td className="px-5 py-3">Clause 4.8.3</td>
                    <td className="px-5 py-3">Yes (amperage range)</td>
                    <td className="px-5 py-3">Single value listed instead of a range</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Position</td>
                    <td className="px-5 py-3">Clause 4.8.5</td>
                    <td className="px-5 py-3">Yes</td>
                    <td className="px-5 py-3">Vertical progression direction not stated</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Shielding Gas / Flux</td>
                    <td className="px-5 py-3">Clause 4.8.6</td>
                    <td className="px-5 py-3">Yes</td>
                    <td className="px-5 py-3">Gas mixture ratio listed as &ldquo;CO2&rdquo; without percentage</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">PWHT</td>
                    <td className="px-5 py-3">Clause 4.8.8</td>
                    <td className="px-5 py-3">Yes (if applied)</td>
                    <td className="px-5 py-3">PWHT required by contract but not addressed on WPS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 3 */}
            <h2>PQR Supporting Data and Mechanical Test Requirements</h2>
            <p>
              The PQR serves as the factual basis for every qualified WPS. Under AWS D1.1 Clause 4, Part C,
              qualification of a welding procedure by testing requires the following documentation on the PQR:
            </p>
            <p>
              <strong>Actual welding parameters recorded during the test.</strong> Unlike the WPS, which states
              ranges, the PQR records the specific values observed during welding of the test coupon &mdash;
              actual amperage, actual voltage, actual travel speed, actual preheat and interpass temperatures
              measured with a calibrated instrument. These values must fall within the ranges the WPS will
              ultimately specify. If the welder ran 225 amps during the qualification test, the WPS cannot
              list a range of 250&ndash;300 amps because the test never demonstrated performance at those settings.
            </p>
            <p>
              <strong>Test coupon details.</strong> The PQR documents the base metal specification and thickness
              of the test plate or pipe, the joint configuration, and the position in which the test weld was
              made. These details establish the qualification envelope &mdash; the range of production work the
              WPS can cover based on the thickness, base metal, and joint type tested.
            </p>
            <p>
              <strong>Mechanical test results.</strong> AWS D1.1 Clause 4.9 specifies the required tests for
              procedure qualification. For complete joint penetration (CJP) groove welds, the code requires:
            </p>
            <ul>
              <li>
                <strong>Reduced-section tensile tests</strong> &mdash; Two specimens, each must meet or exceed
                the minimum specified tensile strength of the weaker base metal. The fracture location is
                recorded (weld metal, HAZ, or base metal). Base metal fracture at or above minimum tensile
                strength is acceptable even if it is below the filler metal&rsquo;s rated strength.
              </li>
              <li>
                <strong>Guided-bend tests</strong> &mdash; Typically four specimens: two face bends and two
                root bends (for coupon thickness under 3/8&Prime;) or four side bends (for coupon thickness
                3/8&Prime; and over). Bend specimens are evaluated for open discontinuities exceeding 1/8&Prime;
                in any direction on the convex surface, with certain exceptions for corner cracks.
              </li>
              <li>
                <strong>Macroetch specimens</strong> &mdash; Required for certain joint types and fillet weld
                procedures. The etched cross-section is examined for complete fusion, acceptable porosity levels,
                and proper joint geometry.
              </li>
            </ul>
            <p>
              All test results must be documented on the PQR and signed by the testing laboratory or the
              contractor&rsquo;s qualified representative. The PQR is never backdated; the test date and the
              signature date must be consistent with when the test was actually performed. Backdated PQRs are
              a serious audit red flag and can be treated as fraudulent documentation.
            </p>
            <p>
              When a PQR test fails, the failure must still be documented. Some organizations discard failed
              PQRs, but maintaining them demonstrates a thorough quality system. The failed PQR is marked as
              such and cannot be used to support a WPS. A new test coupon must be welded and tested to obtain
              a passing PQR.
            </p>

            {/* 4 */}
            <h2>Essential vs. Supplementary Essential Variables</h2>
            <p>
              AWS D1.1 distinguishes between essential variables and nonessential variables for WPS qualification.
              An essential variable change invalidates the WPS unless the procedure is requalified by a new PQR.
              Nonessential variable changes can be incorporated into a WPS revision without retesting, though
              the revision must still be documented and approved.
            </p>
            <p>
              The essential variables for WPS qualification under AWS D1.1 Clause 4.8 include:
            </p>
            <ul>
              <li>A change in welding process (e.g., SMAW to FCAW).</li>
              <li>A change in electrode or filler metal classification (e.g., E7018 to E7024).</li>
              <li>
                A change in base metal group number beyond what the qualification envelope allows. AWS D1.1
                Table 4.9 defines base metal groups (I through IV) and the cross-qualification rules.
              </li>
              <li>
                An increase in base metal thickness beyond the qualified range. The maximum qualified thickness
                depends on the test coupon thickness per Table 4.2.
              </li>
              <li>A change in position beyond what was qualified (e.g., flat-only qualification applied to overhead work).</li>
              <li>
                A change in vertical welding progression from uphill to downhill or vice versa. This is a
                frequently overlooked variable because many shops assume uphill qualification covers downhill.
                It does not.
              </li>
              <li>An increase in heat input beyond the qualified range when impact testing is required.</li>
              <li>A change in PWHT condition (adding PWHT when the PQR was tested without it, or removing it).</li>
              <li>
                For GMAW, a change in transfer mode (short-circuit to spray, spray to pulsed, etc.) is an
                essential variable change.
              </li>
            </ul>
            <p>
              Nonessential variables include changes within the qualified electrical parameter ranges, changes
              in electrode diameter within a classification, changes in technique (stringer vs. weave) unless
              restricted by the code, and changes in interpass cleaning method.
            </p>
            <p>
              The practical implication is that shops must track which essential variables each PQR covers and
              ensure that every WPS in production stays within those boundaries. When a project requires welding
              outside the existing PQR envelope &mdash; a new base metal, a new process, a thicker section
              &mdash; a new qualification test must be performed before production welding begins. Starting
              production before the PQR is complete and accepted is a code violation.
            </p>

            {/* 5 */}
            <h2>Revision Control and WPS/PQR Linking</h2>
            <p>
              A robust revision control system is fundamental to WPS/PQR management. Each WPS must carry a
              unique identifier and a revision number or date. When a WPS is revised, the previous revision
              must be archived (not destroyed) and the new revision must be distributed to all points of use
              before any welding is performed under the updated parameters.
            </p>
            <p>
              The link between a WPS and its supporting PQR(s) must be explicitly documented. Each WPS should
              reference the PQR number(s) that provide the qualification basis. Conversely, PQR records should
              identify which WPS(es) they support. This bidirectional traceability is essential because:
            </p>
            <ul>
              <li>
                Auditors will request the PQR supporting a given WPS. If the link is not documented, the
                auditor must manually verify that the PQR test parameters cover the WPS ranges &mdash; a
                time-consuming process that increases audit duration and the likelihood of findings.
              </li>
              <li>
                When a PQR is discovered to have an error (incorrect test results, expired calibration on test
                equipment, missing signatures), every WPS supported by that PQR is potentially affected. Without
                a linking system, identifying all affected WPSs requires a manual review of every active procedure.
              </li>
              <li>
                Multiple PQRs can support a single WPS. For example, a WPS covering both 1G and 3G positions
                might be supported by two PQRs &mdash; one qualified in flat position and one in vertical. The
                linking must identify which PQR covers which portion of the WPS scope.
              </li>
            </ul>
            <p>
              Revision control failures are among the most cited audit findings in structural welding. Common
              scenarios include:
            </p>
            <ul>
              <li>Obsolete WPS revisions still in use at the weld station because the updated version was never distributed.</li>
              <li>WPS revised to add a parameter range not covered by the supporting PQR (e.g., extending the thickness range without a new qualification test).</li>
              <li>Multiple copies of the same WPS with different revision dates and no clear indication of which is current.</li>
              <li>PQR referenced on a WPS that cannot be located in the quality records system.</li>
              <li>Handwritten field changes on a WPS without formal revision approval.</li>
            </ul>
            <p>
              A sound revision control system assigns each WPS a document number, tracks the current revision
              status in a master log, records the date of each revision and the reason for the change, and
              includes a distribution list showing where each copy was sent. Digital systems automate this
              process by versioning documents automatically and preventing access to superseded revisions.
            </p>

            {/* 6 */}
            <h2>Prequalified vs. Qualified Procedures Under AWS D1.1</h2>
            <p>
              AWS D1.1 Clause 3 provides a pathway for prequalified WPSs &mdash; procedures that do not require
              PQR testing because they use combinations of processes, filler metals, base metals, joint designs,
              and parameters that the code committee has determined produce acceptable results based on extensive
              industry experience.
            </p>
            <p>
              Prequalified status is not a blanket exemption from documentation. The WPS must still be written,
              must conform to all the limitations in Clause 3 (including Table 3.1 for approved base metals,
              Table 3.6 for approved filler metals, and the detailed joint geometry requirements in
              Figures 3.2 through 3.4), and must be signed by an authorized representative. The WPS must
              explicitly state that it is prequalified and reference the applicable clause.
            </p>
            <p>
              Common mistakes with prequalified procedures include:
            </p>
            <ul>
              <li>
                Assuming a procedure is prequalified when one or more parameters fall outside the prequalified
                limits. For example, a CJP groove weld using GMAW short-circuit transfer is <em>not</em>
                prequalified under D1.1 for material over 1/4&Prime; thick in a single pass, yet shops
                frequently attempt this without qualification testing.
              </li>
              <li>
                Using a prequalified joint detail but modifying the root opening or groove angle beyond the
                tolerances shown in the applicable figure. Any deviation from the prequalified geometry makes
                the procedure non-prequalified.
              </li>
              <li>
                Applying prequalified status to base metals not listed in Table 3.1. If the base metal is not
                in the prequalified table, the procedure must be qualified by testing regardless of how similar
                the metal is to a listed grade.
              </li>
              <li>
                Omitting the prequalified designation on the WPS. The code requires that prequalified WPSs be
                clearly identified as such. An unmarked WPS will be treated as a procedure requiring PQR
                support during an audit.
              </li>
            </ul>
            <p>
              When a procedure falls outside the prequalified envelope, the contractor must qualify it by testing
              under Clause 4, Part C. This requires welding a test coupon, performing the required mechanical
              tests, documenting the results on a PQR, and issuing the WPS with a reference to the supporting
              PQR. The qualified WPS can then cover a range of production variables within the essential variable
              limits established by the PQR.
            </p>

            {/* 7 */}
            <h2>Digital WPS/PQR Management Systems</h2>
            <p>
              The volume of WPS and PQR documentation on a typical structural steel project quickly exceeds
              what manual filing systems can reliably manage. A mid-size fabrication shop may maintain 30&ndash;50
              active WPSs, each linked to one or more PQRs, with revision histories spanning years. A large
              contractor working across multiple code jurisdictions (AWS D1.1, D1.5, D1.8, ASME IX) may manage
              hundreds of procedures with overlapping but distinct qualification requirements.
            </p>
            <p>
              Digital management systems address several critical pain points:
            </p>
            <ul>
              <li>
                <strong>Version control automation.</strong> The system maintains a single source of truth for
                each WPS. When a revision is published, all users see the current version. Superseded revisions
                are archived automatically and remain accessible for historical reference but cannot be
                inadvertently issued for production use.
              </li>
              <li>
                <strong>WPS/PQR linking.</strong> The system maintains the relationship between each WPS and
                its supporting PQR(s). When a PQR is queried, all WPSs it supports are displayed. When a WPS
                is opened, its supporting PQR(s) are one click away. This eliminates the manual cross-referencing
                that consumes audit preparation time.
              </li>
              <li>
                <strong>Essential variable validation.</strong> Advanced systems compare the ranges stated on a
                WPS against the actual values documented on the supporting PQR. If a WPS revision extends a
                parameter beyond what the PQR tested, the system flags the discrepancy before the WPS is
                approved.
              </li>
              <li>
                <strong>Audit trail.</strong> Every action &mdash; creation, revision, approval, distribution,
                and retirement &mdash; is logged with timestamps and user identification. This audit trail
                satisfies the traceability requirements of quality management systems like ISO 9001 and
                AWS D1.1 Clause 6.
              </li>
              <li>
                <strong>Field access.</strong> Welders and inspectors in the field can access the current WPS
                on a tablet or phone. This eliminates the problem of outdated paper copies at the weld station
                and ensures the welder is always working to the correct procedure.
              </li>
            </ul>
            <p>
              The return on investment for digital WPS/PQR management is most visible during audits. A shop
              that can produce any WPS and its supporting PQR within seconds demonstrates a mature quality system.
              A shop that spends hours searching through filing cabinets or asking &ldquo;who has the PQR
              binder?&rdquo; signals systemic documentation risk to auditors and inspectors.
            </p>

            {/* 8 */}
            <h2>Common Audit Findings Related to WPS/PQR Documentation</h2>
            <p>
              Understanding the most frequent audit findings helps organizations focus their WPS/PQR management
              improvements where they matter most. The following findings appear repeatedly in AWS D1.1 audit
              reports across fabrication shops, erection contractors, and field operations:
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Finding Category</th>
                    <th className="px-5 py-3 font-semibold">Specific Issue</th>
                    <th className="px-5 py-3 font-semibold">Code Reference</th>
                    <th className="px-5 py-3 font-semibold">Risk Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3">Missing WPS</td>
                    <td className="px-5 py-3">Welding performed with no WPS available at the workstation</td>
                    <td className="px-5 py-3">Clause 4.1.1</td>
                    <td className="px-5 py-3">Major</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Obsolete Revision</td>
                    <td className="px-5 py-3">Superseded WPS revision in active use</td>
                    <td className="px-5 py-3">Clause 6.1</td>
                    <td className="px-5 py-3">Major</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Missing PQR Link</td>
                    <td className="px-5 py-3">WPS does not reference a supporting PQR</td>
                    <td className="px-5 py-3">Clause 4.1.1</td>
                    <td className="px-5 py-3">Major</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">PQR Not Found</td>
                    <td className="px-5 py-3">Referenced PQR cannot be located in records</td>
                    <td className="px-5 py-3">Clause 4.1.1</td>
                    <td className="px-5 py-3">Critical</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Parameter Mismatch</td>
                    <td className="px-5 py-3">WPS range exceeds PQR tested parameters</td>
                    <td className="px-5 py-3">Clause 4.8</td>
                    <td className="px-5 py-3">Major</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Incomplete WPS</td>
                    <td className="px-5 py-3">Required fields missing (e.g., no preheat, no progression)</td>
                    <td className="px-5 py-3">Clause 4.8</td>
                    <td className="px-5 py-3">Minor to Major</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Unsigned PQR</td>
                    <td className="px-5 py-3">PQR lacks required signatures or test lab certification</td>
                    <td className="px-5 py-3">Clause 4.9</td>
                    <td className="px-5 py-3">Major</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Prequalified Misapplication</td>
                    <td className="px-5 py-3">WPS labeled prequalified but parameters exceed Clause 3 limits</td>
                    <td className="px-5 py-3">Clause 3</td>
                    <td className="px-5 py-3">Critical</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Critical findings &mdash; such as a missing PQR or a misapplied prequalified designation &mdash;
              can result in a stop-work order until the documentation is corrected. Major findings typically
              require a corrective action plan with a defined timeline. Minor findings are noted for improvement
              but do not usually halt production.
            </p>
            <p>
              The most damaging finding is discovering that production welds were made using a procedure that
              was never properly qualified. In this scenario, the welds themselves become suspect. The inspector
              or engineer of record must determine whether the welds can be accepted by engineering judgment,
              require additional NDE, or must be removed and rewelded using a properly qualified procedure.
              The cost escalation from a single unqualified procedure can reach tens of thousands of dollars
              on a structural project.
            </p>

            {/* 9 */}
            <h2>Multi-Code WPS/PQR Management Considerations</h2>
            <p>
              Organizations that fabricate or construct under multiple welding codes face additional complexity
              in WPS/PQR management. A single shop may hold procedures qualified under AWS D1.1 for structural
              steel, ASME Section IX for pressure piping, AWS D1.5 for bridge structures, and AWS D1.6 for
              stainless steel. Each code has different essential variable definitions, different qualification
              test requirements, and different documentation formats.
            </p>
            <p>
              The key differences that affect WPS/PQR management across codes include:
            </p>
            <ul>
              <li>
                <strong>Essential variable definitions.</strong> A variable that is essential under one code may
                be nonessential under another. For example, electrode diameter is an essential variable for
                WPS qualification under certain ASME IX provisions but is generally nonessential under AWS D1.1.
                A multi-code management system must track which variables are essential for each code and
                validate accordingly.
              </li>
              <li>
                <strong>Base metal grouping systems.</strong> AWS D1.1 uses base metal groups (I through IV)
                defined in Table 4.9, while ASME IX uses P-numbers defined in QW/QB-422. The cross-qualification
                rules differ between the two systems. A WPS qualified under AWS D1.1 for Group II base metals
                cannot be automatically assumed to cover the equivalent ASME IX P-number range without
                independent verification.
              </li>
              <li>
                <strong>Mechanical test requirements.</strong> AWS D1.1 requires reduced-section tensile tests
                and guided-bend tests for CJP procedure qualification. ASME IX requires tensile tests and
                guided-bend tests but may also require impact tests (Charpy V-notch) when the construction
                code mandates notch toughness. The PQR must document the tests required by the applicable code.
              </li>
              <li>
                <strong>Prequalified procedure availability.</strong> AWS D1.1 offers a prequalified pathway
                that eliminates the need for PQR testing when all conditions are met. ASME IX has no equivalent
                prequalified pathway &mdash; every procedure must be qualified by testing. Organizations
                transitioning between codes sometimes assume that a prequalified AWS D1.1 procedure is valid
                under ASME IX; it is not.
              </li>
              <li>
                <strong>Documentation format.</strong> While the codes do not prescribe specific form formats,
                industry practice has established standard forms (QW-482 for ASME IX WPS, QW-483 for ASME IX
                PQR, AWS sample forms for D1.1). Using the wrong form for the applicable code creates confusion
                during audits even if the technical content is correct.
              </li>
            </ul>
            <p>
              A digital management system designed for multi-code environments maintains separate rule sets for
              each code and applies the correct rules based on the code designation assigned to each WPS. This
              eliminates the risk of applying AWS D1.1 prequalified rules to an ASME IX procedure or vice
              versa &mdash; a mistake that has resulted in significant audit findings for organizations
              working across code boundaries.
            </p>

            {/* 10 */}
            <h2>Building a WPS/PQR Management Program</h2>
            <p>
              An effective WPS/PQR management program incorporates the following elements:
            </p>
            <ul>
              <li>
                <strong>Master procedure log.</strong> A centralized register listing every WPS and PQR in the
                organization&rsquo;s library, with current revision status, supporting PQR numbers, applicable
                code(s), and the scope of work each procedure covers.
              </li>
              <li>
                <strong>Defined approval workflow.</strong> Each new WPS or revision must pass through a
                documented review and approval process. At minimum, the welding engineer or CWI reviews the
                technical content, and an authorized representative signs the WPS. The approval workflow
                should prevent publication without proper review.
              </li>
              <li>
                <strong>Controlled distribution.</strong> WPSs are distributed only through the document control
                system. Field copies are numbered or otherwise tracked. When a revision is issued, the old
                copies are recalled and destroyed or marked as superseded.
              </li>
              <li>
                <strong>Periodic review.</strong> WPSs should be reviewed at defined intervals (e.g., annually
                or at the start of each project) to verify that the procedures still align with current code
                editions, project requirements, and available materials and equipment.
              </li>
              <li>
                <strong>PQR retention policy.</strong> PQRs are permanent records that must be retained for the
                life of the structure per AWS D1.1. They should be stored in a secure, backed-up system with
                protection against loss, damage, or unauthorized alteration.
              </li>
              <li>
                <strong>Training.</strong> Welders, inspectors, and supervisors should be trained on how to
                read and apply WPSs, understand the significance of essential variables, and know the procedure
                for requesting a new or revised WPS when production conditions change.
              </li>
            </ul>
            <p>
              Organizations that implement these elements consistently find that audit preparation time decreases
              dramatically, inspector interactions become more efficient, and the risk of production disruptions
              from documentation findings drops to near zero. The upfront investment in a proper management
              program pays for itself many times over by avoiding the rework, delays, and penalties associated
              with WPS/PQR deficiencies.
            </p>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Manage Every WPS and PQR in One Platform
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                WeldCert links every WPS to its supporting PQRs, tracks essential variable boundaries,
                automates revision control, and puts the current procedure in every welder&rsquo;s hands.
                Stop losing time to filing cabinets and spreadsheets.
              </p>
              <a
                href="/pricing"
                className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg mr-4"
              >
                See Pricing
              </a>
              <a
                href="/demo"
                className="inline-block border border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
              >
                Request Demo
              </a>
            </div>

            {/* Related Posts */}
            <div className="not-prose mt-12 border-t border-gray-200 pt-10">
              <h2 className="text-xl font-bold text-navy mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/blog/welding-procedure-specification-guide"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Compliance</span>
                  <h3 className="font-semibold text-navy mt-1">Welding Procedure Specification Guide</h3>
                </Link>
                <Link
                  href="/blog/prequalified-welding-procedures-aws-d1-1"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Standards</span>
                  <h3 className="font-semibold text-navy mt-1">Prequalified Welding Procedures Under AWS D1.1</h3>
                </Link>
                <Link
                  href="/blog/asme-section-ix-essential-variables"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Compliance</span>
                  <h3 className="font-semibold text-navy mt-1">ASME Section IX Essential Variables Guide</h3>
                </Link>
                <Link
                  href="/blog/welding-documentation-record-retention"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Process</span>
                  <h3 className="font-semibold text-navy mt-1">Welding Documentation Record Retention</h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="not-prose max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="wps-pqr-management-guide" />
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </>
  );
}
