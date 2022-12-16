import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Project[] = [];
  
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects():void{
    this.projectService.getProject().subscribe({
      next: (Response: Project[]) => {
        this.projects = Response;
      },
      error:(error:HttpErrorResponse)=> {
        alert(error.message);
      }
    })
  }
}
