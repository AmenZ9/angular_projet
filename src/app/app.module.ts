import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AfficherComponent }  from './produits/afficher/afficher.component';
import { AjouterComponent }   from './produits/ajouter/ajouter.component';
import { ModifierComponent }  from './produits/modifier/modifier.component';
import { SupprimerComponent } from './produits/supprimer/supprimer.component';
import { PanierComponent }    from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficherComponent,
    AjouterComponent,
    ModifierComponent,
    SupprimerComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }