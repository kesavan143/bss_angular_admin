import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XXIXRptComponent } from './xxix-rpt.component';

describe('XXIXRptComponent', () => {
  let component: XXIXRptComponent;
  let fixture: ComponentFixture<XXIXRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XXIXRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XXIXRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
