import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CvaInputComponent} from './cva-input/cva-input.component';
import {GroupUiModule} from "@sdc-wob-type-3/group-ui-angular";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CvaInputComponent
  ],
  imports: [
    BrowserModule,
    GroupUiModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
}
