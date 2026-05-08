import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})
export class SupprimerComponent implements OnInit {

  id: number = 0;

  constructor(
    public ps: ProduitService,
    public ar: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(data => {
      this.id = data['id'];
    });
  }

  valider() {
    this.ps.supprimerProduit(this.id).subscribe(
      data => {
        alert('Produit supprimé avec succès !');
        this.router.navigate(['/produits']);
      },
      error => { alert('Erreur lors de la suppression'); }
    );
  }

  annuler() {
    this.router.navigate(['/produits']);
  }
}