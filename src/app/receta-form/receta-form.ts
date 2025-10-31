import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Receta } from '../Class/receta';
import { Recetas } from '../recetas/recetas';

@Component({
  selector: 'app-receta-form',
  imports: [ReactiveFormsModule],
  templateUrl: './receta-form.html',
  styleUrl: './receta-form.scss'
})
export class RecetaForm {
  @Input() recetas: Receta[] = [];
  recetaForm = new FormGroup({
    titulo: new FormControl(""),
    imagen: new FormControl(""),
    ingredientes: new FormControl("")
  })
  get titulo(){
    return this.recetaForm.get("titulo");
  }
  get imagen(){
    return this.recetaForm.get("imagen");
  }
  get ingredientes(){
    return this.recetaForm.get("ingredientes");
  }
  agregarReceta(){
      if (this.titulo?.value == null || this.titulo?.value == "" || this.titulo?.value == undefined){
        alert("Titulo no puede estar vacío");
      }else if(this.imagen?.value == null || this.imagen?.value == "" || this.imagen?.value == undefined){
        alert("Imagen no puede estar vacío");
      }else if (this.ingredientes?.value == null || this.ingredientes?.value == "" || this.ingredientes?.value == undefined){
        alert("Ingredientes no puede estar vacío");
      }else {
        let id = this.recetas[this.recetas.length -1].getId() + 1;
        let receta = new Receta(id, this.titulo?.value,this.imagen?.value?.toString(),this.ingredientes?.value?.split(","))
        this.recetas.push(receta);
      }
      document.getElementById("btnCancelar")?.click();
    }
  }
