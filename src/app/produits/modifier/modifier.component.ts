import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../../models/produit';
import { Categorie } from '../../models/categorie';
import { ProduitService } from '../../services/produit.service';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  p!: Produit;
  lescategories: Categorie[] = [];

  constructor(
    public ps: ProduitService,
    public cs: CategorieService,
    public ar: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    // Récupérer l'id depuis l'URL
    this.ar.params.subscribe(data => {
      let id = data['id'];

      // Charger le produit à modifier
      this.ps.getProduit(id).subscribe(
        produit => { this.p = produit; },
        error => { alert('Produit introuvable'); }
      );
    });

    // Charger les catégories
    this.cs.getToutesCategories().subscribe(
      data => { this.lescategories = data; },
      error => { alert('Erreur chargement catégories'); }
    );
  }

  modifier(f: NgForm) {
    let nom         = f.value['nom'];
    let prix        = f.value['prix'];
    let description = f.value['description'];
    let stock       = f.value['stock'];
    let categorie_id = f.value['categorie_id'];

    if (nom !== '' && prix > 0 && stock >= 0 && categorie_id !== '') {
      this.p.nom          = nom;
      this.p.prix         = prix;
      this.p.description  = description;
      this.p.stock        = stock;
      this.p.categorieId = Number(categorie_id);
      this.ps.modifierProduit(this.p).subscribe(
        data => {
          alert('Produit modifié avec succès !');
          this.router.navigate(['/produits']);
        },
        error => { alert('Erreur lors de la modification'); }
      );
    } else {
      alert('Veuillez remplir tous les champs obligatoires');
    }
  }
}