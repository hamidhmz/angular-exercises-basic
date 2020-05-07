import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({ selector: '[appBasicDirective]' })
export class BasicDirective implements OnInit {
  constructor(private someElement: ElementRef) {}

  ngOnInit() {
    this.someElement.nativeElement.style.color = 'red';
  }
}
