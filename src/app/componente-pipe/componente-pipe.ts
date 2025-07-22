import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-pipe',
  imports: [CommonModule],
  templateUrl: './componente-pipe.html',
  styleUrl: './componente-pipe.css'
})
export class ComponentePipe {
  mensaje = "Sessión 2 - Taller de Angular"
  fecha = new Date()
}