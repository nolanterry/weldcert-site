export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  longDescription: string;
  relatedTerms: string[];
  category: string;
}

export const GLOSSARY_CATEGORIES = [
  "Codes & Standards",
  "Welding Processes",
  "Testing & Inspection",
  "Certifications",
  "Documentation",
  "Quality Control",
] as const;

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "AWS D1.1",
    slug: "aws-d1-1",
    definition: "The American Welding Society's Structural Welding Code — Steel, the most widely used welding standard in the U.S.",
    longDescription: "AWS D1.1 Structural Welding Code — Steel is the foundational welding standard for structural steel applications in the United States. It covers design, qualification, fabrication, inspection, and repair of welded steel structures. The code specifies requirements for welding procedure specifications (WPS), procedure qualification records (PQR), welder performance qualifications, visual and NDT inspection criteria, and acceptable weld defect limits. AWS D1.1 is referenced by the International Building Code (IBC), AISC, and most state and local building codes. Fabrication shops must maintain compliance documentation and ensure all welders are qualified under the specific WPS they use. WeldCert automates the tracking of D1.1 compliance across entire organizations.",
    relatedTerms: ["wps", "pqr", "welder-qualification", "cwi"],
    category: "Codes & Standards",
  },
  {
    term: "ASME Section IX",
    slug: "asme-section-ix",
    definition: "The ASME Boiler and Pressure Vessel Code section governing welding and brazing qualifications for pressure equipment.",
    longDescription: "ASME Section IX (Qualification Standard for Welding, Brazing, and Fusing Procedures; Welders; Brazers; and Welding, Brazing, and Fusing Operators) is the qualification standard used for pressure vessels, piping, boilers, and nuclear components. It defines the essential, supplementary essential, and non-essential variables that govern WPS and welder qualifications. Unlike AWS D1.1, ASME IX is a qualification standard only — it does not specify design or fabrication requirements (those are in other ASME sections). ASME IX qualifications are based on essential variable ranges: if an essential variable changes beyond the allowed range, requalification is required. Tracking these variable ranges across dozens of welders and WPS documents is precisely where WeldCert eliminates manual error.",
    relatedTerms: ["essential-variables", "wps", "pqr", "performance-qualification"],
    category: "Codes & Standards",
  },
  {
    term: "WPS (Welding Procedure Specification)",
    slug: "wps",
    definition: "A documented set of welding parameters and instructions that define how a specific weld joint is to be made.",
    longDescription: "A Welding Procedure Specification (WPS) is a formal document that provides direction to the welder for making production welds. It specifies the essential, supplementary essential, and non-essential variables including: base metal type and thickness range, filler metal classification, joint design, preheat and interpass temperature, welding process (SMAW, GMAW, FCAW, etc.), electrical parameters, shielding gas type and flow rate, travel speed, position, and post-weld heat treatment requirements. Each WPS must be supported by a Procedure Qualification Record (PQR) demonstrating that the procedure produces acceptable welds. Welders must be qualified to the specific WPS they use. Managing WPS libraries across multiple projects and codes is a core WeldCert feature.",
    relatedTerms: ["pqr", "essential-variables", "aws-d1-1", "asme-section-ix"],
    category: "Documentation",
  },
  {
    term: "PQR (Procedure Qualification Record)",
    slug: "pqr",
    definition: "A record of the actual welding parameters used and test results from qualifying a welding procedure specification.",
    longDescription: "A Procedure Qualification Record (PQR) documents the actual welding variables used during the qualification test of a WPS, along with the results of destructive and/or non-destructive testing performed on the test coupon. The PQR serves as proof that the WPS produces sound welds. Testing typically includes tensile tests, bend tests (face, root, and/or side), Charpy impact tests (when required), and macro examination. Once a PQR is completed and approved, it supports one or more WPS documents. PQRs are permanent records that must be retained as long as the WPS is in use. Changes to essential variables require a new PQR. WeldCert links PQRs to their supporting WPS documents and tracks qualification ranges automatically.",
    relatedTerms: ["wps", "essential-variables", "destructive-testing", "welder-qualification"],
    category: "Documentation",
  },
  {
    term: "Welder Qualification",
    slug: "welder-qualification",
    definition: "The process and record of testing a welder's ability to produce acceptable welds under specific conditions.",
    longDescription: "Welder qualification (also called welder performance qualification or WPQ) is the process of testing a welder's ability to produce sound welds under the conditions specified by a WPS. The welder makes a test coupon following the WPS, and the coupon is tested (typically bend tests and/or radiography). Successful completion qualifies the welder for a specific range of variables (process, position, material group, thickness range, etc.). Qualifications can expire if a welder does not use the process within a specified period (typically 6 months under AWS D1.1, or as defined by the employer under ASME IX). Tracking qualification expiration dates, variable ranges, and renewal requirements across a workforce is the primary use case for WeldCert.",
    relatedTerms: ["wps", "performance-qualification", "continuity-log", "cwi"],
    category: "Certifications",
  },
  {
    term: "CWI (Certified Welding Inspector)",
    slug: "cwi",
    definition: "An AWS-certified professional qualified to perform visual and other welding inspections per AWS standards.",
    longDescription: "A Certified Welding Inspector (CWI) is a professional certified by the American Welding Society (AWS) under the QC1 standard. CWIs are qualified to perform visual inspection of welds, interpret codes and standards, review welding documentation (WPS, PQR, WPQ), and oversee welding operations. The CWI certification requires passing a three-part examination (fundamentals, practical, code-specific) and maintaining certification through continuing education. CWIs play a critical role in quality control, serving as the primary line of defense for weld quality on fabrication and construction projects. Many codes (including AWS D1.1) require that inspection be performed by or under the supervision of a CWI.",
    relatedTerms: ["visual-inspection", "welder-qualification", "aws-d1-1", "quality-control"],
    category: "Certifications",
  },
  {
    term: "Essential Variables",
    slug: "essential-variables",
    definition: "Welding parameters that, if changed beyond specified limits, require requalification of the procedure or welder.",
    longDescription: "Essential variables are welding parameters defined by the applicable code (AWS D1.1, ASME IX, etc.) that directly affect the mechanical properties of the weld. Changes to essential variables beyond the allowed range invalidate existing qualifications and require requalification through new test coupons. Common essential variables include welding process (SMAW, GMAW, FCAW), base metal group/P-number, filler metal classification/F-number, thickness range, position, preheat temperature (decrease), post-weld heat treatment (addition or deletion), and shielding gas type. Supplementary essential variables (ASME IX) apply only when impact testing is required. Tracking which variable changes trigger requalification is complex and error-prone manually — WeldCert automates this analysis.",
    relatedTerms: ["wps", "pqr", "asme-section-ix", "requalification"],
    category: "Codes & Standards",
  },
  {
    term: "NDT (Non-Destructive Testing)",
    slug: "ndt",
    definition: "Inspection methods that evaluate weld quality without damaging the welded component.",
    longDescription: "Non-Destructive Testing (NDT) encompasses a family of inspection methods used to evaluate weld quality without causing damage to the inspected component. Common NDT methods for welds include: Radiographic Testing (RT) — using X-rays or gamma rays to reveal internal defects; Ultrasonic Testing (UT) — using sound waves to detect internal flaws; Magnetic Particle Testing (MT) — using magnetic fields to find surface and near-surface defects; Liquid Penetrant Testing (PT) — using capillary action to reveal surface-breaking defects; and Visual Testing (VT) — direct examination of weld surface quality. The applicable code specifies which NDT methods are required and acceptance criteria. NDT results must be documented and retained as part of the quality record. WeldCert tracks NDT results alongside welder qualifications and WPS compliance.",
    relatedTerms: ["radiographic-testing", "ultrasonic-testing", "visual-inspection", "quality-control"],
    category: "Testing & Inspection",
  },
  {
    term: "Radiographic Testing (RT)",
    slug: "radiographic-testing",
    definition: "An NDT method using X-rays or gamma rays to produce images of weld internal structure for defect detection.",
    longDescription: "Radiographic Testing (RT) is an NDT method that uses X-ray or gamma radiation to penetrate welds and produce images (radiographs) showing internal structure. RT can detect internal defects including porosity, slag inclusions, incomplete fusion, incomplete penetration, and cracks. It is often required for critical welds in pressure vessels, piping, and structural applications. RT results are interpreted by qualified personnel (typically Level II or III technicians) against code-specific acceptance criteria. Radiographs serve as permanent records and must be properly identified, interpreted, and stored. RT requires safety precautions due to radiation exposure and is one of the more expensive NDT methods, but provides excellent documentation of internal weld quality.",
    relatedTerms: ["ndt", "ultrasonic-testing", "quality-control", "weld-defects"],
    category: "Testing & Inspection",
  },
  {
    term: "Ultrasonic Testing (UT)",
    slug: "ultrasonic-testing",
    definition: "An NDT method using high-frequency sound waves to detect internal weld defects and measure material thickness.",
    longDescription: "Ultrasonic Testing (UT) uses high-frequency sound waves transmitted through a transducer to detect internal defects in welds. When sound waves encounter a discontinuity (crack, porosity, lack of fusion), they reflect back to the transducer and are displayed on a screen. UT is particularly effective for detecting planar defects (cracks, lack of fusion) that may not be reliably detected by RT. Advanced UT techniques include phased array (PAUT) and time-of-flight diffraction (TOFD), which provide more detailed imaging. UT is increasingly preferred over RT for many applications because it has no radiation hazard, provides real-time results, can inspect thicker sections, and can characterize defect type and size. AWS D1.1 and ASME codes both include UT acceptance criteria.",
    relatedTerms: ["ndt", "radiographic-testing", "weld-defects", "quality-control"],
    category: "Testing & Inspection",
  },
  {
    term: "Visual Inspection (VT)",
    slug: "visual-inspection",
    definition: "Direct examination of weld surface quality, dimensions, and appearance — the most fundamental inspection method.",
    longDescription: "Visual Inspection (VT) is the most basic and most widely required welding inspection method. It encompasses examination before welding (joint preparation, fit-up, cleanliness, preheat verification), during welding (interpass temperature, bead sequence, visible defects), and after welding (surface quality, dimensions, profile, undercut, overlap, cracks, porosity). VT is required on virtually all welds regardless of other NDT requirements. Under AWS D1.1, visual inspection must be performed by or under the supervision of a CWI. Acceptance criteria vary by code and application but typically cover undercut depth, porosity size and frequency, crack presence (never acceptable), weld profile, and dimensional tolerances. VT findings must be documented on inspection reports.",
    relatedTerms: ["cwi", "ndt", "weld-defects", "quality-control"],
    category: "Testing & Inspection",
  },
  {
    term: "Destructive Testing",
    slug: "destructive-testing",
    definition: "Testing methods that damage or destroy the test specimen to evaluate mechanical properties of welds.",
    longDescription: "Destructive testing involves testing weld specimens to failure to determine mechanical properties. It is primarily used during procedure and welder qualification (not on production welds). Common destructive tests include: tensile testing (measures ultimate tensile strength), bend testing (face, root, side bends to assess ductility and soundness), Charpy V-notch impact testing (measures toughness at specified temperatures), macro examination (cross-sectional examination of weld profile and fusion), hardness testing (measures resistance to indentation, important for heat-affected zone evaluation), and fillet weld break testing. Results are compared to code-specified acceptance criteria. All destructive test results are recorded on the PQR and must be traceable to the test laboratory and qualified test methods.",
    relatedTerms: ["pqr", "welder-qualification", "essential-variables"],
    category: "Testing & Inspection",
  },
  {
    term: "SMAW (Shielded Metal Arc Welding)",
    slug: "smaw",
    definition: "A manual arc welding process using a consumable flux-coated electrode — commonly called 'stick welding.'",
    longDescription: "Shielded Metal Arc Welding (SMAW), commonly known as stick welding, is one of the most versatile and widely used welding processes. The welder manually feeds a flux-coated consumable electrode, which creates an arc with the base metal. The flux coating generates a shielding gas and slag to protect the weld pool from atmospheric contamination. SMAW is popular for field welding, maintenance, and structural steel because it works in all positions, is tolerant of wind and outdoor conditions, requires minimal equipment, and can weld a wide range of materials and thicknesses. Key essential variables for SMAW qualification include electrode classification (F-number), base metal P-number, position, and thickness range.",
    relatedTerms: ["gmaw", "fcaw", "wps", "essential-variables"],
    category: "Welding Processes",
  },
  {
    term: "GMAW (Gas Metal Arc Welding)",
    slug: "gmaw",
    definition: "A semi-automatic arc welding process using a continuously fed solid wire electrode and shielding gas — commonly called 'MIG welding.'",
    longDescription: "Gas Metal Arc Welding (GMAW), commonly called MIG (Metal Inert Gas) welding, uses a continuously fed solid wire electrode and an externally supplied shielding gas (typically argon/CO2 mixtures for steel). GMAW offers higher deposition rates than SMAW, making it the preferred process for shop fabrication and production welding. Transfer modes include short-circuit (thin materials), globular, spray (thick materials, flat/horizontal positions), and pulsed spray (all positions with controlled heat input). Essential variables for GMAW qualification include wire classification, shielding gas composition, transfer mode, and base metal type. GMAW is the most commonly used process in structural steel fabrication shops.",
    relatedTerms: ["smaw", "fcaw", "wps", "essential-variables"],
    category: "Welding Processes",
  },
  {
    term: "FCAW (Flux-Cored Arc Welding)",
    slug: "fcaw",
    definition: "A semi-automatic arc welding process using a tubular wire filled with flux, with or without external shielding gas.",
    longDescription: "Flux-Cored Arc Welding (FCAW) uses a continuously fed tubular wire electrode containing flux compounds. It comes in two variants: FCAW-G (gas-shielded, using external shielding gas like CO2 or argon/CO2 mix) and FCAW-S (self-shielded, where the flux provides all shielding). FCAW combines the high deposition rates of GMAW with the versatility of SMAW. FCAW-S is particularly popular for field structural welding because it is not affected by wind (no external gas shield to disperse). Essential variables include wire classification, shielding gas type (if used), electrical stickout, and base metal type. Many structural steel erectors use FCAW-S as their primary field welding process.",
    relatedTerms: ["smaw", "gmaw", "wps", "essential-variables"],
    category: "Welding Processes",
  },
  {
    term: "Weld Defects",
    slug: "weld-defects",
    definition: "Discontinuities in welds that exceed code-specified acceptance criteria, requiring repair or rejection.",
    longDescription: "Weld defects are discontinuities that exceed the acceptance criteria specified by the applicable code. Common weld defects include: cracks (never acceptable — linear discontinuities caused by stress and/or hydrogen), porosity (gas pockets trapped in solidified weld metal), slag inclusions (non-metallic material trapped in weld), incomplete fusion (lack of bonding between weld and base metal or between weld passes), incomplete penetration (weld root fails to reach the joint root), undercut (groove melted into base metal at weld toe), overlap (weld metal rolling over unfused base metal), and excess reinforcement. The distinction between a discontinuity (any imperfection) and a defect (discontinuity exceeding acceptance criteria) is important — not all discontinuities are defects.",
    relatedTerms: ["visual-inspection", "ndt", "quality-control", "corrective-action"],
    category: "Quality Control",
  },
  {
    term: "Quality Control (QC)",
    slug: "quality-control",
    definition: "Systematic processes ensuring welds meet specified code requirements and quality standards throughout fabrication.",
    longDescription: "Quality Control (QC) in welding encompasses all the systematic activities performed to ensure that welds meet the requirements of applicable codes, standards, and project specifications. QC includes verifying welder qualifications, reviewing WPS compliance, performing required inspections (VT, NDT), documenting results, managing non-conformances, and maintaining quality records. A QC program typically operates under a Quality Manual or Quality Management System (ISO 9001 or similar). The QC function is distinct from Quality Assurance (QA), which provides oversight of the QC program itself. Effective welding QC requires trained personnel, proper documentation, and systematic tracking — all of which WeldCert streamlines.",
    relatedTerms: ["cwi", "visual-inspection", "weld-defects", "corrective-action"],
    category: "Quality Control",
  },
  {
    term: "Performance Qualification",
    slug: "performance-qualification",
    definition: "The demonstration and documentation of a welder's ability to produce acceptable welds under test conditions.",
    longDescription: "Performance qualification (also called welder performance qualification or WPQ) is the testing process that demonstrates a welder can produce acceptable welds following a specific WPS. The welder produces a test coupon under controlled conditions, and the coupon is tested per code requirements (typically bend tests and/or radiography for groove welds, macro/break tests for fillet welds). Successful performance qualifies the welder for a range of variables (positions, material groups, thickness ranges, processes) as defined by the code. Under AWS D1.1, qualifications expire if a welder does not use the qualified process within 6 months. Under ASME IX, the employer maintains a continuity log showing the welder has used the process. WeldCert tracks all performance qualifications, expiration dates, and renewal requirements automatically.",
    relatedTerms: ["welder-qualification", "wps", "continuity-log", "essential-variables"],
    category: "Certifications",
  },
  {
    term: "Continuity Log",
    slug: "continuity-log",
    definition: "A record documenting that a welder has used a specific qualified welding process within the required time period to maintain qualification.",
    longDescription: "A continuity log (or maintenance of qualification record) documents that a welder has continued to use a specific welding process within the time frame required by the applicable code to keep their qualification active. Under ASME Section IX, the employer must maintain records showing each welder has used the qualified process at least once within a 6-month period. Under AWS D1.1, if a welder has not welded with a process within 6 months, requalification is required. Continuity logs must include the welder's name/ID, process used, date of welding activity, and supervisor verification. Failure to maintain continuity logs is one of the most common audit findings. WeldCert automates continuity tracking with alerts before qualifications lapse.",
    relatedTerms: ["welder-qualification", "performance-qualification", "audit-preparation"],
    category: "Documentation",
  },
  {
    term: "AISC Certification",
    slug: "aisc-certification",
    definition: "American Institute of Steel Construction certification program for structural steel fabricators and erectors.",
    longDescription: "AISC Certification is a quality certification program administered by the American Institute of Steel Construction for structural steel fabricators and erectors. Certification categories include Standard for Steel Building Structures (SBR), Bridge and Highway (CPT), and Advanced (including fracture-critical and major components). AISC certification requires a comprehensive Quality Management System, qualified welding personnel, documented welding procedures, regular internal audits, and periodic audits by AISC assessors. Maintaining AISC certification is often a prerequisite for bidding on significant structural steel projects. The certification process evaluates the fabricator's ability to manage welder qualifications, WPS compliance, inspection programs, and non-conformance resolution — all areas where WeldCert provides digital infrastructure.",
    relatedTerms: ["aws-d1-1", "quality-control", "welder-qualification", "audit-preparation"],
    category: "Certifications",
  },
  {
    term: "Audit Preparation",
    slug: "audit-preparation",
    definition: "The process of organizing documentation, records, and personnel readiness for regulatory or certification audits.",
    longDescription: "Audit preparation in welding quality management involves assembling and verifying all required documentation before a certification audit (AISC, ISO, ASME), owner audit, or regulatory inspection. Key preparation activities include verifying all welder qualifications are current and documented, confirming WPS/PQR packages are complete and accessible, reviewing NDT reports for completeness, checking calibration records for welding and inspection equipment, ensuring non-conformance reports are resolved and closed, updating the quality manual and procedures, and conducting internal pre-audits. Poor documentation is the leading cause of audit findings. Organizations that maintain digital records through WeldCert can generate audit-ready packages instantly instead of scrambling through filing cabinets.",
    relatedTerms: ["aisc-certification", "quality-control", "continuity-log", "corrective-action"],
    category: "Documentation",
  },
  {
    term: "Corrective Action",
    slug: "corrective-action",
    definition: "Documented steps taken to address weld defects, non-conformances, or audit findings and prevent recurrence.",
    longDescription: "Corrective action in welding quality management is the formal process of addressing identified problems — weld defects, non-conformances, inspection findings, or audit observations — and implementing measures to prevent recurrence. A corrective action report (CAR) typically includes: description of the non-conformance, root cause analysis, immediate corrective action taken (repair, replacement, rework), preventive action to avoid recurrence (training, procedure revision, equipment maintenance), responsible parties and target dates, and verification of effectiveness. Tracking corrective actions from identification through verification is a regulatory and certification requirement (AISC, ISO 9001). WeldCert provides a complete corrective action workflow with automated notifications and closure verification.",
    relatedTerms: ["weld-defects", "quality-control", "audit-preparation", "non-conformance"],
    category: "Quality Control",
  },
  {
    term: "Preheat",
    slug: "preheat",
    definition: "Heating the base metal to a specified temperature before welding to reduce the risk of cracking.",
    longDescription: "Preheat is the application of heat to the base metal before welding to raise it above a minimum specified temperature. Preheat serves several purposes: it slows the cooling rate of the weld and heat-affected zone (reducing the risk of hydrogen-induced cracking), it helps drive off moisture that could introduce hydrogen, it reduces residual stresses, and it compensates for rapid heat dissipation in thick or highly restrained joints. Preheat temperatures are specified by the WPS based on factors including base metal type and thickness, carbon equivalent, hydrogen level of the welding consumable, joint restraint, and ambient temperature. Preheat is an essential variable — failure to achieve minimum preheat or reducing preheat below the qualified range invalidates the procedure qualification.",
    relatedTerms: ["wps", "essential-variables", "weld-defects", "pwht"],
    category: "Welding Processes",
  },
  {
    term: "PWHT (Post-Weld Heat Treatment)",
    slug: "pwht",
    definition: "Controlled heating of a welded component after welding to relieve residual stresses and improve mechanical properties.",
    longDescription: "Post-Weld Heat Treatment (PWHT) is a controlled thermal process applied to welded components after welding is complete. The most common form is stress relief, where the component is heated to a specified temperature (typically 1100-1250°F for carbon steel), held for a period proportional to thickness, and then slowly cooled. PWHT reduces residual stresses that can cause distortion and stress corrosion cracking, tempers hard microstructures in the heat-affected zone, and can improve toughness. PWHT is required by many codes for thick sections, certain material types, and specific service conditions (hydrogen, caustic, sour service). The addition or deletion of PWHT is an essential variable requiring procedure requalification. PWHT parameters must be carefully documented including temperature, hold time, heating/cooling rates, and thermocouple locations.",
    relatedTerms: ["preheat", "essential-variables", "wps", "quality-control"],
    category: "Welding Processes",
  },
  {
    term: "Requalification",
    slug: "requalification",
    definition: "The process of re-testing a welder or re-qualifying a procedure when qualification has expired or essential variables have changed.",
    longDescription: "Requalification is required when a welder's qualification expires (due to lapse in continuity) or when essential variables change beyond the qualified range for either procedures (WPS/PQR) or welder performance qualifications. Common triggers for requalification include: welder not using a process for 6+ months, changing to a different welding process, welding a different material group, exceeding the qualified thickness range, changing position beyond the qualified range, or modifying an essential variable on the WPS. Requalification involves welding new test coupons and performing required testing. The cost and downtime of unnecessary requalification — caused by poor tracking of qualification status and essential variable ranges — is significant. WeldCert prevents this by providing real-time visibility into qualification status and automated alerts.",
    relatedTerms: ["welder-qualification", "essential-variables", "continuity-log", "performance-qualification"],
    category: "Certifications",
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export function getGlossaryTermsByCategory(category: string): GlossaryTerm[] {
  return GLOSSARY_TERMS.filter((t) => t.category === category);
}

export function getAllGlossarySlugs(): string[] {
  return GLOSSARY_TERMS.map((t) => t.slug);
}
