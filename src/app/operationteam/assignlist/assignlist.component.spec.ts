import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignlistComponent } from './assignlist.component';

describe('AssignlistComponent', () => {
  let component: AssignlistComponent;
  let fixture: ComponentFixture<AssignlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
