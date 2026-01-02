export type ExperienceType = 'job' | 'research' | 'teaching';

export interface Experience {
    role: string;
    organization: string;
    startDate: string;
    endDate: string;
    description: string[];
    tags?: string[];
    type:ExperienceType;
}

export const experiences: Experience[] = [
    {
        role: 'Graduate Research Assistant',
        organization: 'Ohio University - Dr. Shawn Ostermann & Ilya Kogan',
        startDate: 'May 2024',
        endDate: 'Present',
        description: [
            'Leading integration of Backstage (internal developer portal) into the university’s cloud-native Kubernetes platform, focusing on scalability, reliability, and developer workflow improvements.',
            'Implemented Azure AD SSO, Microsoft Graph API user provisioning, and secure authentication flows.',
            'Integrated multiple platform tools: Jira, Kubernetes metrics/monitoring, TechDocs, GitHub org imports, and catalog templates.',
            'Working in a Linux-based cloud environment using containers, cloud APIs, and infrastructure automation.',
            'Upcoming work includes enabling GitHub-based student login and expanding platform access.'

        ],
        tags: ['Kubernetes', 'Backstage', 'Azure', 'Cloud', 'IDP'],
        type: 'research'
    },
    {
    role: 'Undergraduate Research Assistant',
    organization: 'Ohio University — Dr. Shawn Ostermann',
    startDate: 'April 2023',
    endDate: 'May 2024',
    description: [
      'Evaluated and optimized performance of ION (delay tolerant network) under diverse system and networking conditions.',
      'Built and managed QEMU virtual machine environments to conduct controlled systems tests.',
      'Began building a cloud-based automated testing framework using cloud platforms and config-management tooling.',
      'Strengthened understanding of Linux internals, networking, virtualization, and high-availability system behavior.'
    ],
    tags: ['Linux', 'Networking', 'Virtualization', 'Cloud', 'Research', 'QEMU', 'ProxMox', 'Ansible'],
    type: 'research'
  },
  {
    role: 'Student Software Engineer',
    organization: 'Ohio University IT',
    startDate: 'May 2021',
    endDate: 'June 2024',
    description: [
      'Collaborated with cross-functional teams to deliver full-stack applications supporting university operations.',
      'Modernized and refactored legacy applications into supported languages and platforms.',
      'Coordinated work through GitHub, code reviews, and iterative development.'
    ],
    tags: ['Software', 'Full-stack', 'Node.js', 'React', 'TypeScript', 'Angular'],
    type: 'job'
  },
  {
    role: 'Technology Department Intern',
    organization: 'Western Brown Local Schools',
    startDate: 'June 2019',
    endDate: 'January 2021',
    description: [
      'Supported districtwide technology infrastructure: device deployment, diagnostics, repairs, and classroom hardware installations.',
      'Maintained networking equipment (switches, UPS systems) and contributed to operational uptime across multiple buildings.',
      'Strengthened hands-on hardware, troubleshooting, and team-oriented communication skills.'
    ],
    tags: ['Hardware', 'Networking', 'Support', 'IT'],
    type: 'job'
  },
  {
    role: 'Instructor of Record — CS1400: Fundamentals of Computing',
    organization: 'Ohio University',
    startDate: 'August 2025',
    endDate: 'December 2025',
    description: [
      'Design and deliver lectures, quizzes, programming assignments, exams, and supplemental materials for ~25 students.',
      'Manage all course materials and grading, providing timely feedback to support student learning.',
      'Teach foundational computing concepts, including computational thinking, problem solving, algorithms, Python programming, and contemporary issues in computer science.'
    ],
    tags: ['Teaching', 'Python', 'CS Education'],
    type: 'teaching'
  }
]
