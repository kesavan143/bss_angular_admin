import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuniformComponent } from './viewuniform.component';

describe('ViewuniformComponent', () => {
  let component: ViewuniformComponent;
  let fixture: ComponentFixture<ViewuniformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuniformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuniformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
