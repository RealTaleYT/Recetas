import { Component } from '@angular/core';
import { Receta } from '../Class/receta';
import { RecetaForm } from "../receta-form/receta-form";
import { RecetaList } from "../receta-list/receta-list";

@Component({
  selector: 'app-recetas',
  imports: [RecetaForm, RecetaList],
  templateUrl: './recetas.html',
  styleUrl: './recetas.scss'
})
export class Recetas {
  recetas: Receta[] = [];

  agregarReceta($event: Receta[]) {
    this.recetas = $event;
  }

}
