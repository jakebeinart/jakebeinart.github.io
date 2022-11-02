import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  faStar = faStar;
  constructor() {}

  /*
  Look into this for free BE solution: http://enformed.io/
  Maybe consider captcha too
  */

  ngOnInit(): void {}
}
