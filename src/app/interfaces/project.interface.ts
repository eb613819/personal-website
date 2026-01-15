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
  images?: string[];
  
  detailsPage?: string;
  github?: string;
  printables?: string;
  dockerhub?: string;
  website?: string; // generic website
}
