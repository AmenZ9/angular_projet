import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Categorie } from '../../models/categorie';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-liste-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  categories: Categorie[] = [];

  constructor(public cs: CategorieService) {}

  ngOnInit(): void {
    this.chargerCategories();
  }

  chargerCategories() {

    this.cs.getToutesCategories().subscribe({

      next: (data: Categorie[]) => {
        this.categories = data;
      },

      error: (err: any) => {
        console.log(err);
      }

    });

  }

  supprimer(id: number) {

    if(confirm('Supprimer cette catégorie ?')) {

      this.cs.supprimerCategorie(id).subscribe({

        next: () => {
          this.chargerCategories();
        },

        error: (err: any) => {
          console.log(err);
        }

      });

    }

  }

}