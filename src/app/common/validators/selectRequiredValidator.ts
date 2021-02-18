import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[selectReqValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})

export class SelectRequiredValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        console.log(control);
        return control.value === null ||  control.value === 'null' ? { 'requiredError': true } : null;
    }
}