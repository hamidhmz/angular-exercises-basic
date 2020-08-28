import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, take, exhaustMap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

type Post = { title: string; description: string; text: string };
type response = { status: 'success' | 'fail'; data: [Post] };
@Injectable({
    providedIn: 'root',
})
export class FetchRequestService {
    constructor(private http: HttpClient, private authService: AuthService) {}
    fetchPosts() {
        return this.authService.user.pipe(
            take(1),
            exhaustMap((user) => {
                return this.http.get<response>('http://localhost:3000/post', {
                    headers: new HttpHeaders({
                        'Custom-Header': 'Hello',
                        Authorization: `Bearer ${user.token}`,
                    }),
                    params: new HttpParams().set('print', 'pretty'),
                });
            }),
            map((responseData) => {
                if (responseData?.data[0]?.text) {
                    responseData.data[0].text =
                        'this is first ++++++ ' + responseData.data[0].text;
                }
                return responseData;
            }),
            catchError((errorRes) => {
                // send to analytics server

                if (errorRes.status === 401) {
                    this.authService.logout();
                }

                return throwError(errorRes);
            })
        );
    }
    deletePosts() {
        return this.http.delete('http://localhost:3000/post/all', {
            headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
            params: new HttpParams().set('print', 'pretty'),
        });
    }
}
