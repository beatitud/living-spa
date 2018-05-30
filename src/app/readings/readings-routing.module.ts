import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as moment from 'moment';
import {ReadingsComponent} from './readings.component';

const now = moment.utc().format('YYYY-MM-DD');

const readingsRoutes: Routes = [
  { path: 'readings/:version/:date', component: ReadingsComponent },
  { path: 'readings/:version', redirectTo: `/readings/:version/${now}` },
  { path: '', pathMatch: 'full', redirectTo: `/readings/nrsvce/${now}` },
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
