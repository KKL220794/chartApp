import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
// import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'chartAPP';

  ngOnInit() {}
}