import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Receta } from '../Class/receta';
import { Recetas } from '../recetas/recetas';

@Component({
  selector: 'app-receta-from',
  imports: [ReactiveFormsModule],
  templateUrl: './receta-from.html',
  styleUrl: './receta-from.scss'
})
export class RecetaFrom {
  @Input() recetas: Receta[] = [];
  recetaForm = new FormGroup({
    titulo: new FormControl(""),
    imagen: new FormControl(""),
    ingredientes: new FormControl("")
  })
  agregarReceta(){
      if (this.recetaForm.get("titulo")?.value == null || this.recetaForm.get("titulo")?.value == "" || this.recetaForm.get("titulo")?.value == undefined){
        alert("Titulo no puede estar vacío");
      }else if(this.recetaForm.get("imagen")?.value == null || this.recetaForm.get("imagen")?.value == "" || this.recetaForm.get("imagen")?.value == undefined){
        alert("Imagen no puede estar vacío");
      }else if (this.recetaForm.get("ingredientes")?.value == null || this.recetaForm.get("ingredientes")?.value == "" || this.recetaForm.get("ingredientes")?.value == undefined){
        alert("Ingredientes no puede estar vacío");
      }else {
        let id = this.recetas[this.recetas.length -1].getId() + 1;
        let receta = new Receta(id, this.recetaForm.get("titulo")?.value,this.recetaForm.get("imagen")?.value?.toString(),this.recetaForm.get("ingredientes")?.value?.split(","))
        this.recetas.push(receta);
      }
      document.getElementById("btnCancelar")?.click();
    }
  }
