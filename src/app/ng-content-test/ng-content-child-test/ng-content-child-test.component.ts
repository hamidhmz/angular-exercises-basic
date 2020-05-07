import { Component, OnInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ng-content-child-test',
  templateUrl: './ng-content-child-test.component.html',
  styleUrls: ['./ng-content-child-test.component.scss'],
})
export class NgContentChildTestComponent implements OnInit {
  @ContentChild('wannaAccessToContent', { static: true })
  contentSth: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  something() {
    console.log(this.contentSth);
  }
}
