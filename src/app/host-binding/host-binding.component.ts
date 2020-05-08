import { Component, OnInit, HostListener, HostBinding } from '@angular/core';

@Component({
  selector: 'app-host-binding',
  templateUrl: './host-binding.component.html',
  styleUrls: ['./host-binding.component.scss'],
})
export class HostBindingComponent implements OnInit {
  @HostBinding('style.color') color = 'purple';
  constructor() {}
  @HostListener('mouseenter') _1() {
    this.color = 'black';
  }
  @HostListener('mouseleave') _() {
    this.color = 'purple';
  }
  ngOnInit(): void {}
}
