import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { ComponenteHeader } from './componente-header/componente-header';
import { ComponenteFooter } from './componente-footer/componente-footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ComponenteHeader,
    ComponenteFooter,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}