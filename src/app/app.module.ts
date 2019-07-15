import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplitComponent } from './component/split.component';
import { SplitAreaDirective } from './directive/splitArea.directive';


@NgModule({
  declarations: [
    AppComponent,
    SplitComponent,
    SplitAreaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
