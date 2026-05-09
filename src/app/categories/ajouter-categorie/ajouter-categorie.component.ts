import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CategorieService } from '../../services/categorie.service';
import { Categorie } from '../../models/categorie';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  categorie: Categorie = new Categorie('');

  constructor(
    public cs: CategorieService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  ajouter(f: NgForm) {

    let c: Categorie = new Categorie(f.value['nom']);

    this.cs.ajouterCategorie(c).subscribe(
      (data: any) => {
        alert('Catégorie ajoutée avec succès !');
        this.router.navigate(['/categories']);
      },
      (error: any) => {
        alert('Erreur lors de l\'ajout');
      }
    );

  }

}