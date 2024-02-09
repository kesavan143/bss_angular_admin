import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XXVIIRptComponent } from './xxvii-rpt.component';

describe('XXVIIRptComponent', () => {
  let component: XXVIIRptComponent;
  let fixture: ComponentFixture<XXVIIRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XXVIIRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XXVIIRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
