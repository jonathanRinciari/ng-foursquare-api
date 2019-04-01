import { Observable } from 'tns-core-modules/data/observable';
import { NsFoursquareApi } from 'nativescript-ns-foursquare-api';

export class HelloWorldModel extends Observable {
  public message: string;
  private nsFoursquareApi: NsFoursquareApi;

  constructor() {
    super();

    this.nsFoursquareApi = new NsFoursquareApi();
    this.message = this.nsFoursquareApi.message;
  }
}
