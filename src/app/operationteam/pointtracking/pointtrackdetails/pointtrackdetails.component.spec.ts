import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointtrackdetailsComponent } from './pointtrackdetails.component';

describe('PointtrackdetailsComponent', () => {
  let component: PointtrackdetailsComponent;
  let fixture: ComponentFixture<PointtrackdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointtrackdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointtrackdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
