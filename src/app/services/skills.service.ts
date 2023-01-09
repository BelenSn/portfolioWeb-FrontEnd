import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiServiceUrl = 'https://proyectoweb-ap.onrender.com';
  
  constructor(private http: HttpClient) { }

  public getSkill():Observable<Skills[]>{ //trae una lista
    return this.http.get<Skills[]>(`${this.apiServiceUrl}/habilidad/ver`);
  }

  public addSkill(experience: Skills):Observable<Skills>{
    return this.http.post<Skills>(`${this.apiServiceUrl}/habilidad/agregar`,experience);
  }

  public editSkill(experience: Skills):Observable<Skills>{
    return this.http.put<Skills>(`${this.apiServiceUrl}/habilidad/editar`,experience);
  }

  public deleteSkill(skillId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/habilidad/borrar/${skillId}`);
  }
}
