import { Component, OnInit } from '@angular/core';
import { Produit } from '../../models/produit';
import { Categorie } from '../../models/categorie';
import { ProduitService } from '../../services/produit.service';
import { CategorieService } from '../../services/categorie.service';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {

  lesproduits: Produit[] = [];
  produitsFiltres: Produit[] = [];
  lescategories: Categorie[] = [];
  categorieSelectionnee: number = 0;

  constructor(
    public ps: ProduitService,
    public cs: CategorieService,
    public panierService: PanierService
  ) { }

  ngOnInit(): void {
    // Charger les produits
    this.ps.getTousProduits().subscribe(
      data => {
        this.lesproduits = data;
        this.produitsFiltres = data;
      },
      error => { alert('Erreur chargement produits'); }
    );

    // Charger les catégories
    this.cs.getToutesCategories().subscribe(
      data => { this.lescategories = data; },
      error => { alert('Erreur chargement catégories'); }
    );
  }

  filtrerParCategorie(categorieId: number) {
    this.categorieSelectionnee = categorieId;
    if (categorieId === 0) {
      this.produitsFiltres = this.lesproduits;
    } else {
      this.produitsFiltres = this.lesproduits.filter(
        p => p.categorieId == categorieId
      );
    }
  }

  commander(produit: Produit) {
    this.panierService.ajouterAuPanier(produit).subscribe(
      data => { alert(produit.nom + ' ajouté au panier !'); },
      error => { alert('Erreur lors de l\'ajout au panier'); }
    );
  }
   isAdmin(): boolean {

    const user = JSON.parse(
      localStorage.getItem('user') || '{}'
    );

    return user.role === 'ADMIN';
  }

}