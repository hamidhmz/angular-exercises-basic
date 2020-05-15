import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
    selector: 'app-static-data-passing',
    templateUrl: './static-data-passing.component.html',
    styleUrls: ['./static-data-passing.component.scss'],
})
export class StaticDataPassingComponent implements OnInit {
    message: string;
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.data.subscribe((data: Data) => {
            this.message = data['message'];
        });
    }
}
