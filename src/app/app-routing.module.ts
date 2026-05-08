import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AfficherComponent }  from './produits/afficher/afficher.component';
import { AjouterComponent }   from './produits/ajouter/ajouter.component';
import { ModifierComponent }  from './produits/modifier/modifier.component';
import { SupprimerComponent } from './produits/supprimer/supprimer.component';
import { PanierComponent }    from './panier/panier.component';

const routes: Routes = [
  { path: 'produits',               component: AfficherComponent },
  { path: 'produits/ajouter',       component: AjouterComponent },
  { path: 'produits/modifier/:id',  component: ModifierComponent },
  { path: 'produits/supprimer/:id', component: SupprimerComponent },
  { path: 'panier',                 component: PanierComponent },
  { path: '',  redirectTo: 'produits', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }