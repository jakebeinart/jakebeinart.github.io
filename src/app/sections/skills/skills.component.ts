import { Component, OnInit } from '@angular/core';
import { faChartBar, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  faChartBar = faChartBar;
  faStar = faStar;
  skills = {
    col1: [
      { name: 'Angular', score: 5 },
      { name: 'Java', score: 5 },
      { name: 'Python', score: 4 },
      { name: 'React', score: 3 },
      { name: 'PHP', score: 2 },
    ],
    col2: [
      { name: 'Bootstrap', score: 5 },
      { name: 'Regex', score: 4 },
      { name: 'SQL', score: 4 },
      { name: 'Azure', score: 3 },
      { name: 'HTML', score: 4 },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
