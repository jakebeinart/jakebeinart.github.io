import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css'],
})
export class ExperienceSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() dates: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
