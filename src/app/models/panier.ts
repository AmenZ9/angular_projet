export class Panier {
  public id!: number;
  public produitId: number;
  public quantite: number;
  public dateAjout: Date;

  constructor(produitId: number, quantite: number) {
    this.produitId = produitId;
    this.quantite = quantite;
    this.dateAjout = new Date();
  }
}