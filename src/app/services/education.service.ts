import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiServiceUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }  
  
  public getEducation():Observable<Education[]>{ //trae una lista
    return this.http.get<Education[]>(`${this.apiServiceUrl}/educacion/ver`);
  }

  public addEducation(education: Education):Observable<Education>{
    return this.http.post<Education>(`${this.apiServiceUrl}/educacion/agregar`,education);
  }

  public editEducation(education: Education):Observable<Education>{
    return this.http.put<Education>(`${this.apiServiceUrl}/educacion/editar`,education);
  }

  public deleteEducation(educationId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/educacion/borrar/${educationId}`);
  }
}
