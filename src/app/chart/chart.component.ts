import { Chart } from 'chart.js';
import { Component, OnInit, Output } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  data: object[] = [];
  gender = [0, 0];
  rel_status = [0, 0 , 0 , 0 , 0, 0];
  // Wife, Own-child, Husband, Not-in-family, Other-relative, Unmarried.

  chart1 = []; // This will hold our chart info
  chart2 = []; // This will hold our chart info

  constructor(private _weather: WeatherService) {}

  ngOnInit() {
    this._weather.dailyForecast();
    this._weather.updatedData.subscribe(
      (res) => { this.data = res;
        console.log(this.data);

        this.genderCount();
        this.genderChart();
        this.relationshipCount();
        this.relationshipChart();
      } );
  }
  genderCount() {

    let male = 0;
    let female = 0;
    this.data.forEach(d => {
      if (d['sex'] === ' Male') {
        male++;
      } else if (d['sex'] === ' Female') {
        female++;
      }

    });
    this.gender[0] = male;
    this.gender[1] = female;
}
genderChart() {
  this.chart1 = new Chart('canvas1', {
    type: 'pie',
    data: {
      labels: ['male', 'female'],
      datasets: [
        {
          label: 'Male Female ratio',
          data: this.gender,
          backgroundColor: ['#3cba9f', 'green'],
        },
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#333',
          fontSize: 16
  }
      },
      title: {
        position: 'top',
        text: 'Male Female',
        fontSize: 18,
        fontColor: '#111'

      }
    }
  });
}

relationshipChart() {
  this.chart2 = new Chart('canvas2', {
    type: 'pie',
    data: {
      labels: ['Wife', 'Own-child', 'Husband', 'Not-in-family', 'Other-relative', 'Unmarried'],
      datasets: [
        {
          label: 'Male Female ratio',
          data: this.rel_status,
          backgroundColor: ['orange', 'green', 'red', 'grey', 'yellow', 'black'],
        },
      ]
    },
    options: {
      responsive: true,
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#333',
          fontSize: 16
  }
      },
      title: {
        position: 'top',
        text: 'Male Female',
        fontSize: 18,
        fontColor: '#111'

      }
    }
  });

}

relationshipCount() {
  this.data.forEach(d => {
    if (d['relation'] === ' Wife') {
      this.rel_status[0]++;
    } else if (d['relation'] === ' Own-child') {
      this.rel_status[1]++;
    } else if (d['relation'] === ' Husband') {
      this.rel_status[2]++;
    } else if (d['relation'] === ' Not-in-family') {
      this.rel_status[3]++;
    } else if (d['relation'] === ' Other-relative') {
      this.rel_status[4]++;
    } else if (d['relation'] === ' Unmarried') {
      this.rel_status[5]++;
    }
  });
}
// Husband, Not-in-family, Other-relative, Unmarried
}
