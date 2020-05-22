import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form-eg-td',
    templateUrl: './form-eg-td.component.html',
    styleUrls: ['./form-eg-td.component.scss'],
})
export class FormEgTDComponent implements OnInit {
    @ViewChild('form') signUpForm: NgForm;
    genders = ['male', 'female'];
    myText: string;
    defaultQuestion = 'pet';
    userDetails: {
        hasBeenSet: false | true;
        userName: string;
        email: string;
        secretQuestion: 'teacher' | 'pet';
        text: string;
        gender: 'male' | 'female';
    } = {
        hasBeenSet: false,
        userName: '',
        email: '',
        secretQuestion: 'pet',
        text: '',
        gender: 'male',
    };
    constructor() {}

    ngOnInit(): void {}
    // onSubmit(form: ElementRef) {
    //     console.log('something');
    //     console.log(form);
    // }
    // onSubmit(form: NgForm) {
    //     console.log('something');
    //     console.log(form);
    // }

    generateUserName() {
        // this.signUpForm.setValue({
        //     userData: { username: 'hamidhmz', email: '' },
        //     secret: 'pet',
        //     text: '',
        //     gender: 'male',
        // });
        // this.signUpForm.form.setValue({
        //     userData: { username: 'hamidhmz', email: '' },
        //     secret: 'pet',
        //     text: '',
        //     gender: 'male',
        // });
        this.signUpForm.form.patchValue({
            userData: { username: 'hamidhmz' },
        });
    }

    onSubmit() {
        console.log(this.signUpForm);
        this.userDetails.userName = this.signUpForm.value.userData.username;
        this.userDetails.email = this.signUpForm.value.userData.email;
        this.userDetails.secretQuestion = this.signUpForm.value.secret;
        this.userDetails.text = this.signUpForm.value.text;
        this.userDetails.gender = this.signUpForm.value.gender;
        this.userDetails.hasBeenSet = true;
        this.signUpForm.reset();
    }
}
