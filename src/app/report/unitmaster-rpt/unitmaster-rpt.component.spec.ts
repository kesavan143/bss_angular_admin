import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitmasterRptComponent } from './unitmaster-rpt.component';

describe('UnitmasterRptComponent', () => {
  let component: UnitmasterRptComponent;
  let fixture: ComponentFixture<UnitmasterRptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitmasterRptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitmasterRptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
