import { Component, OnInit } from '@angular/core';
import { Logger } from '../service/Logger.service';
@Component({
    selector: 'app-eg-service',
    templateUrl: './eg-service.component.html',
    styleUrls: ['./eg-service.component.scss'],
    providers: [Logger],
})
export class EgServiceComponent implements OnInit {
    constructor(private myLogger: Logger) {}
    logMyAction() {
        this.myLogger.info('hello');
    }
    ngOnInit() {}
}
