import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

//El router link va a recargar solamente lo necesario en el router-outlet
// sin necesidad de recargar toda la página solamente lo necesario
@Component({
  selector: 'app-componente-header',
  imports: [RouterLink],
  templateUrl: './componente-header.html',
  styleUrl: './componente-header.css'
})
export class ComponenteHeader {
  
}