import { Component, OnInit } from '@angular/core';
import { ServersService } from '../service/servers.service';
import { ActivatedRoute, Router, Data } from '@angular/router';

@Component({
    selector: 'app-dynamic-data-passing',
    templateUrl: './dynamic-data-passing.component.html',
    styleUrls: ['./dynamic-data-passing.component.scss'],
})
export class DynamicDataPassingComponent implements OnInit {
    server: { id: number; name: string; status: string };

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.data.subscribe((data: Data) => {
            this.server = data.server;
        });
    }
}
