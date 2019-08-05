import { Component, ViewChild, OnInit } from '@angular/core';
import { SplitComponent } from './library/component/split.component';
import { SplitAreaDirective } from './library/directive/splitArea.directive';
import { BravoSplitComponent } from './controller/BravoComponent/bravo-split.component';
import { BravoAreaDirective } from './controller/bravo-area.directive';
import * as wjCore from 'wijmo/wijmo';
import * as wjGrid from 'wijmo/wijmo.grid';
import { CollectionView } from 'wijmo/wijmo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{


  title = 'Wijmo Starter App';
  data = this.getData();
  getData() {
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < countries.length; i++) {
      data.push({
        country: countries[i],
        sales: Math.random() * 10000,
        expenses: Math.random() * 5000,
        downloads: Math.round(Math.random() * 20000),
      });
    }
    return new CollectionView(data);
  }


}
