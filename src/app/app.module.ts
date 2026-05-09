  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { HttpClientModule } from '@angular/common/http';
  import { FormsModule } from '@angular/forms';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

  import { AfficherComponent }  from './produits/afficher/afficher.component';
  import { AjouterComponent }   from './produits/ajouter/ajouter.component';
  import { ModifierComponent }  from './produits/modifier/modifier.component';
  import { SupprimerComponent } from './produits/supprimer/supprimer.component';
  import { PanierComponent }    from './panier/panier.component';

  import { ListeComponent } from './categories/liste/liste.component';
  import { AjouterCategorieComponent } from './categories/ajouter-categorie/ajouter-categorie.component';
  import { SupprimerCategorieComponent } from './categories/supprimer-categorie/supprimer-categorie.component';
  import { ModifierCategorieComponent } from './categories/modifier-categorie/modifier-categorie.component';

  import { LoginComponent } from './Authentification/login/login.component';
  import { RegisterComponent } from './Authentification/register/register.component';

  @NgModule({
    declarations: [
      AppComponent,
      AfficherComponent,
      AjouterComponent,
      ModifierComponent,
      SupprimerComponent,
      PanierComponent,
      AjouterCategorieComponent,
      SupprimerCategorieComponent,
      ModifierCategorieComponent,
      LoginComponent,
      RegisterComponent,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      FontAwesomeModule,
      ListeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }