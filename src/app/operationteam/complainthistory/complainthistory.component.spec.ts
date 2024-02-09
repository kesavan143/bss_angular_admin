import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainthistoryComponent } from './complainthistory.component';

describe('ComplainthistoryComponent', () => {
  let component: ComplainthistoryComponent;
  let fixture: ComponentFixture<ComplainthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
