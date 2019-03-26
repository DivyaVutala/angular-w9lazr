import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighchartsService } from './highcharts.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers: [HighchartsService]
})
export class AppModule { }
