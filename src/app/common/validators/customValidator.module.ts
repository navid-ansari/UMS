import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRequiredValidatorDirective } from './selectRequiredValidator';
import { ProfilePicExtensionValidator } from './profile-pic-extension.validator';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SelectRequiredValidatorDirective,
        ProfilePicExtensionValidator
    ],
    exports: [
        SelectRequiredValidatorDirective,
        ProfilePicExtensionValidator
    ]
})

export class CustomValidatorModule {}