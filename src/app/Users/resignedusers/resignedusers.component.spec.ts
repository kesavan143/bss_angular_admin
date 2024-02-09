import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignedusersComponent } from './resignedusers.component';

describe('ResignedusersComponent', () => {
  let component: ResignedusersComponent;
  let fixture: ComponentFixture<ResignedusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResignedusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResignedusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
