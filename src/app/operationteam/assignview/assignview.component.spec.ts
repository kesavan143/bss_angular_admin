import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignviewComponent } from './assignview.component';

describe('AssignviewComponent', () => {
  let component: AssignviewComponent;
  let fixture: ComponentFixture<AssignviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
