import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from '../../models/produit';
import { Categorie } from '../../models/categorie';
import { ProduitService } from '../../services/produit.service';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  lescategories: Categorie[] = [];

  constructor(
    public ps: ProduitService,
    public cs: CategorieService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.cs.getToutesCategories().subscribe(
      data => { this.lescategories = data; },
      error => { alert('Erreur chargement catégories'); }
    );
  }

  ajouter(f: NgForm) {
  let p = new Produit(
    f.value['nom'],
    f.value['prix'],
    f.value['description'],
    f.value['stock'],
    Number(f.value['categorie_id'])
  );

  this.ps.ajouterProduit(p).subscribe(
    data => {
      alert('Produit ajouté avec succès !');
      this.router.navigate(['/produits']);
    },
    error => { alert('Erreur lors de l\'ajout'); }
  );

}
}
