import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

type AuthSignUpResponseData = {
    status: string;
    data: {
        name: string;
        email: string;
        mobile: string;
        token: string;
    };
    message: string;
};
type AuthLoginResponseData = {
    status: string;
    data: {
        name: string;
        email: string;
        mobile: string;
        token: string;
    };
    message: string;
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user = new BehaviorSubject<User>(null);
    constructor(private http: HttpClient, private router: Router) {}
    signUp(email: string, name: string, mobile: string, password: string) {
        return this.http
            .post<AuthSignUpResponseData>(
                'http://localhost:3000/user/sign-up',
                {
                    email,
                    name,
                    mobile,
                    password,
                }
            )
            .pipe(
                catchError((errorRes) => {
                    return throwError(errorRes);
                }),
                tap((resData) => {
                    const user = new User(
                        resData.data.email,
                        resData.data.name,
                        resData.data.mobile,
                        resData.data.token
                    );
                    this.setUserInfo(user);
                })
            );
    }

    logout() {
        this.user.next(null);
        localStorage.removeItem('userData');
        this.router.navigate(['/app-servers']);
    }
    login(email: string, password: string) {
        return this.http
            .post<AuthLoginResponseData>('http://localhost:3000/user/login', {
                email,
                password,
            })
            .pipe(
                catchError((errorRes) => {
                    return throwError(errorRes);
                }),
                tap((resData) => {
                    const user = new User(
                        resData.data.email,
                        resData.data.name,
                        resData.data.mobile,
                        resData.data.token
                    );
                    console.log('here inside pipe   ');
                    this.setUserInfo(user);
                })
            );
    }

    autoLogin() {
        const userData: {
            email: string;
            name: string;
            token: string;
            mobile: string;
        } = JSON.parse(localStorage.getItem('userData'));
        if (!userData) return;
        console.log('AuthService -> autoLogin -> userData', userData);

        const loadedUser = new User(
            userData.email,
            userData.name,
            userData.mobile,
            userData.token
        );

        this.user.next(loadedUser);
    }

    setUserInfo(user: User) {
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    async isAuthenticated() {
        const user = JSON.parse(localStorage.getItem('userData'));
        if (!user || !user?.token) {
            this.logout();
            return false;
        }
        return true;
    }
}
