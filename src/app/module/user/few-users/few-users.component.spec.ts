import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FewUsersComponent } from './few-users.component';

describe('FewUsersComponent', () => {
  let component: FewUsersComponent;
  let fixture: ComponentFixture<FewUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FewUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
