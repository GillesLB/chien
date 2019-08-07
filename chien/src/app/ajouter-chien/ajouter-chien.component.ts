import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Chien } from 'src/app/modeles/chien.modele';
import { ChienService } from 'src/app/services/chien.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AjouterChien } from 'src/app/actions/chien.actions';

@Component({
  selector: 'app-ajouter-chien',
  templateUrl: './ajouter-chien.component.html',
  styleUrls: ['./ajouter-chien.component.css']
})
export class AjouterChienComponent implements OnInit {

  liste: Chien[] = [];
  ajouterChienForm: FormGroup;

  constructor(
    private chienService: ChienService,
    private router: Router,
    private store: Store<{chien: object}>
  ) { this.liste = this.chienService.liste; }

  ngOnInit() {
    this.ajouterChienForm = new FormGroup({
      nom: new FormControl(),
      couleur: new FormControl(),
    });
  }

  onSubmit() {
    const nom = this.ajouterChienForm.get('nom').value;
    const couleur = this.ajouterChienForm.get('couleur').value;
    const truc = this.liste.length + 1;
    const chienAAjouter = new Chien(nom, couleur, truc);
    // this.liste.push(chienAAjouter);
    this.store.dispatch(new AjouterChien(chienAAjouter));
    this.router.navigate(['liste-chien']);
  }

}
