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
  title: "Welder Performance Qualification Tests: Positions, Methods, and Pass Criteria",
  description:
    "Complete guide to ASME Section IX welder performance qualification tests. Covers test positions (1G-6G), bend tests, RT alternatives, fillet weld tests, retesting rules, and continuity requirements.",
  alternates: { canonical: "/blog/welder-performance-qualification-test-guide" },
};

export default function WelderPerformanceQualificationTestGuidePage() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Welder Performance Qualification Tests: Positions, Methods, and Pass Criteria",
  "description": "Complete guide to ASME Section IX welder performance qualification tests. Covers test positions (1G-6G), bend tests, RT alternatives, fillet weld tests, retesting rules, and continuity requirements.",
  "datePublished": "2026-03-25",
  "dateModified": "2026-03-25",
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
    "@id": "https://weldcert.io/blog/welder-performance-qualification-test-guide"
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
      "name": "Welder Performance Qualification Tests: Positions, Methods, and Pass Criteria",
      "item": "https://weldcert.io/blog/welder-performance-qualification-test-guide"
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
                Qualification
              </span>
              <span className="text-xs text-gray-400">March 25, 2026</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <AuthorByline slug="weldcert-team" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Welder Performance Qualification Tests: Positions, Methods, and Pass Criteria
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A comprehensive guide to ASME Section IX welder performance qualification
              testing. From test positions and coupon preparation to bend tests,
              radiographic alternatives, and retest provisions under QW-300.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <h2>Introduction: What a Performance Qualification Test Proves</h2>
            <p>
              A welder performance qualification (WPQ) test under ASME Section IX
              demonstrates that a welder possesses the skill to deposit sound weld
              metal using a specific welding process. This is fundamentally different
              from a Welding Procedure Specification (WPS) qualification, which proves
              that a given combination of variables produces acceptable mechanical
              properties in the completed joint.
            </p>
            <p>
              The distinction matters. A WPS qualification (supported by a Procedure
              Qualification Record, or PQR) is the responsibility of the organization.
              It addresses metallurgical compatibility, heat input ranges, and
              mechanical properties. A welder performance qualification, governed by
              QW-300, addresses the individual welder&apos;s ability to follow that
              WPS and produce a defect-free weld. A welder can be qualified to multiple
              WPSs, and a single WPS can be used by many qualified welders.
            </p>
            <p>
              Performance qualification tests evaluate manipulative skill, not
              engineering judgment. The welder must demonstrate the ability to produce
              a weld that meets visual acceptance criteria and passes either mechanical
              testing (guided bend tests) or volumetric examination (radiographic
              testing). The scope of the resulting qualification depends on the
              essential variables recorded during the test, particularly the welding
              position, process, electrode type, and base metal thickness range.
            </p>

            <h2>Test Positions Explained: 1G Through 6G</h2>
            <p>
              Test position is one of the most critical variables in welder performance
              qualification because it directly determines the range of production
              positions a welder is authorized to perform. ASME Section IX defines
              test positions in QW-461, and the qualification ranges are spelled out
              in QW-461.9.
            </p>

            <h3>Plate Positions</h3>
            <p>
              Plate groove weld positions follow a straightforward progression of
              difficulty:
            </p>
            <ul>
              <li>
                <strong>1G (Flat):</strong> The plate is positioned horizontally, and
                the welder deposits the weld from above. Gravity assists metal
                deposition, making this the easiest position. Qualifies for flat
                position plate welding only.
              </li>
              <li>
                <strong>2G (Horizontal):</strong> The plate axis is vertical, and the
                weld joint is horizontal. The welder must control the puddle against
                gravity pulling it downward. Qualifies for flat and horizontal plate
                positions.
              </li>
              <li>
                <strong>3G (Vertical):</strong> The plate axis is vertical, and the
                weld progresses vertically (uphill or downhill as specified by the WPS).
                Qualifies for flat, horizontal, and vertical plate positions.
              </li>
              <li>
                <strong>4G (Overhead):</strong> The plate is horizontal, and the welder
                deposits weld metal from below. Gravity works directly against the
                welder. Qualifies for flat and overhead plate positions only.
              </li>
            </ul>
            <p>
              An important nuance: a 3G test does not qualify overhead welding, and a
              4G test does not qualify vertical welding. To qualify all four plate
              positions, the welder must complete both a 3G and a 4G test, or perform
              testing in the 6G pipe position.
            </p>

            <h3>Pipe Positions</h3>
            <p>
              Pipe positions add rotational complexity:
            </p>
            <ul>
              <li>
                <strong>1G (Rotated):</strong> The pipe axis is horizontal, and the pipe
                rotates during welding so the welder always welds in the flat position.
                Qualifies for flat position plate and pipe welding only.
              </li>
              <li>
                <strong>2G (Horizontal Fixed):</strong> The pipe axis is vertical and
                fixed. The weld is deposited horizontally around the circumference.
                Qualifies for flat and horizontal positions on both plate and pipe.
              </li>
              <li>
                <strong>5G (Horizontal Fixed, Pipe Axis Horizontal):</strong> The pipe
                axis is horizontal and fixed. The welder must weld around the full
                circumference, transitioning through flat, vertical, and overhead
                positions. Qualifies for flat, vertical, and overhead on plate, plus
                flat and 5G on pipe.
              </li>
              <li>
                <strong>6G (Inclined Fixed at 45 Degrees):</strong> The pipe axis is
                fixed at a 45-degree angle from horizontal. The welder encounters all
                positions during circumferential welding. This single test qualifies
                all positions on both plate and pipe.
              </li>
            </ul>

            <h3>Position Qualification Matrix (QW-461.9)</h3>
            <p>
              The following table summarizes which production positions are qualified
              by each test position per QW-461.9:
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Test Position</th>
                    <th className="px-5 py-3 font-semibold">Qualifies For Plate</th>
                    <th className="px-5 py-3 font-semibold">Qualifies For Pipe</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">1G (Plate)</td>
                    <td className="px-5 py-3">Flat only</td>
                    <td className="px-5 py-3">None</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">2G (Plate)</td>
                    <td className="px-5 py-3">Flat, Horizontal</td>
                    <td className="px-5 py-3">None</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">3G (Plate)</td>
                    <td className="px-5 py-3">Flat, Horizontal, Vertical</td>
                    <td className="px-5 py-3">None</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">4G (Plate)</td>
                    <td className="px-5 py-3">Flat, Overhead</td>
                    <td className="px-5 py-3">None</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">3G + 4G (Plate)</td>
                    <td className="px-5 py-3">All positions</td>
                    <td className="px-5 py-3">None</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">1G (Pipe Rotated)</td>
                    <td className="px-5 py-3">Flat only</td>
                    <td className="px-5 py-3">Flat (rotated) only</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">2G (Pipe)</td>
                    <td className="px-5 py-3">Flat, Horizontal</td>
                    <td className="px-5 py-3">Flat, 2G</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">5G (Pipe)</td>
                    <td className="px-5 py-3">Flat, Vertical, Overhead</td>
                    <td className="px-5 py-3">Flat, 5G</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">2G + 5G (Pipe)</td>
                    <td className="px-5 py-3">All positions</td>
                    <td className="px-5 py-3">All positions</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">6G (Pipe)</td>
                    <td className="px-5 py-3">All positions</td>
                    <td className="px-5 py-3">All positions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The 6G position is widely regarded as the most demanding single test
              because the 45-degree incline forces the welder to transition continuously
              between flat, horizontal, vertical, and overhead orientations within a
              single joint. Successfully completing a 6G test qualifies the welder for
              all groove weld positions on both plate and pipe, making it the most
              efficient path to full position qualification.
            </p>

            <h2>Test Coupon Preparation</h2>
            <p>
              Proper coupon preparation is critical to a valid performance qualification.
              An improperly prepared coupon can invalidate test results regardless of
              weld quality, and the cost of requalification far exceeds the cost of
              getting the preparation right the first time.
            </p>

            <h3>Base Metal Selection per P-Number</h3>
            <p>
              Per QW-403, the base metal used for the qualification coupon must
              correspond to the P-Number grouping the welder will be welding in
              production. ASME Section IX groups base metals by similar metallurgical
              and welding characteristics. For example, P-No. 1 covers carbon steels
              (SA-36, SA-516 Gr. 70), P-No. 8 covers austenitic stainless steels
              (SA-240 Type 304, Type 316), and P-No. 5A covers chrome-moly steels
              (SA-387 Gr. 11, Gr. 22).
            </p>
            <p>
              A welder qualified on one P-Number is generally limited to that P-Number
              for production welding, with specific exceptions listed in QW-423.
              Qualification on P-No. 1 does not automatically qualify welding on P-No. 8
              material, even if the welder is experienced with both. Each P-Number
              group requires separate qualification unless the applicable code section
              provides specific exemptions.
            </p>

            <h3>Coupon Dimensions per QW-462</h3>
            <p>
              QW-462 specifies minimum coupon dimensions to ensure adequate material
              for specimen extraction. For plate coupons, the minimum width is
              typically 7 inches (178 mm) to allow extraction of the required number
              of bend specimens plus discard material at each end. Coupon length
              must be sufficient to deposit at least 6 inches (152 mm) of weld. For
              pipe coupons, the minimum length of the pipe section must allow for
              specimen removal plus discard sections at the start and stop of the weld.
            </p>

            <h3>Joint Preparation Requirements</h3>
            <p>
              The joint configuration must match the WPS being used for qualification.
              This includes bevel angle, root opening, root face, and any land or
              groove radius specified. Common configurations include single-V groove
              (60-degree or 75-degree included angle), single-bevel, and double-V
              groove designs. Fit-up must be within the tolerances specified in the
              WPS, and the joint must be cleaned of mill scale, rust, oil, and other
              contaminants prior to welding.
            </p>

            <h3>Tack Welding and Backing Considerations</h3>
            <p>
              Tack welds should be placed at the ends of the coupon outside the
              test area, or they must be completely consumed by the production weld.
              If the WPS requires a backing bar or backing strip (per QW-402), the
              coupon must be assembled with backing. Conversely, if the WPS is
              qualified for open-root welding without backing, the test coupon must
              be welded without backing. Using backing when the WPS does not require
              it, or omitting backing when it is required, invalidates the
              qualification per QW-402.1.
            </p>

            <h2>Performing the Qualification Test</h2>
            <p>
              Once the coupon is prepared and the WPS is identified, the actual
              qualification test must follow specific protocols to ensure the
              results are valid and the qualification scope is properly documented.
            </p>

            <h3>Essential Variables That Must Match the WPS</h3>
            <p>
              QW-350 through QW-357 list the essential variables for welder
              performance qualification by process. Unlike procedure qualification,
              which tracks numerous supplementary essential variables, performance
              qualification focuses on a smaller set of variables that directly
              affect the welder&apos;s ability to deposit sound weld metal. Key
              essential variables include:
            </p>
            <ul>
              <li>
                <strong>Welding process (QW-401):</strong> SMAW, GTAW, GMAW, FCAW,
                SAW, or combinations thereof. Each process requires separate
                qualification.
              </li>
              <li>
                <strong>Electrode/filler metal type (QW-404):</strong> F-Number
                groupings determine qualification range. A change in F-Number
                requires requalification.
              </li>
              <li>
                <strong>Position (QW-405):</strong> As covered in the position matrix
                above. Adding a position not previously qualified requires a new test.
              </li>
              <li>
                <strong>Backing (QW-402):</strong> A change from backing to no-backing
                (or vice versa) requires requalification for SMAW, GMAW, and FCAW.
              </li>
              <li>
                <strong>Base metal thickness range (QW-403):</strong> Coupon thickness
                determines the qualified production thickness range per QW-452.
              </li>
              <li>
                <strong>Transfer mode (QW-409):</strong> For GMAW, a change from
                spray to short-circuit transfer, or vice versa, requires
                requalification.
              </li>
            </ul>

            <h3>Welder Identification Requirements</h3>
            <p>
              Each welder must be assigned a unique identification mark, number, or
              symbol per QW-301.3. This identifier is used on the WPQ form, on test
              coupons, and on all production welds. The identification system must be
              documented and traceable. In practice, most fabricators assign a welder
              stamp number that appears on the WPQ, weld maps, and radiographic film
              identification.
            </p>

            <h3>Witness and Supervision Requirements</h3>
            <p>
              The qualification test must be witnessed by a qualified representative
              of the organization, typically a welding inspector, QC manager, or
              designated examiner. The witness verifies that the welder follows the
              WPS parameters, uses the correct filler materials, and does not receive
              unauthorized assistance. The witness must sign the completed WPQ form,
              and their credentials should be documented. For ASME Code work, the
              Authorized Inspector (AI) may also witness performance qualifications,
              although this is not universally required for all code sections.
            </p>

            <h3>Documentation During Testing</h3>
            <p>
              During the test, the following must be recorded: welder identification,
              WPS number and revision, base metal specification and P-Number, filler
              metal classification and F-Number, welding position, date of test,
              preheat and interpass temperatures (if applicable), shielding gas type
              and flow rate (for gas-shielded processes), and any deviations or
              observations. This documentation forms the basis of the WPQ record
              and must be completed before specimens are removed from the coupon.
            </p>

            <h2>Mechanical Testing: Guided Bend Tests</h2>
            <p>
              Guided bend testing is the primary mechanical test method for welder
              performance qualification under ASME Section IX. The bend test evaluates
              the soundness and ductility of the weld by forcing a specimen to conform
              to a specified radius, revealing defects such as lack of fusion,
              porosity, slag inclusions, and cracks that may not be visible on the
              weld surface.
            </p>

            <h3>Face Bend vs. Root Bend vs. Side Bend</h3>
            <p>
              The type of bend test depends on coupon thickness:
            </p>
            <ul>
              <li>
                <strong>Face bend:</strong> The weld face (last pass deposited) is on
                the outer radius of the bend. Evaluates the cap pass and upper weld
                layers for defects.
              </li>
              <li>
                <strong>Root bend:</strong> The weld root is on the outer radius. This
                is the more critical test for open-root welds because it evaluates
                root penetration and root-pass fusion.
              </li>
              <li>
                <strong>Side bend:</strong> The specimen is bent so that the full cross
                section of the weld is in tension. Required when the coupon thickness
                exceeds 3/8 inch (9.5 mm) and provides a more comprehensive evaluation
                of the entire weld thickness.
              </li>
            </ul>

            <h3>Bend Test Specimen Requirements (QW-462)</h3>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Coupon Thickness</th>
                    <th className="px-5 py-3 font-semibold">Test Type</th>
                    <th className="px-5 py-3 font-semibold">Specimen Width</th>
                    <th className="px-5 py-3 font-semibold">Bend Radius</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3">Up to 3/8" (9.5 mm)</td>
                    <td className="px-5 py-3">Face + Root Bend</td>
                    <td className="px-5 py-3">1.5" (38 mm)</td>
                    <td className="px-5 py-3">2t (for P-No. 1)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Over 3/8" to 3/4" (9.5-19 mm)</td>
                    <td className="px-5 py-3">Side Bend</td>
                    <td className="px-5 py-3">3/8" (9.5 mm)</td>
                    <td className="px-5 py-3">2t (for P-No. 1)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Over 3/4" (19 mm)</td>
                    <td className="px-5 py-3">Side Bend</td>
                    <td className="px-5 py-3">3/8" (9.5 mm)</td>
                    <td className="px-5 py-3">2t (for P-No. 1)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Pipe, any wall thickness</td>
                    <td className="px-5 py-3">Face + Root (or Side if &gt;3/8")</td>
                    <td className="px-5 py-3">Per QW-462.2</td>
                    <td className="px-5 py-3">Per QW-466.1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Note that bend radius varies by material. P-No. 1 carbon steels use
              a 2t bend radius (where t is the specimen thickness). Higher-alloy
              materials may require larger radii per QW-466.1, Table QW-466.1 to
              account for reduced ductility.
            </p>

            <h3>Guided Bend Test Jig Requirements (QW-466)</h3>
            <p>
              QW-466 defines the dimensions of the guided bend test jig, including
              the plunger width, die width, and die radius. The jig dimensions are
              calculated based on specimen thickness and the required bend radius.
              For a standard P-No. 1 bend test with a 2t radius, the plunger width
              equals 4t, and the die width equals 6t + 1/8 inch. The jig must be
              calibrated and maintained to ensure consistent, reproducible results.
              Roller-type and wrap-around jigs are acceptable alternatives to the
              standard guided bend jig provided they produce equivalent deformation.
            </p>

            <h3>Acceptance Criteria per QW-163</h3>
            <p>
              After bending, the convex surface of each specimen is examined for
              defects. Per QW-163, the specimen is acceptable if:
            </p>
            <ul>
              <li>
                No single open discontinuity exceeds 1/8 inch (3.2 mm) measured in
                any direction on the convex surface
              </li>
              <li>
                The sum of all open discontinuities exceeding 1/32 inch (0.8 mm)
                but less than or equal to 1/8 inch (3.2 mm) does not exceed 3/8 inch
                (9.5 mm)
              </li>
              <li>
                Cracks at the corners of the specimen during testing are not considered
                unless there is definite evidence that they result from slag inclusions
                or other internal defects
              </li>
              <li>
                For cladding or corrosion-resistant overlay, no open discontinuity
                exceeding 1/16 inch (1.6 mm) measured in any direction is permitted
                in the cladding
              </li>
            </ul>

            <h2>Radiographic Testing as an Alternative</h2>
            <p>
              ASME Section IX permits radiographic testing (RT) as an alternative
              to guided bend tests for groove weld performance qualification under
              specific conditions defined in QW-304. This option can be advantageous
              when bend testing equipment is not readily available, when testing
              high-alloy materials that are prone to cracking during bending, or
              when the production work will be radiographed anyway.
            </p>

            <h3>When RT Can Replace Bend Tests (QW-304)</h3>
            <p>
              QW-304 allows RT in lieu of bend tests for groove weld performance
              qualification. The radiograph may be taken of the test coupon itself
              or, in some cases, of the welder&apos;s initial production weld. If the
              production weld option is used, a minimum of 6 inches (152 mm) of weld
              length must be examined. For pipe, the entire circumference of the test
              weld must be radiographed.
            </p>

            <h3>Acceptance Criteria per QW-191</h3>
            <p>
              Radiographic acceptance criteria for welder performance qualification
              are defined in QW-191.2. The criteria are slightly different from those
              used for production weld acceptance and include:
            </p>
            <ul>
              <li>
                <strong>Linear indications:</strong> Any type of crack, lack of fusion,
                or incomplete penetration is cause for rejection
              </li>
              <li>
                <strong>Rounded indications:</strong> The maximum permissible dimension
                for any single rounded indication is the lesser of 20% of the nominal
                wall thickness or 1/8 inch (3.2 mm)
              </li>
              <li>
                <strong>Clusters of rounded indications:</strong> For any 6-inch length
                of weld, the total area of rounded indications must not exceed the
                limits specified in QW-191.2.2
              </li>
              <li>
                <strong>Aligned indications:</strong> Four or more rounded indications
                in a line separated by 1/16 inch (1.6 mm) or less (edge to edge) are
                unacceptable
              </li>
            </ul>

            <h3>Advantages and Limitations</h3>
            <p>
              RT offers a permanent record of weld quality that can be archived and
              reviewed later. It is non-destructive, preserving the test coupon for
              potential additional testing. However, RT has limitations: it may not
              detect tight cracks oriented parallel to the radiation beam, it requires
              specialized equipment and trained personnel, and the cost per test is
              generally higher than bend testing. Additionally, RT requires compliance
              with radiation safety regulations, which can complicate field testing.
            </p>

            <h3>Density Requirements</h3>
            <p>
              Film density must fall within acceptable ranges per the applicable RT
              procedure, typically 1.8 to 4.0 H&D (Hurter and Driffield) units for
              conventional film radiography. The density through the area of interest
              must be within this range, and the density variation across the weld
              area must not impair defect detectability. For digital radiography (CR
              or DR), equivalent signal-to-noise ratio requirements apply per the
              organization&apos;s approved RT procedure.
            </p>

            <h2>Fillet Weld Qualification Tests</h2>
            <p>
              While groove weld qualification typically qualifies a welder for both
              groove and fillet welds (per QW-303.1), there are situations where a
              separate fillet weld performance qualification is appropriate or
              required. QW-180 governs fillet weld qualification requirements.
            </p>

            <h3>QW-180 Requirements</h3>
            <p>
              A fillet weld qualification test requires the welder to deposit a fillet
              weld on a T-joint or lap-joint test coupon. The test coupon must be
              welded using the WPS that will be used in production, following the
              same essential variable rules as groove weld qualification. The minimum
              coupon length is typically 6 inches (152 mm), and the fillet weld size
              must match the WPS specification.
            </p>

            <h3>Fracture Test Procedure</h3>
            <p>
              One of the primary evaluation methods for fillet weld qualification is
              the fracture test. A section of the welded coupon is loaded until the
              fillet weld fractures. The fracture surfaces are then examined for
              defects including porosity, slag inclusions, lack of fusion, and
              incomplete penetration. Per QW-182, the fractured surface must show
              complete fusion to the root of the joint, and any visible porosity
              must not exceed specified limits. The fracture test reveals internal
              defects that cannot be detected by visual examination alone.
            </p>

            <h3>Macroetch Acceptance Criteria</h3>
            <p>
              In addition to (or in lieu of) the fracture test, a macroetch
              examination may be performed per QW-184. The specimen is cross-sectioned,
              polished, and etched with an appropriate acid solution (typically 5%
              nital for carbon steels) to reveal the weld profile and internal
              structure. Acceptance criteria per QW-184 require:
            </p>
            <ul>
              <li>Complete fusion between the weld and base metal</li>
              <li>Complete fusion between weld passes</li>
              <li>No cracks in the weld or heat-affected zone</li>
              <li>Weld profile that meets minimum throat and leg size requirements</li>
              <li>Concavity or convexity within acceptable limits</li>
              <li>Maximum undercut of 1/32 inch (0.8 mm)</li>
            </ul>

            <h3>When Fillet Weld Tests Are Needed vs. Groove Tests</h3>
            <p>
              Per QW-303.1, a welder who passes a groove weld performance
              qualification is also qualified to make fillet welds within the scope
              of the groove weld qualification (same process, position, and essential
              variables). However, a fillet weld qualification only qualifies the
              welder for fillet welds, not groove welds. Separate fillet weld
              qualification is typically used when a welder performs only fillet
              welding in production and the organization wants to avoid the cost and
              complexity of groove weld testing, or when the welder cannot
              successfully complete a groove weld qualification.
            </p>

            <h2>Test Failures and Retesting</h2>
            <p>
              Not every qualification attempt succeeds. ASME Section IX provides
              structured provisions for retesting in QW-320 that balance the need
              for qualified welders against the requirement for demonstrated
              competence.
            </p>

            <h3>QW-320 Retest Provisions</h3>
            <p>
              When a welder fails a performance qualification test, the disposition
              depends on the nature and extent of the failure:
            </p>

            <h3>Immediate Retest Options</h3>
            <p>
              Per QW-320.1, an immediate retest is permitted when the failure is
              marginal. The welder may make two consecutive test coupons for each
              failed position, and both must pass all required testing. This option
              is appropriate when the failure was due to a minor technique issue
              rather than a fundamental skill deficiency. The immediate retest must
              be performed on the same day or within a short timeframe, and the same
              WPS and test conditions must be used.
            </p>

            <h3>Additional Training Requirements</h3>
            <p>
              Per QW-320.2, when the failure indicates a need for additional practice
              or instruction, the welder must undergo further training before
              retesting. The organization must document the additional training
              provided, including the topics covered, hours of practice, and the
              instructor&apos;s assessment of readiness. After completing additional
              training, the welder may attempt requalification with a single test
              coupon per position.
            </p>

            <h3>Cause Analysis</h3>
            <p>
              Regardless of the retest path chosen, a root cause analysis of the
              failure is good practice. Common causes include:
            </p>
            <ul>
              <li>
                <strong>Inadequate root penetration:</strong> Often caused by excessive
                root face, insufficient root opening, or incorrect electrode angle
              </li>
              <li>
                <strong>Lack of sidewall fusion:</strong> Typically results from
                improper weave technique or insufficient heat input
              </li>
              <li>
                <strong>Excessive porosity:</strong> Usually caused by contamination,
                inadequate shielding gas coverage, or moisture in electrodes
              </li>
              <li>
                <strong>Slag inclusions:</strong> Result from inadequate interpass
                cleaning or improper electrode manipulation
              </li>
              <li>
                <strong>Cracking:</strong> May indicate preheat or interpass temperature
                issues, or use of incorrect filler metal
              </li>
            </ul>

            <h2>Maintaining Qualification After Testing</h2>
            <p>
              Passing the performance qualification test is only the beginning.
              ASME Section IX imposes ongoing requirements to ensure that qualified
              welders maintain their skills through continued use of the qualified
              process and position.
            </p>

            <h3>QW-322 Continuity Requirements</h3>
            <p>
              QW-322.1 establishes that a welder&apos;s qualification remains in effect
              indefinitely, provided the welder uses the qualified process within
              each 6-month period. This is the critical &quot;use it or lose it&quot; rule
              that drives most qualification maintenance activities.
            </p>

            <h3>The 6-Month Rule</h3>
            <p>
              If a welder does not use a specific welding process for a period
              exceeding 6 months, the qualification for that process is revoked per
              QW-322.1(b). The 6-month clock starts from the last date the welder
              used the process on production or maintenance work, not from the date
              of qualification. The revocation applies to the specific process, not
              to all qualifications. A welder qualified in both SMAW and GTAW who
              stops performing SMAW but continues GTAW will lose only the SMAW
              qualification.
            </p>

            <h3>Production Welding as Continuity</h3>
            <p>
              The most straightforward way to maintain continuity is through regular
              production welding. The organization must maintain records showing that
              each welder has used each qualified process within the preceding
              6-month period. Acceptable evidence includes production weld logs,
              weld maps signed by the welder, time sheets showing welding
              assignments, or NDE reports identifying the welder by stamp number.
              The key requirement is traceability: the organization must be able to
              demonstrate, through documented evidence, that the welder used the
              process within the time window.
            </p>

            <h3>Documentation to Maintain</h3>
            <p>
              Effective continuity tracking requires maintaining several types
              of records:
            </p>
            <ul>
              <li>
                <strong>Original WPQ forms:</strong> The baseline qualification record
                with all essential variables, test results, and signatures
              </li>
              <li>
                <strong>Continuity log:</strong> A running record of welding activity
                by process and welder, updated at least every 6 months
              </li>
              <li>
                <strong>Supporting evidence:</strong> Production records, weld maps,
                NDE reports, or other documentation linking the welder to specific
                production work
              </li>
              <li>
                <strong>Renewal records:</strong> If a qualification lapses and the
                welder requalifies, the new WPQ must be documented separately
              </li>
              <li>
                <strong>Audit trail:</strong> Records of who updated continuity
                records, when, and based on what evidence
              </li>
            </ul>

            <h3>QW-461 Position Qualification Summary</h3>
            <p>
              For quick reference, the following table provides a consolidated
              view of the most common qualification scenarios and their resulting
              scope:
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Qualification Scenario</th>
                    <th className="px-5 py-3 font-semibold">Tests Required</th>
                    <th className="px-5 py-3 font-semibold">Resulting Scope</th>
                    <th className="px-5 py-3 font-semibold">Typical Use Case</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Structural plate only</td>
                    <td className="px-5 py-3">3G + 4G plate coupons</td>
                    <td className="px-5 py-3">All plate positions, groove + fillet</td>
                    <td className="px-5 py-3">Building construction, structural steel</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Pressure piping</td>
                    <td className="px-5 py-3">6G pipe coupon</td>
                    <td className="px-5 py-3">All positions, plate + pipe, groove + fillet</td>
                    <td className="px-5 py-3">Power plants, refineries, process piping</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Downhand only</td>
                    <td className="px-5 py-3">1G plate or pipe</td>
                    <td className="px-5 py-3">Flat position only</td>
                    <td className="px-5 py-3">Shop welding with positioners</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Full pipe qualification</td>
                    <td className="px-5 py-3">2G + 5G pipe coupons</td>
                    <td className="px-5 py-3">All positions, plate + pipe, groove + fillet</td>
                    <td className="px-5 py-3">Alternative to 6G when preferred</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Fillet weld only</td>
                    <td className="px-5 py-3">Fillet weld coupon per QW-180</td>
                    <td className="px-5 py-3">Fillet welds only, tested positions</td>
                    <td className="px-5 py-3">Tack welders, light fabrication</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Digital Qualification Tracking with WeldCert</h2>
            <p>
              Managing welder performance qualifications across a fabrication
              organization is a significant administrative undertaking. Each welder
              may hold multiple qualifications across different processes, positions,
              and P-Number groups, each with its own 6-month continuity clock. Manual
              tracking with spreadsheets and paper files is error-prone and creates
              compliance risk.
            </p>
            <p>
              WeldCert transforms qualification management from a reactive,
              paper-based process into a proactive, digital system. Every WPQ is
              stored with its complete essential variable set, test results, and
              supporting documentation. The system automatically tracks continuity
              deadlines and alerts supervisors before qualifications lapse. When an
              auditor or Authorized Inspector requests qualification records, your
              team can produce complete, organized documentation in seconds rather
              than hours.
            </p>
            <p>
              For organizations managing dozens or hundreds of welders across
              multiple job sites, the ability to instantly verify that every welder
              on a project holds current, valid qualifications for the work assigned
              eliminates one of the most common sources of code violations and
              audit findings.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li>
                Welder performance qualification tests under ASME Section IX (QW-300)
                evaluate manipulative skill, not engineering judgment. They prove the
                welder can follow a WPS and deposit sound weld metal.
              </li>
              <li>
                Test position is the single most impactful variable for qualification
                scope. A 6G pipe test qualifies all positions on both plate and pipe,
                making it the most efficient path to full qualification.
              </li>
              <li>
                Guided bend tests per QW-462/QW-163 are the standard mechanical
                evaluation. Side bends replace face and root bends for coupons
                exceeding 3/8 inch thickness.
              </li>
              <li>
                Radiographic testing per QW-304/QW-191 is a valid alternative to
                bend tests. It offers a permanent record but requires specialized
                equipment, trained personnel, and radiation safety compliance.
              </li>
              <li>
                Groove weld qualification also qualifies fillet welds (QW-303.1),
                but fillet weld qualification does not qualify groove welds. Separate
                fillet weld tests per QW-180 are available when groove testing is
                not needed.
              </li>
              <li>
                Failed tests trigger retest provisions under QW-320, allowing
                immediate retesting (two coupons) or retesting after additional
                training with proper documentation.
              </li>
              <li>
                Qualification continuity requires documented use of each qualified
                process within every 6-month period per QW-322. Loss of continuity
                requires requalification.
              </li>
              <li>
                Digital tracking systems like WeldCert eliminate the administrative
                burden of continuity tracking, provide instant audit-ready reporting,
                and prevent costly qualification lapses.
              </li>
            </ul>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Track Every Qualification, Every Continuity Deadline
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                WeldCert automates welder performance qualification tracking with
                digital WPQ storage, automatic 6-month continuity alerts, and
                instant audit reporting. Stop managing qualifications in spreadsheets.
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
                  href="/blog/welder-qualification-checklist"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Checklist</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Complete Welder Qualification Checklist
                  </h3>
                </Link>
                <Link
                  href="/blog/aws-d1-1-welder-qualification-requirements"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Standards</span>
                  <h3 className="font-semibold text-navy mt-1">
                    AWS D1.1 Welder Qualification Requirements
                  </h3>
                </Link>
                <Link
                  href="/blog/asme-section-ix-continuity-rules"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Compliance</span>
                  <h3 className="font-semibold text-navy mt-1">
                    ASME Section IX Continuity Rules
                  </h3>
                </Link>
                <Link
                  href="/blog/welding-audit-penalties-fines"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Compliance</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Welding Audit Penalties and Fines
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
          <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="welder-performance-qualification-test-guide" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
