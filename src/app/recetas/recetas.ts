import { Component } from '@angular/core';
import { Receta } from '../Class/receta';
import { RecetaForm } from "../receta-form/receta-form";

@Component({
  selector: 'app-recetas',
  imports: [RecetaForm],
  templateUrl: './recetas.html',
  styleUrl: './recetas.scss'
})
export class Recetas {
  recetas = [new Receta(1,"Receta 1", "./favicon.ico", ["Patatas", "Tomates"]),new Receta(2,"Receta 2", "./favicon.ico", ["Patatas", "Tomates"]),new Receta(3,"Receta 3", "./favicon.ico", ["Patatas", "Tomates"]),new Receta(4, "Receta 4", "./favicon.ico", ["Patatas", "Tomates"])];
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
