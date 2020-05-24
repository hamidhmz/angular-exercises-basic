import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
    constructor() {}
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        console.log('------->Request is on its way<-------');

        const modifiedRequest = req.clone({
            headers: req.headers.append('someKey', 'xyz'),
            // params
            // responseType
            // withCredentials
            // body
            // method
            // url
            // setParams
            // setHeaders
        });
        return next.handle(modifiedRequest).pipe(
            // change all header for all request
            tap((event) => {
                if (event.type === HttpEventType.Response) {
                    console.log('++++Response Arrived++++', event.body); // change response for all request
                }
            })
        );
        // return next.handle(req);
    }
}
