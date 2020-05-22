import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
    selector: 'app-observable-interval-example',
    templateUrl: './observable-interval-example.component.html',
    styleUrls: ['./observable-interval-example.component.scss'],
})
export class ObservableIntervalExampleComponent implements OnInit, OnDestroy {
    private firstObsSubscription: Subscription;
    constructor() {}

    ngOnInit(): void {
        this.firstObsSubscription = interval(1000).subscribe((count) => {
            console.log(count);
        });
    }

    ngOnDestroy(): void {
        this.firstObsSubscription.unsubscribe();
    }
}
