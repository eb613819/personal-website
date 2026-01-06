export type ProjectType = 
    | '3D Print / Maker'
    | 'Electronics / Raspberry Pi'
    | 'Hardware / IT'
    | 'Software / Web'
    | 'Other / Experimental';

export type ProjectStatus =
    | 'Completed'
    | 'In Progress'
    | 'Not Started'

export interface Project {
  title: string;
  types: ProjectType[];
  status: ProjectStatus;
  completionDate?: string;
  description: string[];
  tags?: string[];
  imageUrl?: string;
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    types: ['Software / Web'],
    status: 'In Progress',
    description: [
      'Built using Angular standalone components with TypeScript and Node.js.',
      'Includes dynamic Experience and Projects pages with expandable cards.',
      'Hosted on local server with GitHub integration for version control.'
    ],
    tags: ['Angular', 'Node.js', 'TypeScript', 'Portfolio'],
    links: [
      { label: 'GitHub', url: 'https://github.com/eb613819/personal-website' }
    ]
  },
  {
    title: 'NAS Build',
    types: ['Hardware / IT'],
    status: 'In Progress',
    description: [
      'Assembled a home NAS with multiple drives for backups and media storage.',
      'Configured RAID, shared network access, and automated backups.',
      'Learned hands-on networking and Linux system administration.'
    ],
    tags: ['NAS', 'Linux', 'RAID', 'Networking'],
  },
  {
    title: 'Magic Mirror Build',
    types: ['Electronics / Raspberry Pi', 'Hardware / IT'],
    status: 'Completed',
    completionDate: '03-15-2025',
    description: [
      'Built a smart mirror using an old TV, Raspberry Pi, poster frame, sheet of glass, and reflective film.',
      'Configured the Magic Mirror software for displaying calendar, weather, and news.',
      'Focused on physical assembly, wiring, and enclosure construction.'
    ],
    tags: ['Raspberry Pi', 'IoT', 'Smart Home', 'Hardware'],
    imageUrl: '/assets/images/magic-mirror.jpg',
    links: [
      { label: 'Magic Mirror GitHub', url: 'https://github.com/MichMich/MagicMirror' }
    ]
  },
  {
    title: 'Insulin Holder',
    types: ['Electronics / Raspberry Pi', '3D Print / Maker'],
    status: 'Not Started',
    description: [
      'Build an insulin vial holder for the fridge.',
      'Include a temp monitor that alerts if the temp is outside range.'
    ],
    tags: ['Raspberry Pi', 'Temperature Monitor', 'Smart Home', 'Fridge']
  }
];
