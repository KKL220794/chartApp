import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs';
import { ChartComponent } from './chart/chart.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
