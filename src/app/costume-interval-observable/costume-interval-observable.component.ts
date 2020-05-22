import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-costume-interval-observable',
    templateUrl: './costume-interval-observable.component.html',
    styleUrls: ['./costume-interval-observable.component.scss'],
})
export class CostumeIntervalObservableComponent implements OnInit, OnDestroy {
    private firstObsSubscription: Subscription;
    constructor() {}

    ngOnInit(): void {
        const costumeIntervalObservable = new Observable((observer) => {
            let count = 0;
            setInterval(() => {
                observer.next(count);
                if (count === 2) {
                    observer.complete();
                }
                if (count > 3) {
                    observer.error(new Error('Count is grater than 3'));
                }
                count++;
            }, 1000);
        });

        this.firstObsSubscription = costumeIntervalObservable
            .pipe(
                // there is filter too
                map((data: number) => {
                    return 'Round: ' + (data + 1);
                })
            )
            .subscribe(
                (data) => {
                    console.log(data);
                },
                (error) => {
                    console.log('error: ', error);
                },
                () => {
                    console.log('Completed!');
                }
            );
    }

    ngOnDestroy(): void {
        this.firstObsSubscription.unsubscribe();
    }
}
