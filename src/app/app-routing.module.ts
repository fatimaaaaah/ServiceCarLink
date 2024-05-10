import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinscrireComponent } from './sincrire/sincrire.component';
import { Sinscrire2Component } from './sinscrire2/sinscrire2.component';
import { SeConnecterComponent } from './se-connecter/se-connecter.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {
    path: 'sinscrire',
    component: SinscrireComponent
  },
  {
    path: 'sinscrire2',
    component: Sinscrire2Component
  },
  {
    path: 'seConnecter',
    component: SeConnecterComponent
  },
  {
    path: 'acceuil',
    component: AccueilComponent
  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
