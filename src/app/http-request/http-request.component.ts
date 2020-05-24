import { Component, OnInit } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    HttpParams,
    HttpEventType,
} from '@angular/common/http';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FetchRequestService } from './fetch-request.service';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

type Post = { title: string; description: string; text: string };
type response = { status: 'success' | 'fail'; data: [Post] };
@Component({
    selector: 'app-http-request',
    templateUrl: './http-request.component.html',
    styleUrls: ['./http-request.component.scss'],
})
export class HttpRequestComponent implements OnInit {
    posts: [Post];
    signUpForm: FormGroup;
    createPostStatus: boolean;
    fetchingPost = false;
    fetchPostStatus: boolean;

    constructor(
        private http: HttpClient,
        private FetchRequestService: FetchRequestService
    ) {}

    ngOnInit(): void {
        this.signUpForm = new FormGroup({
            title: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required]),
            text: new FormControl(null, [Validators.required]),
        });
        this.fetchPosts();
    }

    onSubmit() {
        const title = this.signUpForm.value.title;
        const description = this.signUpForm.value.description;
        const text = this.signUpForm.value.text;
        this.createPost({ title, description, text });
    }

    createPost(postData: { title: string; description: string; text: string }) {
        this.http
            .post('http://localhost:3000/post', postData, {
                headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
                params: new HttpParams()
                    .append('key', 'value')
                    .append('key', 'value'),
                observe: 'events',
                // responseType: "arraybuffer"
                responseType: 'json', // default
                // observe: 'body', // default
                // observe: 'response',
            })
            .pipe(
                catchError((errorRes) => {
                    // send to analytics server
                    return throwError(errorRes);
                }),
                tap((x) => {
                    console.log(
                        'this is HttpEventType.sent: ',
                        HttpEventType.Sent
                    );
                    console.log(
                        'this is HttpEventType response: ',
                        HttpEventType.Response
                    );
                    console.log('this is my tap: ', x);
                    console.log('this is my tap type : ', x.type);
                })
            )
            .subscribe(
                (responseData) => {
                    console.log('responseData', responseData);
                    this.createPostStatus = true;
                },
                (error) => {
                    console.log('error: ', error);
                    this.createPostStatus = false;
                },
                () => {
                    this.fetchPosts();
                }
            );
    }
    fetchPosts() {
        this.fetchingPost = true;
        this.FetchRequestService.fetchPosts().subscribe(
            (responseData) => {
                // (responseData: response) => {
                console.log('responseData', responseData);
                this.posts = responseData.data;
                this.fetchPostStatus = true;
            },
            (error) => {
                console.log('error: ', error);
                this.fetchPostStatus = false;
            },
            () => {
                this.fetchingPost = false;
            }
        );
    }

    deleteAllPosts() {
        this.FetchRequestService.deletePosts().subscribe(
            (responseData) => {
                // (responseData: response) => {
                console.log('responseData', responseData);
            },
            (error) => {
                console.log('error: ', error);
            },
            () => {
                this.fetchPosts();
            }
        );
    }
}
