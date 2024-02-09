import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualEntryEmpComponent } from './manual-entry-emp.component';

describe('ManualEntryEmpComponent', () => {
  let component: ManualEntryEmpComponent;
  let fixture: ComponentFixture<ManualEntryEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualEntryEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualEntryEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
