import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

public experiences: Experience[] = [];

  constructor(private expericeService: ExperienceService) { }

  ngOnInit(): void {
    this.getExperiences();
  }

  public getExperiences():void{
    this.expericeService.getExperience().subscribe({
      next: (Response: Experience[]) => {
        this.experiences = Response;
      },
      error:(error:HttpErrorResponse)=> {
        alert(error.message);
      }
    })
  }
}
