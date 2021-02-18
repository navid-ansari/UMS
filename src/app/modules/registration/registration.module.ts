import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';

import { CustomValidatorModule } from '../../common/validators/customValidator.module';

const routes: Routes = [
    {
        path: '',
        component: RegistrationComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomValidatorModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        RegistrationComponent
    ]
})
export class RegistrationModule { }
