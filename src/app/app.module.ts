import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinscrireComponent } from './sincrire/sincrire.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Sinscrire2Component } from './sinscrire2/sinscrire2.component';

@NgModule({
  declarations: [
    AppComponent,
    SinscrireComponent,
    SeConnecterComponent,
    AccueilComponent,
    Sinscrire2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
