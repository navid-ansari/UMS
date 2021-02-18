import { Validator, AbstractControl, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[profilePicExtension]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ProfilePicExtensionValidator,
        multi: true
    }]
})

export class ProfilePicExtensionValidator implements Validator {
    /*validate(control: AbstractControl): { [key: string]: any } | null {
        console.log(control);
        return control.value === null ||  control.value === 'null' ? { 'requiredError': true } : null;
    }*/
    static validate(c: FormControl): { [key: string]: any } {
        if (c.value) {
          if (c.value) {
            console.log(ProfilePicExtensionValidator.checkExtension(c));
            return ProfilePicExtensionValidator.checkExtension(c);
          };
          /*console.log(true ? { "notSupportedFileType": true } : null);
          return true ? { "notSupportedFileType": true } : null;*/
        }
    }

    private static checkExtension(c: FormControl) {
        let valToLower = c.value.toLowerCase();
        let regex = new RegExp("(.*?)\.(jpg|png|jpeg)$"); //add or remove required extensions here
        let regexTest = regex.test(valToLower);
        return !regexTest ? { "notSupportedFileType": true } : null;
      }
    
      validate(c: FormControl): { [key: string]: any } {
        return ProfilePicExtensionValidator.validate(c);
      }
}