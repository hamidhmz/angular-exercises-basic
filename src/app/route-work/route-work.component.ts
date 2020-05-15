import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-route-work',
    templateUrl: './route-work.component.html',
    styleUrls: ['./route-work.component.scss'],
})
export class RouteWorkComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {}
    GoToNGIf() {
        console.log('something calculation');
        // this.router.navigate(['app-ng-if']);
        this.router.navigate(['app-ng-if'], {
            queryParams: { allowEdit: '1' },
            fragment: 'loading',
            // queryParamsHandling: 'merge',
            // queryParamsHandling:'preserve'
        });
        // this.router.navigate(['app-ng-if'], { relativeTo: this.route });
    }
}
