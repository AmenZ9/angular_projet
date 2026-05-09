import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  apiUrl = 'http://localhost:3000/api/categories';

  constructor(public http: HttpClient) { }

  getToutesCategories() {
    return this.http.get<Categorie[]>(this.apiUrl);
  }

  getCategorie(id: number) {
    return this.http.get<Categorie>(this.apiUrl + '/' + id);
  }

  ajouterCategorie(c: Categorie) {
    return this.http.post<any>(this.apiUrl, c);
  }

  modifierCategorie(id: number, c: Categorie) {
    return this.http.patch<any>(this.apiUrl + '/' + id, c);
  }

  supprimerCategorie(id: number) {
    return this.http.delete<any>(this.apiUrl + '/' + id);
  }
}