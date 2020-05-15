import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-switch-case-directive',
    templateUrl: './switch-case-directive.component.html',
    styleUrls: ['./switch-case-directive.component.scss'],
})
export class SwitchCaseDirectiveComponent implements OnInit {
    switchCaseTestValue = 'Hello';
    title = 'test1';
    constructor() {}

    ngOnInit(): void {}
}
