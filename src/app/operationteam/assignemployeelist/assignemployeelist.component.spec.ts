import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignemployeelistComponent } from './assignemployeelist.component';

describe('AssignemployeelistComponent', () => {
  let component: AssignemployeelistComponent;
  let fixture: ComponentFixture<AssignemployeelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignemployeelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
