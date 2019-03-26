import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';

@Injectable()
export class HighchartsService {

  charts = [];
  cdata: any;
  highchartdata = [];
  chartLine; parseData=[];seriesUpdated=[];

  constructor() { }

//checking whether data is received
  setDatachart(cd) {
    this.cdata = cd;
    return this.cdata;
  }

  //function to draw chart
  createChart(container, cdata, options?: Object) {
    this.chartLine = {}; this.parseData.length=0;
   for (var i = 0; i < this.cdata.length; i++) {
      this.parseData.push(JSON.parse(this.cdata[i]));
    }

   let data = this.parseData;
   this.seriesUpdated.length=0;

  for (var i = 0; i < this.parseData.length; i++) {
      this.seriesUpdated.push({"data": this.parseData[i]});
    }
     
    this.chartLine = new Highcharts.Chart({
      chart: {
        //renderTo: e,
        renderTo:container,
        type: 'line'
      },
      title: {
      text: 'Line Chart'
    },
       xAxis: {
        title: {
          text: 'Years'
        }
      },
      yAxis: {
        title: {
          text: 'Score'
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
          pointStart: 1990
        }
      },
      series:this.seriesUpdated,
      credits: {
    enabled: false
  }

    });
 
   //this.chartLine.redraw();
  };
}
