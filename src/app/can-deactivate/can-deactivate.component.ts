import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-can-deactivate',
    templateUrl: './can-deactivate.component.html',
    styleUrls: ['./can-deactivate.component.scss'],
})
export class CanDeactivateComponent implements OnInit, CanComponentDeactivate {
    help: string;
    save = true;
    constructor() {}
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.save) {
            return confirm(`you haven't save are you sure?`);
        }
        return true;
    }

    saveChanges() {
        this.save = true;
    }
    onEvent() {
        this.save = false;
    }
    ngOnInit(): void {}
}
