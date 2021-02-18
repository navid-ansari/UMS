import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

import { CustomValidatorModule } from '../../common/validators/customValidator.module';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
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
        LoginComponent
    ]
})
export class LoginModule { }
