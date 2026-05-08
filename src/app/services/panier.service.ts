import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Panier } from '../models/panier';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  apiUrl = 'http://localhost:3000/api/paniers';

  constructor(public http: HttpClient) { }

  getPanier() {
    return this.http.get<any[]>(this.apiUrl);
  }

  ajouterAuPanier(produit: Produit) {
    let item = new Panier(produit.id, 1);
    return this.http.post<any>(this.apiUrl, item);
  }

  supprimerDuPanier(id: number) {
    return this.http.delete<any>(this.apiUrl + '/' + id);
  }
}