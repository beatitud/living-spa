import {MatDialogModule} from '@angular/material/dialog';
import {NgModule} from '@angular/core';
import {VersionsComponent, VersionsDialogComponent} from './versions.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    MatDialogModule,
    MatSelectModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  declarations: [VersionsComponent, VersionsDialogComponent],
  entryComponents: [VersionsComponent, VersionsDialogComponent],
  exports: [VersionsComponent],
  // providers: [
  //   { provide: MatDialogRef, useValue: {} },
  //   { provide: MAT_DIALOG_DATA, useValue: [] },
  // ]
})
export class VersionsModule { }
