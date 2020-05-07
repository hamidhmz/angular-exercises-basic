import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentChildTestComponent } from './ng-content-child-test.component';

describe('NgContentChildTestComponent', () => {
  let component: NgContentChildTestComponent;
  let fixture: ComponentFixture<NgContentChildTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentChildTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentChildTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
