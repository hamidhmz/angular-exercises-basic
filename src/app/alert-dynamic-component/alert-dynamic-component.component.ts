import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-alert-dynamic-component',
    templateUrl: './alert-dynamic-component.component.html',
    styleUrls: ['./alert-dynamic-component.component.scss'],
})
export class AlertDynamicComponentComponent implements OnInit {
    @Input() message: string;

    @Output() close = new EventEmitter<void>();
    constructor() {}

    ngOnInit(): void {}

    onClose() {
        this.close.emit();
    }
}
