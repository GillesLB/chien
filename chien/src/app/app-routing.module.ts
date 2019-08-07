import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from 'src/app/accueil/accueil.component';
import { ErreurComponent } from 'src/app/erreur/erreur.component';
import { AjouterChienComponent } from 'src/app/ajouter-chien/ajouter-chien.component';
import { ListeChiensComponent } from 'src/app/liste-chiens/liste-chiens.component';
import { SecretComponent } from 'src/app/secret/secret.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'liste-chien', component: ListeChiensComponent},
  {path: 'ajouter-chien', component: AjouterChienComponent},
  {path: 'secret', component: SecretComponent},
  {path: '**', component: ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
