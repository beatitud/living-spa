import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReadingsComponent } from './readings/readings.component';
import { AppSettings } from './tools/AppSettings';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ReadingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
