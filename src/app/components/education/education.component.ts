import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public educations:Education[] = []; //array para recorrer en el html *ngFor="let education of educations"


  constructor(private educationService: EducationService) { }

  ngOnInit(): void {

    this.getEducations();
  }

  public getEducations():void{
    this.educationService.getEducation().subscribe({
      next:(Response:Education[]) =>{
        this.educations = Response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
      
    })
  }

}
