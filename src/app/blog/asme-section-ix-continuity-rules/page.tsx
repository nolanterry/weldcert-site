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
  title: "ASME Section IX Continuity Rules: When Welders Must Requalify",
  description:
    "How often should welders demonstrate continuity? Break down the 6-month rule, production welding requirements, and requalification triggers under ASME Section IX QW-322, plus essential variables that affect qualification validity.",
  alternates: { canonical: "/blog/asme-section-ix-continuity-rules" },
};

export default function AsmeSectionIxContinuityRulesPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "ASME Section IX Continuity Rules: When Welders Must Requalify",
    description:
      "How often should welders demonstrate continuity? Break down the 6-month rule, production welding requirements, and requalification triggers under ASME Section IX QW-322, plus essential variables that affect qualification validity.",
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
      "@id": "https://weldcert.io/blog/asme-section-ix-continuity-rules",
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
        name: "ASME Section IX Continuity Rules: When Welders Must Requalify",
        item: "https://weldcert.io/blog/asme-section-ix-continuity-rules",
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
              <span className="text-xs text-gray-400">12 min read</span>
            </div>
            <AuthorByline slug="nolan-terry" />
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              ASME Section IX Continuity Rules: When Welders Must Requalify
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              How often should welders demonstrate continuity? Break down the 6-month rule, production welding
              requirements, and requalification triggers under ASME Section IX QW-322, plus essential variables that
              affect qualification validity.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            {/* 1 */}
            <h2>Understanding ASME Section IX Qualification Continuity</h2>
            <p>
              A welder&rsquo;s performance qualification under ASME Section IX does not expire like a driver&rsquo;s
              license with a fixed renewal date. Instead, it remains valid indefinitely &mdash; as long as the welder
              maintains continuity by using the qualified process within defined time intervals. This is the
              &ldquo;continuity rule,&rdquo; and it is governed by QW-322.
            </p>
            <p>
              The purpose of the continuity requirement is straightforward: welding is a psychomotor skill that
              degrades without practice. A welder who has not struck an arc with SMAW in eight months may retain
              theoretical knowledge but will likely have diminished hand skill, bead control, and spatial awareness for
              that specific process. The six-month continuity window is the code&rsquo;s mechanism for ensuring that
              qualified welders maintain active proficiency.
            </p>
            <p>
              The consequences of a continuity lapse are equally straightforward: the qualification ceases to be valid,
              and all welds performed after the lapse date by that welder using that process are, from a code
              standpoint, performed by an unqualified person. There is no grace period, no automatic extension, and no
              administrative remedy other than requalification.
            </p>

            {/* 2 */}
            <h2>QW-322: The Six-Month Rule Explained</h2>
            <p>
              QW-322.1 states the core requirement: a welder&rsquo;s or welding operator&rsquo;s qualification for a
              specific welding process remains in effect as long as the welder uses that process, as documented by the
              employer, within each six-month period. The key elements of this requirement are:
            </p>
            <h3>Process-Specific Tracking</h3>
            <p>
              Continuity is tracked independently for each welding process. A welder qualified in both SMAW and GMAW
              must demonstrate use of <em>each</em> process within every six-month period. Using GMAW every day does
              not maintain the SMAW qualification. If the welder goes seven months without using SMAW, the SMAW
              qualification lapses &mdash; even if the welder has been welding continuously with GMAW during that
              period.
            </p>
            <p>
              This process-specific tracking is the single most common source of continuity lapses in multi-process
              shops. A welder who is qualified in three processes (SMAW, GMAW, FCAW) has three independent six-month
              clocks running simultaneously. If the shop&rsquo;s production mix shifts and one process is not used for
              an extended period, that qualification silently lapses unless someone is tracking the individual clocks.
            </p>
            <h3>What Counts as &ldquo;Use&rdquo; of the Process</h3>
            <p>
              QW-322.1 requires that the welder &ldquo;has welded using a specific welding process.&rdquo; The code
              does not define a minimum amount of welding &mdash; a single production weld using the process is
              sufficient to reset the six-month clock. However, the use must be:
            </p>
            <ul>
              <li>
                <strong>Documented:</strong> The employer must have a record that the welder used the process. This can
                be a production weld log, a daily activity report, a timesheet referencing the process, or a
                continuity log entry signed by a supervisor.
              </li>
              <li>
                <strong>Production welding or maintenance/repair welding:</strong> Practice welds on scrap material,
                training exercises, and demonstration welds generally do not satisfy the continuity requirement unless
                the employer&rsquo;s quality program explicitly accepts them. The intent is that the welder is
                performing actual work under production conditions.
              </li>
              <li>
                <strong>Using the specific process:</strong> SMAW continuity requires SMAW welding. GMAW-S
                (short-circuit) and GMAW (spray/pulse) are the same process (GMAW) for continuity purposes &mdash;
                using either one resets the GMAW continuity clock. However, FCAW and GMAW are different processes,
                so FCAW production does not maintain GMAW continuity.
              </li>
            </ul>

            <h3>QW-322.1: Documentation Requirements</h3>
            <p>
              The code requires that continuity be &ldquo;documented by the employer.&rdquo; This means the employer
              must maintain records that demonstrate, for each welder and each process, that the process was used
              within the preceding six months. Acceptable documentation includes:
            </p>
            <ul>
              <li>A continuity log with the welder&rsquo;s name, process, date of last use, and supervisor or QC
                verification signature</li>
              <li>Production records (weld maps, daily reports) that identify the welder and the process used on
                specific joints</li>
              <li>Timesheet or labor code records that reference the welding process (if the company&rsquo;s labor
                tracking system distinguishes between processes)</li>
            </ul>
            <p>
              The documentation must be maintained and available for review by the Authorized Inspector (AI) or the
              customer&rsquo;s quality representative. If the documentation does not exist at the time of audit, the
              qualification is presumed lapsed, regardless of whether the welder actually used the process.
            </p>

            {/* 3 */}
            <h2>QW-322.2: Reinstatement After a Continuity Lapse</h2>
            <p>
              When a continuity lapse occurs, the welder does not need to repeat the full original qualification test.
              QW-322.2 provides a simplified reinstatement path:
            </p>
            <ul>
              <li>The welder must weld a single test coupon using the lapsed process</li>
              <li>The test coupon may be welded in <strong>any position</strong></li>
              <li>The test coupon must be tested per the original qualification requirements (bend tests or RT)</li>
              <li>Upon passing, the welder&rsquo;s <strong>entire original qualification scope</strong> is reinstated
                &mdash; all positions, thicknesses, and diameters previously qualified</li>
            </ul>
            <p>
              This is a significant advantage of the ASME IX system. A welder who was originally qualified in 3G and
              4G on 1-inch plate (qualifying all positions and unlimited thickness) can reinstate that full scope by
              welding a single coupon in the 1G (flat) position. The reinstatement test restores confidence that the
              welder can still produce a sound weld with the process; the original qualification test established the
              full scope.
            </p>
            <p>
              However, this simplified reinstatement applies only to continuity lapses. If the welder&rsquo;s
              qualification was revoked for cause &mdash; such as failing a production weld examination or being found
              to have produced code-rejectable welds &mdash; reinstatement per QW-322.2 is not available. In that
              case, full requalification per QW-301 is required.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Scenario</th>
                    <th className="px-5 py-3 font-semibold">Requalification Required</th>
                    <th className="px-5 py-3 font-semibold">Scope After Passing</th>
                    <th className="px-5 py-3 font-semibold">Code Reference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Process not used for &gt; 6 months (continuity lapse)</td>
                    <td className="px-5 py-3">Single test coupon, any position</td>
                    <td className="px-5 py-3">Full original scope reinstated</td>
                    <td className="px-5 py-3">QW-322.2</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Failed production weld examination</td>
                    <td className="px-5 py-3">Full requalification per QW-301</td>
                    <td className="px-5 py-3">Only what is re-tested</td>
                    <td className="px-5 py-3">QW-320.2</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Essential variable change (e.g., new P-number)</td>
                    <td className="px-5 py-3">New qualification test for the changed variable</td>
                    <td className="px-5 py-3">Original scope + new variable scope</td>
                    <td className="px-5 py-3">QW-350</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Employer change (new company)</td>
                    <td className="px-5 py-3">New employer may accept prior WPQs or require new testing</td>
                    <td className="px-5 py-3">Per new employer&rsquo;s QC program</td>
                    <td className="px-5 py-3">QW-300.2</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Qualification maintained (process used within 6 months)</td>
                    <td className="px-5 py-3">None &mdash; qualification remains active</td>
                    <td className="px-5 py-3">Full original scope</td>
                    <td className="px-5 py-3">QW-322.1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 4 */}
            <h2>Requalification Triggers: QW-350 Essential Variable Changes</h2>
            <p>
              Continuity lapses are not the only reason a welder must requalify. A change in any essential variable
              beyond the limits defined in QW-350 (for the specific welding process) requires a new qualification
              test. These requalification triggers are independent of continuity &mdash; even a welder who has been
              welding continuously must requalify if the production work requires an essential variable outside the
              current qualification scope.
            </p>
            <h3>Common Requalification Triggers</h3>
            <ul>
              <li>
                <strong>Process change (QW-401):</strong> Adding a new welding process always requires a new
                qualification. A welder qualified for SMAW must test separately for GMAW, FCAW, GTAW, SAW, etc.
              </li>
              <li>
                <strong>Backing change (QW-402.4):</strong> A welder qualified with backing (e.g., backing strip or
                pass) is not qualified for open-root welding without backing. Adding backing capability requires a new
                test &mdash; or the original test must have been performed without backing, which then qualifies both
                with and without.
              </li>
              <li>
                <strong>P-number change beyond cross-qualification limits (QW-403):</strong> While QW-423.1 provides
                generous cross-qualification for P-1 through P-11, P-34, and P-41 through P-49, welding on materials
                outside these groups (e.g., P-21 titanium, P-51 zirconium) requires separate qualification on those
                materials.
              </li>
              <li>
                <strong>F-number change (QW-404):</strong> Changing to a higher F-number or crossing between
                incompatible F-number groups (e.g., F-6 solid wire to F-21 flux-cored wire) requires requalification.
              </li>
              <li>
                <strong>Position change beyond qualified range (QW-405):</strong> While position cross-qualification
                is available per QW-461, certain positions are not covered. A welder qualified in 1G (flat) only is not
                qualified for 3G (vertical) or 4G (overhead).
              </li>
              <li>
                <strong>Vertical progression change (QW-405.3):</strong> Changing from uphill to downhill progression
                is an essential variable change requiring requalification for the new direction.
              </li>
              <li>
                <strong>GMAW transfer mode change (QW-409):</strong> Qualifying with short-circuit transfer does not
                qualify for spray or globular transfer. Qualifying with spray or globular transfer does not qualify for
                short-circuit.
              </li>
              <li>
                <strong>Thickness beyond qualified range (QW-452):</strong> If the production weld thickness exceeds
                the qualified range derived from the test coupon thickness, a new qualification test on a thicker
                coupon is required.
              </li>
              <li>
                <strong>Pipe diameter below qualified minimum (QW-452):</strong> If the production pipe OD is smaller
                than the qualified range (test coupon of 2-7/8&Prime; OD or greater qualifies all diameters; smaller
                test coupons have limited ranges), requalification on a smaller coupon is needed.
              </li>
            </ul>
            <h3>Supplementary Essential Variables</h3>
            <p>
              ASME Section IX also defines supplementary essential variables &mdash; these only apply when impact
              testing is required by the construction code (e.g., ASME Section VIII Division 1, UCS-66). If the
              construction code requires impact testing of the weld metal, additional variables become essential,
              including heat input limits, preheat/interpass temperature ranges, and PWHT conditions. These are
              primarily procedure qualification variables (QW-250) but can affect welder qualification scope in
              specific circumstances.
            </p>

            {/* 5 */}
            <h2>Comparison with AWS D1.1 Continuity Requirements</h2>
            <p>
              AWS D1.1 Clause 4.1.3 has its own continuity requirements that differ from ASME IX in important ways.
              Understanding these differences is essential for shops that work under both codes, because a welder&rsquo;s
              qualification may be valid under one code but lapsed under the other.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Aspect</th>
                    <th className="px-5 py-3 font-semibold">ASME Section IX (QW-322)</th>
                    <th className="px-5 py-3 font-semibold">AWS D1.1 (Clause 4.1.3)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Continuity period</td>
                    <td className="px-5 py-3">6 months per process</td>
                    <td className="px-5 py-3">6 months per process</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">What satisfies continuity</td>
                    <td className="px-5 py-3">Using the process (production welding documented by employer)</td>
                    <td className="px-5 py-3">Welding with the process (production or maintenance welding)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Reinstatement after lapse</td>
                    <td className="px-5 py-3">Single test coupon, any position; full scope reinstated</td>
                    <td className="px-5 py-3">Full requalification per Clause 4 &mdash; no simplified path</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Documentation requirement</td>
                    <td className="px-5 py-3">Employer-documented records with date and process</td>
                    <td className="px-5 py-3">Records maintained by contractor; no specific format mandated</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Qualification portability</td>
                    <td className="px-5 py-3">WPQ belongs to the welder; new employer may accept it (QW-300.2)</td>
                    <td className="px-5 py-3">Qualification generally tied to the contractor; acceptance by new contractor is discretionary</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Revocation for cause</td>
                    <td className="px-5 py-3">QW-320.2: failed production weld requires full requalification</td>
                    <td className="px-5 py-3">Clause 4.1.4: Engineer may revoke qualification based on work quality</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The most significant practical difference is the reinstatement path. Under ASME IX, a continuity lapse
              is recoverable with a single test coupon in any position &mdash; a welder can often be requalified within
              a few hours including bend testing. Under AWS D1.1, a lapse requires full requalification, which means
              testing in each position and joint configuration needed, with the associated time, material, and testing
              costs. This makes preventing D1.1 continuity lapses significantly more important from a cost perspective.
            </p>

            {/* 6 */}
            <h2>Practical Continuity Tracking Strategies</h2>
            <p>
              The challenge of continuity tracking is fundamentally a data management problem. For each welder, for
              each qualified process, you must know the date of last use and whether that date falls within the
              six-month window. Here are the practical approaches, from simplest to most robust:
            </p>
            <h3>Manual Continuity Log</h3>
            <p>
              The simplest approach is a paper or spreadsheet log with columns for welder name, process, date of last
              use, and six-month expiration date. A supervisor or QC manager updates the log periodically based on
              production records.
            </p>
            <p>
              <strong>Limitations:</strong> Updates depend on human diligence. The log is only as current as the last
              update. There is no automatic alerting &mdash; someone must manually review the log to identify upcoming
              lapses. For a shop with 20+ welders qualified in multiple processes, this approach is error-prone.
            </p>
            <h3>Spreadsheet with Formula-Based Alerts</h3>
            <p>
              A step up from the manual log is a spreadsheet with conditional formatting that highlights dates within
              30 days of the six-month deadline. This provides a visual warning system without requiring manual date
              calculations.
            </p>
            <p>
              <strong>Limitations:</strong> The spreadsheet must be opened and reviewed regularly for the alerts to be
              seen. There is no push notification. The spreadsheet has no connection to production data, so someone
              must manually update the &ldquo;date of last use&rdquo; column. Multiple copies of the spreadsheet may
              exist with conflicting data. There is no audit trail showing when entries were modified.
            </p>
            <h3>Integrated Production and Qualification Tracking System</h3>
            <p>
              The most robust approach links production welding records directly to the qualification tracking system.
              When a welder completes a production weld and it is logged in the system (via daily report, weld map
              assignment, or direct entry), the system automatically updates the continuity clock for that welder and
              process.
            </p>
            <p>
              Key capabilities of an integrated system include:
            </p>
            <ul>
              <li>
                <strong>Automatic continuity clock reset:</strong> Each documented production weld resets the six-month
                clock for the applicable process.
              </li>
              <li>
                <strong>Proactive alerts:</strong> The system sends notifications at 30 days, 14 days, and 7 days
                before a continuity deadline, giving the QC manager time to schedule production work or a
                requalification test.
              </li>
              <li>
                <strong>Assignment validation:</strong> When assigning a welder to a production joint, the system
                verifies that the welder&rsquo;s qualification is active (not lapsed) and that the WPS requirements
                fall within the welder&rsquo;s qualified scope.
              </li>
              <li>
                <strong>Multi-code support:</strong> The system applies the correct continuity rules based on the
                applicable code &mdash; ASME IX, AWS D1.1, API 1104, or other standards &mdash; and tracks each
                independently.
              </li>
              <li>
                <strong>Audit trail:</strong> Every continuity event (clock reset, alert sent, lapse, reinstatement)
                is logged with timestamps and user identification.
              </li>
            </ul>

            {/* 7 */}
            <h2>Common Continuity Tracking Mistakes</h2>
            <p>
              Even organizations with good intentions make systematic errors in continuity tracking. These mistakes
              typically surface during third-party audits or Authorized Inspector reviews:
            </p>
            <h3>1. Confusing Process Continuity with Calendar-Based Renewal</h3>
            <p>
              ASME IX qualifications do not have a fixed expiration date. They do not &ldquo;renew annually&rdquo; or
              expire on a specific anniversary. The continuity clock resets every time the welder uses the process.
              Some QC programs incorrectly treat qualifications like certifications with fixed renewal dates, leading to
              unnecessary requalification testing or, worse, assuming a qualification is valid because it is within the
              &ldquo;renewal period&rdquo; when the welder has not actually used the process.
            </p>
            <h3>2. Tracking Continuity by Welder Only, Not by Welder + Process</h3>
            <p>
              A welder who is welding every day with GMAW may appear to have no continuity issues. But if that same
              welder is also qualified in SMAW and GTAW and has not used those processes, those qualifications are
              silently lapsing. Continuity must be tracked at the welder + process level, not just the welder level.
            </p>
            <h3>3. No Documentation of Process Use</h3>
            <p>
              The welder may have used the process within the six-month window, but if there is no documented evidence,
              the qualification is presumed lapsed. Many shops have production records that identify the welder and the
              joint but do not record which welding process was used. If a welder uses both SMAW and GMAW on a project,
              the daily report must specify which process was used on which joints for continuity tracking purposes.
            </p>
            <h3>4. Relying on the Welder&rsquo;s Memory</h3>
            <p>
              &ldquo;When did you last weld with SMAW?&rdquo; is not a reliable continuity verification method. The
              welder may not remember accurately, and an unsupported verbal statement does not satisfy the QW-322.1
              documentation requirement. Continuity must be verified against records, not recollection.
            </p>
            <h3>5. Not Tracking Continuity During Layoffs or Slow Periods</h3>
            <p>
              Seasonal slowdowns, project gaps, and temporary layoffs are the highest-risk periods for continuity
              lapses. When welders return from a layoff, their qualifications may have lapsed during the idle period.
              The first production weld after a layoff must not be a code weld unless continuity has been verified or
              reinstatement testing has been completed.
            </p>

            {/* 8 */}
            <h2>API 1104 Continuity: How Pipeline Rules Differ</h2>
            <p>
              For shops that perform pipeline welding under API 1104, there is a third set of continuity rules to
              understand. API 1104 Section 6.3 addresses welder qualification and includes its own continuity
              requirements that differ from both ASME IX and AWS D1.1.
            </p>
            <h3>API 1104 Continuity Provisions</h3>
            <p>
              Under API 1104, a welder&rsquo;s qualification remains in effect as long as the welder is employed by
              the same qualifying company and there are no specific reasons to question the welder&rsquo;s ability.
              However, requalification is required when:
            </p>
            <ul>
              <li>
                <strong>The welder has not welded with the process for six months or more:</strong> Similar to ASME IX
                and AWS D1.1, a six-month gap triggers requalification.
              </li>
              <li>
                <strong>There is specific reason to question the welder&rsquo;s ability:</strong> This is a
                subjective trigger that allows the company or inspector to require requalification based on production
                weld quality, failed NDE results, or observable skill degradation.
              </li>
              <li>
                <strong>The welder changes employers:</strong> Unlike ASME IX, where qualifications can follow the
                welder to a new employer, API 1104 qualifications are generally tied to the qualifying company. A
                welder moving to a new pipeline contractor typically must requalify.
              </li>
            </ul>
            <h3>Practical Impact for Multi-Code Shops</h3>
            <p>
              A shop that performs both pressure vessel work (ASME IX) and pipeline work (API 1104) must track
              continuity under both codes independently. A welder&rsquo;s ASME IX SMAW qualification may be active
              while their API 1104 SMAW qualification has lapsed, or vice versa. The six-month rule is similar in
              both codes, but the reinstatement mechanisms differ &mdash; ASME IX offers the simplified QW-322.2 path,
              while API 1104 generally requires a full requalification test per Section 6.
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Continuity Aspect</th>
                    <th className="px-5 py-3 font-semibold">ASME Section IX</th>
                    <th className="px-5 py-3 font-semibold">AWS D1.1</th>
                    <th className="px-5 py-3 font-semibold">API 1104</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Continuity period</td>
                    <td className="px-5 py-3">6 months</td>
                    <td className="px-5 py-3">6 months</td>
                    <td className="px-5 py-3">6 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Simplified reinstatement</td>
                    <td className="px-5 py-3">Yes (QW-322.2)</td>
                    <td className="px-5 py-3">No</td>
                    <td className="px-5 py-3">No</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Qualification portability</td>
                    <td className="px-5 py-3">Portable with documentation</td>
                    <td className="px-5 py-3">At new employer&rsquo;s discretion</td>
                    <td className="px-5 py-3">Generally not portable</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3 font-medium">Subjective revocation</td>
                    <td className="px-5 py-3">QW-320.2 (production weld failure)</td>
                    <td className="px-5 py-3">Clause 4.1.4 (Engineer discretion)</td>
                    <td className="px-5 py-3">Section 6.3 (reason to question ability)</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3 font-medium">Documentation format</td>
                    <td className="px-5 py-3">Employer-documented</td>
                    <td className="px-5 py-3">Contractor records</td>
                    <td className="px-5 py-3">Company records per Section 6</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 9 */}
            <h2>Building a Continuity Compliance Calendar</h2>
            <p>
              For QC managers who need a practical framework, here is a month-by-month continuity management approach:
            </p>
            <ul>
              <li>
                <strong>Monthly:</strong> Review the continuity status of all welders and all processes. Identify any
                qualifications within 60 days of the six-month deadline. For those qualifications, verify that
                production work using the process is scheduled, or schedule a requalification test.
              </li>
              <li>
                <strong>Bi-weekly:</strong> Review production logs to confirm that continuity clock resets are being
                captured in the tracking system. Cross-reference daily reports with the continuity log to catch any
                discrepancies.
              </li>
              <li>
                <strong>At project start:</strong> Before mobilizing welders to a new project, pull the current
                continuity status for every welder who will be assigned. Verify that all qualifications needed for the
                project scope are active. Schedule reinstatement or requalification tests for any lapsed qualifications
                before production welding begins.
              </li>
              <li>
                <strong>Before layoff or stand-down:</strong> Document the current continuity status of all welders.
                Calculate the date each qualification will lapse if the welder does not weld during the idle period.
                Provide each welder with a written notice of their qualification status and the dates by which they
                must return to work or undergo reinstatement testing.
              </li>
              <li>
                <strong>After layoff or return from leave:</strong> Before assigning any welder to production work,
                verify continuity status. Any qualification that lapsed during the absence must be reinstated per
                QW-322.2 (ASME IX) or fully requalified (AWS D1.1) before the welder touches a code joint.
              </li>
            </ul>

            {/* 9 */}
            <h2>Key Takeaways</h2>
            <ul>
              <li>
                ASME Section IX QW-322 requires welders to use each qualified process within every six-month period.
                Failure to do so results in automatic lapse of that process qualification.
              </li>
              <li>
                Continuity is tracked per welder, per process. Using one process does not maintain qualifications for
                other processes.
              </li>
              <li>
                Documentation is mandatory. If you cannot prove the welder used the process within six months, the
                qualification is presumed lapsed regardless of actual use.
              </li>
              <li>
                ASME IX QW-322.2 provides a simplified reinstatement &mdash; a single test coupon in any position
                restores the full original scope. AWS D1.1 does not offer this shortcut and requires full
                requalification.
              </li>
              <li>
                Requalification is also triggered by essential variable changes under QW-350, independent of continuity
                status. Changes in process, backing, P-number (beyond cross-qualification), F-number, position, vertical
                progression, and GMAW transfer mode all require new testing.
              </li>
              <li>
                The highest-risk periods for continuity lapses are project gaps, seasonal slowdowns, and layoffs. QC
                managers must proactively manage these transitions.
              </li>
              <li>
                Automated tracking systems that link production records to continuity clocks eliminate the most common
                sources of tracking failure: manual update delays, per-process tracking errors, and lack of proactive
                alerting.
              </li>
            </ul>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Automate Continuity Tracking Across Every Process
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                WeldCert tracks every welder&rsquo;s six-month continuity clock per process, resets automatically from
                production logs, and sends proactive alerts before qualifications lapse. No spreadsheets, no surprises.
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
                  href="/blog/asme-section-ix-essential-variables"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Compliance</span>
                  <h3 className="font-semibold text-navy mt-1">ASME Section IX Essential Variables: Complete Guide to QW-350</h3>
                </Link>
                <Link
                  href="/blog/welder-qualification-lapse-consequences"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Safety</span>
                  <h3 className="font-semibold text-navy mt-1">What Happens When Welder Qualifications Lapse</h3>
                </Link>
                <Link
                  href="/blog/welder-requalification-frequency-guide"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Compliance</span>
                  <h3 className="font-semibold text-navy mt-1">Welder Requalification Frequency Guide</h3>
                </Link>
                <Link
                  href="/blog/aws-d1-1-welder-qualification-requirements"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Compliance</span>
                  <h3 className="font-semibold text-navy mt-1">AWS D1.1 Welder Qualification Requirements</h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="not-prose max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="asme-section-ix-continuity-rules" />
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </>
  );
}
