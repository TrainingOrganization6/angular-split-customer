import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplitAreaDirective } from './library/directive/splitArea.directive';
import { SplitComponent } from './library/component/split.component';
import { BravoSplitComponent } from './controller/BravoComponent/bravo-split.component';
import { BravoAreaDirective } from './controller/bravo-area.directive';

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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
