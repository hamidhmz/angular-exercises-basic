import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumeIntervalObservableComponent } from './costume-interval-observable.component';

describe('CostumeIntervalObservableComponent', () => {
  let component: CostumeIntervalObservableComponent;
  let fixture: ComponentFixture<CostumeIntervalObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumeIntervalObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumeIntervalObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
