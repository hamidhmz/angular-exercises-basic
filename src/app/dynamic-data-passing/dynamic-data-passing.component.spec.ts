import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDataPassingComponent } from './dynamic-data-passing.component';

describe('DynamicDataPassingComponent', () => {
  let component: DynamicDataPassingComponent;
  let fixture: ComponentFixture<DynamicDataPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDataPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDataPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
