import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationcomlistComponent } from './operationcomlist.component';

describe('OperationcomlistComponent', () => {
  let component: OperationcomlistComponent;
  let fixture: ComponentFixture<OperationcomlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationcomlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationcomlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
