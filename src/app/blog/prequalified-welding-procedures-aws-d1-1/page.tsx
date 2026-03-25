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
  title:
    "Prequalified Welding Procedures Under AWS D1.1: When You Can Skip PQR Testing",
  description:
    "Learn when AWS D1.1 prequalified WPS procedures eliminate the need for PQR testing. Covers Clause 3 requirements, joint details, essential variables, limitations, and common mistakes.",
  alternates: {
    canonical: "/blog/prequalified-welding-procedures-aws-d1-1",
  },
};

export default function PrequalifiedWeldingProceduresPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Prequalified Welding Procedures Under AWS D1.1: When You Can Skip PQR Testing",
    description:
      "Learn when AWS D1.1 prequalified WPS procedures eliminate the need for PQR testing. Covers Clause 3 requirements, joint details, essential variables, limitations, and common mistakes.",
    datePublished: "2026-03-25",
    dateModified: "2026-03-25",
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
      "@id":
        "https://weldcert.io/blog/prequalified-welding-procedures-aws-d1-1",
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
        name: "Prequalified Welding Procedures Under AWS D1.1",
        item: "https://weldcert.io/blog/prequalified-welding-procedures-aws-d1-1",
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
                Standards
              </span>
              <span className="text-xs text-gray-400">March 25, 2026</span>
              <span className="text-xs text-gray-400">12 min read</span>
            </div>
            <AuthorByline slug="nolan-terry" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Prequalified Welding Procedures Under AWS D1.1: When You Can Skip
              PQR Testing
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Prequalified WPS procedures can save your shop thousands of
              dollars and weeks of lead time by eliminating the need for
              procedure qualification records. But only if you stay within the
              boundaries that AWS D1.1 Clause 3 defines. Here is exactly when
              you can use them, when you cannot, and how to avoid the mistakes
              that silently invalidate your prequalification status.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose">
              <TableOfContents />
            </div>

            {/* ── Section 1: Introduction ── */}
            <h2>What Prequalification Actually Means Under AWS D1.1</h2>
            <p>
              Every welding procedure specification (WPS) used in structural
              steel fabrication must be qualified. Under AWS D1.1, there are two
              paths to qualification: testing (backed by a Procedure
              Qualification Record, or PQR) and prequalification (backed by
              strict compliance with Clause 3 and Clause 4 requirements).
            </p>
            <p>
              A prequalified WPS is one that uses specific combinations of
              welding processes, base metals, filler metals, joint
              configurations, and essential variables that AWS has already
              determined produce sound welds when executed correctly. The code
              committee established these parameters based on decades of
              testing data, field performance, and metallurgical analysis.
              Because this work has already been done, you do not need to
              perform your own qualification test coupons.
            </p>
            <p>
              The cost savings are significant. A single PQR test can cost
              $2,000 to $5,000 when you factor in material, welder time, NDE,
              destructive testing, and documentation. A fabrication shop running
              20 to 30 active WPS documents can save $40,000 to $150,000 by
              using prequalified procedures wherever permitted. More
              importantly, prequalification eliminates the 2 to 4 week lead
              time that PQR testing typically requires, keeping projects on
              schedule.
            </p>
            <p>
              But here is the critical caveat: prequalified status is not a
              shortcut. It is a rigid framework. Step outside any single
              boundary defined in the code and your WPS is no longer
              prequalified. It requires PQR testing or it is noncompliant.
              There is no gray area.
            </p>

            {/* ── Section 2: What Makes a WPS Prequalified ── */}
            <h2>What Makes a WPS Prequalified Under AWS D1.1</h2>
            <p>
              AWS D1.1 Clause 3.1 establishes the fundamental rule: a WPS is
              prequalified only when it conforms to all applicable requirements
              of Clauses 3 and 4. This means every variable on the WPS must
              fall within prequalified limits. Not most variables. All of them.
            </p>

            <h3>Clause 3 Requirements</h3>
            <p>
              Clause 3 defines the scope of prequalification. It establishes
              which welding processes, base metals, filler metals, and joint
              configurations have been pre-approved. The key reference tables
              are:
            </p>
            <ul>
              <li>
                <strong>Table 3.1:</strong> Prequalified base metals grouped by
                strength level and composition. Only base metals listed in this
                table (or their equivalents as noted) qualify for
                prequalification.
              </li>
              <li>
                <strong>Table 3.2:</strong> Filler metal requirements for each
                base metal group, establishing which electrode classifications
                are approved for prequalified use.
              </li>
              <li>
                <strong>Table 3.3:</strong> Minimum preheat and interpass
                temperature requirements, organized by base metal group and
                thickness.
              </li>
              <li>
                <strong>Table 3.4:</strong> WPS essential variable changes that
                require a new or revised prequalified WPS.
              </li>
            </ul>

            <h3>Approved Welding Processes</h3>
            <p>
              Only four welding processes are prequalified under AWS D1.1.
              This is one of the most commonly misunderstood limitations:
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Process</th>
                    <th className="px-5 py-3 font-semibold">
                      AWS Designation
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      Prequalified Status
                    </th>
                    <th className="px-5 py-3 font-semibold">Limitations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3">
                      Shielded Metal Arc Welding
                    </td>
                    <td className="px-5 py-3">SMAW</td>
                    <td className="px-5 py-3 text-green-700 font-medium">
                      Prequalified
                    </td>
                    <td className="px-5 py-3">
                      Limited to approved filler metals per Table 3.2
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Submerged Arc Welding</td>
                    <td className="px-5 py-3">SAW</td>
                    <td className="px-5 py-3 text-green-700 font-medium">
                      Prequalified
                    </td>
                    <td className="px-5 py-3">
                      Single and parallel electrode only; max 1/4" electrode
                      diameter
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">
                      Gas Metal Arc Welding
                    </td>
                    <td className="px-5 py-3">GMAW</td>
                    <td className="px-5 py-3 text-green-700 font-medium">
                      Prequalified
                    </td>
                    <td className="px-5 py-3">
                      Spray, globular, and pulsed transfer only; short-circuit
                      transfer limited per Clause 3.22.1
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">
                      Flux Cored Arc Welding
                    </td>
                    <td className="px-5 py-3">FCAW</td>
                    <td className="px-5 py-3 text-green-700 font-medium">
                      Prequalified
                    </td>
                    <td className="px-5 py-3">
                      Self-shielded and gas-shielded; electrode classification
                      must match Table 3.2
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">
                      Gas Tungsten Arc Welding
                    </td>
                    <td className="px-5 py-3">GTAW</td>
                    <td className="px-5 py-3 text-red-700 font-medium">
                      Not Prequalified
                    </td>
                    <td className="px-5 py-3">
                      Requires PQR testing unless used as root pass combined
                      with a prequalified process for fill/cap
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">
                      Electroslag Welding
                    </td>
                    <td className="px-5 py-3">ESW</td>
                    <td className="px-5 py-3 text-red-700 font-medium">
                      Not Prequalified
                    </td>
                    <td className="px-5 py-3">
                      Always requires PQR testing per Clause 4
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">
                      Electrogas Welding
                    </td>
                    <td className="px-5 py-3">EGW</td>
                    <td className="px-5 py-3 text-red-700 font-medium">
                      Not Prequalified
                    </td>
                    <td className="px-5 py-3">
                      Always requires PQR testing per Clause 4
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Notice that GMAW short-circuit transfer has significant
              restrictions. Clause 3.22.1 limits GMAW-S to materials 1/4" and
              thinner for prequalified status, and it cannot be used for CJP
              groove welds in the flat or horizontal position on material over
              1/8" thick without PQR testing. This catches many shops off guard.
            </p>

            {/* ── Section 3: Joint Details ── */}
            <h2>Prequalified Joint Details (Table 4.5)</h2>
            <p>
              AWS D1.1 Figures 3.2 through 3.4 and Table 4.5 define the
              prequalified joint configurations in precise detail. Every
              dimension matters: groove angle, root opening, root face, and
              backing requirements all have specific tolerances. Deviating
              from any single parameter disqualifies the joint from
              prequalification.
            </p>

            <h3>Complete Joint Penetration (CJP) Groove Welds</h3>
            <p>
              Prequalified CJP groove welds are available for butt joints,
              T-joints, and corner joints with specific configurations:
            </p>
            <ul>
              <li>
                <strong>Single-V groove (B-U2a):</strong> 60 degree included
                angle, 0 to 1/8" root opening, with steel backing. This is the
                most commonly used prequalified CJP joint.
              </li>
              <li>
                <strong>Double-V groove (B-U3):</strong> 60 degree included
                angle both sides, 0 to 1/8" root opening, backgouge to sound
                metal before welding second side.
              </li>
              <li>
                <strong>Single-bevel groove (TC-U4a):</strong> 45 degree bevel
                angle, used for T-joints and corner joints with backing.
              </li>
              <li>
                <strong>Single-U groove (B-U5):</strong> Available for thicker
                materials where groove angle reduction saves filler metal.
                Requires specific root radius and root face dimensions.
              </li>
            </ul>

            <h3>Partial Joint Penetration (PJP) Groove Welds</h3>
            <p>
              PJP groove welds have their own prequalified configurations in
              Figures 3.2 and 3.3. The effective throat (E) calculation varies
              by process and groove angle: for SMAW and FCAW with angles of
              60 degrees or more, E equals the groove depth (S). For angles
              between 45 and 60 degrees, E equals S minus 1/8". SAW has
              different effective throat calculations based on groove angle
              and electrode diameter.
            </p>

            <h3>Root Opening and Groove Angle Tolerances</h3>
            <p>
              Clause 3.12.3 defines fabrication tolerances that are tighter
              than many shops realize: root opening +1/16", -0" from nominal;
              groove angle +10 degrees, -5 degrees from nominal; root face
              +1/16", -0" from nominal. When root opening exceeds the
              tolerance, the Engineer must approve the deviation or the joint
              must be corrected before welding.
            </p>

            <h3>Backing Requirements</h3>
            <p>
              Many prequalified CJP joints require steel backing. When
              specified, backing must be continuous for the full weld length,
              thick enough to prevent melt-through (typically 3/8" minimum),
              and in intimate contact with both base metal members. Removal
              after welding is not required unless specified by the Engineer
              or contract documents.
            </p>

            {/* ── Section 4: Essential Variables ── */}
            <h2>Essential Variables for Prequalified WPS</h2>
            <p>
              Table 3.4 in AWS D1.1 defines the essential variables for
              prequalified WPS procedures. A change in any essential variable
              beyond the permitted range requires either a new prequalified WPS
              or PQR testing. Understanding these boundaries is critical to
              maintaining prequalified status.
            </p>

            <h3>Base Metal Groups (Table 3.1)</h3>
            <p>
              AWS D1.1 Table 3.1 organizes base metals into groups based on
              chemical composition and mechanical properties. Prequalified WPS
              procedures are limited to the base metals listed in this table:
            </p>
            <ul>
              <li>
                <strong>Group I:</strong> Carbon steels with yield strength up
                to 50 ksi (e.g., A36, A572 Gr. 50, A992)
              </li>
              <li>
                <strong>Group II:</strong> Higher-strength low-alloy steels
                with yield strength 50 to 65 ksi (e.g., A588, A852)
              </li>
              <li>
                <strong>Group III:</strong> Quenched and tempered steels with
                yield strength up to 100 ksi (e.g., A514, A517) with
                additional restrictions
              </li>
              <li>
                <strong>Group IV:</strong> Structural steel shapes and plates
                with specified atmospheric corrosion resistance
              </li>
            </ul>

            <h3>Filler Metal Requirements (Table 3.2)</h3>
            <p>
              Filler metals must match the base metal group per Table 3.2,
              based on minimum tensile strength compatibility. Undermatching
              is not permitted for prequalified CJP groove welds in tension.
              Overmatching by one strength level is generally acceptable but
              must be documented. Low-hydrogen designations (H16, H8, H4) are
              required for Group II and Group III base metals. Only electrode
              classifications listed in Table 3.2 are prequalified.
            </p>

            <h3>Preheat and Interpass Temperature (Table 3.3)</h3>
            <p>
              Table 3.3 specifies mandatory minimum preheat and interpass
              temperatures based on base metal group and thickness. For Group
              I: up to 3/4" requires 32 degrees F (no preheat above freezing),
              3/4" to 1-1/2" requires 150 degrees F, and 1-1/2" to 2-1/2"
              requires 225 degrees F. Group II and III base metals have
              progressively higher requirements, reaching 300 degrees F or
              more for thick sections.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Variable</th>
                    <th className="px-5 py-3 font-semibold">
                      Prequalified Range
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      Requires New PQR If...
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3">Welding Process</td>
                    <td className="px-5 py-3">
                      SMAW, SAW, GMAW, FCAW only
                    </td>
                    <td className="px-5 py-3">
                      Any process change (e.g., SMAW to FCAW) or addition of
                      non-prequalified process
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Base Metal</td>
                    <td className="px-5 py-3">
                      Listed in Table 3.1 only
                    </td>
                    <td className="px-5 py-3">
                      Any unlisted base metal or grade not in Table 3.1
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Filler Metal</td>
                    <td className="px-5 py-3">
                      Per Table 3.2 matching
                    </td>
                    <td className="px-5 py-3">
                      Change in F-number, A-number, or electrode classification
                      outside Table 3.2
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Preheat Temperature</td>
                    <td className="px-5 py-3">
                      Minimum per Table 3.3
                    </td>
                    <td className="px-5 py-3">
                      Reduction below Table 3.3 minimum for the applicable
                      thickness and group
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Groove Angle</td>
                    <td className="px-5 py-3">
                      Per joint detail figure (e.g., 60 deg for V-groove)
                    </td>
                    <td className="px-5 py-3">
                      Any angle outside the prequalified joint detail
                      tolerances
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Root Opening</td>
                    <td className="px-5 py-3">
                      Per joint detail figure (typical 0 to 1/8")
                    </td>
                    <td className="px-5 py-3">
                      Exceeding nominal +1/16" or reduction below nominal
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Electrical Parameters</td>
                    <td className="px-5 py-3">
                      Per manufacturer recommendation and Clause 3 limits
                    </td>
                    <td className="px-5 py-3">
                      Outside manufacturer range or exceeding heat input limits
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Shielding Gas</td>
                    <td className="px-5 py-3">
                      Per AWS A5 electrode specification
                    </td>
                    <td className="px-5 py-3">
                      Change in gas composition or flow rate outside spec
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── Section 5: Limitations and Exclusions ── */}
            <h2>Limitations and Exclusions</h2>
            <p>
              Understanding what cannot be prequalified is just as important
              as knowing what can be. AWS D1.1 explicitly excludes several
              scenarios from prequalification, and these exclusions are
              non-negotiable.
            </p>

            <h3>Excluded Welding Processes</h3>
            <p>
              ESW and EGW always require PQR testing due to their high heat
              input and single-pass characteristics. GTAW is not prequalified
              as a standalone process, though it may be used for root passes
              combined with a prequalified process for fill and cap (the GTAW
              portion still requires PQR). Any process not listed in Clause
              3 -- laser welding, friction stir welding, plasma arc welding --
              must always be qualified by testing.
            </p>

            <h3>Excluded Base Metals</h3>
            <p>
              Base metals not listed in Table 3.1 cannot be used in
              prequalified WPS procedures. This includes stainless steels
              (governed by AWS D1.6), aluminum alloys (AWS D1.2),
              high-strength steels exceeding 100 ksi yield, proprietary
              grades not referenced in Table 3.1, and dissimilar base metal
              combinations not addressed in the table notes.
            </p>

            <h3>Excluded Joint Configurations</h3>
            <p>
              T-joints where the dihedral angle between members is less than
              60 degrees require PQR testing. Any groove configuration not
              depicted in Figures 3.2, 3.3, or 3.4 requires qualification by
              testing, as do groove angles less than the minimums shown in
              the prequalified joint details.
            </p>

            <h3>CVN Toughness Requirements</h3>
            <p>
              When contract documents specify Charpy V-notch (CVN) impact
              testing requirements, the WPS cannot be prequalified. Clause
              3.5 states that prequalified WPS procedures are not permitted
              when CVN testing of the weld metal or heat-affected zone is
              required. This catches many bridge and seismic fabricators who
              must meet AASHTO or AISC 341 toughness requirements. In those
              cases, PQR testing with actual CVN specimens is mandatory.
            </p>

            <h3>Short-Circuit Transfer Limitations</h3>
            <p>
              GMAW short-circuit transfer (GMAW-S) has severe prequalification
              restrictions per Clause 3.22.1: limited to 1/4" and under base
              metal thickness, cannot be used for CJP groove welds on material
              thicker than 1/8" in flat or horizontal positions, and must use
              the specific shielding gas and parameters recommended by the
              electrode manufacturer.
            </p>

            {/* ── Section 6: Common Mistakes ── */}
            <h2>Common Mistakes That Invalidate Prequalification</h2>
            <p>
              After reviewing hundreds of WPS documents across dozens of
              fabrication shops, these are the errors that most frequently
              invalidate prequalified status without the shop realizing it.
              Every one of these mistakes means the WPS requires PQR testing
              that has never been performed.
            </p>

            <h3>Wrong Groove Angle</h3>
            <p>
              The single most common mistake is specifying a groove angle that
              does not match the prequalified joint detail. A shop drawing
              calls for a 45-degree V-groove to reduce filler metal volume,
              but the prequalified detail for that joint type requires 60
              degrees. The WPS is written with the 45-degree angle, and nobody
              catches it because the weld still looks fine. But the WPS is not
              prequalified, and every weld made to that WPS is technically
              noncompliant.
            </p>

            <h3>Exceeding Root Opening Tolerances</h3>
            <p>
              Fitup variations in the shop frequently push root openings
              beyond prequalified limits. The nominal root opening might be
              1/8", with a tolerance of +1/16". When a fitter opens the gap
              to 1/4" to accommodate a misalignment, the joint is outside
              prequalified limits. Rather than correcting the fitup, many
              shops simply weld it and accept whatever they get. This
              invalidates the prequalification.
            </p>

            <h3>Mismatched Filler Metals</h3>
            <p>
              Using filler metals not listed in Table 3.2 for the applicable
              base metal group is surprisingly common: E7018 on Group III
              Q&T steel when E11018 is required, non-low-hydrogen electrodes
              on Group II base metals, substituting FCAW electrode
              classifications because the preferred brand is out of stock, or
              using a filler metal that matches strength but is not
              specifically listed in Table 3.2.
            </p>

            <h3>Using Unlisted Base Metals</h3>
            <p>
              Occasionally a project specifies a steel grade that is not in
              Table 3.1, such as a proprietary high-performance steel or an
              imported grade with a foreign designation. The shop writes a
              prequalified WPS assuming the properties are equivalent.
              Without explicit listing in Table 3.1 or a formal equivalency
              determination per the code's provisions, the WPS is not
              prequalified.
            </p>

            <h3>Ignoring Preheat Requirements</h3>
            <p>
              Table 3.3 preheat requirements are mandatory for prequalified
              WPS procedures. Many shops assume A36 never needs preheat, but
              Table 3.3 requires 150 degrees F above 3/4" thickness. Other
              common failures include omitting preheat from the WPS entirely,
              specifying temperatures below the Table 3.3 minimum, and not
              maintaining interpass temperature during production.
            </p>

            <h3>Omitting Essential Information on the WPS</h3>
            <p>
              A prequalified WPS must still be a complete, written WPS per
              Clause 3.6. Missing fields do not just create documentation
              gaps; they invalidate the prequalified status. Common omissions
              include joint detail references, shielding gas composition and
              flow rate, electrode diameter ranges, and travel speed ranges.
            </p>

            {/* ── Section 7: Prequalified vs Testing ── */}
            <h2>Prequalified vs Qualification by Testing</h2>
            <p>
              The decision between prequalified WPS and PQR-backed WPS comes
              down to whether your specific combination of variables falls
              within the prequalified envelope. When it does, prequalification
              saves substantial time and money. When it does not, PQR testing
              is the only path forward.
            </p>

            <h3>Cost Comparison</h3>
            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Cost Factor</th>
                    <th className="px-5 py-3 font-semibold">
                      Prequalified WPS
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      PQR-Backed WPS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3">Test Coupon Material</td>
                    <td className="px-5 py-3">$0</td>
                    <td className="px-5 py-3">$200 - $500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Welder Labor (Test Welding)</td>
                    <td className="px-5 py-3">$0</td>
                    <td className="px-5 py-3">$300 - $600</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">NDE Testing (RT or UT)</td>
                    <td className="px-5 py-3">$0</td>
                    <td className="px-5 py-3">$400 - $800</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Destructive Testing (Bends, Macro)</td>
                    <td className="px-5 py-3">$0</td>
                    <td className="px-5 py-3">$500 - $1,200</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">CVN Testing (if required)</td>
                    <td className="px-5 py-3">N/A (not permitted)</td>
                    <td className="px-5 py-3">$600 - $1,500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Engineering/Documentation Time</td>
                    <td className="px-5 py-3">2 - 4 hours</td>
                    <td className="px-5 py-3">8 - 16 hours</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Lead Time</td>
                    <td className="px-5 py-3">1 - 2 days</td>
                    <td className="px-5 py-3">2 - 4 weeks</td>
                  </tr>
                  <tr className="bg-gray-50 font-semibold">
                    <td className="px-5 py-3">Total Estimated Cost</td>
                    <td className="px-5 py-3 text-green-700">
                      $100 - $300
                    </td>
                    <td className="px-5 py-3 text-red-700">
                      $2,000 - $5,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>When PQR Testing Is Mandatory</h3>
            <p>
              Regardless of cost, PQR testing is required when: the welding
              process is not SMAW, SAW, GMAW, or FCAW; the base metal is not
              in Table 3.1; the joint does not match Figures 3.2 through 3.4;
              CVN toughness testing is specified; essential variables exceed
              prequalified limits; GMAW-S is used beyond Clause 3.22.1
              limits; or the Engineer requires qualification by testing.
            </p>

            <h3>Time Savings Analysis</h3>
            <p>
              A typical PQR cycle takes 2 to 4 weeks: material procurement
              (3-5 days), test welding (1 day), NDE and destructive testing
              (5-10 days), documentation (2-3 days), plus revision cycles if
              testing fails. A prequalified WPS can be written, reviewed, and
              approved within one to two business days.
            </p>

            {/* ── Section 8: Writing a Compliant WPS ── */}
            <h2>Writing a Compliant Prequalified WPS</h2>
            <p>
              A prequalified WPS must contain all the information required by
              Clause 3.6 and must reference the specific prequalified joint
              details from which its parameters are derived. Here is the
              step-by-step process.
            </p>

            <h3>Step 1: Verify Prequalification Eligibility</h3>
            <p>
              Before writing a single line on the WPS form, confirm that every
              variable falls within the prequalified envelope: the welding
              process is SMAW, SAW, GMAW, or FCAW; the base metal is in Table
              3.1; the filler metal matches per Table 3.2; the joint matches a
              prequalified detail in Figures 3.2 through 3.4; and no CVN
              testing is required by contract documents.
            </p>

            <h3>Step 2: Select the Joint Detail</h3>
            <p>
              Identify the exact prequalified joint detail designation (e.g.,
              B-U2a, TC-U4a) and record it on the WPS. Copy the exact
              dimensions from the figure: groove angle, root opening, root
              face, and backing requirements. Do not modify these dimensions;
              the WPS must match the prequalified detail exactly.
            </p>

            <h3>Step 3: Document All Essential Variables</h3>
            <p>
              Complete every field on the WPS form per Clause 3.6. Required
              fields include: WPS identification number and revision,
              welding process designation, joint detail reference with sketch,
              base metal specification and grade, filler metal AWS
              classification and diameter range, shielding gas composition and
              flow rate (GMAW/FCAW-G), electrical parameters (current type,
              polarity, amperage and voltage ranges), travel speed range,
              preheat and interpass temperature per Table 3.3, welding
              position(s), single or multi-pass designation, and PWHT if
              applicable.
            </p>

            <h3>Step 4: Review and Approval</h3>
            <p>
              The completed WPS must be reviewed and approved by the
              responsible welding engineer. The reviewer should verify all
              variables fall within prequalified limits, the joint detail
              reference matches the application, filler metal and base metal
              are compatible per Table 3.2, preheat meets Table 3.3 for the
              maximum thickness involved, and the WPS is clearly marked
              "Prequalified" per Clause 3.6.
            </p>

            <h3>Step 5: Control and Distribution</h3>
            <p>
              Prequalified WPS procedures must be controlled documents with
              current revisions available at point of use, obsolete revisions
              removed from circulation, welders and supervisors with access to
              the applicable WPS, and a master list of all active procedures
              maintained.
            </p>

            <h3>Common Format Issues</h3>
            <p>
              Even when the technical content is correct, format issues create
              audit problems: no "Prequalified" designation on the WPS form,
              missing revision dates, amperage and voltage listed as single
              values instead of ranges, joint detail sketches that do not
              match the referenced prequalified figure, and incomplete
              welding sequence information for multi-pass welds.
            </p>

            {/* ── Section 9: Digital WPS Management ── */}
            <h2>
              How Digital WPS Management Prevents Prequalification Errors
            </h2>
            <p>
              The most dangerous prequalification errors are the ones nobody
              catches until an auditor or inspector reviews the WPS library.
              By that point, production welds have already been made under
              procedures that are technically noncompliant. The rework costs
              and schedule impacts can be severe.
            </p>
            <p>
              Digital WPS management systems address this risk by building
              validation rules into the WPS creation process. When a welding
              engineer designates a WPS as prequalified, the system
              automatically verifies the process is one of the four
              prequalified processes, the base metal is in Table 3.1, filler
              metals match per Table 3.2, preheat meets Table 3.3 minimums,
              joint detail parameters fall within prequalified limits, and all
              required Clause 3.6 fields are completed.
            </p>
            <p>
              Beyond creation-time validation, digital systems maintain version
              control, track which WPS procedures are active on which
              projects, and link WPS documents to welder qualifications. When
              a WPS is revised, the system can flag affected projects and
              welders. When a welder is assigned to a joint, the system can
              verify the welder is qualified for the WPS that applies to that
              joint.
            </p>
            <p>
              This kind of integrated tracking is what separates shops that
              find compliance problems during internal reviews from shops that
              find them during third-party audits.
            </p>

            {/* ── Section 10: Key Takeaways ── */}
            <h2>Key Takeaways</h2>
            <ul>
              <li>
                Prequalified WPS procedures under AWS D1.1 eliminate the need
                for PQR testing, saving $2,000 to $5,000 per procedure and
                weeks of lead time, but only when every variable falls within
                the strict limits of Clause 3.
              </li>
              <li>
                Only four welding processes are prequalified: SMAW, SAW, GMAW,
                and FCAW. GTAW, ESW, EGW, and all other processes always
                require PQR testing.
              </li>
              <li>
                Base metals must be listed in Table 3.1, filler metals must
                match per Table 3.2, and preheat temperatures must meet Table
                3.3 minimums. Deviation from any of these tables invalidates
                prequalification.
              </li>
              <li>
                Joint configurations must exactly match the prequalified
                details in Figures 3.2 through 3.4, including groove angle,
                root opening, root face, and backing requirements.
              </li>
              <li>
                CVN toughness requirements, unlisted base metals, non-standard
                joint geometries, and GMAW short-circuit transfer beyond
                Clause 3.22.1 limits all require PQR testing regardless of
                other variables.
              </li>
              <li>
                The most common errors that invalidate prequalification are
                wrong groove angles, excessive root openings, mismatched filler
                metals, missing preheat documentation, and incomplete WPS
                forms.
              </li>
              <li>
                Digital WPS management systems with built-in validation rules
                catch prequalification errors at creation time rather than
                during audits, preventing costly rework and schedule delays.
              </li>
            </ul>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stop Guessing Whether Your WPS Is Prequalified
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                WeldCert validates prequalified WPS procedures against AWS D1.1
                Clause 3 requirements automatically. Built-in Table 3.1, 3.2,
                and 3.3 lookups catch errors before they reach production.
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
                    Standards
                  </span>
                  <h3 className="font-semibold text-navy mt-1">
                    AWS D1.1 Welder Qualification Requirements
                  </h3>
                </Link>
                <Link
                  href="/blog/welder-qualification-checklist"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">
                    Process
                  </span>
                  <h3 className="font-semibold text-navy mt-1">
                    Complete Welder Qualification Checklist
                  </h3>
                </Link>
                <Link
                  href="/blog/welding-audit-penalties-fines"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">
                    Compliance
                  </span>
                  <h3 className="font-semibold text-navy mt-1">
                    Welding Audit Penalties and Fines
                  </h3>
                </Link>
                <Link
                  href="/blog/weld-tracking-software-vs-spreadsheets"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">
                    Technology
                  </span>
                  <h3 className="font-semibold text-navy mt-1">
                    Weld Tracking Software vs Spreadsheets
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="not-prose max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="prequalified-welding-procedures-aws-d1-1" />
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </>
  );
}
