import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfecrformatRptComponent } from './pfecrformat-rpt.component';

describe('PfecrformatRptComponent', () => {
  let component: PfecrformatRptComponent;
  let fixture: ComponentFixture<PfecrformatRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfecrformatRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfecrformatRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
