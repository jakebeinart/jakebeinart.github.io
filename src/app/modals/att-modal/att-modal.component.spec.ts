import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttModalComponent } from './att-modal.component';

describe('AttModalComponent', () => {
  let component: AttModalComponent;
  let fixture: ComponentFixture<AttModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
