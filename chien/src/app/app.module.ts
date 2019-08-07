import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterChienComponent } from './ajouter-chien/ajouter-chien.component';
import { ListeChiensComponent } from './liste-chiens/liste-chiens.component';
import { ErreurComponent } from './erreur/erreur.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { SecretComponent } from './secret/secret.component';
import { ChienService } from 'src/app/services/chien.service';

@NgModule({
  declarations: [
    AppComponent,
    AjouterChienComponent,
    ListeChiensComponent,
    ErreurComponent,
    AccueilComponent,
    HeaderComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ChienService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
