import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: Http) { }

  dailyForecast() {
    return this._http.get('/src/dataset1.json');
  }
}
