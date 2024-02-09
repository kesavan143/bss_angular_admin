import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderlistComponent } from './calenderlist.component';

describe('CalenderlistComponent', () => {
  let component: CalenderlistComponent;
  let fixture: ComponentFixture<CalenderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
