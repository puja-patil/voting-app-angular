import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VotingContainerComponent } from './components/voting-container/voting-container.component';
import { BarRepresentationComponent } from './components/bar-representation/bar-representation.component';


@NgModule({
  declarations: [
    AppComponent,
    VotingContainerComponent,
    BarRepresentationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
