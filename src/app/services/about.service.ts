import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { About } from '../models/about';

@Injectable({
  providedIn: 'root'
})

export class AboutService {

  private apiServiceUrl = 'https://proyecto-web-ap.onrender.com';

  constructor(private http: HttpClient) { }

  public getAbout():Observable<About>{
    return this.http.get<About>(`${this.apiServiceUrl}/informacion/ver/1`);    
  }

  public editAbout(about: About):Observable<About>{
    return this.http.put<About>(`${this.apiServiceUrl}/informacion/editar`,about);
  }
}
