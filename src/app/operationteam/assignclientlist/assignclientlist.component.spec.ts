import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignclientlistComponent } from './assignclientlist.component';

describe('AssignclientlistComponent', () => {
  let component: AssignclientlistComponent;
  let fixture: ComponentFixture<AssignclientlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignclientlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignclientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
