import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[appBasicDirective]' })
export class BasicDirective implements OnInit {
  @Input() color = 'red';
  @Input('appBasicDirective') yourConsoleMsg: string;
  constructor(private someElement: ElementRef) {}

  ngOnInit() {
    console.log(this.yourConsoleMsg);
    this.someElement.nativeElement.style.color = this.color;
  }
}
