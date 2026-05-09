import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-supprimer-categorie',
  templateUrl: './supprimer-categorie.component.html',
  styleUrls: ['./supprimer-categorie.component.css']
})
export class SupprimerCategorieComponent implements OnInit {

  id!: number;

  constructor(
    public cs: CategorieService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get('id'));

  }

  valider() {

    this.cs.supprimerCategorie(this.id).subscribe(
      (data: any) => {
        alert('Catégorie supprimée avec succès !');
        this.router.navigate(['/categories']);
      },
      (error: any) => {
        alert('Erreur lors de la suppression');
      }
    );

  }

  annuler() {
    this.router.navigate(['/categories']);
  }

}