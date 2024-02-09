import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedissuesComponent } from './closedissues.component';

describe('ClosedissuesComponent', () => {
  let component: ClosedissuesComponent;
  let fixture: ComponentFixture<ClosedissuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedissuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
