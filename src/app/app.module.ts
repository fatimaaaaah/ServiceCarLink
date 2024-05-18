import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinscrireComponent } from './sincrire/sincrire.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Sinscrire2Component } from './sinscrire2/sinscrire2.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ProfilComponent } from './profil/profil.component';
import { ServicesComponent } from './services/services.component';
import { AchetervoitureComponent } from './achetervoiture/achetervoiture.component';

@NgModule({
  declarations: [
    AppComponent,
    SinscrireComponent,
    SeConnecterComponent,
    AccueilComponent,
    Sinscrire2Component,
    RendezVousComponent,
    ProfilComponent,
    ServicesComponent,
    AchetervoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
