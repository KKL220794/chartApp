import { Component, OnInit } from '@angular/core';
import { ServerService } from '../Sever.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  list: object[] = [];
  p = 1;
  gender: string;
  constructor(private _sservice: ServerService) { }

  ngOnInit() {
    // this._sservice.getData();
    this._sservice.updatedData.subscribe(data => {
      this.list = data;
      console.log('data' + JSON.stringify(this.list));
    });
  }

}
