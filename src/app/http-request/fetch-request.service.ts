import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

type Post = { title: string; description: string; text: string };
type response = { status: 'success' | 'fail'; data: [Post] };
@Injectable({
    providedIn: 'root',
})
export class FetchRequestService {
    constructor(private http: HttpClient) {}
    fetchPosts() {
        return this.http
            .get<response>('http://localhost:3000/post', {
                headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
                params: new HttpParams().set('print', 'pretty'),
            })
            .pipe(
                map((responseData) => {
                    if (responseData?.data[0]?.text) {
                        responseData.data[0].text =
                            'this is first ++++++ ' + responseData.data[0].text;
                    }
                    return responseData;
                }),
                catchError((errorRes) => {
                    // send to analytics server
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
