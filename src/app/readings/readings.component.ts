import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ReadingsService } from './readings.service';
import {isSuccessful} from '../tools/OperationResult';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import { AppSettings } from '../tools/AppSettings';

interface Params {
  version: string;
  date: string;
  originalDate: string;
  location: string;
}

@Component({
  selector: 'app-readings',
  providers: [ReadingsService],
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ReadingsComponent implements OnInit {

  private readings: any[] = [];

  constructor(private readonly readingsService: ReadingsService,
              private readonly route: ActivatedRoute,
              private readonly appSettings: AppSettings,
              private readonly router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(map((x: ParamMap) => this.getDateVersionTuple(x)))
      .pipe(map(x => this.saveSettings(x)))
      .pipe(switchMap((x) =>
        this.readingsService.getReferences(x.date, x.version, x.location)
      ))
      .pipe(filter(x => isSuccessful(x)))
      .pipe(map(x => x.value.readings))
      .subscribe(x => this.readings = x);
  }

  private getDateVersionTuple(params: ParamMap): Params {
    const originalDate = params.get('date');
    const date = params.get('date').replace(/-/g, '/');
    const version = params.get('version').toUpperCase();
    const location = params.get('location');
    return {originalDate, date, version, location};
  }

  private saveSettings(x: Params) {
    this.appSettings.readingDate = x.originalDate;
    this.appSettings.readingVersion = x.version;
    this.appSettings.readingCalendar = x.location;
    return x;
  }
}
