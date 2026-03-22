export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
}

export const AUTHORS: Author[] = [
  {
    slug: 'nolan-terry',
    name: 'Nolan Terry',
    role: 'Founder & CEO',
    bio: 'Nolan Terry is the founder of WeldCert and CEO of Nolan Ventures, a construction technology company building compliance software for safety-critical trades. He created WeldCert to digitize welder qualification tracking for fabrication shops struggling with AWS D1.1, ASME Section IX, and CWI documentation requirements.',
    expertise: ['Welding Compliance', 'AWS/ASME Standards', 'Construction Tech', 'SaaS'],
  },
  {
    slug: 'weldcert-team',
    name: 'WeldCert Editorial Team',
    role: 'Welding Standards Research',
    bio: 'The WeldCert editorial team produces practical guides on welder qualification, certification tracking, and code compliance. Our content covers AWS D1.1, ASME Section IX, CWI requirements, and audit preparation for structural steel fabricators.',
    expertise: ['AWS D1.1', 'ASME Section IX', 'CWI Certification', 'Welding Documentation'],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find(a => a.slug === slug);
}
