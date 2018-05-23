import { Injectable } from '@angular/core';
import { AppSettings } from '../tools/AppSettings';
import { utc } from 'moment';
import {success, failure, IOperationResult} from '../tools/OperationResult';
import {HttpClient} from '@angular/common/http';

const DATE_FORMAT = 'YYYY/MM/DD';

@Injectable()
export class ReadingsService {

  private readonly versionKeys: ReadonlyArray<string> = [
    // ENGLISH
    'NRSVCE',
    'ESV',
    'NRSV',
    // FRENCH
    'NEG1979',
    'SG21',
    // SPANISH
    'LBLA',
    'JBS',
    // GERMAN
    'HOF',
    // HEBREW
    'WLC',
    // ARABIC
    'ERV-AR',
    // POLISH
    'UBG',
    // RUSSIAN
    'RUSV',
    'NRT',
  ];

  constructor(private readonly appSettings: AppSettings,
              private readonly httpClient: HttpClient) {
  }

  public async getReferences(date = utc().format(DATE_FORMAT),
                             version = 'NRSVCE'): Promise<IOperationResult<any>>  {
    const url = `${this.appSettings.getReferencesBaseUrl}/${date}/${version}/data.json`;
    const result = await this.httpClient.get(url)
                                        .toPromise()
                                        .then(success)
                                        .catch(failure);
    return result;
  }
}
