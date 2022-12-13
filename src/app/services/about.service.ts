import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root'
})

export class AboutService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAbout():Observable<About>{
    return this.http.get<About>(`${this.apiServiceUrl}/informacion/ver/1`);    
  }

  public editAbout(about: About):Observable<About>{
    return this.http.put<About>(`${this.apiServiceUrl}/informacion/editar`,about);
  }
}
