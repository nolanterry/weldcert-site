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
  title: "Structural Welding Inspection Checklist for 2026: Before, During, and After",
  description:
    "Complete structural welding inspection checklist covering pre-weld, in-process, and post-weld phases per AWS D1.1 Clause 6. Includes visual acceptance criteria, NDT requirements, and documentation best practices.",
  alternates: { canonical: "/blog/structural-welding-inspection-checklist-2026" },
};

export default function StructuralWeldingInspectionChecklistPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Structural Welding Inspection Checklist for 2026: Before, During, and After",
    "description": "Complete structural welding inspection checklist covering pre-weld, in-process, and post-weld phases per AWS D1.1 Clause 6. Includes visual acceptance criteria, NDT requirements, and documentation best practices.",
    "datePublished": "2026-03-25",
    "dateModified": "2026-03-25",
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
      "@id": "https://weldcert.io/blog/structural-welding-inspection-checklist-2026"
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
        "name": "Structural Welding Inspection Checklist for 2026: Before, During, and After",
        "item": "https://weldcert.io/blog/structural-welding-inspection-checklist-2026"
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
              <span className="text-xs text-gray-400">March 25, 2026</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <AuthorByline slug="nolan-terry" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Structural Welding Inspection Checklist for 2026: Before, During, and After
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A phase-by-phase inspection checklist grounded in AWS D1.1 Clause 6,
              covering everything a CWI needs to verify before the arc strikes,
              while the weld is being deposited, and after the last pass cools.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            {/* ── 1. Introduction ── */}
            <h2>Why Systematic Inspection Matters</h2>
            <p>
              Structural welding failures are almost never random. They trace back
              to a missed check at a specific stage of fabrication — a WPS that
              was never verified against the joint detail, a preheat that fell
              20 degrees below the minimum, or a root pass that was buried under
              fill before anyone looked at it. AWS D1.1 Clause 6 exists to
              prevent exactly these failures by defining a structured inspection
              framework that spans the full lifecycle of every structural weld.
            </p>
            <p>
              Clause 6 divides welding inspection into three phases — before,
              during, and after welding — and assigns specific responsibilities
              to the Certified Welding Inspector (CWI) at each stage. The
              effectiveness of this framework depends on discipline: each check
              must happen at the right time, be evaluated against the right
              acceptance criteria, and be documented in a way that survives
              an audit years later.
            </p>
            <p>
              This checklist distills the requirements of AWS D1.1:2020 Clause 6
              into a practical, phase-by-phase guide. It is written for CWIs,
              quality managers, and fabrication supervisors who need to ensure
              every structural weld meets code before it leaves the shop or
              gets buried under fireproofing on-site.
            </p>

            {/* ── 2. Pre-Weld Inspection Checklist ── */}
            <h2>Pre-Weld Inspection Checklist</h2>
            <p>
              Pre-weld inspection is arguably the most important phase because
              it is the last opportunity to catch problems that become
              unfixable — or extremely expensive — once welding begins. AWS D1.1
              Clause 6.5 requires the inspector to verify a series of items
              before any production welding proceeds.
            </p>

            <h3>Base Metal Verification</h3>
            <p>
              Confirm that the base metal matches the WPS and the contract
              documents. Cross-reference mill test reports (MTRs) against the
              material specification called out in the design drawings. For
              structural steel, you are typically verifying ASTM A36, A572 Gr 50,
              or A992 — but the specific grade and group per AWS D1.1 Table 3.1
              must align with the WPS essential variables.
            </p>
            <ul>
              <li>
                <strong>MTR check:</strong> Verify heat number traceability
                from the MTR to the physical plate or shape
              </li>
              <li>
                <strong>Base metal condition:</strong> No laminations, excessive
                mill scale, rust, oil, or moisture that could affect weld quality
              </li>
              <li>
                <strong>Thickness verification:</strong> Confirm actual thickness
                falls within the qualified range of the WPS
              </li>
            </ul>

            <h3>Joint Fitup and Tolerances</h3>
            <p>
              Joint fitup is one of the most common failure points in
              pre-weld inspection. AWS D1.1 Table 5.3 provides specific
              tolerances for CJP and PJP groove welds, and these are
              not suggestions — they are mandatory acceptance criteria.
            </p>
            <ul>
              <li>
                <strong>Root opening:</strong> Per WPS and Table 5.3, typically
                ±1/16&quot; (1.6 mm) of specified dimension
              </li>
              <li>
                <strong>Root face:</strong> Per WPS, typically ±1/16&quot; (1.6 mm)
              </li>
              <li>
                <strong>Groove angle:</strong> Per WPS, typically +10°/−5° of
                specified angle
              </li>
              <li>
                <strong>Misalignment:</strong> Maximum 1/16&quot; (1.6 mm) for
                statically loaded structures, 0 for cyclically loaded per
                Clause 5.21
              </li>
              <li>
                <strong>Tack welds:</strong> Must meet WPS requirements or be
                removed before welding; cracks in tack welds must be ground
                out completely
              </li>
            </ul>

            <h3>WPS and Welder Qualification Verification</h3>
            <p>
              Before the first arc is struck, the inspector must verify that an
              approved WPS exists for the joint and that every welder assigned
              to the joint holds a current qualification that covers the
              essential variables of that WPS.
            </p>
            <ul>
              <li>
                <strong>WPS availability:</strong> A current, approved WPS must
                be available at the point of welding per Clause 5.5
              </li>
              <li>
                <strong>Welder qualification:</strong> WPQ records must confirm
                qualification for the process, position, base metal group,
                and thickness range per Clause 4
              </li>
              <li>
                <strong>Continuity status:</strong> Welder must have performed
                welding within the qualified scope in the preceding 6 months
                per Clause 4.25
              </li>
            </ul>

            <h3>Preheat and Consumable Verification</h3>
            <p>
              AWS D1.1 Table 3.3 specifies minimum preheat and interpass
              temperatures based on base metal grade, thickness, and welding
              process. Preheat must be verified with a calibrated temperature
              indicator — infrared pyrometers, contact thermometers, or
              temperature-indicating crayons (Tempilstik).
            </p>
            <ul>
              <li>
                <strong>Preheat temperature:</strong> Measured at a distance
                equal to the thickness of the thicker part (minimum 3 inches)
                from the joint
              </li>
              <li>
                <strong>Consumable verification:</strong> Electrode classification,
                lot number, and condition (low-hydrogen electrodes stored per
                AWS D1.1 Clause 5.3.2 — oven temperature 250°F minimum after
                removal from hermetically sealed container)
              </li>
              <li>
                <strong>Shielding gas:</strong> Gas type, mixture ratio, and
                flow rate per WPS requirements
              </li>
            </ul>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Pre-Weld Item</th>
                    <th className="px-5 py-3 font-semibold">Code Reference</th>
                    <th className="px-5 py-3 font-semibold">Accept / Reject Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3">Base metal specification</td>
                    <td className="px-5 py-3">Table 3.1, Clause 5.4</td>
                    <td className="px-5 py-3">MTR matches WPS and drawing; traceable heat number</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Joint fitup — root opening</td>
                    <td className="px-5 py-3">Table 5.3</td>
                    <td className="px-5 py-3">Within ±1/16&quot; of specified dimension</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Joint fitup — groove angle</td>
                    <td className="px-5 py-3">Table 5.3</td>
                    <td className="px-5 py-3">Within +10°/−5° of specified angle</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Joint fitup — misalignment</td>
                    <td className="px-5 py-3">Clause 5.21</td>
                    <td className="px-5 py-3">≤1/16&quot; static; 0 cyclically loaded</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">WPS at point of welding</td>
                    <td className="px-5 py-3">Clause 5.5</td>
                    <td className="px-5 py-3">Current approved WPS accessible to welder</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Welder qualification (WPQ)</td>
                    <td className="px-5 py-3">Clause 4, Table 4.10</td>
                    <td className="px-5 py-3">Current WPQ covering process, position, material, thickness</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Welder continuity</td>
                    <td className="px-5 py-3">Clause 4.25</td>
                    <td className="px-5 py-3">Welding performed within qualified scope in preceding 6 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Preheat temperature</td>
                    <td className="px-5 py-3">Table 3.3</td>
                    <td className="px-5 py-3">≥ minimum per table; measured 3&quot; from joint</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Filler metal classification</td>
                    <td className="px-5 py-3">Clause 5.3, WPS</td>
                    <td className="px-5 py-3">AWS classification and lot match WPS; proper storage verified</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Low-hydrogen electrode storage</td>
                    <td className="px-5 py-3">Clause 5.3.2</td>
                    <td className="px-5 py-3">Oven at 250°F min; max 4-hour exposure after removal</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Shielding gas type and flow</td>
                    <td className="px-5 py-3">WPS</td>
                    <td className="px-5 py-3">Gas type/mix and flow rate per WPS; regulator calibrated</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Backing / purge requirements</td>
                    <td className="px-5 py-3">WPS, Clause 5.10</td>
                    <td className="px-5 py-3">Steel backing fits tightly; purge gas flowing if required</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── 3. During-Weld (In-Process) Inspection ── */}
            <h2>During-Weld (In-Process) Inspection</h2>
            <p>
              In-process inspection catches defects while they can still be
              corrected without scrapping the joint. AWS D1.1 Clause 6.5.2
              requires the inspector to observe welding operations and verify
              compliance with the WPS throughout the welding process.
            </p>

            <h3>Interpass Temperature Monitoring</h3>
            <p>
              Interpass temperature must be monitored continuously during
              multi-pass welding. AWS D1.1 Table 3.3 specifies maximum interpass
              temperatures (typically 600°F / 315°C for most structural steels).
              Exceeding the maximum can degrade mechanical properties in the HAZ,
              while dropping below minimum preheat between passes can promote
              hydrogen-assisted cracking.
            </p>
            <ul>
              <li>
                <strong>Measurement location:</strong> On the base metal adjacent
                to the weld, within 3 inches of the joint, on the side where
                the next pass will be deposited
              </li>
              <li>
                <strong>Frequency:</strong> Before each pass on critical joints;
                at minimum, periodically verified during production welding
              </li>
              <li>
                <strong>Instrument calibration:</strong> Temperature measurement
                devices must be calibrated per the shop quality manual
              </li>
            </ul>

            <h3>Weld Profile and Bead Sequence Observation</h3>
            <p>
              Observe each pass for proper profile, penetration, and bead
              placement. Root passes are the most critical — a defective root
              that gets buried under fill passes becomes an expensive NDT
              finding or, worse, an in-service failure.
            </p>
            <ul>
              <li>
                <strong>Root pass:</strong> Verify complete penetration and
                fusion at root; no undercut, overlap, or incomplete fusion
              </li>
              <li>
                <strong>Hot pass:</strong> Applied within required time to
                prevent root cracking; proper fusion with root pass
              </li>
              <li>
                <strong>Fill and cap passes:</strong> Proper bead placement,
                interpass cleaning (slag removal), and tie-in to previous passes
              </li>
              <li>
                <strong>Multi-pass sequence:</strong> Per WPS requirements,
                especially for thick joints where sequence affects residual
                stress distribution
              </li>
            </ul>

            <h3>Electrode and Wire Handling</h3>
            <p>
              Improper handling of consumables is a subtle but significant
              source of weld defects. During in-process inspection, verify:
            </p>
            <ul>
              <li>
                <strong>Low-hydrogen electrode exposure:</strong> E70XX
                low-hydrogen electrodes (E7018, E7016) must not be exposed to
                atmosphere for more than 4 hours per Clause 5.3.2; track
                removal time from oven
              </li>
              <li>
                <strong>Wire feed condition:</strong> GMAW/FCAW wire free of
                rust, kinks, and contamination; liner in good condition
              </li>
              <li>
                <strong>Electrode diameter:</strong> Matches WPS requirements
                for the current pass and position
              </li>
            </ul>

            <h3>Shielding Gas and Welding Parameters</h3>
            <p>
              Verify shielding gas flow rate (typically 30–45 CFH for GMAW)
              and confirm no drafts are disrupting coverage. Check polarity
              (DCEP for most SMAW/GMAW/FCAW; DCEN for GTAW), travel speed
              consistency with the WPS range, and voltage/amperage within
              the qualified range. Use a calibrated clamp meter to verify
              parameters when output appears suspect.
            </p>

            {/* ── 4. Post-Weld Visual Inspection ── */}
            <h2>Post-Weld Visual Inspection</h2>
            <p>
              Post-weld visual inspection (VT) is the primary acceptance method
              for structural welds per AWS D1.1. Clause 6.9 requires that all
              welds be visually inspected, and Table 6.1 defines the specific
              acceptance criteria. VT must be performed before any required
              NDT, as welds that fail visual inspection should not proceed
              to more expensive NDT methods.
            </p>

            <h3>AWS D1.1 Table 6.1 Acceptance Criteria</h3>
            <p>
              Table 6.1 distinguishes between statically loaded structures and
              cyclically loaded (fatigue-critical) structures. Cyclically loaded
              connections have stricter acceptance criteria because even small
              discontinuities act as stress risers under repeated loading.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Discontinuity</th>
                    <th className="px-5 py-3 font-semibold">Static (Non-tubular)</th>
                    <th className="px-5 py-3 font-semibold">Cyclic (Non-tubular)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Cracks</td>
                    <td className="px-5 py-3">Not permitted</td>
                    <td className="px-5 py-3">Not permitted</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Incomplete fusion</td>
                    <td className="px-5 py-3">Not permitted</td>
                    <td className="px-5 py-3">Not permitted</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Crater cracks</td>
                    <td className="px-5 py-3">Not permitted</td>
                    <td className="px-5 py-3">Not permitted</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Undercut — depth</td>
                    <td className="px-5 py-3">≤1/32&quot; for any length</td>
                    <td className="px-5 py-3">≤0.01&quot; for any length</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Porosity — max diameter</td>
                    <td className="px-5 py-3">≤3/32&quot; for groove; ≤3/32&quot; for fillet</td>
                    <td className="px-5 py-3">≤3/32&quot; for groove; ≤3/32&quot; for fillet</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Porosity — frequency</td>
                    <td className="px-5 py-3">Sum ≤3/8&quot; in any linear inch</td>
                    <td className="px-5 py-3">Sum ≤3/8&quot; in any linear inch</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Reinforcement (t ≤ 1&quot;)</td>
                    <td className="px-5 py-3">≤1/8&quot;</td>
                    <td className="px-5 py-3">≤1/8&quot;</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Reinforcement (t &gt; 1&quot;)</td>
                    <td className="px-5 py-3">≤3/16&quot;</td>
                    <td className="px-5 py-3">≤3/16&quot;</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Fillet weld profile</td>
                    <td className="px-5 py-3">Convexity ≤0.07 × weld width + 1/16&quot;</td>
                    <td className="px-5 py-3">Convexity ≤0.07 × weld width + 1/16&quot;</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Weld size (fillet)</td>
                    <td className="px-5 py-3">Undersize ≤1/16&quot; for 10% of length</td>
                    <td className="px-5 py-3">Undersize ≤1/16&quot; for 10% of length</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Weld Profile Requirements</h3>
            <p>
              AWS D1.1 Figure 5.4 defines acceptable and unacceptable weld
              profiles for groove and fillet welds. The inspector must verify:
            </p>
            <ul>
              <li>
                <strong>Groove welds:</strong> Smooth transition to base metal;
                reinforcement within limits; no abrupt changes in cross-section;
                no overlap at toes
              </li>
              <li>
                <strong>Fillet welds:</strong> Legs meet or exceed specified
                size; profile convexity within limits; smooth transition at toes;
                no excessive concavity that reduces throat dimension
              </li>
              <li>
                <strong>Measurement tools:</strong> Use calibrated fillet weld
                gauges (AWS, Cambridge, or equivalent) and straight-edge for
                reinforcement; V-WAC gauges for undercut depth
              </li>
            </ul>

            <h3>Crack Detection During Visual Inspection</h3>
            <p>
              Cracks are never acceptable regardless of size, location, or
              loading condition. Effective crack detection requires minimum 100
              foot-candles (1000 lux) per AWS B1.11, a clean surface free of
              slag and spatter, viewing from multiple angles (cracks are often
              visible only at specific angles to light), and 2-5x magnification
              for suspect areas.
            </p>

            {/* ── 5. NDT Inspection Requirements ── */}
            <h2>NDT Inspection Requirements</h2>
            <p>
              Not every structural weld requires NDT beyond visual inspection.
              AWS D1.1 Clause 6 Part E (Ultrasonic Testing) and Part F
              (Radiographic Testing) define when volumetric examination is
              required, the selection criteria for UT versus RT, and the
              minimum inspection rates by connection type.
            </p>

            <h3>When NDT Is Required</h3>
            <p>
              AWS D1.1 Clause 6.14 specifies NDT requirements based on the
              type of joint and loading condition. The Engineer of Record (EOR)
              may specify additional NDT requirements beyond the code minimums
              in the contract documents.
            </p>
            <ul>
              <li>
                <strong>CJP groove welds in tension:</strong> 100% UT or RT
                per Clause 6.14.4 when required by contract documents or
                specified by the EOR
              </li>
              <li>
                <strong>CJP groove welds in compression:</strong> NDT rate per
                contract documents; Clause 6.14.6 provides guidance on
                reduced inspection rates
              </li>
              <li>
                <strong>T- and corner joints with CJP:</strong> UT preferred
                over RT due to geometry limitations per Clause 6.14.5
              </li>
              <li>
                <strong>Fillet welds:</strong> NDT not typically required by
                code; may be specified by EOR for critical connections
              </li>
            </ul>

            <h3>UT vs. RT Selection Criteria</h3>
            <p>
              UT (Clause 6 Part E) excels at detecting planar defects — lack of
              fusion and cracks — and works on T-joints and corner joints where
              RT geometry is impractical. It requires a Level II or III UT
              technician per SNT-TC-1A and applies to thicknesses 5/16&quot; and
              greater. RT (Clause 6 Part F) produces a permanent film record
              and is superior for volumetric defects (porosity, slag inclusions)
              in butt joints. Film density must be 1.8–4.0 with IQI selection
              per Table 6.4.
            </p>

            <h3>MT/PT for Surface-Breaking Defects</h3>
            <p>
              Magnetic particle testing (MT) and liquid penetrant testing (PT)
              detect surface-breaking defects too small for VT. Per Clause
              6.14.7, MT is preferred for ferromagnetic steels (detects surface
              and near-surface cracks, incomplete fusion at toes, lamellar
              tearing), while PT is used for non-magnetic materials. MT/PT
              should be performed after adequate cooling — minimum 48 hours
              for steels susceptible to delayed hydrogen cracking in
              thicknesses over 1-1/2&quot;.
            </p>

            <h3>Inspection Rates by Connection Type</h3>
            <p>
              AWS D1.1 defers NDT rates to the EOR and contract documents, but
              AISC 341 (Seismic Provisions) specifies 100% UT or RT for
              demand-critical welds such as beam-to-column CJP flange welds in
              special moment frames. Non-demand-critical CJP welds are typically
              inspected at 25%–100% depending on connection category. Clause
              6.14.6 allows reduced NDT rates when initial inspection
              demonstrates consistently acceptable quality, subject to EOR
              approval.
            </p>

            {/* ── 6. Documentation Requirements for Each Phase ── */}
            <h2>Documentation Requirements for Each Phase</h2>
            <p>
              Documentation transforms inspection from a momentary observation
              into a permanent quality record. AWS D1.1 Clause 6.4 requires
              that inspection records be maintained and made available to the
              owner and EOR. The following requirements apply to each phase.
            </p>

            <h3>What to Record at Each Stage</h3>
            <p>
              Every inspection activity must be documented in sufficient detail
              to reconstruct the inspection years later. At minimum, records
              must capture:
            </p>
            <ul>
              <li>
                <strong>Pre-weld:</strong> Joint identification, WPS number,
                base metal heat numbers, fitup measurements, preheat
                temperature readings, welder identification and WPQ number,
                consumable lot numbers, date and time of inspection
              </li>
              <li>
                <strong>In-process:</strong> Interpass temperature readings
                (with time stamps), any deviations from WPS parameters
                observed, passes witnessed, corrective actions directed
              </li>
              <li>
                <strong>Post-weld:</strong> Visual inspection results for
                every acceptance criterion in Table 6.1, weld size
                measurements, any repairs required, final accept/reject
                decision, inspector identification and date
              </li>
            </ul>

            <h3>Inspector Sign-Off Points</h3>
            <p>
              AWS D1.1 requires inspector sign-off at specific hold points in
              the fabrication sequence. These are not optional — production
              should not proceed past a hold point without documented
              inspector approval:
            </p>
            <ul>
              <li>
                <strong>Hold Point 1:</strong> Pre-weld acceptance — fitup,
                WPS, welder qualification, preheat all verified
              </li>
              <li>
                <strong>Hold Point 2:</strong> Root pass acceptance — for
                CJP groove welds, the root pass should be inspected before
                fill passes are deposited (this is a best practice; Clause 6
                does not explicitly mandate it but most quality programs do)
              </li>
              <li>
                <strong>Hold Point 3:</strong> Post-weld visual acceptance —
                complete weld evaluated against Table 6.1
              </li>
              <li>
                <strong>Hold Point 4:</strong> NDT completion — all required
                NDT performed and results documented before release for
                painting, fireproofing, or shipment
              </li>
            </ul>

            <h3>Photo Documentation and Traceability</h3>
            <p>
              While AWS D1.1 does not mandate photos, owners and EORs
              increasingly expect them. Include a weld ID tag in every image,
              photograph fitup before welding, capture defects with a scale
              reference, and use consistent naming (project-joint-phase-date).
              Full traceability — linking every weld to its welder, WPS,
              consumable lot, base metal heat, and accepting inspector — is
              critical for root cause analysis, regulatory compliance, and
              liability protection.
            </p>

            {/* ── 7. Common Inspection Failures and How to Avoid Them ── */}
            <h2>Common Inspection Failures and How to Avoid Them</h2>
            <p>
              Analysis of structural welding rejection data consistently shows
              the same defect types appearing across fabrication shops. The
              following table summarizes the most common rejection causes based
              on industry data and their corresponding AWS D1.1 acceptance
              criteria. Knowing where failures cluster allows inspection programs
              to focus resources effectively.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Rejection Cause</th>
                    <th className="px-5 py-3 font-semibold">Approx. Frequency</th>
                    <th className="px-5 py-3 font-semibold">AWS D1.1 Criteria</th>
                    <th className="px-5 py-3 font-semibold">Prevention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Undersized fillet weld</td>
                    <td className="px-5 py-3">22%</td>
                    <td className="px-5 py-3">Table 6.1 — undersize ≤1/16&quot; for ≤10% of length</td>
                    <td className="px-5 py-3">Fillet gauge checks every 12&quot;; train welders on gauge use</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Incomplete fusion (UT finding)</td>
                    <td className="px-5 py-3">18%</td>
                    <td className="px-5 py-3">Table 6.1 — not permitted</td>
                    <td className="px-5 py-3">Proper joint prep; adequate amperage; correct travel angle</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Excessive undercut</td>
                    <td className="px-5 py-3">15%</td>
                    <td className="px-5 py-3">Table 6.1 — ≤1/32&quot; static; ≤0.01&quot; cyclic</td>
                    <td className="px-5 py-3">Reduce voltage/travel speed; proper electrode angle</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Porosity (surface or subsurface)</td>
                    <td className="px-5 py-3">12%</td>
                    <td className="px-5 py-3">Table 6.1 — ≤3/32&quot; diameter; ≤3/8&quot; per inch</td>
                    <td className="px-5 py-3">Gas coverage; clean base metal; dry consumables</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Excessive reinforcement</td>
                    <td className="px-5 py-3">10%</td>
                    <td className="px-5 py-3">Table 6.1 — ≤1/8&quot; (t ≤ 1&quot;); ≤3/16&quot; (t &gt; 1&quot;)</td>
                    <td className="px-5 py-3">Control travel speed; proper number of fill passes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Slag inclusions (UT/RT finding)</td>
                    <td className="px-5 py-3">9%</td>
                    <td className="px-5 py-3">Clause 6 Part E/F acceptance tables</td>
                    <td className="px-5 py-3">Thorough interpass cleaning; proper bead placement</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Cracks</td>
                    <td className="px-5 py-3">7%</td>
                    <td className="px-5 py-3">Table 6.1 — not permitted</td>
                    <td className="px-5 py-3">Preheat per Table 3.3; low-hydrogen practice; proper interpass</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Arc strikes on base metal</td>
                    <td className="px-5 py-3">4%</td>
                    <td className="px-5 py-3">Clause 5.29 — must be ground smooth</td>
                    <td className="px-5 py-3">Welder training; proper electrode holders; strike plates</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Improper weld profile</td>
                    <td className="px-5 py-3">3%</td>
                    <td className="px-5 py-3">Figure 5.4 — acceptable profiles</td>
                    <td className="px-5 py-3">Technique training; correct parameters for position</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The top three causes — undersized fillets, incomplete fusion,
              and excessive undercut — account for over half of all structural
              welding rejections. Targeted training and in-process inspection
              focused on these three items will produce the greatest reduction
              in rejection rates.
            </p>

            {/* ── 8. Inspector Qualification Requirements ── */}
            <h2>Inspector Qualification Requirements</h2>
            <p>
              AWS D1.1 Clause 6.1.4 requires that welding inspection be
              performed by personnel qualified in accordance with AWS QC1,
              Standard for AWS Certification of Welding Inspectors. The
              inspector&apos;s qualifications are as fundamental to code
              compliance as the welder&apos;s qualifications.
            </p>

            <h3>CWI and SCWI Certification per AWS QC1</h3>
            <p>
              AWS QC1 defines three levels of welding inspector certification:
            </p>
            <ul>
              <li>
                <strong>Certified Associate Welding Inspector (CAWI):</strong>{" "}
                May perform inspection under the direct supervision of a CWI
                or SCWI; cannot independently accept or reject welds
              </li>
              <li>
                <strong>Certified Welding Inspector (CWI):</strong> The
                standard qualification for independent welding inspection;
                authorized to accept and reject welds per applicable codes;
                required for AWS D1.1 compliance in most jurisdictions
              </li>
              <li>
                <strong>Senior Certified Welding Inspector (SCWI):</strong>{" "}
                Advanced certification for inspectors who develop procedures,
                evaluate complex situations, and supervise other inspectors;
                requires additional experience and testing
              </li>
            </ul>

            <h3>Visual Acuity Requirements</h3>
            <p>
              Every welding inspector must demonstrate adequate visual acuity
              to perform visual inspection. AWS QC1 requires:
            </p>
            <ul>
              <li>
                <strong>Near vision:</strong> Jaeger J2 minimum at 12 inches,
                with or without corrective lenses, verified annually by an
                eye care professional
              </li>
              <li>
                <strong>Color perception:</strong> Ability to distinguish and
                differentiate colors used in inspection processes (required for
                MT and PT interpretation)
              </li>
              <li>
                <strong>Documentation:</strong> Current vision test results
                must be maintained as part of inspector qualification records
              </li>
            </ul>

            <h3>Experience and Education Requirements</h3>
            <p>
              CWI certification requires a combination of education and welding-related
              experience. AWS QC1 allows multiple paths:
            </p>
            <ul>
              <li>
                <strong>Path 1:</strong> High school diploma or equivalent plus
                5 years of welding-related experience
              </li>
              <li>
                <strong>Path 2:</strong> Associate degree in a welding-related
                field plus 3 years of experience
              </li>
              <li>
                <strong>Path 3:</strong> Bachelor&apos;s degree in engineering or
                a welding-related field plus 1 year of experience
              </li>
              <li>
                <strong>Certification maintenance:</strong> CWI certification
                is valid for 3 years; renewal requires documented continuing
                education or re-examination
              </li>
            </ul>

            {/* ── 9. Digital Inspection Tracking ── */}
            <h2>Digital Inspection Tracking</h2>
            <p>
              Paper-based inspection systems fail predictably: forms get lost,
              handwriting is illegible, data entry lags production, and pulling
              records for an audit takes days. The complexity of structural
              welding inspection — multiple check items across three phases for
              every joint — makes digital tracking practically necessary for
              any shop running more than a handful of welders. WeldCert mirrors
              this phase-based workflow: pre-weld checklists that block
              production until verified, time-stamped in-process logs, and
              post-weld acceptance records that generate audit-ready reports
              with a single export.
            </p>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Inspection Records That Survive Any Audit
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                WeldCert gives your CWIs a phase-by-phase digital checklist
                tied directly to AWS D1.1 acceptance criteria — pre-weld,
                in-process, and post-weld. Every sign-off is time-stamped,
                traceable, and audit-ready from day one.
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

            {/* ── 10. Key Takeaways ── */}
            <h2>Key Takeaways</h2>
            <ul>
              <li>
                Structural welding inspection per AWS D1.1 Clause 6 is a
                three-phase process — pre-weld, in-process, and post-weld —
                and each phase has specific verification items that must be
                completed before the next phase begins.
              </li>
              <li>
                Pre-weld inspection is the most cost-effective quality control
                point: catching a fitup error before welding costs minutes,
                while finding it after welding costs hours of gouging, repair,
                and re-inspection.
              </li>
              <li>
                AWS D1.1 Table 6.1 defines the visual acceptance criteria
                that apply to every structural weld; cyclically loaded
                structures have stricter limits on undercut and other
                discontinuities than statically loaded structures.
              </li>
              <li>
                NDT requirements (UT per Clause 6 Part E, RT per Part F)
                depend on joint type, loading condition, and contract documents;
                UT is generally preferred for T-joints and thick sections,
                while RT provides a permanent record for butt joints.
              </li>
              <li>
                Documentation must be complete, traceable, and audit-ready at
                every phase — joint identification, WPS, welder ID, consumable
                lots, preheat readings, acceptance decisions, and inspector
                sign-off must all be recorded.
              </li>
              <li>
                The most common structural welding rejections — undersized
                fillets, incomplete fusion, and excessive undercut — account
                for over half of all findings and can be significantly reduced
                with targeted in-process inspection and welder training.
              </li>
              <li>
                Inspectors must hold CWI or SCWI certification per AWS QC1,
                maintain Jaeger J2 visual acuity verified annually, and meet
                education and experience requirements appropriate to their
                certification level.
              </li>
              <li>
                Digital inspection tracking eliminates the documentation gaps,
                lost records, and retrieval delays that make paper-based
                systems a liability during audits and dispute resolution.
              </li>
            </ul>

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
                    AWS D1.1 Welder Qualification Requirements
                  </h3>
                </Link>
                <Link
                  href="/blog/welder-qualification-checklist"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Process</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Complete Welder Qualification Checklist
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
                <Link
                  href="/blog/weld-tracking-software-vs-spreadsheets"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Technology</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Weld Tracking Software vs Spreadsheets
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
          <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="structural-welding-inspection-checklist-2026" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}