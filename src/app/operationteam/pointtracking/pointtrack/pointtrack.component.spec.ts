import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointtrackComponent } from './pointtrack.component';

describe('PointtrackComponent', () => {
  let component: PointtrackComponent;
  let fixture: ComponentFixture<PointtrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointtrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
