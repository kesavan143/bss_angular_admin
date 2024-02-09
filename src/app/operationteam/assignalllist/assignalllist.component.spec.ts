import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignalllistComponent } from './assignalllist.component';

describe('AssignalllistComponent', () => {
  let component: AssignalllistComponent;
  let fixture: ComponentFixture<AssignalllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignalllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignalllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
