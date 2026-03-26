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
  title: "Welding Procedure Specification (WPS) Guide: How to Write One",
  description:
    "A step-by-step guide to writing a compliant Welding Procedure Specification. Covers required fields, essential variables, prequalified vs qualified WPS, PQR support, and common mistakes that invalidate your procedures.",
  alternates: { canonical: "/blog/welding-procedure-specification-guide" },
};

export default function WeldingProcedureSpecificationGuidePage() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Welding Procedure Specification (WPS) Guide: How to Write One",
  "description": "A step-by-step guide to writing a compliant Welding Procedure Specification. Covers required fields, essential variables, prequalified vs qualified WPS, PQR support, and common mistakes that invalidate your procedures.",
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-01",
  "author": {
    "@type": "Organization",
    "name": "WeldCert",
    "url": "https://weldcert.io"
  },
  "publisher": {
    "@type": "Organization",
    "name": "WeldCert",
    "url": "https://weldcert.io"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://weldcert.io/blog/welding-procedure-specification-guide"
  }
};

  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://weldcert.io"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://weldcert.io/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Welding Procedure Specification (WPS) Guide: How to Write One",
      "item": "https://weldcert.io/blog/welding-procedure-specification-guide"
    }
  ]
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                Standards
              </span>
              <span className="text-xs text-gray-400">March 1, 2026</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <AuthorByline slug="weldcert-team" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Welding Procedure Specification (WPS) Guide: How to Write One
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A step-by-step guide to writing a compliant Welding Procedure Specification.
              Covers required fields, essential variables, prequalified vs qualified WPS,
              PQR support, and common mistakes that invalidate your procedures.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>
            <p>
              The Welding Procedure Specification is the central document in any welding
              quality program. It tells the welder exactly how to make a joint: what
              process to use, what filler metal, what electrical parameters, what preheat
              and interpass temperatures, and every other variable that affects weld
              quality. Without a properly written and qualified WPS, there is no basis
              for welder qualification, no standard for inspection acceptance, and no
              defensible quality program.
            </p>
            <p>
              Yet many organizations struggle with WPS development. They use outdated
              templates, omit required fields, fail to properly support the WPS with a
              Procedure Qualification Record (PQR), or write procedures so broad that
              they provide no meaningful guidance to the welder. This guide walks through
              the WPS development process step by step, covering both AWS D1.1 prequalified
              WPS and ASME Section IX qualified WPS, with practical advice on avoiding
              the common mistakes that lead to audit findings and rejected procedures.
            </p>

            <h2>What Is a WPS and Why Does It Matter?</h2>
            <p>
              A Welding Procedure Specification is a written document that provides
              direction to the welder or welding operator for making production welds
              in accordance with code requirements. AWS D1.1 Clause 3.6 defines the WPS
              as a document providing the required welding variables for a specific
              application. ASME Section IX QW-100.1 defines it as a written qualified
              welding procedure prepared to provide direction for making production welds
              to code requirements.
            </p>
            <p>
              The WPS serves multiple critical functions in the fabrication process. For
              the welder, it provides clear instructions on how to make the weld. For the
              inspector, it defines the parameters against which the welding is evaluated.
              For the quality program, it demonstrates that the organization has developed,
              qualified (where required), and documented its welding procedures. For
              regulatory compliance, it provides the auditable evidence that welding is
              performed to a controlled, repeatable process.
            </p>
            <p>
              Every fabrication code requires WPS. AWS D1.1 requires written WPS for all
              structural steel welding (Clause 3.6). ASME Section IX requires written
              WPS qualified by PQR for all pressure equipment welding. API 1104 requires
              written welding procedures for all pipeline welding (Section 5). Working
              without a WPS, or working to a WPS that does not comply with the applicable
              code, is a fundamental code violation that can result in rejected work,
              audit non-conformances, and regulatory action.
            </p>

            <h2>Prequalified WPS vs. Qualified WPS</h2>
            <p>
              AWS D1.1 offers a unique provision not found in most other codes: the
              prequalified WPS. Understanding the distinction between prequalified and
              qualified WPS is essential for organizations working to AWS D1.1, because
              it determines whether procedure qualification testing (PQR) is required.
            </p>
            <h3>Prequalified WPS (AWS D1.1 Clause 3.2)</h3>
            <p>
              A prequalified WPS is one that uses specific combinations of welding process,
              base metal, filler metal, joint type, and welding parameters that AWS has
              determined through extensive experience to produce sound welds when properly
              applied. These combinations are defined in AWS D1.1 Tables 3.1 through 3.8
              and the prequalified joint details in Figures 3.3 and 3.4. When all conditions
              for prequalification are met, no PQR is required &mdash; the AWS committee&apos;s
              collective experience serves as the qualification basis.
            </p>
            <p>
              The conditions that must be met for a WPS to be prequalified are specific
              and restrictive. Not all processes are prequalified: only SMAW, SAW, GMAW
              (excluding short-circuit transfer for CJP groove welds), and FCAW are
              eligible. Not all base metals are prequalified: only the steels listed in
              AWS D1.1 Table 3.1 (Group I, II, III, and IV steels). Not all joint types
              are prequalified: only the specific joint details shown in Figures 3.3 and
              3.4 with the dimensional limits specified. And not all parameter ranges are
              prequalified: the WPS must specify parameters within the ranges allowed by
              the prequalified tables.
            </p>
            <h3>Qualified WPS (AWS D1.1 Clause 4.8, ASME Section IX QW-200)</h3>
            <p>
              When any condition falls outside the prequalified envelope &mdash; a different
              process, a non-prequalified steel, a non-standard joint detail, or parameters
              outside the prequalified ranges &mdash; the WPS must be qualified by testing.
              This requires welding a test coupon per the WPS, examining it by NDT and
              destructive testing, and documenting the results on a Procedure Qualification
              Record (PQR). The PQR then supports the WPS and must be maintained as a
              permanent quality record.
            </p>
            <p>
              ASME Section IX does not have a prequalified WPS concept. Every WPS used for
              ASME code work must be qualified by at least one PQR. The PQR documents the
              actual welding variables used during the test and the results of the required
              mechanical tests (tensile, guided bend, and impact when required by the
              construction code). The WPS may specify ranges for variables, but those ranges
              must be supported by the PQR data plus the allowable ranges defined by the
              essential variable tables in QW-250 through QW-265.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Feature</th>
                    <th className="px-5 py-3 font-semibold">Prequalified WPS (AWS D1.1)</th>
                    <th className="px-5 py-3 font-semibold">Qualified WPS (AWS D1.1)</th>
                    <th className="px-5 py-3 font-semibold">Qualified WPS (ASME IX)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">PQR required?</td>
                    <td className="px-5 py-3">No</td>
                    <td className="px-5 py-3">Yes</td>
                    <td className="px-5 py-3">Yes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Processes allowed</td>
                    <td className="px-5 py-3">SMAW, SAW, GMAW (spray/globular), FCAW</td>
                    <td className="px-5 py-3">Any process</td>
                    <td className="px-5 py-3">Any process</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Base metals</td>
                    <td className="px-5 py-3">Table 3.1 Group I-IV only</td>
                    <td className="px-5 py-3">Any metal</td>
                    <td className="px-5 py-3">Any P-number metal</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Joint details</td>
                    <td className="px-5 py-3">Figures 3.3 and 3.4 only</td>
                    <td className="px-5 py-3">Any joint</td>
                    <td className="px-5 py-3">Any joint</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Mechanical testing</td>
                    <td className="px-5 py-3">Not required</td>
                    <td className="px-5 py-3">Tensile, bend, macro (per Clause 4)</td>
                    <td className="px-5 py-3">Tensile, bend, impact (per construction code)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Cost to develop</td>
                    <td className="px-5 py-3">Low (documentation only)</td>
                    <td className="px-5 py-3">Medium (test coupon + testing)</td>
                    <td className="px-5 py-3">Medium-High (test coupon + testing + impact testing)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Required WPS Content and Format</h2>
            <p>
              Whether prequalified or qualified, every WPS must contain specific information
              defined by the applicable code. AWS D1.1 Clause 3.6 and ASME Section IX QW-200
              define the minimum content requirements. A WPS that omits required information
              is non-compliant and may be rejected during an audit or third-party review.
            </p>
            <h3>Identification and Administrative Fields</h3>
            <p>
              Every WPS must include a unique WPS number, a revision number and date, the
              applicable code and edition, the supporting PQR number(s) (for qualified WPS),
              the authorized signature (typically the welding engineer or responsible
              engineer), and the date of authorization. These administrative fields establish
              document control and traceability. The WPS number should follow a consistent
              naming convention that facilitates identification &mdash; for example,
              &quot;WPS-SMAW-001-R2&quot; immediately communicates the process and revision level.
            </p>
            <h3>Joint Design</h3>
            <p>
              The WPS must define the joint type (butt, T, corner, lap, edge), the groove
              type (V, bevel, U, J, square), the groove dimensions (groove angle, root
              face, root opening), the weld type (CJP, PJP, fillet), and the backing
              details (backing type, material, or no backing). A joint detail drawing
              on the WPS is strongly recommended, showing all dimensional parameters.
              For prequalified AWS D1.1 WPS, the joint detail must match one of the
              prequalified joint configurations in Figures 3.3 or 3.4 including all
              dimensional tolerances.
            </p>
            <h3>Base Metal</h3>
            <p>
              Specify the base metal by its standard designation (ASTM A36, ASTM A572 Gr. 50,
              etc.), the P-number group (for ASME Section IX), the Group number (for AWS D1.1
              prequalified WPS), and the thickness range. For ASME Section IX, the thickness
              range is determined by the PQR test coupon thickness and the essential variable
              rules in QW-403. For AWS D1.1 prequalified WPS, the thickness range is defined
              by the prequalified joint details.
            </p>
            <h3>Filler Metal</h3>
            <p>
              The WPS must specify the filler metal by its AWS classification (e.g., E7018
              for SMAW, ER70S-6 for GMAW, E71T-1C for FCAW), the F-number (ASME IX filler
              metal grouping), the A-number (ASME IX weld metal chemical analysis grouping),
              and the electrode diameter or wire size. For processes that use shielding gas,
              the gas type and composition must be specified (e.g., 75% Ar / 25% CO2 for
              GMAW, 100% CO2 for FCAW-G). For SAW, the flux classification and manufacturer
              must be specified.
            </p>
            <h3>Electrical Parameters</h3>
            <p>
              The WPS must define the welding current type (AC or DC), the polarity (DCEP
              or DCEN), the amperage range for each electrode size or pass, the voltage
              range, and the travel speed range (or heat input range). For pulsed GMAW,
              additional parameters such as peak current, background current, pulse
              frequency, and pulse width may be required. The parameter ranges should be
              wide enough to allow the welder reasonable flexibility but narrow enough to
              ensure the weld properties remain within acceptable limits.
            </p>
            <h3>Preheat and Interpass Temperature</h3>
            <p>
              The WPS must specify the minimum preheat temperature and the maximum interpass
              temperature. For AWS D1.1, minimum preheat is determined by Table 3.3 based
              on the base metal group, thickness, and welding process. For ASME Section IX,
              preheat is a supplementary essential variable (QW-406) that must be within
              the range qualified by the PQR when impact testing is required by the
              construction code. The preheat temperature measurement method and location
              should also be specified (e.g., &quot;Measure by contact pyrometer on the face
              of the plate, 3 inches from the joint edge&quot;).
            </p>
            <h3>Post-Weld Heat Treatment (PWHT)</h3>
            <p>
              If PWHT is required by the applicable construction code (ASME Section VIII
              UCS-56, ASME B31.3, or the project specification), the WPS must specify the
              PWHT temperature range, holding time, heating and cooling rates, and the
              method of temperature monitoring (thermocouples, chart recorder). PWHT is
              an essential variable in ASME Section IX (QW-407), meaning that adding or
              deleting PWHT or changing the temperature range requires a new PQR.
            </p>
            <h3>Welding Technique</h3>
            <p>
              The WPS should provide clear direction on welding technique, including stringer
              beads vs. weave beads (and maximum weave width if weaving is allowed),
              number of passes (single-pass vs. multi-pass), cleaning method between passes
              (grinding, wire brushing, chipping), peening requirements (if any), back
              gouging requirements (method, depth), and electrode oscillation parameters
              for mechanized welding.
            </p>

            <h2>Essential Variables: What Triggers a New WPS?</h2>
            <p>
              Essential variables are the welding parameters that, when changed beyond
              certain limits, require a new procedure qualification (new PQR and WPS) or
              revision of an existing WPS. Understanding essential variables is critical
              because a change in an essential variable without proper requalification
              invalidates the WPS and every weld made under it.
            </p>
            <h3>ASME Section IX Essential Variables (QW-250 Series)</h3>
            <p>
              ASME Section IX categorizes variables into three types: essential variables,
              supplementary essential variables, and non-essential variables. Essential
              variables are those that, if changed, affect the mechanical properties of the
              joint and require a new PQR. Supplementary essential variables become essential
              only when impact testing is required by the construction code. Non-essential
              variables may be changed on the WPS without requalification.
            </p>
            <p>
              The essential variables are defined for each welding process in tables QW-252
              through QW-265. For SMAW (QW-253), key essential variables include a change
              in P-number or Group number of the base metal, a change in F-number of the
              filler metal, a change in A-number of the weld metal deposit, an increase
              in thickness beyond the qualified range, the addition or deletion of PWHT,
              and a change in groove type or the deletion of backing. For GMAW (QW-255),
              essential variables also include a change in shielding gas type or composition
              and a change in transfer mode (spray, globular, short-circuit, pulsed).
            </p>
            <h3>AWS D1.1 Essential Variables (Table 4.5)</h3>
            <p>
              For qualified (non-prequalified) AWS D1.1 WPS, the essential variables are
              defined in Table 4.5. These are similar to but not identical to the ASME
              Section IX essential variables. Key differences include AWS D1.1&apos;s use of
              base metal Group numbers (Table 3.1) instead of ASME P-numbers, different
              thickness qualification ranges, and different rules for filler metal
              substitution. For prequalified WPS, the &quot;essential variables&quot; are effectively
              the prequalification conditions &mdash; if any condition falls outside the
              prequalified envelope, the WPS can no longer be prequalified and must be
              qualified by PQR.
            </p>
            <h3>API 1104 Essential Variables (Section 5.4)</h3>
            <p>
              API 1104 defines essential variables in Section 5.4. Changes in essential
              variables require requalification of the procedure. Key essential variables
              include the welding process, base material (wall thickness group, specified
              minimum yield strength, pipe diameter group), filler metal classification,
              joint design, position, direction of welding, shielding gas and flow rate,
              electrical characteristics, and preheat. API 1104 is generally more
              restrictive than ASME Section IX regarding essential variable ranges,
              reflecting the critical nature of pipeline welds.
            </p>

            <h2>Common WPS Mistakes That Cause Audit Findings</h2>
            <p>
              After reviewing thousands of WPS documents across multiple industries, certain
              common mistakes appear repeatedly. These errors range from simple omissions to
              fundamental misunderstandings of code requirements, and all of them can result
              in audit non-conformances, rejected procedures, or invalidated welder
              qualifications.
            </p>
            <ul>
              <li>
                <strong>Incomplete parameter ranges:</strong> Specifying amperage but
                omitting voltage or travel speed. All three parameters are required for
                a complete WPS. Without all three, heat input cannot be calculated or
                verified.
              </li>
              <li>
                <strong>PQR does not support the WPS ranges:</strong> The WPS specifies
                a wider range of variables than the PQR test supports. For example, a WPS
                that allows 1/4-inch to 2-inch thickness range but the PQR was tested on
                3/4-inch plate, which only qualifies 3/16-inch to 1-1/2-inch per ASME IX
                QW-451.
              </li>
              <li>
                <strong>Using a prequalified WPS outside prequalification limits:</strong> The
                most common example is using GMAW short-circuit transfer for a CJP groove
                weld and claiming prequalified status. AWS D1.1 excludes GMAW-S from
                prequalification for CJP groove welds because short-circuit transfer has
                a higher risk of incomplete fusion.
              </li>
              <li>
                <strong>Missing or incorrect preheat requirements:</strong> Failing to
                specify preheat per AWS D1.1 Table 3.3 or specifying a preheat temperature
                below the code minimum for the material group and thickness.
              </li>
              <li>
                <strong>No revision control:</strong> Using a WPS without a revision number
                or date, making it impossible to determine whether the current version is
                being used in production. When a WPS is revised, all previous revisions
                should be clearly marked as superseded.
              </li>
              <li>
                <strong>Missing signatures:</strong> A WPS without an authorized signature
                is an unofficial document that has not been reviewed and approved by the
                responsible engineer. Most codes require the signature of a qualified
                individual (typically a welding engineer or CWI) to authorize a WPS for
                production use.
              </li>
              <li>
                <strong>Filler metal classification errors:</strong> Specifying the wrong
                AWS classification, mixing up the electrode/wire classification with the
                deposited weld metal classification, or specifying a filler metal that
                does not match the F-number or A-number of the PQR.
              </li>
              <li>
                <strong>Omitting PWHT when required:</strong> Failing to include PWHT
                requirements when the construction code mandates PWHT based on material
                type, thickness, or service conditions.
              </li>
            </ul>

            <h2>WPS Revision Control and Digital Management</h2>
            <p>
              WPS revision control is a critical but often neglected aspect of welding
              quality management. In a typical fabrication shop, dozens of WPS documents
              may be active simultaneously, covering different processes, materials, and
              joint types. Without effective revision control, outdated WPS copies can
              remain in circulation, leading to welding that does not comply with current
              requirements.
            </p>
            <h3>Revision Control Requirements</h3>
            <p>
              Every WPS should have a unique document number, a revision identifier (number
              or letter) that increments with each change, the date of each revision, a
              description of what changed in each revision, and the signature of the person
              authorizing the revision. Maintain a master log of all WPS documents showing
              the current revision status and the superseded revision history. When a WPS
              is revised, actively retrieve and destroy or mark as &quot;SUPERSEDED&quot; all copies
              of the previous revision.
            </p>
            <h3>Distribution Control</h3>
            <p>
              Control how WPS documents are distributed to ensure that only current revisions
              are available at the point of use. For paper-based systems, use controlled
              copies with a distribution log that identifies who received each copy. When
              a revision is issued, the distribution log identifies who needs to exchange
              their old copy for the new one. For digital systems, a centralized document
              management platform can automatically ensure that only the current revision
              is accessible, with previous revisions archived for reference.
            </p>
            <h3>Digital WPS Management</h3>
            <p>
              Digital WPS management systems offer significant advantages over paper-based
              approaches. Key capabilities include centralized storage with role-based
              access control, automatic revision tracking with full audit trail, linkage
              between WPS and supporting PQR documents, integration with welder qualification
              records to verify that welders are qualified for the procedures they are
              assigned, searchable fields that allow quick retrieval of WPS by process,
              material, thickness, or other criteria, and mobile access that allows welders
              and inspectors to view the current WPS on tablets or smartphones at the
              point of use.
            </p>
            <p>
              The integration between WPS management and welder qualification tracking is
              particularly valuable. When a new weld is assigned, the system can
              automatically verify that the assigned welder is qualified for the WPS &mdash;
              checking process, position, material group, thickness range, and all other
              essential variables. This prevents the assignment of unqualified welders to
              production work, which is one of the most common and most consequential
              quality failures in welding fabrication.
            </p>

            <h2>How WPS Relates to Welder Qualification</h2>
            <p>
              The WPS and the Welder Performance Qualification (WPQ) are tightly linked
              documents. The WPQ demonstrates that a specific welder can produce sound
              welds using a specific WPS (or the parameters of a WPS). The WPQ is bounded
              by the essential variables defined in the code &mdash; AWS D1.1 Table 4.12
              for AWS work, ASME Section IX QW-350 series for ASME work &mdash; and those
              essential variables determine what WPS documents the welder is qualified
              to use in production.
            </p>
            <p>
              When a WPS is revised, the impact on welder qualifications must be assessed.
              If the revision changes a non-essential variable, existing welder qualifications
              remain valid. If the revision changes an essential variable, welders may need
              to requalify. For example, if a WPS is revised to change the base metal from
              P-No. 1 to P-No. 8 (carbon steel to stainless steel), all welders must
              requalify because the P-number is an essential variable for welder
              qualification under both AWS D1.1 and ASME Section IX.
            </p>
            <p>
              This relationship creates a web of dependencies: each WPS is supported by one
              or more PQRs, and each welder is qualified by one or more WPQs that reference
              the essential variables of the WPS. Changing any element in this chain can
              have ripple effects across the entire qualification program. A digital
              management system that maintains these linkages and flags potential impacts
              when changes are proposed is far more reliable than manual cross-referencing.
            </p>
            <p>
              When developing new WPS documents, consider the welder qualification
              implications from the start. If possible, design WPS parameters that align
              with existing welder qualifications to avoid unnecessary requalification
              testing. If new qualifications are needed, schedule the WPQ testing to
              coincide with the PQR testing to maximize efficiency &mdash; the same test
              coupon can sometimes satisfy both procedure and performance qualification
              requirements, depending on the code.
            </p>

            <h2>WPS Development Workflow: Step by Step</h2>
            <p>
              Developing a new WPS follows a logical sequence regardless of code. Following
              this workflow ensures that nothing is missed and that the WPS is properly
              supported before it is released for production use.
            </p>
            <h3>Step 1: Identify the Application Requirements</h3>
            <p>
              Before writing a single parameter on the WPS, gather the information that
              defines the application: the applicable code and edition, the base material
              specification and grade, the joint type and thickness range, the design
              conditions (temperature, pressure, loading), any post-weld heat treatment
              requirements, the required mechanical properties (tensile strength, impact
              toughness), and any supplementary requirements from the project specification
              or owner. This information determines whether a prequalified WPS is
              possible (for AWS D1.1 work) or whether procedure qualification testing
              is required.
            </p>
            <h3>Step 2: Select the Welding Process and Consumables</h3>
            <p>
              Choose the welding process based on the application, production requirements,
              position constraints, and the organization&apos;s existing equipment and welder
              qualifications. Select the filler metal classification that matches the base
              metal strength and meets any supplementary requirements (low hydrogen, impact
              toughness, corrosion resistance). For multi-process welds (e.g., GTAW root
              with SMAW fill), the WPS must address each process independently with
              appropriate parameters for each.
            </p>
            <h3>Step 3: Draft the WPS</h3>
            <p>
              Using a standardized WPS form (AWS provides sample forms in Annex N, ASME
              provides QW-482 and QW-483), fill in all required fields with the planned
              welding variables. For prequalified WPS, verify that every parameter falls
              within the prequalified limits. For qualified WPS, the draft parameters
              should be based on the organization&apos;s experience with similar joints and
              materials, as these parameters will be used for the qualification test coupon.
            </p>
            <h3>Step 4: Qualify the Procedure (If Required)</h3>
            <p>
              For qualified WPS, weld a test coupon following the draft WPS parameters.
              Record the actual welding parameters used during the test on the PQR form.
              Submit the test coupon for NDT (typically radiography) and destructive
              testing (tensile, guided bend, impact if required). If all test results
              meet the code acceptance criteria, the PQR is complete and supports the WPS.
              If any test fails, the procedure must be revised and retested.
            </p>
            <h3>Step 5: Finalize and Authorize</h3>
            <p>
              After the PQR is complete and accepted, finalize the WPS by adjusting
              parameter ranges as needed based on the PQR results and the essential
              variable rules. Ensure all required fields are complete, all information
              is consistent between the WPS and supporting PQR, and the document is
              properly formatted. The responsible engineer or designated authority reviews
              and signs the WPS to authorize it for production use. Assign the WPS a
              unique number and revision identifier, and enter it into the document
              control system.
            </p>
            <h3>Step 6: Distribute and Train</h3>
            <p>
              Distribute the finalized WPS to all personnel who need it: welders, welding
              supervisors, inspectors, and quality personnel. Conduct a briefing for
              welders who will use the new procedure, covering the key parameters, any
              special requirements, and the differences from previously used procedures.
              Verify that welders assigned to the new WPS are qualified for all essential
              variables before production welding begins.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">WPS Field</th>
                    <th className="px-5 py-3 font-semibold">AWS D1.1 Requirement</th>
                    <th className="px-5 py-3 font-semibold">ASME IX Requirement</th>
                    <th className="px-5 py-3 font-semibold">Common Mistake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Welding process</td>
                    <td className="px-5 py-3">Clause 3.6</td>
                    <td className="px-5 py-3">QW-200.1(a)</td>
                    <td className="px-5 py-3">Not specifying transfer mode for GMAW</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Base metal</td>
                    <td className="px-5 py-3">Group number per Table 3.1</td>
                    <td className="px-5 py-3">P-number per QW/QB-422</td>
                    <td className="px-5 py-3">Using trade name instead of specification</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Filler metal</td>
                    <td className="px-5 py-3">AWS classification</td>
                    <td className="px-5 py-3">F-number and A-number</td>
                    <td className="px-5 py-3">Brand name instead of classification</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Position</td>
                    <td className="px-5 py-3">Table 4.1 designations</td>
                    <td className="px-5 py-3">QW-461.3 through QW-461.6</td>
                    <td className="px-5 py-3">Omitting position entirely</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Electrical parameters</td>
                    <td className="px-5 py-3">Current, voltage, travel speed</td>
                    <td className="px-5 py-3">Current type, amperage range, voltage range</td>
                    <td className="px-5 py-3">Specifying single values instead of ranges</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Preheat</td>
                    <td className="px-5 py-3">Minimum per Table 3.3</td>
                    <td className="px-5 py-3">Per QW-406 (supplementary EV)</td>
                    <td className="px-5 py-3">Below code minimum for material/thickness</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">PWHT</td>
                    <td className="px-5 py-3">Per construction code if required</td>
                    <td className="px-5 py-3">QW-407 (essential variable)</td>
                    <td className="px-5 py-3">Omitting when required by UCS-56 or B31.3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Manage Your WPS Library with Confidence
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                WeldCert links every WPS to its supporting PQR and every welder to their
                qualified procedures. Revision control, distribution tracking, and
                qualification verification &mdash; all in one platform.
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
                  href="/blog/wps-pqr-documentation-guide"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Documentation</span>
                  <h3 className="font-semibold text-navy mt-1">
                    WPS and PQR Documentation Guide
                  </h3>
                </Link>
                <Link
                  href="/blog/prequalified-welding-procedures-aws-d1-1"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">AWS Standards</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Prequalified Welding Procedures Under AWS D1.1
                  </h3>
                </Link>
                <Link
                  href="/blog/asme-section-ix-essential-variables"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Standards</span>
                  <h3 className="font-semibold text-navy mt-1">
                    ASME Section IX Essential Variables Explained
                  </h3>
                </Link>
                <Link
                  href="/blog/welder-requalification-frequency-guide"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Qualification</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Welder Requalification Frequency Guide: When to Retest
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
          <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="welding-procedure-specification-guide" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}