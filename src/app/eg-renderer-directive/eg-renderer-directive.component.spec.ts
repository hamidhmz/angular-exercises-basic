import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgRendererDirectiveComponent } from './eg-renderer-directive.component';

describe('EgRendererDirectiveComponent', () => {
  let component: EgRendererDirectiveComponent;
  let fixture: ComponentFixture<EgRendererDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgRendererDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgRendererDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
