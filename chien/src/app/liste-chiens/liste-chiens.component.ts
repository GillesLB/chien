import { Component, OnInit } from '@angular/core';

import { ChienService } from 'src/app/services/chien.service';
import { Chien } from 'src/app/modeles/chien.modele';

@Component({
  selector: 'app-liste-chiens',
  templateUrl: './liste-chiens.component.html',
  styleUrls: ['./liste-chiens.component.css']
})
export class ListeChiensComponent implements OnInit {

  liste: Chien[] = [];

  constructor(
    private chienService: ChienService,
  ) { }

  ngOnInit() {
    this.liste = this.chienService.liste;
  }

  onSupprimer(chien) {
    this.chienService.supprimer(chien);
  }

}
