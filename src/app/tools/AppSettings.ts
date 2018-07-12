import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {

  public static readonly DEFAULT_LOCATION = 'usa';
  public static readonly DEFAULT_VERSION = 'NRSVCE';

  private static readonly DATE_KEY = 'living.gospel.router.date';
  private static readonly VERSION_KEY = 'living.gospel.router.version';
  private static readonly LOCATION_KEY = 'living.gospel.router.location';

  private readonly settings = Object.freeze({
    readingsBaseUrl: 'https://d1txa02zd2vy48.cloudfront.net/readings/scraped',
  });

  get referencesBaseUrl(): string {
    return this.settings.readingsBaseUrl;
  }

  public get readingDate(): string {
    return localStorage.getItem(AppSettings.DATE_KEY);
  }

  public get readingVersion(): string {
    return localStorage.getItem(AppSettings.VERSION_KEY);
  }

  public set readingDate(date: string) {
    localStorage.setItem(AppSettings.DATE_KEY, date);
  }

  public set readingVersion(version: string) {
    localStorage.setItem(AppSettings.VERSION_KEY, version);
  }

  public set readingLocation(location: string) {
    localStorage.setItem(AppSettings.LOCATION_KEY, location);
  }
}
