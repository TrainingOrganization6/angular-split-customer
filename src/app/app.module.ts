import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplitAreaDirective } from './library/directive/splitArea.directive';
import { SplitComponent } from './library/component/split.component';
import { BravoSplitComponent } from './controller/BravoComponent/bravo-split.component';
import { BravoAreaDirective } from './controller/bravo-area.directive';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

@NgModule({
  declarations: [
    AppComponent,
    SplitComponent,
    SplitAreaDirective,
    BravoSplitComponent,
    BravoAreaDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjGridModule,
    WjInputModule,
    WjChartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
