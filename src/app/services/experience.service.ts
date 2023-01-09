import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  private apiServiceUrl = 'https://proyectoweb-ap.onrender.com';
  
  constructor(private http: HttpClient) { }

  public getExperience():Observable<Experience[]>{ //trae una lista
    return this.http.get<Experience[]>(`${this.apiServiceUrl}/experiencia/ver`);
  }

  public addExperience(experience: Experience):Observable<Experience>{
    return this.http.post<Experience>(`${this.apiServiceUrl}/experiencia/agregar`,experience);
  }

  public editExperience(experience: Experience):Observable<Experience>{
    return this.http.put<Experience>(`${this.apiServiceUrl}/experiencia/editar`,experience);
  }

  public deleteExperience(experienceId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/experiencia/borrar/${experienceId}`);
  }
}
