import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { JavascriptComponent } from './javascript.component';

import { AccordionModule } from 'ngx-bootstrap/accordion';


const routes: Routes = [
    {
        path: '',
        component: JavascriptComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AccordionModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        JavascriptComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JavascriptModule { }
