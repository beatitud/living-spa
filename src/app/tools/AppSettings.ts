import { Injectable } from '@angular/core';

export interface IAppSettings {
  getReadingsBaseUrl(): string;
}

@Injectable()
export class AppSettings {

  private readonly settings = Object.freeze({
    readingsBaseUrl: '',
  });

  constructor() {}

  get getReadingsBaseUrl(): string {
    return this.settings.readingsBaseUrl;
  }
}
