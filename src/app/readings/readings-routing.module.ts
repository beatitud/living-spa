import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as moment from 'moment';
import {ReadingsComponent} from './readings.component';
import { AppSettings } from '../tools/AppSettings';

const settings = new AppSettings();
const location = settings.readingCalendar || AppSettings.DEFAULT_CALENDAR;
const date = settings.readingDate || moment.utc().format('YYYY-MM-DD');
const version = settings.readingVersion || AppSettings.DEFAULT_VERSION;

const readingsRoutes: Routes = [
  { path: 'readings/:location/:version/:date', component: ReadingsComponent },
  { path: 'readings/:location/:version', redirectTo: `/readings/:location/:version/${date}` },
  { path: 'readings/:location', redirectTo: `/readings/:location/${version}/${date}` },
  { path: 'readings/', redirectTo: `/readings/${location}/${version}/${date}` },
  { path: '', pathMatch: 'full', redirectTo: `/readings/${location}/${version}/${date}` },
];

@NgModule({
  imports: [
    RouterModule.forChild(readingsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ReadingsRoutingModule {}
