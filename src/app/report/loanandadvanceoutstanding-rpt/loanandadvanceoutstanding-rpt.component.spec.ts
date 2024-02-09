import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanandadvanceoutstandingRptComponent } from './loanandadvanceoutstanding-rpt.component';

describe('LoanandadvanceoutstandingRptComponent', () => {
  let component: LoanandadvanceoutstandingRptComponent;
  let fixture: ComponentFixture<LoanandadvanceoutstandingRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanandadvanceoutstandingRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanandadvanceoutstandingRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
