import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-form-eg-reactive',
    templateUrl: './form-eg-reactive.component.html',
    styleUrls: ['./form-eg-reactive.component.scss'],
})
export class FormEgReactiveComponent implements OnInit {
    genders = ['male', 'female'];
    forbiddenUserNames = ['Chris', 'Anna'];
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
    signUpForm: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.signUpForm = new FormGroup({
            username: new FormControl(null, [
                Validators.required,
                this.forbiddenNames.bind(this),
            ]),
            email: new FormControl(
                null,
                [Validators.required, Validators.email],
                this.forbiddenEmailAsyncOp.bind(this)
            ),
            secret: new FormControl('pet', [Validators.required]),
            text: new FormControl(null, Validators.maxLength(10)),
            gender: new FormControl('male', [
                Validators.required,
                Validators.maxLength(6),
            ]),
            hobbies: new FormArray([]),
        });
        console.log((this.signUpForm.get('hobbies') as FormArray).controls);
        console.log(this.signUpForm);

        this.signUpForm.valueChanges.subscribe((val) => {
            console.log('this is valueChanges observable: ', val);
        });
        this.signUpForm.statusChanges.subscribe((status) => {
            console.log('this is statusChanges observable: ', status);
        });
    }

    generateUserName() {
        // this.signUpForm.setValue({
        //     username:  'hamidhmz',
        //     email: '' ,
        //     secret: 'pet',
        //     text: '',
        //     gender: 'male',
        // });
        this.signUpForm.patchValue({
            username: 'hamidhmz',
        });
        console.log(this.signUpForm);
    }

    addHobby() {
        const control = new FormControl(null, Validators.required);
        (this.signUpForm.get('hobbies') as FormArray).push(control);
        console.log((this.signUpForm.get('hobbies') as FormArray).controls);
    }

    onSubmit() {
        console.log(this.signUpForm);
        this.userDetails.userName = this.signUpForm.value.username;
        this.userDetails.email = this.signUpForm.value.email;
        this.userDetails.secretQuestion = this.signUpForm.value.secret;
        this.userDetails.text = this.signUpForm.value.text;
        this.userDetails.gender = this.signUpForm.value.gender;
        this.userDetails.hasBeenSet = true;
        this.signUpForm.reset({ gender: 'male', secret: 'pet' });
    }

    forbiddenNames(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
            return { nameIsForbidden: true };
        }
        return null;
    }

    forbiddenEmailAsyncOp(
        control: FormControl
    ): Promise<any> | Observable<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'test@test.com') {
                    resolve({ emailIsForbidden: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
