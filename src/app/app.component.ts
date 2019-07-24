import { Component, ViewChild, OnInit } from '@angular/core';
import { SplitComponent } from './library/component/split.component';
import { SplitAreaDirective } from './library/directive/splitArea.directive';
import { BravoSplitComponent } from './controller/BravoComponent/bravo-split.component';
import { BravoAreaDirective } from './controller/bravo-area.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-split-customer';


}
