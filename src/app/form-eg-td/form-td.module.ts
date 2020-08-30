import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { FormEgTDComponent } from './form-eg-td.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [FormEgTDComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([{ path: '', component: FormEgTDComponent }]),
    ],
    exports: [CommonModule],
})
export class FormTDModule {}
