import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReadingsComponent } from './readings/readings.component';
import { AppSettings } from './tools/AppSettings';


@NgModule({
  declarations: [
    AppComponent,
    AppSettings,
    ReadingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
