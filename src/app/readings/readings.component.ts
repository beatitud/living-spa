import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ReadingsService } from './readings.service';
import {isSuccessful} from '../tools/OperationResult';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';

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
              private readonly router: Router) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const date = params.get('date').replace(/-/g, '/');
          const version = params.get('version').toUpperCase();
          return this.readingsService.getReferences(date, version);
        }
      ))
      .pipe(filter(x => isSuccessful(x)))
      .pipe(map(x => x.value.readings))
      .subscribe(x => this.readings = x);
  }

}
