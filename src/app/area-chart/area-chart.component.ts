import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts = Highcharts
  chartOptions = {}

  constructor() {
    //column 2D chart configuration
    this.chartOptions = {
      chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
        }
      },
      xAxis: {
        categories: ['MEARN', 'PYTHON', 'DATA SCIENCE','TESTING', 'FLUTTER', '.NET',
          'BIG DATA', 'JAVA SPRING', 'AI','ML']
      },
      yAxis: {
        title: {
          enabled: false
        }
      },
      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'Placements: {point.y}'
      },
      title: {
        text: 'Placements Analysis 2022-2023',
        align: 'center'
      },
      subtitle: {
        text: 'Luminar Technolab',
        align: 'center'
      },
      legend: {
        enabled: false
      },
      //to remove the site name from graph(here highchart.com will hide from chart)
      credits:{
        enabled:false
      },
      plotOptions: {
        column: {
          depth: 25
        }
      },
      series: [{
        data: [340, 202, 106, 383, 75, 145, 37, 144, 16, 87],
        colorByPoint: true
      }]
    }
    //to export chart
    HC_exporting(Highcharts);
  }
}
