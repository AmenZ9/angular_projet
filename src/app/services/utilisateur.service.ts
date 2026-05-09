import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  apiUrl = 'http://localhost:3000/api/utilisateurs';

  constructor(public http: HttpClient) {}

  getTousUtilisateurs() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUtilisateur(id: number) {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  ajouterUtilisateur(utilisateur: any) {
    return this.http.post<any>(this.apiUrl, utilisateur);
  }

  modifierUtilisateur(id: number, utilisateur: any) {
    return this.http.patch<any>(this.apiUrl + '/' + id, utilisateur);
  }

  supprimerUtilisateur(id: number) {
    return this.http.delete<any>(this.apiUrl + '/' + id);
  }

}