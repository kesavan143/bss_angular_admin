import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashandbankstatementRptComponent } from './cashandbankstatement-rpt.component';

describe('CashandbankstatementRptComponent', () => {
  let component: CashandbankstatementRptComponent;
  let fixture: ComponentFixture<CashandbankstatementRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashandbankstatementRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashandbankstatementRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
