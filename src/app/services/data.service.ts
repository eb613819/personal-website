import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project.interface';
import { Experience } from '../interfaces/experience.interface';

@Injectable({ providedIn: 'root' })
export class DataService {
  private baseUrl = 'https://raw.githubusercontent.com/eb613819/portfolio-site-data/main';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/data/projects.json`);
  }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.baseUrl}/data/experiences.json`);
  }
}
