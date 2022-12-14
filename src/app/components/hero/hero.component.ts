import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public about : About | undefined;
  public editAbout : About | undefined;

  constructor(private aboutService : AboutService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  public getAbout():void{
    this.aboutService.getAbout().subscribe({
      next: (response: About) => {
        this.about = response;
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
