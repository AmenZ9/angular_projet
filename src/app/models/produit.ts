export class Produit {
  public id!: number;
  public nom: string;
  public prix: number;
  public description: string;
  public stock: number;
  public categorieId: number;

  constructor(
    nom: string,
    prix: number,
    description: string,
    stock: number,
    categorieId: number
  ) {
    this.nom = nom;
    this.prix = prix;
    this.description = description;
    this.stock = stock;
    this.categorieId = categorieId;
  }
}