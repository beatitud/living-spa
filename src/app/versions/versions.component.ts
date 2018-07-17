import { MatDialogConfig } from '@angular/material';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import { VersionsDialogComponent } from './versions.dialog';

@Component({
  selector: 'app-versions,[versions]',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.less'],
})
export class VersionsComponent {

  constructor(public readonly dialog: MatDialog) { }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '30em';
    dialogConfig.autoFocus = true;

    this.dialog.open(VersionsDialogComponent, dialogConfig);
  }
}

