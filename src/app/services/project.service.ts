import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private apiServiceUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public getProject():Observable<Project[]>{ //trae una lista
    return this.http.get<Project[]>(`${this.apiServiceUrl}/proyecto/ver`);
  }

  public addProject(project: Project):Observable<Project>{
    return this.http.post<Project>(`${this.apiServiceUrl}/proyecto/agregar`,project);
  }

  public editProject(project: Project):Observable<Project>{
    return this.http.put<Project>(`${this.apiServiceUrl}/proyecto/editar`,project);
  }

  public deleteProject(projectId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/proyecto/borrar/${projectId}`);
  }
}
