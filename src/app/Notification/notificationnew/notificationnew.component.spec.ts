import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationnewComponent } from './notificationnew.component';

describe('NotificationnewComponent', () => {
  let component: NotificationnewComponent;
  let fixture: ComponentFixture<NotificationnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
