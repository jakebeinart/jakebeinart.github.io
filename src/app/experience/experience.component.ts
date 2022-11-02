import { Component, OnInit } from '@angular/core';
import { faBookOpen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttModalComponent } from '../modals/att-modal/att-modal.component';
import { MstModalComponent } from '../modals/mst-modal/mst-modal.component';
import { UnionPacificModalComponent } from '../modals/union-pacific-modal/union-pacific-modal.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  faPlus = faPlus;
  faBookOpen = faBookOpen;

  constructor(public modalService: NgbModal) {}

  ngOnInit(): void {}

  openUPModal() {
    this.modalService.open(UnionPacificModalComponent, { size: 'lg' });
  }
  openATTModal() {
    this.modalService.open(AttModalComponent, { size: 'lg' });
  }
  openMSTModal() {
    this.modalService.open(MstModalComponent, { size: 'lg' });
  }
}
