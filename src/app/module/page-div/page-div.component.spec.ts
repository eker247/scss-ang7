import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDivComponent } from './page-div.component';

describe('PageDivComponent', () => {
  let component: PageDivComponent;
  let fixture: ComponentFixture<PageDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
