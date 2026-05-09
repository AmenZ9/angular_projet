import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CategorieService } from '../../services/categorie.service';
import { Categorie } from '../../models/categorie';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.css']
})
export class ModifierCategorieComponent implements OnInit {

  categorie: Categorie | null = null;

  id!: number;

  constructor(
    public cs: CategorieService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.cs.getCategorie(this.id).subscribe(
      (data: Categorie) => {
        this.categorie = data;
      },
      (error: any) => {
        alert('Erreur lors du chargement de la catégorie');
      }
    );

  }

  modifier(f: NgForm) {

    let c = new Categorie(f.value['nom']);
    c.id = this.id;

    this.cs.modifierCategorie(this.id, c).subscribe(
      (data: any) => {
        alert('Catégorie modifiée avec succès !');
        this.router.navigate(['/categories']);
      },
      (error: any) => {
        alert('Erreur lors de la modification');
      }
    );

  }

}