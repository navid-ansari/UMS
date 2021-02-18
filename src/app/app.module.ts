import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler, Injectable, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// third party modules
import { AccordionModule } from 'ngx-bootstrap/accordion';

// routing
import { routing } from './app.routes';

// component
import { AppComponent } from './app.component';

// custom modules
import { SelectorsModule } from './common/selectors/selectors.module';

// validators
import { CustomValidatorModule } from './common/validators/customValidator.module';

/*export class GlobalErrorhandler implements ErrorHandler {
  constructor(){}
  logError(error: Error) {
    if(Error){
      console.log(error);
    }
  }
}*/

@Injectable()
export class MyErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error: Error) {
   if (Error) {
    console.log(error);
    }
   }
  }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    // CustomValidatorModule,
    SelectorsModule,
    routing
  ],
  providers: [
    // {provide: ErrorHandler, useClass: GlobalErrorhandler}
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler,
     }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
