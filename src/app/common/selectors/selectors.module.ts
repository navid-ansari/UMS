import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NavbarModule
    ],
    declarations: [
        
    ],
    exports: [
        NavbarModule
    ]
})
export class SelectorsModule { }
