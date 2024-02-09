import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettraininglessonsComponent } from './settraininglessons.component';

describe('SettraininglessonsComponent', () => {
  let component: SettraininglessonsComponent;
  let fixture: ComponentFixture<SettraininglessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettraininglessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettraininglessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
