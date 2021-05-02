import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculComponent } from './calcul/calcul.component';
import {FormsModule} from '@angular/forms';
import { FormbootsrapComponent } from './formbootsrap/formbootsrap.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculComponent,
    FormbootsrapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
