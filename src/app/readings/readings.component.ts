import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../tools/AppSettings';
import { ReadingsService } from './readings.service';

@Component({
  selector: 'app-readings',
  providers: [ReadingsService],
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {

  constructor(private readonly readingsService: ReadingsService) {
    readingsService.getReferences().then(console.log);
  }

  ngOnInit() {
  }

}
