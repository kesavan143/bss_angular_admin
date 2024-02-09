import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignedemployeesComponent } from './resignedemployees.component';

describe('ResignedemployeesComponent', () => {
  let component: ResignedemployeesComponent;
  let fixture: ComponentFixture<ResignedemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResignedemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResignedemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
