import { MatDialogConfig } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-versions,[versions]',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.less']
})
export class VersionsComponent {

  constructor(public readonly dialog: MatDialog) { }

  openDialog() {
    // const dialogRef = this.dialog.open(VersionsDialogComponent, {
    //   width: '250px',
    //   data: { name: 'Bob', animal: 'Dog' }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.position = { 'top': '0.5em', };
    dialogConfig.autoFocus = true;

    this.dialog.open(VersionsDialogComponent, dialogConfig);
  }
}

@Component({
  selector: 'app-versions-dialog',
  templateUrl: './versions.dialog.html',
})
export class VersionsDialogComponent implements OnInit {
  description = 'Hi';

  constructor(public dialogRef: MatDialogRef<VersionsDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
