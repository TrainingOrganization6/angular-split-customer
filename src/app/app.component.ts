import { Component, ViewChild } from '@angular/core';
import { SplitComponent } from './library/component/split.component';
import { SplitAreaDirective } from './library/directive/splitArea.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-split-customer';

  @ViewChild('split', { static: false }) split: SplitComponent;
  @ViewChild('area1', { static: false }) area1: SplitAreaDirective;
  @ViewChild('area2', { static: false }) area2: SplitAreaDirective;
  @ViewChild('area3', { static: false }) area3: SplitAreaDirective;

  sizes = {
    percent: {
      area1: 30,
      area2: 40,
      area3: 30,
    },
    pixel: {
      area1: 120,
      area2: '*',
      area3: 160,
    },
  }

  dragEnd(unit, { sizes }) {
    if (unit === 'percent') {
      this.sizes.percent.area1 = sizes[0];
      this.sizes.percent.area2 = sizes[1];
    }
    else if (unit === 'pixel') {
      this.sizes.pixel.area1 = sizes[0];
      this.sizes.pixel.area2 = sizes[1];
      this.sizes.pixel.area3 = sizes[2];
    }
  }

  

}
