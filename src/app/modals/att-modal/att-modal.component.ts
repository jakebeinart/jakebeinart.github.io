import { Component, OnInit } from '@angular/core';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-att-modal',
  templateUrl: './att-modal.component.html',
  styleUrls: ['./att-modal.component.css']
})
export class AttModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal,) { }
  faTruck = faTruck;

  ngOnInit(): void {
  }

}
