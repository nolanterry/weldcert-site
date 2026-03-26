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
  title: "Weld Visual Inspection Guide: Defects, Criteria & Best Practices",
  description:
    "Visual inspection is the first and most important NDT method for every weld. Learn to identify common weld defects, understand AWS D1.1 and ASME acceptance criteria, and implement systematic VT procedures that catch problems before they become costly rejections.",
  alternates: { canonical: "/blog/weld-visual-inspection-guide" },
};

export default function WeldVisualInspectionGuidePage() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Weld Visual Inspection Guide: Defects, Criteria & Best Practices",
  "description": "Visual inspection is the first and most important NDT method for every weld. Learn to identify common weld defects, understand AWS D1.1 and ASME acceptance criteria, and implement systematic VT procedures that catch problems before they become costly rejections.",
  "datePublished": "2026-03-01",
  "dateModified": "2026-03-01",
  "author": {
    "@type": "Person",
    "name": "Nolan Terry",
    "url": "https://weldcert.io/blog/authors/nolan-terry"
  },
  "publisher": {
    "@type": "Organization",
    "name": "WeldCert",
    "url": "https://weldcert.io"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://weldcert.io/blog/weld-visual-inspection-guide"
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
      "name": "Weld Visual Inspection Guide: Defects, Criteria & Best Practices",
      "item": "https://weldcert.io/blog/weld-visual-inspection-guide"
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
                Inspection
              </span>
              <span className="text-xs text-gray-400">March 1, 2026</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <AuthorByline slug="nolan-terry" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Weld Visual Inspection Guide: Defects, Criteria &amp; Best Practices
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Visual inspection is the first and most important NDT method for every weld.
              Learn to identify common weld defects, understand AWS D1.1 and ASME acceptance
              criteria, and implement systematic VT procedures that catch problems before
              they become costly rejections.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>
            <p>
              Visual testing (VT) is the oldest, simplest, and most widely used
              non-destructive testing method in the welding industry. Every fabrication
              code requires it, every weld receives it, and it catches more defects
              than any other single inspection method. Yet despite its ubiquity, visual
              inspection is frequently performed poorly &mdash; rushed, inconsistent, and
              inadequately documented.
            </p>
            <p>
              A systematic approach to visual weld inspection dramatically reduces
              rejection rates downstream by catching defects before supplemental NDT
              methods are applied. It also reduces rework costs: a defect found visually
              during welding costs a fraction of one found by radiography after the
              weld is complete. This guide covers the fundamentals of weld visual
              inspection, the acceptance criteria that govern it, and the best practices
              that separate effective VT programs from checkbox exercises.
            </p>

            <h2>Visual Testing Fundamentals</h2>
            <p>
              Visual testing in welding is governed by AWS D1.1 Clause 6.9 for structural
              steel, ASME Section V Article 9 for pressure equipment, and API 1104 Section 9
              for pipeline welding. While the specific acceptance criteria vary by code, the
              fundamental principles of visual testing are consistent: the inspector examines
              the weld surface and adjacent base metal for discontinuities using the unaided
              eye or with magnification, under controlled lighting conditions, and compares
              the findings against code-defined acceptance criteria.
            </p>
            <p>
              VT is designated as a Level I and Level II activity under ASNT SNT-TC-1A, meaning
              that qualified VT inspectors must demonstrate both knowledge of the method and
              the ability to apply acceptance criteria correctly. AWS QC1, &quot;Standard for AWS
              Certification of Welding Inspectors,&quot; defines the qualification requirements
              for Certified Welding Inspectors (CWI) who perform visual inspection under
              AWS codes. ASME Section V references ASNT SNT-TC-1A or CP-189 for inspector
              qualification.
            </p>
            <h3>Lighting Requirements</h3>
            <p>
              Adequate lighting is the single most important prerequisite for effective
              visual inspection. AWS D1.1 Clause 6.9.1 requires a minimum light intensity
              of 100 foot-candles (1,000 lux) at the inspection surface. ASME Section V
              Article 9 specifies the same minimum. In practice, many inspection environments
              fall short of this requirement without supplemental lighting.
            </p>
            <p>
              Use a calibrated light meter to verify illumination levels at the weld surface.
              Portable LED inspection lights with adjustable beam angles are effective for
              illuminating weld toes, root areas, and other difficult-to-see locations.
              Low-angle lighting (less than 30 degrees from the surface) is particularly
              useful for revealing surface irregularities such as undercut, overlap, and
              shallow surface cracks that might not be visible under direct overhead lighting.
            </p>
            <h3>Inspector Qualification &mdash; AWS QC1</h3>
            <p>
              AWS QC1 defines three levels of welding inspector certification: Certified
              Associate Welding Inspector (CAWI), Certified Welding Inspector (CWI), and
              Senior Certified Welding Inspector (SCWI). The CWI certification requires
              passing a three-part examination covering fundamentals, practical application,
              and code book proficiency. CWI certification is valid for three years and
              requires demonstrated continued activity and professional development for
              renewal.
            </p>
            <p>
              Under AWS D1.1, visual inspection must be performed by personnel qualified
              in accordance with Clause 6.1.4. The inspector must have current vision
              acuity examination results demonstrating near-vision acuity of Jaeger J2
              at 12 inches minimum, with or without corrective lenses. This acuity
              requirement must be verified annually.
            </p>

            <h2>Common Weld Defects Identified by Visual Inspection</h2>
            <p>
              Visual inspection can detect a wide range of surface and near-surface weld
              discontinuities. Understanding what each defect looks like, what causes it,
              and why it matters is essential for every welding inspector. The following
              are the most common defects identified during visual inspection.
            </p>
            <h3>Cracks</h3>
            <p>
              Cracks are the most serious weld discontinuity and are never acceptable
              under any structural or pressure welding code. They appear as linear
              discontinuities with sharp tips that can propagate under service loads.
              Common crack types found by visual inspection include longitudinal cracks
              (running parallel to the weld axis), transverse cracks (running perpendicular
              to the weld axis), crater cracks (star-shaped cracks at the end of a weld
              bead where the arc was terminated), and toe cracks (originating at the weld
              toe in the HAZ).
            </p>
            <p>
              Hot cracks form during solidification when low-melting-point constituents
              (sulfur, phosphorus compounds) concentrate at grain boundaries and cannot
              accommodate shrinkage strains. Cold cracks (hydrogen-induced cracking) form
              hours or days after welding when dissolved hydrogen diffuses to stress
              concentration points in a susceptible microstructure. Because cold cracks
              can form after the weld cools, delayed visual inspection (typically 48 hours
              for high-strength steels) is sometimes required to detect them.
            </p>
            <h3>Porosity</h3>
            <p>
              Porosity consists of gas pockets trapped in the solidified weld metal. It
              appears as rounded or elongated cavities on the weld surface or at the weld
              toe. Surface porosity is readily detected by visual inspection, while
              subsurface porosity requires volumetric NDT (RT or UT) to detect. Common
              causes include contaminated base metal or filler metal, inadequate shielding
              gas coverage, excessive arc length, and moisture in the electrode coating
              or flux.
            </p>
            <h3>Undercut</h3>
            <p>
              Undercut is a groove melted into the base metal at the weld toe that is not
              filled by weld metal. It reduces the cross-sectional thickness of the base
              metal and creates a stress concentration. Undercut is caused by excessive
              current, incorrect electrode angle, excessive travel speed, or improper
              weaving technique. It is one of the most commonly cited visual inspection
              findings and has specific dimensional acceptance criteria in every code.
            </p>
            <h3>Overlap (Cold Lap)</h3>
            <p>
              Overlap occurs when weld metal flows onto the base metal surface without
              fusing to it. It creates an unfused notch at the weld toe that acts as a
              stress concentrator and can initiate fatigue cracking. Overlap is caused by
              insufficient current, incorrect travel angle, or excessive deposition rate.
              It is often difficult to distinguish from adequate fusion without close
              inspection, and low-angle lighting is particularly useful for detecting it.
            </p>
            <h3>Incomplete Fusion</h3>
            <p>
              Incomplete fusion (also called lack of fusion) is the failure of the weld
              metal to fuse completely to the base metal or to a preceding weld bead.
              Surface-breaking incomplete fusion at the weld toe is detectable by visual
              inspection, but incomplete fusion at the root or between weld passes requires
              volumetric NDT. Causes include insufficient heat input, improper electrode
              manipulation, magnetic arc blow, and failure to clean between passes.
            </p>
            <h3>Excessive Reinforcement and Insufficient Throat</h3>
            <p>
              Weld reinforcement (the height of the weld crown above the base metal
              surface) is limited by code because excessive reinforcement creates stress
              concentration at the weld toe. Insufficient weld throat (on fillet welds)
              means the weld is undersized and may not carry the design load. Both
              conditions are measured with weld gauges during visual inspection.
            </p>

            <h2>AWS D1.1 Table 6.1 Acceptance Criteria</h2>
            <p>
              AWS D1.1 Table 6.1 provides the visual acceptance criteria for structural
              steel welds. The criteria are organized by connection type: statically loaded
              nontubular connections, cyclically loaded nontubular connections, and tubular
              connections. The table defines allowable limits for each type of
              discontinuity.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Discontinuity</th>
                    <th className="px-5 py-3 font-semibold">Static (Non-tubular)</th>
                    <th className="px-5 py-3 font-semibold">Cyclic (Non-tubular)</th>
                    <th className="px-5 py-3 font-semibold">Tubular (All Loads)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Cracks</td>
                    <td className="px-5 py-3">Not permitted</td>
                    <td className="px-5 py-3">Not permitted</td>
                    <td className="px-5 py-3">Not permitted</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Incomplete fusion</td>
                    <td className="px-5 py-3">Not permitted</td>
                    <td className="px-5 py-3">Not permitted</td>
                    <td className="px-5 py-3">Not permitted</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Crater cross-section</td>
                    <td className="px-5 py-3">Filled to full cross-section except at ends of intermittent fillet welds</td>
                    <td className="px-5 py-3">Filled to full cross-section</td>
                    <td className="px-5 py-3">Filled to full cross-section</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Undercut depth</td>
                    <td className="px-5 py-3">&le; 1/32 in. (1 mm)</td>
                    <td className="px-5 py-3">&le; 0.01 in. for t &lt; 1 in., &le; 1/32 in. for t &ge; 1 in.</td>
                    <td className="px-5 py-3">&le; 0.01 in. for t &lt; 1 in., &le; 1/32 in. for t &ge; 1 in.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Porosity (visible)</td>
                    <td className="px-5 py-3">CJP groove: none; Fillet: &le; 3/8 in. in any linear inch</td>
                    <td className="px-5 py-3">Not permitted in CJP or PJP; fillet per limits</td>
                    <td className="px-5 py-3">Not permitted in CJP; fillet per limits</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Weld profile (reinforcement)</td>
                    <td className="px-5 py-3">Per Figure 5.4</td>
                    <td className="px-5 py-3">Per Figure 5.4, flush where noted</td>
                    <td className="px-5 py-3">Per Figure 5.4</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Fillet weld size (undersize)</td>
                    <td className="px-5 py-3">Undersize by &le; 1/16 in. for max 10% of length</td>
                    <td className="px-5 py-3">Undersize by &le; 1/16 in. for max 10% of length</td>
                    <td className="px-5 py-3">Undersize by &le; 1/16 in. for max 10% of length</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Note that the criteria for cyclically loaded connections are more stringent
              than for statically loaded connections. This is because cyclic loading
              amplifies the stress concentration effect of surface discontinuities and
              can lead to fatigue crack initiation at defects that would be harmless under
              static loading. The inspector must know the loading condition of the
              connection being inspected to apply the correct acceptance criteria.
            </p>

            <h2>ASME Section VIII and B31 Acceptance Criteria</h2>
            <p>
              For pressure equipment fabricated under ASME Section VIII Division 1, visual
              acceptance criteria are defined in UW-35 (alignment tolerances), UW-36
              (weld reinforcement), and UG-78 (examination requirements). The criteria
              differ from AWS D1.1 in several important respects.
            </p>
            <p>
              ASME Section VIII limits weld reinforcement based on material thickness:
              for material up to 1/2 inch thick, maximum reinforcement is 3/32 inch; for
              material over 2 inches thick, maximum reinforcement is 3/16 inch. These limits
              are tighter than AWS D1.1 because excessive reinforcement on pressure equipment
              creates stress concentration at a location already subject to pressure-induced
              hoop stress.
            </p>
            <p>
              ASME B31.1 (Power Piping) and B31.3 (Process Piping) have their own visual
              acceptance criteria that apply to piping system welds. B31.3 Table 341.3.2
              defines acceptance criteria that vary by examination class (normal, spot,
              or 100%). The inspector must verify which examination class applies to the
              piping system being inspected based on the piping specification, fluid
              service category, and design conditions.
            </p>
            <p>
              Regardless of code, certain discontinuities are universally unacceptable:
              cracks of any kind, incomplete fusion visible at the surface, and any
              discontinuity that compromises the minimum required wall thickness. When
              in doubt about whether a discontinuity exceeds the acceptance criteria,
              the conservative approach is to reject and require supplemental NDT or
              engineering evaluation.
            </p>

            <h2>Inspection Tools and Equipment</h2>
            <p>
              Effective visual inspection requires proper tools. While VT is often
              described as inspection with the &quot;unaided eye,&quot; in practice inspectors
              rely on a range of measuring and viewing instruments to perform accurate
              assessments.
            </p>
            <h3>Weld Gauges</h3>
            <p>
              Several types of weld gauges are used during visual inspection. The most
              common are the AWS fillet weld gauge set, which measures fillet weld leg
              size and convexity; the Cambridge gauge (also called a multi-purpose weld
              gauge), which measures reinforcement height, undercut depth, and fillet
              weld size; the Hi-Lo gauge, which measures internal alignment (mismatch)
              of pipe and vessel joints; and the V-WAC gauge, which measures weld profile
              parameters including reinforcement, throat, and leg size.
            </p>
            <p>
              Weld gauges should be calibrated or verified before each use. While many
              weld gauges are fixed-dimension tools that do not require calibration in the
              traditional sense, adjustable gauges and measuring tools should be verified
              against known standards. Maintain a calibration log that records the
              verification date, the standard used, and the result.
            </p>
            <h3>Magnification</h3>
            <p>
              AWS D1.1 does not require magnification for routine visual inspection, but
              ASME Section V Article 9 allows magnification up to 10x for enhanced
              examination. A 5x to 10x hand lens is useful for examining suspected
              discontinuities more closely, particularly when determining whether a
              linear indication is a crack, a slag line, or a scratch. Illuminated
              magnifiers combine magnification and supplemental lighting in a single tool.
            </p>
            <h3>Borescopes and Remote Visual Inspection</h3>
            <p>
              For welds in confined spaces, internal pipe surfaces, or other locations
              where direct visual access is not possible, borescopes and remote visual
              inspection (RVI) equipment are used. Rigid borescopes provide the best
              image quality but limited access flexibility. Flexible fiberscopes or
              videoscopes can navigate bends and restricted openings. Video borescopes
              allow image capture and recording for documentation purposes. When
              RVI is used, the image quality must be sufficient to resolve the smallest
              discontinuity defined by the acceptance criteria.
            </p>

            <h2>Before, During, and After Welding Inspection</h2>
            <p>
              Effective visual inspection is not a single activity performed after welding
              is complete. It is a three-phase process that begins before the first arc
              is struck and continues through final acceptance.
            </p>
            <h3>Before Welding (Fit-Up Inspection)</h3>
            <p>
              Before welding begins, the inspector verifies that the joint preparation
              and fit-up meet the WPS and drawing requirements. Key items include joint
              geometry (groove angle, root face, root opening), alignment and mismatch
              (Hi-Lo), tack weld quality and placement, cleanliness of the joint surfaces
              (free of oil, grease, mill scale, rust, moisture, and other contaminants),
              backing material (if specified), and preheat temperature verification.
            </p>
            <p>
              Fit-up inspection is arguably the most valuable phase of visual inspection
              because it prevents defects rather than detecting them after the fact.
              A root opening that is too tight will cause incomplete penetration. A groove
              angle that is too narrow will cause incomplete fusion. Misalignment beyond
              tolerance will cause stress concentration. All of these conditions are easier
              and less expensive to correct before welding than after.
            </p>
            <h3>During Welding (In-Process Inspection)</h3>
            <p>
              In-process inspection occurs while welding is underway. The inspector
              verifies that welding parameters are within WPS limits, the correct
              consumables are being used (check electrode classification markings, wire
              spool labels, gas cylinder labels), interpass temperature is within WPS
              limits, interpass cleaning is adequate (slag removal between passes), and
              weld bead sequence and placement follow the WPS requirements.
            </p>
            <p>
              For multi-pass welds, the root pass is a critical inspection point. Many
              codes require root pass inspection and acceptance before subsequent passes
              are deposited. If the root pass contains defects, they become buried by
              fill passes and can only be found later by volumetric NDT at much greater
              cost and schedule impact. Inspect and accept the root before allowing the
              welder to continue.
            </p>
            <h3>After Welding (Final Visual Inspection)</h3>
            <p>
              Final visual inspection is the comprehensive evaluation of the completed weld
              against all applicable acceptance criteria. The inspector examines the entire
              weld length, both weld toes, the weld face (or root, if accessible), and
              adjacent base metal for the discontinuities described earlier in this guide.
              All findings are documented on the inspection report with the specific
              location, type, and size of each discontinuity.
            </p>
            <p>
              For welds subject to delayed cracking (high-strength steels, high-carbon
              equivalency materials, thick sections), final visual inspection should be
              delayed 24 to 48 hours after welding to allow any hydrogen-induced cracks
              to develop to detectable size. Some specifications require a specific delay
              period before final inspection, and this requirement should be documented
              on the inspection traveler or hold point sheet.
            </p>

            <h2>Documentation and Reporting Best Practices</h2>
            <p>
              Visual inspection is only as valuable as the documentation it produces. A
              visual inspection that is performed competently but documented poorly provides
              no audit trail and no legal protection. Every visual inspection should be
              documented on a formal inspection report that records the essential information.
            </p>
            <h3>Required Documentation Elements</h3>
            <ul>
              <li>
                <strong>Project identification:</strong> Project name, contract number,
                drawing or specification reference
              </li>
              <li>
                <strong>Component identification:</strong> Piece mark, joint number,
                weld number, or other unique identifier
              </li>
              <li>
                <strong>WPS reference:</strong> The WPS number and revision used for
                the weld being inspected
              </li>
              <li>
                <strong>Acceptance criteria reference:</strong> The code, edition, and
                specific table or clause used for acceptance/rejection decisions
              </li>
              <li>
                <strong>Inspection results:</strong> Accept or reject, with specific
                findings for rejected welds including discontinuity type, location, and
                measured dimensions
              </li>
              <li>
                <strong>Inspector identification:</strong> Inspector name, certification
                number (CWI number for AWS work), signature, and date
              </li>
              <li>
                <strong>Lighting verification:</strong> Confirmation that minimum
                illumination requirements were met
              </li>
              <li>
                <strong>Environmental conditions:</strong> Any conditions that may have
                affected the inspection (temperature, weather for field work)
              </li>
            </ul>
            <h3>Digital Documentation Advantages</h3>
            <p>
              Paper-based inspection reports are the traditional approach but create
              significant challenges for record retrieval, trending, and auditing.
              Digital documentation systems offer searchable records, automatic date and
              time stamping, electronic signatures with inspector credential verification,
              photo attachment capability, automatic rejection notifications, and trending
              and analytics across welders, WPS, and joint types.
            </p>
            <p>
              A digital system that links visual inspection results to the welder&apos;s
              qualification record and the WPS creates a complete traceability chain from
              the inspection finding back to the procedure and the person who made the
              weld. This traceability is essential for root cause analysis when defect
              rates increase and for demonstrating compliance during audits.
            </p>

            <h2>Building a Systematic VT Program</h2>
            <p>
              Moving from ad-hoc visual inspection to a systematic VT program requires
              several organizational commitments. First, ensure that all VT personnel
              are qualified to the level required by the applicable code. AWS D1.1
              requires a CWI or equivalent; ASME Section V requires qualification
              per ASNT SNT-TC-1A or CP-189. Maintain current records of inspector
              qualifications including certification numbers, expiration dates, and
              annual vision examination results.
            </p>
            <p>
              Second, develop written VT procedures that define the inspection methodology,
              equipment, acceptance criteria, and documentation requirements for each type
              of work your organization performs. Generic procedures that reference &quot;the
              applicable code&quot; without specifying which code and which criteria are
              inadequate for audit purposes.
            </p>
            <p>
              Third, implement a rejection tracking system that captures every rejected
              weld with the defect type, location, welder identification, and WPS. This
              data allows you to identify trends, provide targeted feedback to welders,
              and make evidence-based decisions about process improvements. Shops that
              track rejection data consistently see rejection rates decrease over time
              as systemic issues are identified and corrected.
            </p>
            <p>
              Fourth, conduct periodic proficiency checks to verify that inspectors are
              applying acceptance criteria consistently. Present inspectors with weld
              samples containing known discontinuities and evaluate their findings against
              the correct answers. This practice identifies training needs and prevents
              criteria drift where inspectors gradually become more lenient or more strict
              over time.
            </p>
            <p>
              Finally, integrate your VT program with your overall quality management
              system. Visual inspection hold points should be defined on inspection and
              test plans (ITPs), and the ITP should specify which inspections are
              witness points (the inspector is notified and may attend) versus hold
              points (work cannot proceed without inspector release). This integration
              ensures that VT is performed at the right time, by the right people,
              using the right criteria.
            </p>

            <h2>Visual Inspection for Different Weld Types</h2>
            <p>
              The specific inspection focus varies depending on the type of weld being
              examined. Each weld type has characteristic defects and critical areas that
              require particular attention during visual inspection.
            </p>
            <h3>Fillet Welds</h3>
            <p>
              Fillet welds are the most common weld type in structural and general
              fabrication. The primary VT focus for fillet welds is size verification
              using a fillet weld gauge. Measure the leg size at multiple points along
              the weld length and verify that the minimum specified size is achieved.
              Check for convexity (which creates stress concentration at the weld toe)
              and concavity (which reduces the effective throat). AWS D1.1 Figure 5.4
              defines acceptable fillet weld profiles, and any profile outside these
              limits requires correction.
            </p>
            <p>
              Pay particular attention to fillet weld terminations. Crater cracks at the
              end of fillet welds are common, especially with SMAW. Check for adequate
              wrap-around at the ends of intermittent fillet welds and verify that the
              weld length and spacing match the drawing requirements. For stiffener-to-web
              fillet welds and similar joints, check both sides of the joint for
              consistency in size and profile.
            </p>
            <h3>Complete Joint Penetration (CJP) Groove Welds</h3>
            <p>
              CJP groove welds require full penetration through the entire joint thickness.
              Visual inspection of the weld face checks for the same discontinuities as
              any other weld (cracks, porosity, undercut, overlap, profile). However, the
              root side is equally important. If the root side is accessible, inspect for
              complete penetration, root reinforcement within acceptable limits, and the
              absence of root concavity or incomplete root penetration.
            </p>
            <p>
              For CJP groove welds made from one side with backing, the backing bar
              should be inspected before welding to verify material type, fit to the
              base metal, and absence of gaps that could trap slag. After welding, if the
              backing is to remain in place, check that it is properly fused to the weld
              root. If the backing is to be removed, the exposed root must be inspected
              for the same criteria as a root made without backing.
            </p>
            <h3>Partial Joint Penetration (PJP) Groove Welds</h3>
            <p>
              PJP groove welds have a specified effective throat that is less than the full
              joint thickness. The inspector must verify that the weld size meets the
              specified effective throat dimension. Because the root of a PJP groove weld
              is not expected to achieve full penetration, the acceptance criteria for the
              root differ from CJP welds. However, the weld face criteria (cracks, porosity,
              undercut, profile) are the same.
            </p>
            <h3>Plug and Slot Welds</h3>
            <p>
              Plug and slot welds fill holes or slots in one member to join it to a member
              beneath. Visual inspection verifies that the hole or slot is completely filled
              with weld metal to the required level (flush, slightly convex, or as
              specified), the weld is free of surface cracks and excessive porosity, and
              fusion is achieved around the full perimeter of the hole or slot. These welds
              are often overlooked during inspection because they are less prominent than
              fillet or groove welds, but they carry design loads and must meet acceptance
              criteria.
            </p>

            <h2>Inspection Frequency and Sampling Plans</h2>
            <p>
              Not every weld receives the same level of visual inspection. Codes and project
              specifications define inspection frequencies that range from 100% inspection
              (every weld is examined) to sampling-based inspection (a percentage of welds
              are examined, with the percentage increasing if rejections are found).
            </p>
            <p>
              AWS D1.1 Clause 6.9 requires visual inspection of all welds as a baseline.
              However, the Engineer may specify enhanced inspection requirements for critical
              connections, including 100% VT with supplemental NDT. For less critical
              connections, sampling plans may be defined in the contract documents.
            </p>
            <p>
              ASME B31.3 uses an examination class system: Normal fluid service may require
              only spot examination (5% of welds), while Category M fluid service (lethal)
              or High Pressure piping requires 100% examination. The examination class is
              determined by the fluid service category, the severity of service conditions,
              and the consequences of failure.
            </p>
            <p>
              When sampling plans are used, it is critical to document both the inspected
              welds and the basis for the sample selection. Random selection should be
              truly random, not biased toward easily accessible welds. If the rejection
              rate in a sample exceeds a threshold (typically defined in the specification),
              the sampling rate must be increased, often doubling until the rejection rate
              returns to acceptable levels. This escalation mechanism ensures that quality
              problems are caught even when not every weld is inspected.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Inspection Tool</th>
                    <th className="px-5 py-3 font-semibold">Purpose</th>
                    <th className="px-5 py-3 font-semibold">Measures</th>
                    <th className="px-5 py-3 font-semibold">Typical Accuracy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">AWS Fillet Gauge Set</td>
                    <td className="px-5 py-3">Fillet weld size verification</td>
                    <td className="px-5 py-3">Leg size, convexity</td>
                    <td className="px-5 py-3">&plusmn; 1/32 in.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Cambridge Gauge</td>
                    <td className="px-5 py-3">Multi-purpose weld measurement</td>
                    <td className="px-5 py-3">Reinforcement, undercut, fillet size, misalignment</td>
                    <td className="px-5 py-3">&plusmn; 1/32 in.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Hi-Lo Gauge</td>
                    <td className="px-5 py-3">Pipe/vessel alignment</td>
                    <td className="px-5 py-3">Internal mismatch (Hi-Lo)</td>
                    <td className="px-5 py-3">&plusmn; 1/64 in.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">V-WAC Gauge</td>
                    <td className="px-5 py-3">Comprehensive weld profile</td>
                    <td className="px-5 py-3">Reinforcement, throat, leg, undercut</td>
                    <td className="px-5 py-3">&plusmn; 1/32 in.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Light Meter</td>
                    <td className="px-5 py-3">Illumination verification</td>
                    <td className="px-5 py-3">Foot-candles / lux at surface</td>
                    <td className="px-5 py-3">&plusmn; 5%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Magnifying Lens (5-10x)</td>
                    <td className="px-5 py-3">Enhanced surface examination</td>
                    <td className="px-5 py-3">Fine surface discontinuities</td>
                    <td className="px-5 py-3">Visual enhancement only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Streamline Your Visual Inspection Documentation
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                WeldCert links inspection results to welder qualifications and WPS records,
                giving you complete traceability and the rejection trending data you need
                to continuously improve weld quality.
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
                  href="/blog/ndt-welding-inspection-methods"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Inspection</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Non-Destructive Testing for Welds: NDT Methods Every Fabricator Should Know
                  </h3>
                </Link>
                <Link
                  href="/blog/structural-welding-inspection-checklist-2026"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Inspection</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Structural Welding Inspection Checklist
                  </h3>
                </Link>
                <Link
                  href="/blog/weld-failure-investigation-documentation"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Documentation</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Weld Failure Investigation Documentation: What You Need
                  </h3>
                </Link>
                <Link
                  href="/blog/weld-rejection-rework-costs"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Quality</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Weld Rejection and Rework Costs
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
          <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="weld-visual-inspection-guide" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}