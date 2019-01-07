import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBarItemComponent } from './left-bar-item.component';

describe('LeftBarItemComponent', () => {
  let component: LeftBarItemComponent;
  let fixture: ComponentFixture<LeftBarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftBarItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
