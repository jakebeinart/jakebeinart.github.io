import { animate, state, style, transition, trigger } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBookOpen, faChartBar, faDownload, faPlus, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [
  //   trigger('openClose', [
  //     // ...
  //     state('open', style({
  //       display: 'flex'
  //     })),
  //     state('closed', style({
  //       display: 'none'
  //     })),
  //     transition('open => closed', [
  //       animate('1s')
  //     ]),
  //     transition('closed => open', [
  //       animate('0.5s')
  //     ]),
  //   ]),
  // ]
})
export class AppComponent {
  title = 'jake-beinart-site';
  faBars = faBars;
  faStar = faStar;
  faPlus = faPlus;
  faDownload = faDownload;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faTimes = faTimes;
  faGithub = faGithub;
  faBookOpen = faBookOpen;
  faChartBar = faChartBar;
  navMenuOpen = false;

  constructor(public modalService: NgbModal){}

  toggleNavMenu(){
    console.log(!this.navMenuOpen);
    this.navMenuOpen = !this.navMenuOpen;
  }
}
