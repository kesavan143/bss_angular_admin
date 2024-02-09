import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotpaysummaryRptComponent } from './totpaysummary-rpt.component';

describe('TotpaysummaryRptComponent', () => {
  let component: TotpaysummaryRptComponent;
  let fixture: ComponentFixture<TotpaysummaryRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotpaysummaryRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotpaysummaryRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
