import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Guide to AWS D1.1 Welder Qualification Requirements in 2026",
  description:
    "Everything you need to know about AWS D1.1 welder qualification requirements: test procedures, documentation, continuity rules, and compliance tracking for structural steel fabrication.",
};

export default function AWSD11WelderQualificationRequirementsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                AWS Standards
              </span>
              <span className="text-xs text-gray-400">March 5, 2026</span>
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Complete Guide to AWS D1.1 Welder Qualification Requirements in 2026
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Everything you need to know about AWS D1.1 welder qualification requirements:
              test procedures, documentation standards, continuity rules, and compliance
              tracking for structural steel fabrication in 2026.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <p>
              AWS D1.1 isn't just a welding code — it's the foundation of structural
              steel integrity in North America. Every bridge, building, and critical
              infrastructure project relies on welders who meet D1.1 qualification
              standards. Yet many fabrication shops struggle with the documentation,
              testing, and tracking requirements that turn qualified welders into
              compliant production assets.
            </p>
            <p>
              This guide walks through every aspect of AWS D1.1 welder qualification
              requirements as updated for 2026, from initial testing through
              continuity maintenance. Whether you're setting up a new quality program
              or updating existing procedures, you'll find the specific requirements,
              common pitfalls, and practical solutions that keep fabrication shops
              compliant and productive.
            </p>

            <h2>AWS D1.1 Welder Qualification Overview</h2>
            <p>
              AWS D1.1 Section 4 establishes the qualification requirements for
              welders working on structural steel applications. The standard
              recognizes that welding is a skill-dependent process where the
              competency of individual welders directly affects the quality and
              safety of finished structures.
            </p>

            <h3>Core Qualification Principles</h3>
            <p>
              AWS D1.1 welder qualification is based on several fundamental principles:
            </p>
            <ul>
              <li>
                <strong>Process-specific qualification:</strong> Welders must be
                qualified for each welding process they will use in production
              </li>
              <li>
                <strong>Position-specific qualification:</strong> Welders must
                demonstrate competency in the positions they will weld
              </li>
              <li>
                <strong>Material-specific qualification:</strong> Qualifications
                apply to specific base metal groups and thickness ranges
              </li>
              <li>
                <strong>Time-limited validity:</strong> Qualifications expire
                after 6 months without continuity maintenance
              </li>
              <li>
                <strong>Transferable within scope:</strong> Valid qualifications
                can be used across different employers within the qualified scope
              </li>
            </ul>

            <h2>Qualification Test Requirements</h2>
            <p>
              AWS D1.1 Table 4.10 specifies the welding variables that must be
              qualified for structural applications. Understanding these variables
              is crucial for establishing proper qualification matrices.
            </p>

            <h3>Essential Variables</h3>
            <p>
              Changes to essential variables require requalification. For welder
              performance qualifications, essential variables include:
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Variable Category</th>
                    <th className="px-5 py-3 font-semibold">Specific Requirements</th>
                    <th className="px-5 py-3 font-semibold">Qualification Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-white">
                    <td className="px-5 py-3">Welding Process</td>
                    <td className="px-5 py-3">SMAW, GMAW, FCAW, GTAW, SAW</td>
                    <td className="px-5 py-3">Process-specific only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Base Metal Group</td>
                    <td className="px-5 py-3">Group I, II, III per Table 3.1</td>
                    <td className="px-5 py-3">Within qualified group only</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Base Metal Thickness</td>
                    <td className="px-5 py-3">Test coupon thickness</td>
                    <td className="px-5 py-3">0.5T to 2T (min 1/8", max unlimited)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-5 py-3">Welding Position</td>
                    <td className="px-5 py-3">1G, 2G, 3G, 4G</td>
                    <td className="px-5 py-3">Qualified position plus authorized progressions</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-5 py-3">Filler Metal</td>
                    <td className="px-5 py-3">F-number per AWS A5 specifications</td>
                    <td className="px-5 py-3">F-number group only</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Position Qualification Requirements</h3>
            <p>
              Position qualifications follow specific rules that allow welders to
              work in positions other than those specifically tested:
            </p>
            <ul>
              <li>
                <strong>1G qualification</strong> authorizes welding in 1G position only
              </li>
              <li>
                <strong>2G qualification</strong> authorizes welding in 1G and 2G positions
              </li>
              <li>
                <strong>3G qualification</strong> authorizes welding in 1G, 2G, and 3G positions
              </li>
              <li>
                <strong>4G qualification</strong> authorizes welding in all positions (1G, 2G, 3G, 4G)
              </li>
            </ul>

            <h3>Test Specimen Requirements</h3>
            <p>
              AWS D1.1 requires specific test specimen configurations depending
              on the intended application and welding process:
            </p>

            <h4>Groove Weld Test Plates</h4>
            <p>
              Complete joint penetration groove welds are required for structural
              applications where welders will perform CJP groove welds. Test plate
              configurations include:
            </p>
            <ul>
              <li>Minimum thickness: 3/8" (10 mm) for unlimited thickness qualification</li>
              <li>Minimum width: 3" (75 mm) to allow proper specimen extraction</li>
              <li>Minimum length: 8" (200 mm) for multiple test specimens</li>
              <li>Joint preparation: 45° ± 10° bevel angle with 1/8" ± 1/16" root opening</li>
              <li>Backing: Steel backing bar or backing gas as specified in WPS</li>
            </ul>

            <h4>Fillet Weld Test Assemblies</h4>
            <p>
              Fillet weld tests are required when welders will perform only
              fillet welding in production. Test assembly requirements include:
            </p>
            <ul>
              <li>Minimum leg size: 5/16" (8 mm) for structural applications</li>
              <li>Test length: Minimum 6" (150 mm) for macro examination</li>
              <li>Member thickness: Representative of production work</li>
              <li>Joint configuration: T-joint or lap joint per production requirements</li>
            </ul>

            <h2>Testing and Examination Procedures</h2>
            <p>
              AWS D1.1 specifies detailed procedures for testing and examining
              welder qualification specimens. These procedures ensure consistent
              evaluation of welder competency across different testing facilities.
            </p>

            <h3>Visual Examination Requirements</h3>
            <p>
              All qualification test welds must pass visual examination before
              destructive testing. Visual examination criteria include:
            </p>
            <ul>
              <li>
                <strong>Root penetration:</strong> Complete penetration with no
                lack of penetration exceeding 1/32" (0.8 mm)
              </li>
              <li>
                <strong>Root concavity:</strong> Maximum 1/32" (0.8 mm) for
                groove welds qualified without backing
              </li>
              <li>
                <strong>Face reinforcement:</strong> Maximum 1/8" (3.2 mm) above
                base metal surface, smooth transition to base metal
              </li>
              <li>
                <strong>Undercut:</strong> Maximum 1/32" (0.8 mm) depth for any length
              </li>
              <li>
                <strong>Overlap:</strong> No overlap permitted on face or root
              </li>
              <li>
                <strong>Crater cracks:</strong> No crater cracks permitted
              </li>
            </ul>

            <h3>Guided Bend Test Procedures</h3>
            <p>
              Guided bend testing is the primary method for evaluating internal
              weld quality in qualification specimens. AWS D1.1 specifies:
            </p>

            <h4>Test Specimen Preparation</h4>
            <ul>
              <li>Remove all weld reinforcement flush with base metal surface</li>
              <li>Machine or grind specimens to required width (typically 1-1/2")</li>
              <li>Remove sharp corners with file or grinder</li>
              <li>Mark specimens clearly with welder identification and test position</li>
            </ul>

            <h4>Bend Test Requirements</h4>
            <p>
              For groove weld qualifications, the following bend tests are required:
            </p>
            <ul>
              <li>
                <strong>Plate thickness 3/8" to 1":</strong> Two face bends and
                two root bends
              </li>
              <li>
                <strong>Plate thickness over 1":</strong> Two side bends
              </li>
              <li>
                <strong>Fillet weld break tests:</strong> Fracture through weld
                metal with examination of fracture surface
              </li>
            </ul>

            <h4>Acceptance Criteria</h4>
            <p>
              Guided bend specimens are acceptable when:
            </p>
            <ul>
              <li>No open defects exceed 1/8" (3.2 mm) in any dimension</li>
              <li>No open defects exceed 3/8" (9.5 mm) cumulative length</li>
              <li>Corner cracks up to 1/4" (6.4 mm) are not considered defects</li>
              <li>Specimens show good fusion between weld and base metal</li>
            </ul>

            <h3>Macro-Examination for Fillet Welds</h3>
            <p>
              Fillet weld qualifications require macro-examination of cross-sections
              to verify:
            </p>
            <ul>
              <li>Minimum throat dimension meets or exceeds specified size</li>
              <li>Root penetration into base metal (minimum 0.01")</li>
              <li>No undercut exceeding 0.01" depth</li>
              <li>Absence of overlap, incomplete fusion, or cracks</li>
              <li>Acceptable profile and leg size ratios</li>
            </ul>

            <h2>Documentation Requirements</h2>
            <p>
              Proper documentation is essential for AWS D1.1 compliance and
              audit preparation. Documentation requirements cover the entire
              qualification process from test setup through record maintenance.
            </p>

            <h3>Welder Performance Qualification Record (WPQ)</h3>
            <p>
              Each qualified welder must have a WPQ record that documents:
            </p>
            <ul>
              <li>Welder identification (name, payroll number, or symbol)</li>
              <li>WPS number and revision used for qualification</li>
              <li>Test date and testing facility</li>
              <li>Base metals and thickness qualified</li>
              <li>Welding process and filler metals used</li>
              <li>Welding positions qualified</li>
              <li>Test results including visual and destructive test data</li>
              <li>WQT signature and stamp approving qualification</li>
            </ul>

            <h3>Test Record Requirements</h3>
            <p>
              Complete test records must be maintained showing:
            </p>
            <ul>
              <li>Test coupon identification and traceability</li>
              <li>Welding parameters used during qualification</li>
              <li>Visual examination results with accept/reject decisions</li>
              <li>Guided bend or macro test results with measurements</li>
              <li>Photographs or sketches of test specimens (recommended)</li>
              <li>Any deviations from standard procedures</li>
            </ul>

            <h3>Welding Qualified Tester (WQT) Requirements</h3>
            <p>
              AWS D1.1 requires that qualification testing be conducted under
              the supervision of a WQT. The WQT must:
            </p>
            <ul>
              <li>Hold current AWS WQT certification</li>
              <li>Personally witness critical portions of qualification testing</li>
              <li>Approve WPS procedures used for qualification</li>
              <li>Sign and stamp WPQ records certifying welder competency</li>
              <li>Maintain testing records per AWS requirements</li>
            </ul>

            <h2>Continuity Requirements</h2>
            <p>
              AWS D1.1 Section 4.25 establishes continuity requirements that
              maintain welder qualifications between formal requalification tests.
              Understanding and tracking continuity is crucial for maintaining
              a qualified workforce.
            </p>

            <h3>Six-Month Rule</h3>
            <p>
              The fundamental principle of AWS D1.1 continuity is the six-month
              rule: welders must perform welding work within their qualified
              scope at least once every six months to maintain their qualifications.
              Specific requirements include:
            </p>
            <ul>
              <li>
                Welding must be performed within the qualified process, position,
                and base metal group
              </li>
              <li>
                Production welding, not practice welding, satisfies continuity
                requirements
              </li>
              <li>
                Welding must be performed under proper supervision and QC oversight
              </li>
              <li>
                Documentation of continuity welding must be maintained
              </li>
            </ul>

            <h3>Continuity Documentation</h3>
            <p>
              Effective continuity tracking requires documentation that proves
              welders have maintained their qualifications. Essential records include:
            </p>
            <ul>
              <li>
                <strong>Welding logs:</strong> Daily or weekly records showing
                which welders performed which processes
              </li>
              <li>
                <strong>Project assignments:</strong> Clear documentation linking
                welders to specific work within their qualified scope
              </li>
              <li>
                <strong>Quality records:</strong> NDT results and visual inspection
                records that verify acceptable weld quality
              </li>
              <li>
                <strong>Supervisor verification:</strong> Signed confirmations
                from qualified supervisors that welders performed acceptable work
              </li>
            </ul>

            <h3>Partial Loss of Qualification</h3>
            <p>
              AWS D1.1 allows for partial loss of qualification when welders
              maintain continuity in some, but not all, qualified variables:
            </p>
            <ul>
              <li>
                Process-specific continuity: Welders maintain qualification
                only for processes used within six months
              </li>
              <li>
                Position-specific continuity: Welders maintain qualification
                only for positions welded within six months
              </li>
              <li>
                Material-specific continuity: Welders maintain qualification
                only for base metal groups welded within six months
              </li>
            </ul>

            <h3>Requalification Requirements</h3>
            <p>
              When welders lose continuity, requalification depends on the
              extent of the lapse:
            </p>
            <ul>
              <li>
                <strong>Complete requalification:</strong> Required when all
                qualified variables have lapsed beyond six months
              </li>
              <li>
                <strong>Partial requalification:</strong> Required only for
                variables that have lapsed beyond six months
              </li>
              <li>
                <strong>Reduced testing:</strong> May be authorized by the WQT
                when lapses are brief and welder skill is demonstrated
              </li>
            </ul>

            <h2>Common Compliance Challenges</h2>
            <p>
              Many fabrication shops struggle with specific aspects of AWS D1.1
              compliance. Understanding common pitfalls helps prevent violations
              and audit findings.
            </p>

            <h3>Documentation Management Issues</h3>
            <p>
              Poor documentation practices are the leading cause of D1.1 compliance
              failures. Common problems include:
            </p>
            <ul>
              <li>
                <strong>Missing WPQ records:</strong> Welders working without
                documented qualifications or with expired records
              </li>
              <li>
                <strong>Incomplete test documentation:</strong> WPQ records missing
                essential information like test results or WQT approval
              </li>
              <li>
                <strong>Lost historical records:</strong> Inability to produce
                qualification records for current welders due to poor record keeping
              </li>
              <li>
                <strong>Inconsistent record formats:</strong> Using non-standard
                forms that don't capture all required information
              </li>
            </ul>

            <h3>Continuity Tracking Problems</h3>
            <p>
              Continuity tracking failures are expensive because they require
              full requalification of experienced welders. Common issues include:
            </p>
            <ul>
              <li>
                <strong>No tracking system:</strong> Relying on supervisor memory
                rather than documented records of welder assignments
              </li>
              <li>
                <strong>Process mismatches:</strong> Allowing welders to work
                on processes different from their qualified scope
              </li>
              <li>
                <strong>Position violations:</strong> Welders working in positions
                beyond their qualified range without requalification
              </li>
              <li>
                <strong>Extended layoffs:</strong> Failing to account for vacation,
                injury, or project gaps that break continuity
              </li>
            </ul>

            <h3>WPS/WPQ Integration Failures</h3>
            <p>
              Many shops fail to properly integrate WPS procedures with welder
              qualifications, leading to compliance gaps:
            </p>
            <ul>
              <li>
                Welders qualified under one WPS working under different WPS
                without verification of variable compatibility
              </li>
              <li>
                WPS revisions that invalidate existing welder qualifications
                without requalification or documentation updates
              </li>
              <li>
                Using prequalified WPS procedures without ensuring welder
                qualifications meet the assumed skill levels
              </li>
            </ul>

            <h2>Quality Control Integration</h2>
            <p>
              AWS D1.1 welder qualification requirements integrate closely with
              overall quality control programs. Effective QC systems support
              and verify welder competency throughout production.
            </p>

            <h3>Production Monitoring</h3>
            <p>
              Quality control procedures that support welder qualification include:
            </p>
            <ul>
              <li>
                <strong>Work assignment controls:</strong> Systems that verify
                welders are assigned only work within their qualified scope
              </li>
              <li>
                <strong>Production NDT:</strong> Regular testing that verifies
                welder performance and identifies skill degradation
              </li>
              <li>
                <strong>Visual inspection:</strong> Systematic inspection that
                catches quality issues before they become pattern problems
              </li>
              <li>
                <strong>Corrective action systems:</strong> Procedures for
                addressing quality issues that may indicate welder requalification needs
              </li>
            </ul>

            <h3>Performance-Based Requalification</h3>
            <p>
              AWS D1.1 allows performance-based requalification when production
              quality indicates potential welder skill issues:
            </p>
            <ul>
              <li>
                NDT rejection rates exceeding established thresholds
              </li>
              <li>
                Visual inspection findings indicating consistent technique problems
              </li>
              <li>
                Supervisor observations of declining weld quality or productivity
              </li>
              <li>
                Changes in welder assignment that may affect skill maintenance
              </li>
            </ul>

            <h2>Digital Tracking and Compliance</h2>
            <p>
              Modern fabrication shops increasingly rely on digital systems
              to manage welder qualifications and ensure D1.1 compliance.
              Digital tracking offers significant advantages over paper-based systems.
            </p>

            <h3>Automated Continuity Monitoring</h3>
            <p>
              Digital tracking systems like WeldCert provide automated features
              that eliminate common compliance failures:
            </p>
            <ul>
              <li>
                <strong>Real-time qualification status:</strong> Instant visibility
                into which welders are qualified for specific work assignments
              </li>
              <li>
                <strong>Automatic continuity tracking:</strong> Systems that
                monitor welder assignments and alert supervisors to continuity risks
              </li>
              <li>
                <strong>Expiration warnings:</strong> Advance notifications when
                welders approach qualification or continuity deadlines
              </li>
              <li>
                <strong>Assignment validation:</strong> Automated checks that
                prevent welders from being assigned work outside their qualified scope
              </li>
            </ul>

            <h3>Audit Preparation and Reporting</h3>
            <p>
              Digital systems streamline audit preparation by providing:
            </p>
            <ul>
              <li>
                Instant access to all welder qualification records with proper
                formatting and required signatures
              </li>
              <li>
                Comprehensive continuity reports showing work history for any
                time period or welder subset
              </li>
              <li>
                Exception reports identifying any compliance gaps or expiring
                qualifications
              </li>
              <li>
                Integration with project management systems to verify welder
                assignments match qualified scope
              </li>
            </ul>

            <h3>Integration with Production Systems</h3>
            <p>
              Advanced digital tracking integrates with other production systems:
            </p>
            <ul>
              <li>
                <strong>WPS management:</strong> Linking welder qualifications
                to approved WPS procedures with variable compatibility checking
              </li>
              <li>
                <strong>Quality management:</strong> Integration with NDT and
                inspection systems to monitor welder performance trends
              </li>
              <li>
                <strong>Project management:</strong> Automatic validation that
                assigned welders are qualified for project-specific requirements
              </li>
              <li>
                <strong>Training management:</strong> Tracking training requirements
                and scheduling requalification activities
              </li>
            </ul>

            <h2>2026 Updates and Changes</h2>
            <p>
              The 2026 edition of AWS D1.1 includes several updates that affect
              welder qualification requirements. Fabrication shops should review
              these changes and update their procedures accordingly.
            </p>

            <h3>Documentation Clarifications</h3>
            <p>
              Recent clarifications emphasize the importance of complete
              documentation throughout the qualification process:
            </p>
            <ul>
              <li>
                Enhanced requirements for WQT documentation and record-keeping
              </li>
              <li>
                Clarified procedures for remote qualification testing and
                video documentation requirements
              </li>
              <li>
                Updated guidance on digital record retention and acceptance
              </li>
              <li>
                Expanded requirements for welding parameter documentation
                during qualification testing
              </li>
            </ul>

            <h3>Continuity Tracking Enhancements</h3>
            <p>
              Updates to continuity requirements provide clearer guidance on
              tracking and documentation:
            </p>
            <ul>
              <li>
                Detailed examples of acceptable continuity documentation
              </li>
              <li>
                Clarified procedures for partial requalification after
                continuity lapses
              </li>
              <li>
                Enhanced guidance on multi-process qualification tracking
              </li>
              <li>
                Updated procedures for temporary welder assignments and
                qualification transfer
              </li>
            </ul>

            <h2>Best Practices for Implementation</h2>
            <p>
              Successfully implementing AWS D1.1 welder qualification requirements
              requires systematic planning and consistent execution. These best
              practices help ensure long-term compliance success.
            </p>

            <h3>Program Setup</h3>
            <ul>
              <li>
                <strong>Designate a qualified WQT:</strong> Ensure at least one
                person with current AWS WQT certification oversees all qualification
                activities
              </li>
              <li>
                <strong>Establish standard procedures:</strong> Document clear
                procedures for qualification testing, record keeping, and continuity
                tracking
              </li>
              <li>
                <strong>Create qualification matrices:</strong> Develop clear
                documentation showing which welders are qualified for which
                processes, positions, and materials
              </li>
              <li>
                <strong>Implement tracking systems:</strong> Establish reliable
                systems for tracking welder assignments and continuity status
              </li>
            </ul>

            <h3>Ongoing Management</h3>
            <ul>
              <li>
                <strong>Regular audits:</strong> Conduct internal audits to
                verify compliance and identify improvement opportunities
              </li>
              <li>
                <strong>Training programs:</strong> Provide regular training
                for supervisors and welders on qualification requirements
              </li>
              <li>
                <strong>Performance monitoring:</strong> Track quality metrics
                to identify welders who may need additional training or requalification
              </li>
              <li>
                <strong>Technology utilization:</strong> Leverage digital systems
                to automate tracking and reduce human error
              </li>
            </ul>

            <h2>Key Takeaways</h2>
            <ul>
              <li>
                AWS D1.1 welder qualifications are process, position, and
                material-specific, with strict continuity requirements that
                must be tracked and documented.
              </li>
              <li>
                Qualification testing requires specific specimen configurations,
                examination procedures, and acceptance criteria that ensure
                consistent welder competency evaluation.
              </li>
              <li>
                Complete documentation including WPQ records, test results,
                and continuity tracking is essential for compliance and audit
                preparation.
              </li>
              <li>
                The six-month continuity rule requires active tracking of
                welder assignments to prevent qualification lapses that
                necessitate expensive requalification.
              </li>
              <li>
                Digital tracking systems provide automated monitoring,
                exception reporting, and audit preparation that significantly
                reduces compliance risk compared to manual systems.
              </li>
              <li>
                Integration with quality control and production management
                systems ensures welder qualifications support overall
                fabrication quality objectives.
              </li>
            </ul>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Streamline Your AWS D1.1 Compliance
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                WeldCert automates welder qualification tracking, continuity
                monitoring, and compliance reporting for AWS D1.1 requirements.
                Never lose another qualification to missed deadlines.
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
                  <span className="text-xs font-medium text-brand">Process</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Complete Welder Qualification Checklist
                  </h3>
                </Link>
                <Link
                  href="/blog/asme-section-ix-continuity-rules"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Standards</span>
                  <h3 className="font-semibold text-navy mt-1">
                    ASME Section IX Continuity Rules
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
                <Link
                  href="/blog/aws-d1-1-table-4-10-explained"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Reference</span>
                  <h3 className="font-semibold text-navy mt-1">
                    AWS D1.1 Table 4.10 Explained
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}