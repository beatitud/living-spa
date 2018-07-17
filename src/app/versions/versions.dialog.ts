import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { AppSettings } from '../tools/AppSettings';

@Component({
  selector: 'app-versions-dialog',
  templateUrl: './versions.dialog.html',
  styleUrls: ['./versions.dialog.less'],
})
export class VersionsDialogComponent implements OnInit {
  public readonly calendarsControl = new FormControl();
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
  public readonly calendars = [
    {key: 'usa', title: 'United States'},
    {key: 'europe', title: 'Europe (coming soon)', disabled: true},
    {key: 'europe.france', title: 'France (coming soon)', disabled: true},
  ];

  constructor(public readonly dialogRef: MatDialogRef<VersionsDialogComponent>,
              private readonly router: Router,
              private readonly appSettings: AppSettings,
              @Inject(MAT_DIALOG_DATA) public readonly data: any) { }

  ngOnInit(): void {
    this.calendarsControl.setValue(this.appSettings.readingCalendar || 'usa');
    this.versionsControl.setValue(this.appSettings.readingVersion);
  }

  ok(): void {
    // debugger;
    const calendar = AppSettings.DEFAULT_CALENDAR;
    const version = this.versionsControl.value.toLowerCase();
    this.router.navigate([`/readings/${calendar}/${version}`]);
    this.dialogRef.close();
  }
}
