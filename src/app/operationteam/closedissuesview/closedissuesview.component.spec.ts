import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedissuesviewComponent } from './closedissuesview.component';

describe('ClosedissuesviewComponent', () => {
  let component: ClosedissuesviewComponent;
  let fixture: ComponentFixture<ClosedissuesviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedissuesviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedissuesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
