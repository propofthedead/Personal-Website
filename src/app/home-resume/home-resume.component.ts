import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-resume',
  templateUrl: './home-resume.component.html',
  styleUrls: ['./home-resume.component.css']
})
export class HomeResumeComponent implements OnInit {


  skills:string[]=[
    "C#",
    "Angular",
    "Javascript",
    "Typescript",
    "CSS",
    "HTML",
    "SQL",
    "MVC",
    "Entity Framwork",
    "Python",
    "Communication Skills",
    "Scrum Certified",
    "Easilly Adaptable"
  ]
  
  
  constructor() { }

  ngOnInit() {
  }

}
