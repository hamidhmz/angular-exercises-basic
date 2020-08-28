import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Logger } from './service/Logger.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [Logger],
})
export class AppComponent implements OnInit {
    constructor(private myLogger: Logger, private authService: AuthService) {}
    logMyAction() {
        this.myLogger.info('hello');
    }

    ngOnInit() {
        this.authService.autoLogin();
    }
}
