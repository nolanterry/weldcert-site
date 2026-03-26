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
  title: "AWS D1.1 Compliance Requirements: The Complete 2026 Guide",
  description:
    "Everything you need to know about AWS D1.1 structural welding compliance — welder qualification requirements, WPS documentation, inspection procedures, and how to maintain certification records.",
  alternates: { canonical: "/blog/aws-d1-1-compliance-complete-guide" },
};

export default function AWSD11ComplianceCompleteGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AWS D1.1 Compliance Requirements: The Complete 2026 Guide",
    description:
      "Everything you need to know about AWS D1.1 structural welding compliance — welder qualification requirements, WPS documentation, inspection procedures, and how to maintain certification records.",
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
    author: {
      "@type": "Organization",
      name: "WeldCert",
      url: "https://weldcert.io",
    },
    publisher: {
      "@type": "Organization",
      name: "WeldCert",
      url: "https://weldcert.io",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://weldcert.io/blog/aws-d1-1-compliance-complete-guide",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://weldcert.io",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://weldcert.io/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "AWS D1.1 Compliance Requirements: The Complete 2026 Guide",
        item: "https://weldcert.io/blog/aws-d1-1-compliance-complete-guide",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <ReadingProgressBar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                Compliance
              </span>
              <span className="text-xs text-gray-400">March 1, 2026</span>
              <span className="text-xs text-gray-400">12 min read</span>
            </div>
            <AuthorByline slug="weldcert-team" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              AWS D1.1 Compliance Requirements: The Complete 2026 Guide
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Everything you need to know about AWS D1.1 structural welding
              compliance — welder qualification requirements, WPS
              documentation, inspection procedures, and how to maintain
              certification records.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose">
              <TableOfContents />
            </div>

            <h2 id="understanding-aws-d1-1">
              Understanding AWS D1.1 and Its Scope
            </h2>

            <p>
              AWS D1.1, the Structural Welding Code — Steel, published by the
              American Welding Society, is the most widely referenced welding
              code in North America. It governs the welding of structural steel
              components in buildings, bridges, and other structures, and is
              adopted by reference in the International Building Code (IBC),
              AISC specifications, and numerous state and local building codes.
            </p>

            <p>
              The code covers carbon and low-alloy steels with a minimum
              specified yield strength of 100 ksi or less. It applies to
              complete and partial joint penetration groove welds, fillet welds,
              plug and slot welds, and their combinations in both statically and
              cyclically loaded structures. Understanding which parts of the
              code apply to your work is the first step toward compliance.
            </p>

            <p>
              AWS D1.1 is organized into eight clauses, plus annexes that
              provide supplementary information. For compliance purposes, the
              four most critical clauses are Clause 4 (Qualification), Clause 5
              (Fabrication), Clause 6 (Inspection), and Clause 8 (Strengthening
              and Repair of Existing Structures). This guide focuses on the
              requirements most likely to generate audit findings: welder
              qualification (Clause 4), welding procedure specifications
              (Clause 4), fabrication requirements (Clause 5), and inspection
              obligations (Clause 6).
            </p>

            <h2 id="clause-4-qualification">
              Clause 4: Welder and Welding Procedure Qualification
            </h2>

            <p>
              Clause 4 of AWS D1.1 addresses two distinct but related
              requirements: the qualification of welding procedures (WPS/PQR)
              and the qualification of welding personnel (welders, welding
              operators, and tack welders). Both must be in place before any
              production welding begins.
            </p>

            <h3>Welding Procedure Specifications (WPS)</h3>

            <p>
              Every production weld must be made in accordance with a qualified
              Welding Procedure Specification. AWS D1.1 offers two paths to WPS
              qualification: prequalified procedures and procedures qualified by
              testing.
            </p>

            <p>
              <strong>Prequalified WPS:</strong> AWS D1.1 Clause 4.8 allows
              certain combinations of base metals, filler metals, joint
              details, and welding parameters to be used without qualification
              testing, provided they conform to all the specific requirements
              listed in the code. Prequalified status is limited to SMAW, SAW,
              GMAW (excluding short-circuit transfer for certain applications),
              and FCAW processes. The joint details must match those shown in
              the code&apos;s prequalified joint detail figures, and all essential
              variable ranges must fall within the specified limits.
            </p>

            <p>
              <strong>Qualified by testing:</strong> Any WPS that does not meet
              all prequalified conditions — or any WPS using a process not
              eligible for prequalification (such as GMAW-S for certain
              applications, ESW, or EGW) — must be qualified by testing per
              Clause 4.9. This requires preparing test specimens, welding them
              under controlled conditions, and subjecting them to mechanical
              testing (tension tests, bend tests, and macro-etch examination)
              to verify the procedure produces sound welds with adequate
              mechanical properties.
            </p>

            <h3>Welder Performance Qualification</h3>

            <p>
              Clause 4.1 requires that all welders, welding operators, and tack
              welders be qualified by testing before performing production
              welding. The qualification test must demonstrate the welder&apos;s
              ability to produce sound welds using a specific process, in
              specific positions, and on specific joint types.
            </p>

            <p>
              Qualification is limited by several essential variables. A welder
              qualifies for a specific range of work based on the test
              parameters used. Key variables include:
            </p>

            <ul>
              <li>
                <strong>Welding process:</strong> Qualification is specific to
                the process used (SMAW, GMAW, FCAW, SAW, etc.). Qualification
                in one process does not qualify for another.
              </li>
              <li>
                <strong>Position:</strong> Testing in certain positions
                qualifies for other positions as defined in Table 4.10. For
                example, a 3G plate test qualifies for flat (1G) and horizontal
                (2G) positions as well.
              </li>
              <li>
                <strong>Base metal thickness:</strong> The thickness of the test
                plate determines the thickness range the welder is qualified to
                weld, as specified in Table 4.11.
              </li>
              <li>
                <strong>Electrode/filler metal:</strong> Qualification is
                limited to the electrode group used in the test, with specific
                substitution rules defined in the code.
              </li>
              <li>
                <strong>Backing:</strong> Testing with backing qualifies for
                welding with backing; testing without backing qualifies for both
                with and without.
              </li>
            </ul>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Test Position</th>
                    <th className="px-5 py-3 font-semibold">Qualifies For (Plate)</th>
                    <th className="px-5 py-3 font-semibold">Qualifies For (Pipe)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">1G (Flat)</td>
                    <td className="px-5 py-3">Flat only</td>
                    <td className="px-5 py-3">1G Rotated only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">2G (Horizontal)</td>
                    <td className="px-5 py-3">Flat, Horizontal</td>
                    <td className="px-5 py-3">1G Rotated, 2G</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">3G (Vertical)</td>
                    <td className="px-5 py-3">Flat, Horizontal, Vertical</td>
                    <td className="px-5 py-3">—</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">4G (Overhead)</td>
                    <td className="px-5 py-3">Flat, Overhead</td>
                    <td className="px-5 py-3">—</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">3G + 4G</td>
                    <td className="px-5 py-3">All positions</td>
                    <td className="px-5 py-3">—</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">6G (45° Fixed Pipe)</td>
                    <td className="px-5 py-3">All positions</td>
                    <td className="px-5 py-3">All positions</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">6GR (T, K, Y with restriction ring)</td>
                    <td className="px-5 py-3">All positions</td>
                    <td className="px-5 py-3">All positions (including restricted access)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Continuity Requirements (Clause 4.1.2)</h3>

            <p>
              A welder&apos;s qualification remains in effect indefinitely, provided
              the welder does not go more than six months without using the
              qualified process for production welding. If a welder does not
              perform production welding with a specific process within any
              six-month period, that qualification lapses and the welder must
              requalify by testing.
            </p>

            <p>
              This continuity requirement is one of the most commonly
              misunderstood provisions in the code. It is process-specific: a
              welder who is qualified for both SMAW and FCAW must maintain
              continuity for each process independently. Using FCAW regularly
              does not maintain SMAW qualification if no SMAW production
              welding has been performed.
            </p>

            <p>
              Documenting continuity requires maintaining records that show the
              welder has used each qualified process within every rolling
              six-month window. This is where daily activity logging becomes
              critical — without it, demonstrating continuity to an auditor is
              difficult or impossible.
            </p>

            <h2 id="clause-5-fabrication">
              Clause 5: Fabrication Requirements
            </h2>

            <p>
              Clause 5 addresses the practical requirements for producing
              quality welds in the shop and field. It covers base metal
              preparation, assembly, welding technique, and workmanship
              standards that fabricators must follow.
            </p>

            <p>
              <strong>Base metal preparation (5.2):</strong> All surfaces to be
              welded must be free of mill scale, rust, moisture, grease, and
              other contaminants that would adversely affect weld quality. Cut
              edges must be smooth and free of notches, gouges, and
              irregularities. Thermal cutting surfaces must meet the roughness
              requirements specified in the code.
            </p>

            <p>
              <strong>Assembly and fit-up (5.3):</strong> Joint fit-up must
              conform to the tolerances specified in the applicable WPS and the
              code&apos;s joint detail requirements. Root openings, groove angles,
              and root face dimensions all have specified tolerances.
              Misalignment (high-low) is limited to specific values based on
              material thickness and joint type.
            </p>

            <p>
              <strong>Welding technique (5.4):</strong> Clause 5 specifies
              requirements for preheat and interpass temperature, welding
              technique (stringer vs. weave beads, maximum weave width), bead
              sequence, and cleaning between passes. The maximum single-pass
              fillet weld size and the minimum number of passes for specific
              joint configurations are also defined.
            </p>

            <p>
              <strong>Preheat and interpass temperature (5.6):</strong> Preheat
              requirements are based on the base metal group, thickness, and
              hydrogen level of the welding consumable. Table 5.8 in the code
              provides minimum preheat and interpass temperatures. These
              requirements exist to control cooling rates and reduce the risk
              of hydrogen-induced cracking, particularly in thicker sections and
              higher-strength steels.
            </p>

            <p>
              <strong>Distortion control:</strong> While the code does not
              prescribe specific distortion control measures, it does require
              that completed weldments meet dimensional tolerances. Fabricators
              are expected to use appropriate techniques — welding sequence,
              balanced welding, fixturing, and prebending — to control
              distortion within acceptable limits.
            </p>

            <h2 id="clause-6-inspection">
              Clause 6: Inspection Requirements and Acceptance Criteria
            </h2>

            <p>
              Clause 6 defines the inspection obligations, inspection methods,
              and acceptance criteria for welded connections. It distinguishes
              between visual inspection (required for all welds) and
              nondestructive testing (required for specific categories of
              welds).
            </p>

            <h3>Visual Inspection</h3>

            <p>
              Visual inspection is the first and most fundamental inspection
              method. Every completed weld must pass visual inspection before
              any additional NDT is performed. AWS D1.1 Table 6.1 provides the
              visual acceptance criteria for both statically loaded and
              cyclically loaded structures.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Discontinuity</th>
                    <th className="px-5 py-3 font-semibold">Statically Loaded</th>
                    <th className="px-5 py-3 font-semibold">Cyclically Loaded</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Crack (any size)</td>
                    <td className="px-5 py-3">Not permitted</td>
                    <td className="px-5 py-3">Not permitted</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Fusion (incomplete)</td>
                    <td className="px-5 py-3">Not permitted</td>
                    <td className="px-5 py-3">Not permitted</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Crater cross section</td>
                    <td className="px-5 py-3">Not permitted (except ends of intermittent fillet welds)</td>
                    <td className="px-5 py-3">Not permitted</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Undercut (depth)</td>
                    <td className="px-5 py-3">&le; 1/32&quot; for material &lt; 1&quot;; &le; 1/16&quot; for material &ge; 1&quot;</td>
                    <td className="px-5 py-3">&le; 0.01&quot; for all thicknesses</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Porosity (visible)</td>
                    <td className="px-5 py-3">Sum &le; 3/8&quot; in any linear inch; &le; 3/4&quot; in any 12&quot;</td>
                    <td className="px-5 py-3">Not permitted in CJP groove welds; fillet weld rules apply</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Weld profile (convexity)</td>
                    <td className="px-5 py-3">Per Figure 5.4</td>
                    <td className="px-5 py-3">Per Figure 5.4 (stricter limits for cyclic)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Fillet weld size (undersize)</td>
                    <td className="px-5 py-3">&le; 1/16&quot; under specified size for max 10% of length</td>
                    <td className="px-5 py-3">&le; 1/16&quot; under specified size for max 10% of length</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Nondestructive Testing</h3>

            <p>
              Beyond visual inspection, AWS D1.1 requires additional NDT for
              specific categories of welds. The type and extent of NDT depends
              on the loading category (static vs. cyclic), the type of joint,
              and the contract documents.
            </p>

            <p>
              <strong>Radiographic testing (RT)</strong> is commonly specified
              for complete joint penetration (CJP) groove welds in tension
              members of cyclically loaded structures and for CJP groove welds
              in butt joints. Acceptance criteria for RT are defined in Clause
              6.12 and are based on the size and distribution of internal
              discontinuities visible on the radiograph.
            </p>

            <p>
              <strong>Ultrasonic testing (UT)</strong> is an alternative to RT
              and is often preferred for thicker materials (over 8 inches) and
              T-joints where radiographic geometry is impractical. UT acceptance
              criteria in AWS D1.1 use a decibel-based rating system that
              evaluates indication severity relative to a reference standard.
            </p>

            <p>
              <strong>Magnetic particle testing (MT)</strong> is used for
              surface and near-surface discontinuity detection. It is commonly
              applied to fillet welds, tack welds, and thermally cut surfaces
              where volumetric methods like RT or UT are not practical.
            </p>

            <p>
              The Engineer of Record has the authority to specify additional NDT
              beyond the code minimum requirements. Contract documents should
              clearly state the type, extent, and acceptance criteria for all
              required NDT.
            </p>

            <h2 id="wps-pqr-documentation">
              WPS and PQR Documentation Requirements
            </h2>

            <p>
              Proper documentation is the backbone of AWS D1.1 compliance. The
              code requires that WPS and PQR documents be available at the point
              of welding and maintained as part of the permanent quality
              records.
            </p>

            <p>
              A compliant WPS must include, at minimum: the welding process,
              applicable base metal specifications and grades, filler metal
              specifications and classifications, joint design details
              (including backing, root opening, groove angle, and root face),
              electrical characteristics (current type, polarity, amperage
              range, voltage range), shielding gas type and flow rate (if
              applicable), preheat and interpass temperature requirements,
              welding position(s), progression direction for vertical welding,
              post-weld heat treatment requirements (if applicable), and any
              other essential variables specified in the code.
            </p>

            <p>
              For prequalified WPS documents, no PQR is required, but the WPS
              must clearly state &quot;Prequalified per AWS D1.1&quot; and must
              demonstrate conformance with all applicable prequalification
              requirements. For procedures qualified by testing, each WPS must
              be supported by a PQR that documents the actual welding
              parameters used during the qualification test, the test results
              (tension, bend, macro-etch), and the qualified ranges derived
              from the test.
            </p>

            <p>
              Common documentation deficiencies found during audits include:
              WPS documents that reference parameters outside prequalified
              ranges while claiming prequalified status, missing PQR records
              for non-prequalified procedures, WPS documents that do not
              address all required essential variables, and qualification
              records that cannot demonstrate the connection between a specific
              PQR and the WPS it supports.
            </p>

            <h2 id="record-keeping-requirements">
              Record Keeping and Retention Requirements
            </h2>

            <p>
              AWS D1.1 requires that specific records be maintained for
              defined periods. Understanding these requirements is essential
              for compliance and audit readiness.
            </p>

            <p>
              <strong>Welder qualification records</strong> must be maintained
              for as long as the welder&apos;s qualifications remain active, plus a
              reasonable period after the welder leaves the organization or
              qualifications lapse. While the code does not specify an exact
              retention period for welder qualification records, most quality
              programs require retention for the life of the structure or a
              minimum of five years, whichever is greater.
            </p>

            <p>
              <strong>WPS and PQR records</strong> are permanent quality records
              that must be retained for the life of the structure. These
              documents may be needed years or decades after fabrication for
              repair, modification, or failure investigation purposes.
            </p>

            <p>
              <strong>Inspection records</strong> including visual inspection
              reports, NDT reports, and any corrective action documentation must
              be maintained as part of the project quality records. The
              retention period is typically defined by the contract documents
              and the fabricator&apos;s quality management system.
            </p>

            <p>
              <strong>Continuity records</strong> that document each welder&apos;s
              ongoing use of qualified processes are not explicitly required as
              separate documents by the code, but the burden of proof for
              continuity falls on the employer. Without systematic records
              showing that each welder has used each qualified process within
              every six-month window, demonstrating compliance with Clause
              4.1.2 during an audit becomes extremely difficult.
            </p>

            <h2 id="common-audit-findings">
              Common AWS D1.1 Audit Findings and How to Avoid Them
            </h2>

            <p>
              After reviewing hundreds of fabrication shop audits, certain
              findings appear consistently. Understanding these common
              deficiencies helps organizations proactively address them before
              an auditor arrives.
            </p>

            <p>
              <strong>Missing or incomplete continuity documentation:</strong>{" "}
              This is the single most frequent finding in AWS D1.1 audits. Shops
              can produce the original qualification test records but cannot
              demonstrate that the welder has maintained continuity for each
              process. Digital activity logging with automated continuity
              tracking eliminates this risk entirely.
            </p>

            <p>
              <strong>WPS parameters outside qualified ranges:</strong>{" "}
              Production welding is sometimes performed with parameters that
              exceed the ranges documented on the applicable WPS. This is
              particularly common with amperage and voltage settings, travel
              speed, and preheat temperature. Regular WPS compliance checks and
              welder training on the importance of staying within documented
              parameters help prevent this finding.
            </p>

            <p>
              <strong>Expired welder qualifications used for production:</strong>{" "}
              When qualifications are tracked manually (spreadsheets, paper
              files), expirations can be missed, and welders may continue
              production welding on processes for which their qualification has
              lapsed. Automated expiration tracking with advance alerts
              prevents this situation.
            </p>

            <p>
              <strong>Incomplete inspection documentation:</strong> Visual
              inspection is required for every weld, but documentation of that
              inspection is sometimes inconsistent. Every inspected weld should
              have a corresponding inspection record that identifies the weld,
              the applicable WPS, the acceptance criteria applied, and the
              disposition (accept or reject with details).
            </p>

            <p>
              <strong>Improper welding consumable control:</strong> AWS D1.1
              requires that welding consumables be stored, handled, and used in
              accordance with the manufacturer&apos;s recommendations. Low-hydrogen
              electrodes (E70XX-H16, for example) have specific storage and
              reconditioning requirements. Failure to follow these requirements
              can result in hydrogen-related weld defects and audit findings.
            </p>

            <h2 id="digital-compliance-management">
              Managing AWS D1.1 Compliance Digitally
            </h2>

            <p>
              The volume and complexity of AWS D1.1 compliance documentation
              makes manual management impractical for any shop with more than a
              handful of welders. Digital compliance management platforms
              address the core challenges by centralizing records, automating
              tracking, and providing audit-ready reporting.
            </p>

            <p>
              A well-implemented digital system should cover the entire
              compliance lifecycle: WPS/PQR creation and management, welder
              qualification testing and record-keeping, daily activity logging
              for continuity verification, expiration monitoring with automated
              alerts, inspection documentation and acceptance criteria
              tracking, and audit report generation.
            </p>

            <p>
              The key advantage of digital management is proactive compliance.
              Instead of discovering problems during an audit, the system
              continuously monitors compliance status and alerts responsible
              personnel to issues before they become findings. A dashboard view
              showing the real-time compliance status of every welder, every
              WPS, and every active project transforms compliance from a
              reactive burden into a managed process.
            </p>

            <p>
              For organizations pursuing or maintaining AISC certification,
              digital compliance management is particularly valuable. The AISC
              certification program requires demonstrated compliance with AWS
              D1.1 (among other standards), and the audit process is rigorous.
              Having organized, complete, instantly accessible records
              significantly reduces audit preparation time and the risk of
              findings.
            </p>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Simplify Your AWS D1.1 Compliance
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                WeldCert automates qualification tracking, continuity
                monitoring, and audit reporting so you can focus on fabrication
                instead of paperwork.
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
              <h2 className="text-xl font-bold text-navy mb-6">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/blog/aws-d1-1-welder-qualification-requirements"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">
                    Compliance
                  </span>
                  <h3 className="font-semibold text-navy mt-1">
                    Complete Guide to AWS D1.1 Welder Qualification Requirements
                  </h3>
                </Link>
                <Link
                  href="/blog/daily-welder-activity-logging"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">
                    Activity
                  </span>
                  <h3 className="font-semibold text-navy mt-1">
                    Daily Welder Activity Logging: What AWS D1.1 Actually
                    Requires
                  </h3>
                </Link>
                <Link
                  href="/blog/prequalified-welding-procedures-aws-d1-1"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">
                    Compliance
                  </span>
                  <h3 className="font-semibold text-navy mt-1">
                    Prequalified Welding Procedures Under AWS D1.1
                  </h3>
                </Link>
                <Link
                  href="/blog/structural-welding-inspection-checklist-2026"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">
                    Compliance
                  </span>
                  <h3 className="font-semibold text-navy mt-1">
                    Structural Welding Inspection Checklist for 2026
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="not-prose max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="aws-d1-1-compliance-complete-guide" />
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </>
  );
}
