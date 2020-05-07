import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit {
  @ViewChild('someContent') someContent: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  whatIsMyContent() {
    // this.someContent.nativeElement.innerHTML = 5// :NOTE don't do this
    console.log(this.someContent.nativeElement.innerHTML);
  }
}
