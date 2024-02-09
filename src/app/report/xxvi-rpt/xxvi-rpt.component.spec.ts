import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XXVIRptComponent } from './xxvi-rpt.component';

describe('XXVIRptComponent', () => {
  let component: XXVIRptComponent;
  let fixture: ComponentFixture<XXVIRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XXVIRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XXVIRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
