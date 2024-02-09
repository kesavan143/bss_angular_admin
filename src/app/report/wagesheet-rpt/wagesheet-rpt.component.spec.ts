import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WagesheetRptComponent } from './wagesheet-rpt.component';

describe('WagesheetRptComponent', () => {
  let component: WagesheetRptComponent;
  let fixture: ComponentFixture<WagesheetRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesheetRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WagesheetRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
