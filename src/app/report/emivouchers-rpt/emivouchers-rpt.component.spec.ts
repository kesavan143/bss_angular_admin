import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmivouchersRptComponent } from './emivouchers-rpt.component';

describe('EmivouchersRptComponent', () => {
  let component: EmivouchersRptComponent;
  let fixture: ComponentFixture<EmivouchersRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmivouchersRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmivouchersRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
