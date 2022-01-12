import { animate, state, style, transition, trigger } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { faFacebook, faGithub, faJava, faLinkedin, faPython, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faBookOpen, faChartBar, faDownload, faMicrochip, faPlus, faStar, faTimes, faTrain } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UnionPacificModalComponent } from './modals/union-pacific-modal/union-pacific-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

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

  UnionPacificModalComponent = UnionPacificModalComponent;

  navMenuOpen = false;

  constructor(public modalService: NgbModal){}

  openUPModal(){
    this.modalService.open(UnionPacificModalComponent, {size: 'xl'});
  }
}
