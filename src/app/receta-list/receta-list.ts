import { Component, output } from '@angular/core';
import { Receta } from '../Class/receta';

@Component({
  selector: 'app-receta-list',
  imports: [],
  templateUrl: './receta-list.html',
  styleUrl: './receta-list.scss'
})
export class RecetaList {
  recetas: Receta[] = [
    new Receta(1,"Salchipapas", "./salchipapa.png", ["Patatas", "Salchichas", "Ketchup", "Mayonesa"]),
    new Receta(2,"Lentejas", "./lentejas.png", ["Lentejas", "Patatas", "Arroz", "Chorizo"]),
    new Receta(3,"Espaguetis", "./espaguetis.png", ["Espaguetis", "Tomate frito", "Queso rayado"]),
    new Receta(4, "Arroz", "./arroz.png", ["Arroz"])
  ];
  recetasOutput = output<Receta[]>();
  ngOnInit() {
    this.recetasOutput.emit(this.recetas);
  }
  eliminarReceta(id: number){
    const index = this.recetas.findIndex(recetita => recetita.getId() === id);
    if (index !== -1) {
      this.recetas.splice(index, 1);
    }
  }
  detallesReceta(id: number){
    alert("Nombre de la receta: " + this.recetas[id - 1].getTitle() + ", y sus ingredientes son: " + this.recetas[id-1].getIngredients()?.toString())
  }
}
