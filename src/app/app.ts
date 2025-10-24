import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recetas } from "./recetas/recetas";
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Recetas, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Recetas');
}
