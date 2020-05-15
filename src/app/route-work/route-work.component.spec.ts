import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteWorkComponent } from './route-work.component';

describe('RouteWorkComponent', () => {
  let component: RouteWorkComponent;
  let fixture: ComponentFixture<RouteWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
