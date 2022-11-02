import { Component, OnInit } from '@angular/core';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mst-modal',
  templateUrl: './mst-modal.component.html',
  styleUrls: ['./mst-modal.component.css']
})
export class MstModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,) { }
  faUserGraduate = faUserGraduate;

  ngOnInit(): void {
  }

}
