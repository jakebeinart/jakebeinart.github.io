import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MstModalComponent } from './mst-modal.component';

describe('MstModalComponent', () => {
  let component: MstModalComponent;
  let fixture: ComponentFixture<MstModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MstModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MstModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
