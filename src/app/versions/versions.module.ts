import {MatDialogModule} from '@angular/material/dialog';
import {NgModule} from '@angular/core';
import {VersionsComponent, VersionsDialogComponent} from './versions.component';

@NgModule({
  imports: [MatDialogModule],
  declarations: [VersionsComponent, VersionsDialogComponent],
  entryComponents: [VersionsComponent, VersionsDialogComponent],
  exports: [VersionsComponent],
  // providers: [
  //   { provide: MatDialogRef, useValue: {} },
  //   { provide: MAT_DIALOG_DATA, useValue: [] },
  // ]
})
export class VersionsModule { }
