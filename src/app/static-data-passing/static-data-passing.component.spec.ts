import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDataPassingComponent } from './static-data-passing.component';

describe('StaticDataPassingComponent', () => {
  let component: StaticDataPassingComponent;
  let fixture: ComponentFixture<StaticDataPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDataPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDataPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
