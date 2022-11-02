import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.css'],
})
export class MastheadComponent implements OnInit {
  faStar = faStar;

  constructor() {}

  ngOnInit(): void {}
}
