import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SincrireComponent } from './sincrire/sincrire.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';

@NgModule({
  declarations: [
    AppComponent,
    SincrireComponent,
    SeConnecterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
