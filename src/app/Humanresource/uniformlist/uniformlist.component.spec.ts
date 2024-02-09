import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformlistComponent } from './uniformlist.component';

describe('UniformlistComponent', () => {
  let component: UniformlistComponent;
  let fixture: ComponentFixture<UniformlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniformlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniformlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
