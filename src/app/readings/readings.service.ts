import { Injectable } from '@angular/core';
import { AppSettings } from '../tools/AppSettings';
import { Http } from '@angular/http';
import { utc } from 'moment';
import { success, failure } from '../tools/OperationResult';

const DATE_FORMAT = 'YYYY/MM/DD';

@Injectable()
export class ReadingsService {
  constructor(private readonly appSettings: AppSettings,
              private readonly httpClient: Http) {
  }

  async getReferences(date = utc().format(DATE_FORMAT)) {
    const url = `${this.appSettings.getReferencesBaseUrl}/${date}/data.json`;
    const result = await this.httpClient.get(url)
                                        .toPromise()
                                        .then(success)
                                        .catch(failure);
    return result;
  }
}
