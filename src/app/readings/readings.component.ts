import { Component, OnInit } from '@angular/core';
import { ReadingsService } from './readings.service';
import {isSuccessful} from '../tools/OperationResult';

@Component({
  selector: 'app-readings',
  providers: [ReadingsService],
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css']
})
export class ReadingsComponent implements OnInit {

  private readings: any[] = [];

  constructor(private readonly readingsService: ReadingsService) {
  }

  async ngOnInit() {
    const result = await this.readingsService.getReferences(); // .then(console.log);
    if (isSuccessful(result)) {
      this.readings = result.value.readings;
      return;
    }
  }

}
