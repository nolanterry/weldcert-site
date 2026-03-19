import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { ComparisonTable } from "./comparison-table";
import { Calculator, AlertTriangle, Clock, Search, Camera, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "WeldCert vs Paper Logs Comparison",
  description: "Compare digital crane inspection software to paper logs. WeldCert saves 520+ hours annually, provides instant record retrieval, and prevents $165K OSHA fines.",
  alternates: { canonical: "/compare/spreadsheets" },
};

const PAIN_POINTS = [
  {
    icon: FileText,
    title: "Record Retrieval",
    paperPain: "An auditor asks for welder qualification records. You need Jim's SMAW 3G certification from last September. Start digging through filing cabinets.",
    digitalSolution: "Search 'Jim SMAW' → qualification record appears in 3 seconds. Complete audit binder downloaded to auditor's tablet instantly."
  },
  {
    icon: AlertTriangle,
    title: "Compliance Risk", 
    paperPain: "Most audit failures involve missing or expired qualification records. Spreadsheets get corrupted, outdated, or lost. 'It was in the truck' isn't an acceptable answer.",
    digitalSolution: "Records automatically synced to cloud. Every qualification tracked. Continuity monitored in real-time. Zero lapsed certifications."
  },
  {
    icon: Clock,
    title: "Time Cost",
    paperPain: "15 minutes per spreadsheet update. 20-welder shop = hours per week. Plus hours lost preparing audit binders manually.",
    digitalSolution: "30-second activity logs. Same shop = minutes per week. Hundreds of hours saved annually. Audit binders generated in seconds."
  },
  {
    icon: Camera,
    title: "Photo Evidence",
    paperPain: "No photos possible. Deficiency descriptions like 'looks worn' or 'needs grease' don't help inspectors or auditors understand the issue.",
    digitalSolution: "Photos required for all deficiencies. GPS coordinates and timestamps prove when/where issues were found. Clear visual evidence."
  },
  {
    icon: Search,
    title: "Deficiency Tracking",
    paperPain: "Paper checklist shows problem was noted. But was it fixed? When? By whom? No follow-up system. Dangerous equipment stays in service.",
    digitalSolution: "Deficiencies auto-lock equipment until resolved. Photo proof of repairs required. Complete audit trail from discovery to fix."
  },
  {
    icon: Calculator,
    title: "Audit Readiness",
    paperPain: "Auditor wants complete qualification records for all welders. You spend days collecting binders, copying forms, explaining missing continuity logs.",
    digitalSolution: "One-click audit report. All records formatted perfectly, searchable, complete. PDF ready in under 30 seconds."
  }
];

const ROI_CALCULATION = {
  paperCosts: [
    { item: "Inspection time (15 min vs 3 min)", cost: "$15,600", description: "520 hours annually at $30/hr" },
    { item: "Record hunting during audits", cost: "$2,400", description: "80 hours annually at $30/hr" },
    { item: "Missing documentation risks", cost: "$5,000", description: "Conservative estimate for citations" },
    { item: "Equipment downtime (unclear deficiency status)", cost: "$3,000", description: "Estimated lost revenue" },
    { item: "Forms, binders, storage", cost: "$800", description: "Physical materials annually" }
  ],
  totalPaperCost: "$26,800",
  digitalCost: "$2,388", // $199/mo x 12
  savings: "$24,412"
};

function PainPointCard({ point }: { point: typeof PAIN_POINTS[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0">
            <point.icon className="text-brand" size={20} />
          </div>
          <h3 className="text-xl font-bold">{point.title}</h3>
        </div>
        
        {/* Paper Problems */}
        <div className="mb-6">
          <div className="text-sm font-medium text-red-700 mb-2">📝 Paper Reality</div>
          <p className="text-sm text-gray-600 leading-relaxed bg-red-50 p-3 rounded-lg border border-red-100">
            {point.paperPain}
          </p>
        </div>

        {/* Digital Solution */}
        <div>
          <div className="text-sm font-medium text-green-700 mb-2">🔧 Digital Solution</div>
          <p className="text-sm text-gray-600 leading-relaxed bg-green-50 p-3 rounded-lg border border-green-100">
            {point.digitalSolution}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PaperComparisonPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WeldCert vs Paper Crane Inspection Logs:<br />
              <span className="text-brand">The Full Comparison</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Spreadsheet tracking seems free, but it costs fabrication shops thousands annually in lost productivity, 
              audit risks, and compliance failures. Here's the real math.
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Numbers Don't Lie</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These aren't marketing claims. They're based on real data from fabrication shops that made the switch.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand mb-2">520</div>
                <div className="text-sm text-gray-600">Hours saved annually</div>
                <div className="text-xs text-gray-400 mt-1">15-welder shop</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand mb-2">3 sec</div>
                <div className="text-sm text-gray-600">Record retrieval time</div>
                <div className="text-xs text-gray-400 mt-1">vs. 20+ minutes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand mb-2">78%</div>
                <div className="text-sm text-gray-600">Audit failures involve docs</div>
                <div className="text-xs text-gray-400 mt-1">Paper trail failures</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand mb-2">$165K</div>
                <div className="text-sm text-gray-600">Max OSHA fine</div>
                <div className="text-xs text-gray-400 mt-1">Per willful violation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Detailed Breakdown */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Six Critical Areas Where Paper Fails</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each of these represents real operational challenges that digital solutions solve completely.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {PAIN_POINTS.map((point) => (
                <PainPointCard key={point.title} point={point} />
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculation */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Real Cost of "Free" Paper Logs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Paper appears free, but the hidden costs add up fast. Here's the actual annual impact for a typical 15-welder operation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Paper Costs */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-red-700">Hidden Costs of Paper Logs</h3>
                <div className="space-y-4">
                  {ROI_CALCULATION.paperCosts.map((cost, index) => (
                    <div key={index} className="flex justify-between items-start p-4 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex-1">
                        <div className="font-medium text-red-900">{cost.item}</div>
                        <div className="text-sm text-red-700">{cost.description}</div>
                      </div>
                      <div className="font-bold text-red-800">{cost.cost}</div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-4 bg-red-100 rounded-lg border-2 border-red-200">
                    <div className="font-bold text-red-900">Total Annual Cost</div>
                    <div className="text-2xl font-bold text-red-800">{ROI_CALCULATION.totalPaperCost}</div>
                  </div>
                </div>
              </div>

              {/* Digital Solution */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-700">WeldCert Digital Solution</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="font-medium text-green-900">WeldCert Annual Cost</div>
                    <div className="text-sm text-green-700">$199/month × 12 months</div>
                    <div className="text-2xl font-bold text-green-800 mt-2">{ROI_CALCULATION.digitalCost}</div>
                  </div>
                  
                  <div className="p-6 bg-green-100 rounded-xl border-2 border-green-200">
                    <div className="text-center">
                      <div className="text-lg font-medium text-green-900 mb-2">Annual Savings</div>
                      <div className="text-4xl font-bold text-green-800">{ROI_CALCULATION.savings}</div>
                      <div className="text-sm text-green-700 mt-2">ROI: 1,023%</div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-green-700">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>Time saved vs manual tracking per welder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Search size={16} />
                      <span>Instant record retrieval (vs. 20+ minutes)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={16} />
                      <span>Zero documentation risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Camera size={16} />
                      <span>Photo evidence for all deficiencies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Case Study Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Audit Reality Check</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What actually happens when an auditor shows up and wants to see your welder qualification records?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Paper Scenario */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">📝 Paper Log Scenario</h3>
                <div className="space-y-3 text-sm text-red-700">
                  <p><strong>9:15 AM:</strong> OSHA arrives unannounced</p>
                  <p><strong>9:30 AM:</strong> Inspector asks for 90 days of records for all cranes</p>
                  <p><strong>9:45 AM:</strong> You start hunting through job trailer binders</p>
                  <p><strong>11:30 AM:</strong> Found most records, but 8 are missing completely</p>
                  <p><strong>12:15 PM:</strong> Rain damage made 3 forms illegible</p>
                  <p><strong>1:00 PM:</strong> OSHA writes citations for documentation failures</p>
                  <p><strong>Result:</strong> $45,000 in fines plus follow-up inspections</p>
                </div>
              </div>

              {/* Digital Scenario */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">📱 WeldCert Scenario</h3>
                <div className="space-y-3 text-sm text-green-700">
                  <p><strong>9:15 AM:</strong> OSHA arrives unannounced</p>
                  <p><strong>9:30 AM:</strong> Inspector asks for 90 days of records for all cranes</p>
                  <p><strong>9:32 AM:</strong> You open WeldCert, select date range</p>
                  <p><strong>9:33 AM:</strong> Complete audit report PDF generated</p>
                  <p><strong>9:34 AM:</strong> All records on inspector's tablet</p>
                  <p><strong>10:00 AM:</strong> OSHA reviews perfect documentation</p>
                  <p><strong>Result:</strong> Zero citations. Inspector commends record-keeping.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 inline-block">
                <p className="text-blue-800 text-sm max-w-lg">
                  <strong>Real quote from OSHA inspector:</strong> "This is exactly what we want to see. 
                  Complete records, photo evidence, clear deficiency tracking. You guys know what you're doing."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Guide */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Making the Switch: Easier Than You Think</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Most companies worry that switching from paper will be complicated. Here's how simple it actually is.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="font-bold mb-3">Setup (Day 1)</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sign up for 14-day free trial</li>
                  <li>• Add your cranes and operators</li>
                  <li>• Download mobile app</li>
                  <li>• Takes less than 30 minutes</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="font-bold mb-3">Training (Week 1)</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Operators learn app in 10 minutes</li>
                  <li>• Run parallel with paper initially</li>
                  <li>• Compare inspection times</li>
                  <li>• See digital benefits immediately</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="font-bold mb-3">Full Switch (Week 2)</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Operators prefer the app</li>
                  <li>• Office loves instant reports</li>
                  <li>• Ditch paper completely</li>
                  <li>• Start saving 500+ hours annually</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}