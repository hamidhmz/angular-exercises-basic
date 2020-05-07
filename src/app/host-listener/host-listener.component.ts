import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.scss'],
})
export class HostListenerComponent implements OnInit {
  constructor() {}
  myColor: 'yellow' | 'orange' = 'orange';
  ngOnInit(): void {}

  @HostListener('mouseenter') someEvent1(eventData: Event) {
    this.myColor = 'yellow';
  }

  @HostListener('mouseleave') someEvent2(eventData: Event) {
    this.myColor = 'orange';
  }
}
