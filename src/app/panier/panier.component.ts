import { Component, OnInit } from '@angular/core';
import { PanierService } from '../services/panier.service';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  lesitems: any[] = [];

  constructor(
    public panierService: PanierService,
    public produitService: ProduitService
  ) { }

  ngOnInit(): void {
    this.chargerPanier();
  }

  chargerPanier() {
    this.panierService.getPanier().subscribe(
      data => {
        // For each panier item, load the product details
        this.lesitems = [];
        data.forEach(item => {
          this.produitService.getProduit(item.produitId).subscribe(
            produit => {
              this.lesitems.push({
                id: item.id,
                quantite: item.quantite,
                produit: produit
              });
            }
          );
        });
      },
      error => { alert('Erreur chargement panier'); }
    );
  }

  supprimer(id: number) {
    this.panierService.supprimerDuPanier(id).subscribe(
      data => {
        alert('Article supprimé du panier');
        this.chargerPanier();
      },
      error => { alert('Erreur suppression'); }
    );
  }

  getTotal(): number {
    return this.lesitems.reduce(
      (total, item) => total + (item.produit.prix * item.quantite), 0
    );
  }
}