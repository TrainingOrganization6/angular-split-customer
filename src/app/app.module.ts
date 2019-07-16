import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplitComponent } from './library/component/split.component';
import { SplitAreaDirective } from './library/directive/splitArea.directive';
import { BravoSplitComponent } from './controller/bravo-split/bravo-split.component';
import { BravoSplitDirectiveDirective } from './controller/bravo-split-directive.directive';



@NgModule({
  declarations: [
    AppComponent,
    SplitComponent,
    SplitAreaDirective,
    BravoSplitComponent,
    BravoSplitDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
