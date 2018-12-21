import { FilterPipe } from './filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import 'rxjs';
import { ChartComponent } from './chart/chart.component';
import { FilterComponent } from './filter/filter.component';
import { ServerService } from './Sever.service';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    FilterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, NgxPaginationModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
