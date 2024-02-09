import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsiteComponent } from './clientsite.component';

describe('ClientsiteComponent', () => {
  let component: ClientsiteComponent;
  let fixture: ComponentFixture<ClientsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
