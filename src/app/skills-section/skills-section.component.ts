import { Component, OnInit } from '@angular/core';
import { faChartBar, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit {
  faChartBar = faChartBar;
  faStar = faStar;
  skills = {
    col1: [
      {name: "Angular", score: 5},
      {name: "Java", score: 5},
      {name: "Python", score: 4},
      {name: "React", score: 3},
      {name: "PHP", score: 2},
    ], 
    col2:[
      {name: "Bootstrap", score: 5},
      {name: "Regex", score: 4},
      {name: "SQL", score: 4},
      {name: "Azure", score: 3},
      {name: "HTML", score: 4},
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
