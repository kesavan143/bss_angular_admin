import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettraininglistComponent } from './settraininglist.component';

describe('SettraininglistComponent', () => {
  let component: SettraininglistComponent;
  let fixture: ComponentFixture<SettraininglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettraininglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettraininglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
