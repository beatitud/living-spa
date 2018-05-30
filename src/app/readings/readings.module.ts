import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReadingsComponent} from './readings.component';
import {ReadingsService} from './readings.service';
import {NgModule} from '@angular/core';
import {ReadingsRoutingModule} from './readings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReadingsRoutingModule,
  ],
  declarations: [
    ReadingsComponent,
  ],
  providers: [ ReadingsService ]
})
export class ReadingsModule {}
