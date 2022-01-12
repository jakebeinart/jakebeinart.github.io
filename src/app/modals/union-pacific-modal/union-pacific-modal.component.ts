import { Component, OnInit } from '@angular/core';
import { faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMicrochip, faTrain } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-union-pacific-modal',
  templateUrl: './union-pacific-modal.component.html',
  styleUrls: ['./union-pacific-modal.component.css']
})
export class UnionPacificModalComponent implements OnInit {
  faTrain = faTrain;
  faJava = faJava;
  faPython = faPython;
  faMicrochip = faMicrochip;

  constructor(public activeModal: NgbActiveModal,) { }

  ngOnInit(): void {
  }

}
