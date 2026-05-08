import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  apiUrl = 'http://localhost:3000/api/produits';

  constructor(public http: HttpClient) { }

  getTousProduits() {
    return this.http.get<Produit[]>(this.apiUrl);
  }

  getProduit(id: number) {
    return this.http.get<Produit>(this.apiUrl + '/' + id);
  }

  ajouterProduit(p: Produit) {
    return this.http.post<any>(this.apiUrl, p);
  }

  modifierProduit(p: Produit) {
    return this.http.put<any>(this.apiUrl + '/' + p.id, p);
  }

  supprimerProduit(id: number) {
    return this.http.delete<any>(this.apiUrl + '/' + id);
  }
}