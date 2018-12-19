import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { async } from '@angular/core/testing';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  data: object[] = [];
  updatedData = new Subject<object[]>();

  constructor(private _http: Http) { }

  dailyForecast() {
    return this._http.get('/src/dataset1.json').subscribe(
      res => {
        this.data = res.json();
        this.updatedData.next(res.json()); } );
  }
}
