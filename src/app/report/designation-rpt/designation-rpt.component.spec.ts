import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationRptComponent } from './designation-rpt.component';

describe('DesignationRptComponent', () => {
  let component: DesignationRptComponent;
  let fixture: ComponentFixture<DesignationRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
