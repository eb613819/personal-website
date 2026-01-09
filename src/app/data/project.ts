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
  
  detailsPage?: string;
  github?: string;
  printables?: string;
  dockerhub?: string;
  website?: string; // generic website
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
    github: 'https://github.com/eb613819/personal-website',
    imageUrl: 'images/site_logo.png',
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
    github: 'https://github.com/MichMich/MagicMirror'
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
  },
  {
    title: "Raspberry Pi Pen Testing Rig",
    types: ['Electronics / Raspberry Pi', '3D Print / Maker'],
    status: "Completed",
    completionDate: "02-01-2025",
    description: [
      "Built a portable pen-testing rig inside an off-brand Pelican case.",
      "Used a Raspberry Pi running Kali Linux for lightweight pentesting tasks.",
      "Included 3D printed mounts and enclosures for components to keep it organized and portable."
    ],
    tags: ["PenTesting", "Raspberry Pi", "Kali Linux", "3D Printing", "Cybersecurity"],
    imageUrl: "images/pentest.jpg"
  },
  {
    title: "Home Lab Server Build",
    types: ['Hardware / IT'],
    status: "Completed",
    completionDate: "03-25-2025",
    description: [
      "Rebuilt a server using an old Supermicro X8DTN+ dual processor motherboard.",
      "Installed it in a Fractal Design case with modular PSU and proper cable management.",
      "Configured drives and power distribution for reliable home server operation.",
      "Installed Proxmox VE to run multiple virtual machines, experimenting with virtualization, networking, and containerized workloads."
    ],
    tags: ["Homelab", "Server", "Supermicro", "Linux", "Proxmox", "Virtualization"],
    imageUrl: "images/server.jpg"
  },
  {
    title: "3D Printed Stool Foot",
    types: ['3D Print / Maker'],
    status: "Completed",
    completionDate: "01-9-2026",
    description: [
      "Designed a custom stool foot to replace a missing leg cap.",
      "3D printed it in TPU for flexibility and grip.",
      "Tested fit and durability to ensure stability."
    ],
    tags: ["3D Printing", "TPU", "CAD", "Design"],
  },
  {
    title: "LED Drum Kit Lights",
    types: ['Electronics / Raspberry Pi', '3D Print / Maker'],
    status: "Completed",
    completionDate: "12-07-2019",
    description: [
      "Built an interactive LED lighting system for marching drums.",
      "Used piezo sensors on each drum to trigger individual LED strips.",
      "Controlled by Arduino for dynamic visual feedback while playing."
    ],
    tags: ["Arduino", "LED", "Sensors"],
    imageUrl: "images/drum_lights.jpg"
  },
  {
    title: "H2Load HTTP/3 Docker Container",
    types: ["Software / Web"],
    status: "Completed",
    completionDate: "10-31-2024",
    description: [
      "Packaged the H2Load HTTP/3 load-testing tool into a lightweight Docker container.",
      "Configured it to run easily on any system with Docker installed, eliminating the need for manual build and dependency setup.",
      "Tested HTTP/3 and HTTP/2 endpoints for performance and stress testing."
    ],
    tags: ["Docker", "HTTP/3", "HTTP/2", "Networking", "Containerization"],
    dockerhub: "https://hub.docker.com/repository/docker/eb613819/h2load-http3",
  },
];
