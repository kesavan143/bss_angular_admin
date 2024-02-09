import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XXVIIIRptComponent } from './xxviii-rpt.component';

describe('XXVIIIRptComponent', () => {
  let component: XXVIIIRptComponent;
  let fixture: ComponentFixture<XXVIIIRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XXVIIIRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XXVIIIRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
