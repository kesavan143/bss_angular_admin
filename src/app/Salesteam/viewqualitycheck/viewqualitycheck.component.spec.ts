import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewqualitycheckComponent } from './viewqualitycheck.component';

describe('ViewqualitycheckComponent', () => {
  let component: ViewqualitycheckComponent;
  let fixture: ComponentFixture<ViewqualitycheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewqualitycheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewqualitycheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
