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
  title: "AWS D1.1 Table 4.10 Explained: Visual Acceptance Criteria",
  description:
    "A detailed breakdown of AWS D1.1 Table 4.10 welder qualification visual acceptance criteria. Understand what inspectors evaluate, pass/fail thresholds, and how to prepare your welders for qualification testing.",
  alternates: { canonical: "/blog/aws-d1-1-table-4-10-explained" },
};

export default function AwsD11Table410ExplainedPage() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AWS D1.1 Table 4.10 Explained: Visual Acceptance Criteria",
  "description": "A detailed breakdown of AWS D1.1 Table 4.10 welder qualification visual acceptance criteria. Understand what inspectors evaluate, pass/fail thresholds, and how to prepare your welders for qualification testing.",
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
    "@id": "https://weldcert.io/blog/aws-d1-1-table-4-10-explained"
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
      "name": "AWS D1.1 Table 4.10 Explained: Visual Acceptance Criteria",
      "item": "https://weldcert.io/blog/aws-d1-1-table-4-10-explained"
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
              <span className="text-xs text-gray-400">12 min read</span>
            </div>
            <AuthorByline slug="nolan-terry" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              AWS D1.1 Table 4.10 Explained: Visual Acceptance Criteria
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A detailed breakdown of AWS D1.1 Table 4.10 welder qualification visual
              acceptance criteria. Understand what inspectors evaluate, pass/fail
              thresholds, and how to prepare your welders for qualification testing.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <h2>What Is Table 4.10 and Why It Matters</h2>
            <p>
              AWS D1.1 Table 4.10, titled &quot;Welder and Welding Operator Qualification —
              Visual Inspection Acceptance Criteria,&quot; defines the specific visual
              acceptance criteria that a welder&apos;s qualification test coupon must meet
              to pass. It is the first gate a welder must clear during qualification
              testing — before any mechanical testing (bend tests, macro-etch, or RT/UT)
              is performed, the test coupon must pass visual inspection per Table 4.10.
            </p>
            <p>
              Table 4.10 is distinct from Table 6.1, which provides the visual acceptance
              criteria for production welds. While there is substantial overlap, the
              qualification criteria in Table 4.10 are in some cases more stringent
              because the purpose is different: qualification testing evaluates the
              welder&apos;s fundamental skill, not the acceptability of a specific production
              weld. If a welder cannot produce an acceptable test coupon under controlled
              conditions, there is no basis for confidence that their production work will
              meet code requirements.
            </p>
            <p>
              For CWIs, quality managers, and welding engineers, understanding Table 4.10
              thoroughly is essential. Misapplying the criteria — or applying Table 6.1
              criteria during qualification testing — can result in improperly qualified
              welders or unnecessary rejections. Both outcomes are costly.
            </p>

            <h2>Table 4.10 Visual Acceptance Criteria — Line by Line</h2>
            <p>
              The following breakdown explains each criterion in Table 4.10 as it applies
              to groove weld and fillet weld qualification test coupons. These criteria
              must all be met for the test coupon to pass visual inspection. The CWI
              performing the visual examination evaluates each criterion independently.
            </p>

            <h3>Cracks</h3>
            <p>
              <strong>Requirement:</strong> No cracks of any size are permitted in the
              weld or heat-affected zone (HAZ) of a qualification test coupon.
            </p>
            <p>
              This is the most absolute criterion in the table. Any visible crack —
              regardless of length, location, or orientation — is cause for rejection.
              Cracks in welds indicate fundamental problems with the welding procedure,
              technique, or base metal compatibility, and the code takes a zero-tolerance
              approach during qualification.
            </p>
            <p>
              Common crack types encountered during qualification testing include crater
              cracks (caused by improper termination of the weld bead), longitudinal cracks
              (often caused by excessive restraint or incorrect preheat), and transverse
              cracks (which may indicate hydrogen-induced cracking or excessive travel
              speed). The CWI should examine the entire weld length, all tie-ins, and both
              weld toes under adequate lighting (minimum 100 foot-candles per Clause 6).
            </p>

            <h3>Fusion</h3>
            <p>
              <strong>Requirement:</strong> Complete fusion must exist between adjacent
              layers of weld metal and between weld metal and base metal.
            </p>
            <p>
              Incomplete fusion (also called lack of fusion or LOF) is a volumetric
              discontinuity that can sometimes be detected visually at the weld surface,
              particularly at the weld toes where the weld meets the base metal. The CWI
              looks for smooth, complete transition between the weld face and the base
              metal. Cold lap — where the weld metal has rolled over the base metal
              without fusing — is the most common visual indicator of incomplete fusion.
            </p>
            <p>
              Cold lap is frequently caused by insufficient heat input, excessive travel
              speed, improper electrode angle, or welding over contaminated (mill scale,
              rust, oil) base metal surfaces. Welders preparing for qualification should
              pay particular attention to their first pass (root pass) and to tie-in
              areas where they restart a weld bead.
            </p>

            <h3>Crater Cross-Section</h3>
            <p>
              <strong>Requirement:</strong> All craters must be filled to the full
              cross-section of the weld.
            </p>
            <p>
              An unfilled crater is a depression at the termination point of a weld bead.
              It occurs when the welder stops the arc without building up the weld pool
              to fill the crater. Unfilled craters are stress concentrators and potential
              sites for crater cracking. During qualification testing, the CWI verifies
              that all craters — including intermediate craters where the welder stopped
              and restarted — are properly filled.
            </p>
            <p>
              Welders can avoid crater issues by using a back-step technique at weld
              terminations, reducing travel speed at the end of a bead to allow the pool
              to fill, or using the crater-fill function on welding machines equipped
              with that feature (common on GMAW and GTAW power sources).
            </p>

            <h3>Weld Profile and Size</h3>
            <p>
              <strong>Requirement:</strong> The weld must meet the size and profile
              requirements of the applicable joint detail. Fillet welds must meet the
              minimum leg size specified. Groove welds must have full-thickness
              reinforcement.
            </p>
            <p>
              For groove weld qualification, the weld reinforcement must be positive
              (the face of the weld must be at or above the surface of the base metal)
              but must not exceed 1/8 inch (3 mm) above the base metal surface. Excessive
              reinforcement is a rejection cause because it indicates improper heat input
              or travel speed and creates stress concentration at the weld toes.
            </p>
            <p>
              For fillet weld qualification, the weld legs must meet the minimum size
              specified in the WPS. The legs should be approximately equal (within code
              allowances), and the weld face should be flat to slightly convex. Excessive
              convexity is limited per Figure 5.4 of the code. Concavity in fillet welds
              is permitted only if the minimum throat dimension is maintained.
            </p>

            <h3>Undercut</h3>
            <p>
              <strong>Requirement:</strong> Undercut must not exceed 1/32 inch (1 mm)
              for qualification test coupons.
            </p>
            <p>
              Undercut is a groove melted into the base metal at the toe of the weld that
              is not subsequently filled by weld metal. It reduces the effective
              cross-section of the base metal at the weld toe — exactly where stress
              concentration is highest. Table 4.10 limits undercut to 1/32 inch regardless
              of base metal thickness.
            </p>
            <p>
              Undercut is caused by excessive heat input, incorrect electrode angle,
              excessive arc length, or excessive travel speed. The CWI measures undercut
              depth using a fillet weld gauge, undercut gauge, or calibrated visual
              comparator. Multiple short stretches of undercut that individually meet the
              depth limit may still be cause for concern if they are extensive — the CWI
              should evaluate the cumulative effect on the weld profile.
            </p>

            <h3>Porosity</h3>
            <p>
              <strong>Requirement:</strong> The sum of visible piping porosity must not
              exceed 3/8 inch (10 mm) in any linear inch of weld and must not exceed
              3/4 inch (19 mm) in any 12-inch length of weld.
            </p>
            <p>
              Visible porosity (surface-breaking gas pores) on a qualification test coupon
              indicates problems with shielding gas coverage, contaminated base metal or
              filler metal, excessive moisture, or improper technique. While small amounts
              of isolated porosity are tolerated by the code, clustered or linear porosity
              patterns are more concerning because they suggest a systematic problem.
            </p>
            <p>
              Common causes of porosity in qualification test coupons include: drafts
              blowing shielding gas away from the weld pool (especially in GMAW/FCAW),
              damp or contaminated electrodes (especially E7018 SMAW electrodes that have
              absorbed moisture), oil, grease, or paint on the base metal surface, and
              excessive arc length that dilutes shielding gas coverage.
            </p>

            <h2>Table 4.10 Summary: Qualification Acceptance Criteria</h2>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Discontinuity Type</th>
                    <th className="px-5 py-3 font-semibold">Acceptance Limit</th>
                    <th className="px-5 py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Cracks</td>
                    <td className="px-5 py-3">None permitted</td>
                    <td className="px-5 py-3">Any crack in weld or HAZ is cause for rejection</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Incomplete Fusion</td>
                    <td className="px-5 py-3">None permitted</td>
                    <td className="px-5 py-3">Complete fusion required between all layers and base metal</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Crater Cross-Section</td>
                    <td className="px-5 py-3">Must be filled to full cross-section</td>
                    <td className="px-5 py-3">Applies to all craters including intermediate stops</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Weld Reinforcement</td>
                    <td className="px-5 py-3">Maximum 1/8&quot; (3 mm)</td>
                    <td className="px-5 py-3">Applies to groove welds; must be positive reinforcement</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Undercut</td>
                    <td className="px-5 py-3">Maximum 1/32&quot; (1 mm)</td>
                    <td className="px-5 py-3">Measured at weld toes on both sides</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Porosity (per linear inch)</td>
                    <td className="px-5 py-3">Sum not to exceed 3/8&quot; (10 mm)</td>
                    <td className="px-5 py-3">Visible piping porosity on weld surface</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Porosity (per 12&quot; length)</td>
                    <td className="px-5 py-3">Sum not to exceed 3/4&quot; (19 mm)</td>
                    <td className="px-5 py-3">Cumulative limit over longer weld sections</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Fillet Weld Leg Size</td>
                    <td className="px-5 py-3">Must meet minimum per WPS</td>
                    <td className="px-5 py-3">Measured with fillet weld gauge at multiple points</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Fillet Weld Convexity</td>
                    <td className="px-5 py-3">Per Figure 5.4 limits</td>
                    <td className="px-5 py-3">Excessive convexity creates stress concentration</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Table 4.10 vs. Table 6.1: Understanding the Difference</h2>
            <p>
              A common source of confusion is the relationship between Table 4.10
              (qualification acceptance criteria) and Table 6.1 (production weld visual
              acceptance criteria). While both tables address visual inspection, they
              serve fundamentally different purposes and apply at different stages of the
              welding process.
            </p>

            <h3>Key Differences</h3>
            <p>
              Table 4.10 applies exclusively to welder and welding operator qualification
              test coupons. Table 6.1 applies to production welds on actual structural
              members. The distinction matters because:
            </p>
            <ul>
              <li>
                <strong>Undercut limits differ:</strong> Table 4.10 limits undercut to
                1/32 inch for all qualification coupons. Table 6.1 allows 1/32 inch for
                cyclically loaded structures but permits up to 1/16 inch for statically
                loaded structures (with additional length limitations). This means a
                welder could produce work that passes production criteria but fails
                qualification criteria.
              </li>
              <li>
                <strong>Loading type matters for Table 6.1:</strong> Table 6.1 has separate
                columns for statically loaded and cyclically loaded structures. The
                cyclically loaded criteria are more restrictive because fatigue loading
                makes welds more sensitive to stress concentrators like undercut, porosity,
                and profile irregularities. Table 4.10 does not differentiate by loading
                type.
              </li>
              <li>
                <strong>Application context:</strong> During qualification, the welder is
                working under controlled conditions — clean base metal, proper fit-up,
                no time pressure, no complex joint access. The code expects a higher
                quality standard under these ideal conditions.
              </li>
            </ul>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Criterion</th>
                    <th className="px-5 py-3 font-semibold">Table 4.10 (Qualification)</th>
                    <th className="px-5 py-3 font-semibold">Table 6.1 — Static</th>
                    <th className="px-5 py-3 font-semibold">Table 6.1 — Cyclic</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Cracks</td>
                    <td className="px-5 py-3">None</td>
                    <td className="px-5 py-3">None</td>
                    <td className="px-5 py-3">None</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Incomplete Fusion</td>
                    <td className="px-5 py-3">None</td>
                    <td className="px-5 py-3">None</td>
                    <td className="px-5 py-3">None</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Undercut Depth</td>
                    <td className="px-5 py-3">1/32&quot; max</td>
                    <td className="px-5 py-3">1/16&quot; max (with length limits)</td>
                    <td className="px-5 py-3">1/32&quot; max (for primary members)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Porosity (per inch)</td>
                    <td className="px-5 py-3">3/8&quot; max</td>
                    <td className="px-5 py-3">3/8&quot; max</td>
                    <td className="px-5 py-3">3/8&quot; max</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Reinforcement</td>
                    <td className="px-5 py-3">1/8&quot; max</td>
                    <td className="px-5 py-3">1/8&quot; max</td>
                    <td className="px-5 py-3">1/8&quot; max</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Common Rejection Causes in Qualification Testing</h2>
            <p>
              Understanding why qualification test coupons fail visual inspection helps
              welders prepare more effectively and helps CWIs provide constructive feedback.
              The following are the most common reasons welders fail the visual inspection
              portion of qualification testing, ranked roughly by frequency.
            </p>

            <h3>Undercut Exceeding 1/32 Inch</h3>
            <p>
              Undercut is the single most common visual rejection cause during
              qualification testing. The 1/32 inch limit is strict, and many welders
              who produce acceptable production work (where 1/16 inch may be allowed)
              are surprised to fail at the qualification stage. Contributing factors include
              welding with too high an amperage for the electrode size, maintaining too long
              an arc length, using incorrect electrode angle (particularly the work angle
              on fillet welds), and excessive travel speed on the cap pass.
            </p>

            <h3>Excessive Reinforcement</h3>
            <p>
              Welders often build up excessive reinforcement — especially on groove weld
              cap passes — in an attempt to ensure full penetration. However, reinforcement
              exceeding 1/8 inch is rejectable. Excessive reinforcement also creates stress
              concentration at the weld toes and wastes filler metal. Welders should
              practice consistent cap pass technique using stringer beads or controlled
              weave patterns that produce uniform, flat-to-slightly-convex reinforcement.
            </p>

            <h3>Unfilled Craters</h3>
            <p>
              Unfilled craters are especially common in SMAW qualification tests where the
              welder must stop and restart at electrode changes. Each stop point must be
              filled to the full weld cross-section before starting the new electrode.
              For GMAW and FCAW, the crater fill at weld terminations requires a deliberate
              technique — simply releasing the trigger leaves a depression that the CWI
              will reject.
            </p>

            <h3>Cold Lap (Incomplete Fusion at Toes)</h3>
            <p>
              Cold lap at the weld toes is a visual indicator of incomplete fusion. It
              appears as a visible ridge where the weld metal has flowed over the base
              metal without melting into it. This is most common in out-of-position welding
              (3G and 4G) where gravity works against the welder, and with FCAW-S
              (self-shielded) processes where the large, fluid weld pool is difficult to
              control in vertical and overhead positions.
            </p>

            <h3>Porosity</h3>
            <p>
              While isolated small pores are common, clustered porosity or piping porosity
              that exceeds the cumulative limits is cause for rejection. The most common
              cause during qualification is improper shielding — drafts in the testing
              area blowing away shielding gas (GMAW/FCAW), moisture-contaminated electrodes
              (SMAW), or excessive stick-out that disrupts gas coverage.
            </p>

            <h2>Preparing Welders for Qualification Testing</h2>
            <p>
              Qualification test failures are expensive — they cost time, materials, testing
              fees, and schedule delays. Systematic preparation significantly improves
              first-time pass rates.
            </p>

            <h3>Practice with the Actual WPS</h3>
            <p>
              Welders should practice using the exact WPS they will be tested on — the same
              process, electrode, amperage range, position, and joint detail. Practicing
              with different parameters and then switching for the test introduces variables
              that affect performance. Provide welders with practice coupons that match the
              test configuration and let them produce multiple practice welds before the
              scheduled test.
            </p>

            <h3>Visual Self-Inspection</h3>
            <p>
              Teach welders to visually inspect their own work using the Table 4.10
              criteria. Provide each welder with a fillet weld gauge, an undercut gauge,
              and a reinforcement gauge. When welders can identify undercut, excessive
              reinforcement, and unfilled craters on their practice coupons, they correct
              the problems before the actual test. Self-inspection is one of the most
              effective training methods because it builds awareness of quality standards
              that carries over to production work.
            </p>

            <h3>Control the Testing Environment</h3>
            <p>
              The testing environment should be set up to minimize variables that could
              cause failure. Ensure the base metal is clean and properly prepared. Verify
              joint fit-up meets the WPS requirements. For gas-shielded processes, eliminate
              drafts by positioning welding screens. Verify that the welding machine is
              calibrated and producing the correct output. Ensure electrodes are properly
              stored (low-hydrogen electrodes from the holding oven, wire spools protected
              from moisture).
            </p>

            <h3>CWI Pre-Test Review</h3>
            <p>
              Have the CWI who will evaluate the test coupon review the WPS with the
              welder before the test. Discuss the acceptance criteria from Table 4.10,
              point out the most common rejection causes, and establish clear expectations.
              This is not coaching during the test — it is setting expectations before
              the test so the welder knows exactly what standard they are being measured
              against.
            </p>

            <h2>The Inspector&apos;s Perspective</h2>
            <p>
              CWIs performing visual inspection of qualification test coupons under Table
              4.10 have specific responsibilities and should follow a systematic approach.
            </p>

            <h3>Inspection Sequence</h3>
            <p>
              A thorough visual inspection of a qualification test coupon follows this
              sequence:
            </p>
            <ul>
              <li>
                <strong>Overall impression:</strong> Examine the complete weld for general
                appearance, uniformity, and consistency. Inconsistent bead width or height
                suggests variable technique that warrants closer examination.
              </li>
              <li>
                <strong>Crack inspection:</strong> Examine the entire weld surface, both
                weld toes, all tie-in points, and crater areas under adequate lighting.
                Use a magnifying lens (up to 10x per Clause 6) if needed to confirm
                suspected cracks.
              </li>
              <li>
                <strong>Fusion assessment:</strong> Examine both weld toes for evidence of
                cold lap or incomplete fusion. Run a pointed tool (scriber or pick) along
                the weld toes — if the tool catches on a ridge of unfused metal, that is
                incomplete fusion.
              </li>
              <li>
                <strong>Profile measurement:</strong> Measure reinforcement height with a
                weld reinforcement gauge or bridge cam gauge. Measure fillet weld legs with
                a fillet weld gauge at multiple points along the weld length.
              </li>
              <li>
                <strong>Undercut measurement:</strong> Measure undercut depth at the worst
                locations using a calibrated undercut gauge. Document the depth and location
                of any undercut found.
              </li>
              <li>
                <strong>Porosity evaluation:</strong> Identify and measure all visible
                piping porosity. Calculate cumulative porosity in any 1-inch and 12-inch
                lengths.
              </li>
              <li>
                <strong>Crater inspection:</strong> Verify that all craters are filled to
                the full weld cross-section.
              </li>
            </ul>

            <h3>Documentation Requirements</h3>
            <p>
              The visual inspection results must be documented on the welder&apos;s qualification
              record (WPQ). The CWI should record: the date and time of inspection, ambient
              conditions and lighting adequacy, each criterion evaluated and the result
              (accept/reject with measured values where applicable), the CWI&apos;s name,
              certification number, and signature. If the coupon is rejected, the specific
              rejection criteria and measured values must be recorded so the welder and
              their supervisor can address the specific issues before a retest.
            </p>

            <h2>Tracking Qualification Results with Digital Systems</h2>
            <p>
              Managing qualification testing across a shop with dozens of welders — each
              needing qualification on multiple processes and positions — generates
              significant documentation. Each qualification test produces a WPQ record
              that includes the visual inspection results per Table 4.10, mechanical test
              results, the supporting WPS, and the inspector&apos;s credentials.
            </p>
            <p>
              Digital tracking systems like WeldCert centralize all qualification records,
              link them to the applicable WPS and the certifying CWI, and provide instant
              visibility into each welder&apos;s qualified positions, processes, and thickness
              ranges. When a welder fails a qualification test, the rejection details are
              recorded and available for trend analysis — if multiple welders are failing
              the same criterion (for example, undercut on 3G groove welds), that signals
              a training need or a WPS parameter issue rather than individual welder
              problems.
            </p>
            <p>
              Automated continuity tracking ensures that qualified welders maintain their
              certifications by welding with each qualified process within the required
              6-month window. Expiration alerts give quality managers advance notice to
              schedule requalification before lapses occur.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li>
                Table 4.10 defines the visual acceptance criteria for welder qualification
                test coupons under AWS D1.1. It is the first gate in the qualification
                process — test coupons must pass visual inspection before mechanical
                testing.
              </li>
              <li>
                No cracks are permitted — zero tolerance, any size, any location. This is
                the most absolute criterion in the table.
              </li>
              <li>
                Undercut is limited to 1/32 inch, which is more restrictive than the
                1/16 inch allowed for statically loaded production welds under Table 6.1.
                Undercut is the most common rejection cause.
              </li>
              <li>
                Table 4.10 (qualification) and Table 6.1 (production) serve different
                purposes and have different acceptance limits. Never apply production
                criteria during qualification testing.
              </li>
              <li>
                Systematic preparation — practicing with the actual WPS, teaching visual
                self-inspection, controlling the test environment, and pre-test CWI
                review — significantly improves first-time pass rates.
              </li>
              <li>
                Digital tracking systems centralize qualification records, track rejection
                trends, automate continuity monitoring, and ensure every welder&apos;s
                credentials are current and accessible.
              </li>
            </ul>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Streamline Your Welder Qualification Program
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                WeldCert tracks every qualification test, links results to WPS documents,
                monitors continuity windows, and alerts you before certifications lapse.
                Give your quality team the tools to manage qualifications without the
                paperwork burden.
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
                  <span className="text-xs font-medium text-brand">AWS Standards</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Complete Guide to AWS D1.1 Welder Qualification Requirements
                  </h3>
                </Link>
                <Link
                  href="/blog/welder-performance-qualification-test-guide"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Testing</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Welder Performance Qualification Test Guide
                  </h3>
                </Link>
                <Link
                  href="/blog/weld-visual-inspection-guide"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Inspection</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Weld Visual Inspection Guide
                  </h3>
                </Link>
                <Link
                  href="/blog/ndt-welding-inspection-methods"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Inspection</span>
                  <h3 className="font-semibold text-navy mt-1">
                    NDT Welding Inspection Methods Every Fabricator Should Know
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
          <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="aws-d1-1-table-4-10-explained" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
