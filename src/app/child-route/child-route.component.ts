import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-child-route',
    templateUrl: './child-route.component.html',
    styleUrls: ['./child-route.component.scss'],
})
export class ChildRouteComponent implements OnInit, OnDestroy {
    userName: string;
    userId: number;
    paramsSubscription: Subscription;
    queryParams: {};
    queryParamsShow: string;
    fragment: string;
    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        if (this.route.snapshot.params.id) {
            this.userId = this.route.snapshot.params.id;
        }

        if (this.route.snapshot.params.name) {
            this.userName = this.route.snapshot.params.name;
        }
        this.paramsSubscription = this.route.params.subscribe(
            (params: Params) => {
                this.userId = params.id;
                this.userName = params.name;
            }
        );

        console.log(
            'this.route.snapshot.queryParams: ',
            this.route.snapshot.queryParams
        );
        console.log(
            'this.route.snapshot.queryParamMap: ',
            this.route.snapshot.queryParamMap
        );
        console.log(
            'this.route.snapshot.fragment: ',
            this.route.snapshot.fragment
        );
        console.log(
            'this.route.fragment.subscribe(): ',
            this.route.fragment.subscribe((fragment) => {
                this.fragment = fragment;
                console.log('this.fragment: ', this.fragment);
            })
        );
        console.log(
            'this.route.queryParams.subscribe(): ',
            this.route.queryParams.subscribe((params: Params) => {
                this.queryParams = params;
                console.log('this.queryParams: ', this.queryParams);
                this.queryParamsShow = JSON.stringify(this.queryParams);
            })
        );
    }
    ngOnDestroy() {
        this.paramsSubscription.unsubscribe(); // you don't have to do this because angular would do it for you
    }
}
