import {
    Component,
    ComponentFactoryResolver,
    EventEmitter,
    OnInit,
    ViewChild,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { AlertDynamicComponentComponent } from '../alert-dynamic-component/alert-dynamic-component.component';
import { PlaceholderDirective } from '../alert-dynamic-component/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    @ViewChild(PlaceholderDirective, { static: false })
    alertHost: PlaceholderDirective;

    public authForm: FormGroup;
    public signUpForm: FormGroup;
    public isLogin = true;
    public errorMsg: string = null;
    public isLoading = false;

    private closeSub: Subscription;
    constructor(
        private authService: AuthService,
        private router: Router,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}

    ngOnInit(): void {
        this.authForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.email,
            ]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
            ]),
        });
        this.signUpForm = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [
                Validators.required,
                Validators.email,
            ]),
            mobile: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [
                Validators.required,
                Validators.minLength(6),
            ]),
        });

        this.authForm.valueChanges.subscribe((val) => {
            console.log('this is valueChanges observable: ', val);
        });
        this.authForm.statusChanges.subscribe((status) => {
            console.log('this is statusChanges observable: ', status);
        });
        console.log(this.authForm);
    }

    onSubmitAuth() {
        if (this.authForm.invalid) {
            return;
        }

        this.isLoading = true;
        this.authService
            .login(this.authForm.value.email, this.authForm.value.password)
            .subscribe(
                (response) => {
                    console.log('this is response from login', response);
                    this.isLoading = false;
                    this.errorMsg = null;
                    this.router.navigate(['/app-servers']);
                },
                (error: {
                    error: { status: string; message: string };
                    status: number;
                    statusText: string;
                }) => {
                    console.log('this is error from login', error);
                    this.errorMsg = error?.error?.message;
                    this.showErrorAlert();
                    this.isLoading = false;
                }
            );

        console.log('do something email', this.authForm.value.email);
        console.log('do something password', this.authForm.value.password);
    }
    onSubmitSignUp() {
        if (this.signUpForm.invalid) {
            return;
        }

        this.isLoading = true;
        this.authService
            .signUp(
                this.signUpForm.value.email,
                this.signUpForm.value.name,
                this.signUpForm.value.mobile,
                this.signUpForm.value.password
            )
            .subscribe(
                (response) => {
                    console.log('this is my response from sign up', response);
                    this.errorMsg = null;
                    this.isLoading = false;
                    this.router.navigate(['/app-servers']);
                },
                (error: {
                    error: { status: string; message: string };
                    status: number;
                    statusText: string;
                }) => {
                    console.log('this is my error from sign up', error);
                    this.errorMsg = error?.error?.message;
                    this.isLoading = false;
                }
            );
    }

    switchLoginToSignUp() {
        this.isLogin = !this.isLogin;
    }

    private showErrorAlert() {
        const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
            AlertDynamicComponentComponent
        );

        const hostViewContainerRef = this.alertHost.viewContainerRef;

        console.log(
            'AuthComponent -> showErrorAlert -> hostViewContainerRef',
            hostViewContainerRef
        );

        hostViewContainerRef.clear();

        const componentRef = hostViewContainerRef.createComponent(
            alertComponentFactory
        );

        componentRef.instance.message = this.errorMsg;

        this.closeSub = componentRef.instance.close.subscribe(() => {
            this.closeSub.unsubscribe();
            hostViewContainerRef.clear();
        });
    }
}
