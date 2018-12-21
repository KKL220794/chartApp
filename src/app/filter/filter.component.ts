import { Component, OnInit } from '@angular/core';
import { ServerService } from '../Sever.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  list: object[] = [];
  filteredlist: object[] = [];
  f: object;
  d = '';
  p = 1;
  sex = [' Male', ' Female'];
  race = [' White', ' Asian-Pac-Islander', ' Amer-Indian-Eskimo', ' Other', ' Black'];
  relation = [' Wife', ' Own-child', ' Husband', ' Not-in-family', ' Other-relative', ' Unmarried'];
  gender: string;
  constructor(private _sservice: ServerService) { }

  ngOnInit() {
    // this._sservice.getData();
    this._sservice.updatedData.subscribe(data => {
      this.list = data;
      this.filteredlist = this.list;
      // console.log('data' + JSON.stringify(this.list));
    });
  }
  filterChange(eve, key) {
    // if (this.sex.male) {
    //   this.filteredlist = this.list.filter(x => (x['sex'] === ' Male' && this.sex.male));
    // console.log(this.filteredlist);
    // } else {
    //   this.filteredlist = this.list;
    // }

    // if (eve.target.value !== '') {
    //   this.filteredlist = this.filteredlist.filter(x => x[id] === eve.target.value ) ;
    // }

    // this.f[id] = eve.target.value;
    // console.log(this.f ) ;
    // console.log(eve);
    // console.log(this.d);
    // console.log(typeof(this.f));
    // this.f[key] = eve;
    // console.log(this.f);
    // console.log(typeof(this.f));
    this.filteredlist = this.filteredlist.filter(item => item[key] === eve);





  }

}
