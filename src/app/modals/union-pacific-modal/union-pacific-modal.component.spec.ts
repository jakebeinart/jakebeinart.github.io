import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionPacificModalComponent } from './union-pacific-modal.component';

describe('UnionPacificModalComponent', () => {
  let component: UnionPacificModalComponent;
  let fixture: ComponentFixture<UnionPacificModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnionPacificModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionPacificModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
