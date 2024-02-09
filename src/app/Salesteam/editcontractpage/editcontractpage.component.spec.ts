import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcontractpageComponent } from './editcontractpage.component';

describe('EditcontractpageComponent', () => {
  let component: EditcontractpageComponent;
  let fixture: ComponentFixture<EditcontractpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcontractpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcontractpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
