import { MatDialogConfig } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-versions,[versions]',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.less']
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

@Component({
  selector: 'app-versions-dialog',
  templateUrl: './versions.dialog.html',
})
export class VersionsDialogComponent implements OnInit {
  public readonly versionsControl = new FormControl();
  public readonly versionsGroups = [
    {title: 'English (EN)', versions: [
      {key: 'NRSVCE', title: 'New Revised Standard Version Catholic Edition'},
      {key: 'ESV', title: 'English Standard Version'},
      {key: 'NRSV', title: 'New Revised Standard Version'},
    ]},
    {title: 'Français (FR)', versions: [
      {key: 'NEG1979', title: 'Nouvelle Edition de Genève'},
      {key: 'SG21', title: 'Segond 21'},
    ]},
    {title: 'Español (ES)', versions: [
      {key: 'JBS', title: 'Jubilee Bible 2000 (Spanish)'},
    ]},
    {title: 'Deutsch (DE)', versions: [
      {key: 'HOF', title: 'Hoffnung für Alle'},
    ]},
    {title: 'עברית (HE)', versions: [
      {key: 'WLC', title: 'The Westminster Leningrad Codex'},
    ]},
    {title: 'العربية (AR)', versions: [
      {key: 'ERV-AR', title: 'Arabic Bible: Easy-to-Read Version'},
    ]},
    {title: 'Polski (PL)', versions: [
      {key: 'UBG', title: 'Updated Gdańsk Bible'}
    ]},
    {title: 'Русский (RU)', versions: [
      {key: 'NRT', title: 'New Russian Translation'},
      {key: 'RUSV', title: 'Russian Synodal Version'},
    ]},
  ];
  description = 'Hi';

  constructor(public readonly dialogRef: MatDialogRef<VersionsDialogComponent>,
              private readonly router: Router,
              @Inject(MAT_DIALOG_DATA) public readonly data: any) { }

    ngOnInit(): void {
    }

  ok(): void {
    // debugger;
    this.router.navigate([`/readings/${this.versionsControl.value.toLowerCase()}`]);
    this.dialogRef.close();
  }
}
