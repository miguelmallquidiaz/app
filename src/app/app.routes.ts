import { Routes } from '@angular/router';
import { ComponentePipe } from './componente-pipe/componente-pipe';
import { ComponenteForm } from './componente-form/componente-form';
import { ComponenteInicio } from './componente-inicio/componente-inicio';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    { path: 'inicio', component: ComponenteInicio},
    { path: 'pipes', component: ComponentePipe},
    { path: 'formulario', component: ComponenteForm}
];