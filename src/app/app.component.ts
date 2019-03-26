import { Component, ElementRef, AfterViewInit,ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsService } from './highcharts.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('charts') public chartEl: ElementRef;
  data = [];
   csvContent: {}; StringeData;
  constructor(private hcs: HighchartsService) {
  }

  public ngAfterViewInit() {
  }

 // function to read the file data
  onFileLoad = (fileLoadedEvent => {
    const textFromFileLoaded = fileLoadedEvent.target.result;
    this.csvContent = textFromFileLoaded.split('\n');
    const txt = textFromFileLoaded.trim();
    const csv = []; let ArrData =[]; const ArrLabels = new Array();
    this.data.length=0;

    const lines = txt.split('\n');
    lines.forEach(element => {
      const cols: string[] = element.split(',');
      csv.push(cols);
    });

    for (let i = 0; i < csv.length; i++) {
       ArrData.length = 0;
      for (let j = 0; j < csv[i].length; j++) {
        const b: string[] = csv[i][j].split('|');
        if (typeof b[1] != "string") {
          ArrLabels.push(b[1]);
        }
        else {
          b[1]=parseInt(b[1]);
          ArrData.push(b);
        }
         
      }
      this.data.push(JSON.stringify(ArrData));    
    }

    this.StringeData = this.data;
    this.hcs.setDatachart(this.StringeData);
    this.createChart();
  })

//function on slection of file
  onFileSelect(input: HTMLInputElement) {
    const files = input.files;
    var content = this.csvContent;
    
    if (files && files.length) {
      const fileToRead = files[0];
      const fileReader = new FileReader();
      fileReader.onload = this.onFileLoad;
      fileReader.readAsText(fileToRead, "UTF-8");
    }
  };

//calling service createchart()
  createChart() {
  this.hcs.createChart(this.chartEl.nativeElement, this.data)  
    }
  

}