import { Component } from '@angular/core';
import { Logger } from './service/Logger.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [Logger],
})
export class AppComponent {
    constructor(private myLogger: Logger) {}
    logMyAction() {
        this.myLogger.info('hello');
    }
}
