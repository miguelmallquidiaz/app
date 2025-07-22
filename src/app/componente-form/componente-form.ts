import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-componente-form',
  imports: [ ReactiveFormsModule],
  templateUrl: './componente-form.html',
  styleUrl: './componente-form.css'
})
export class ComponenteForm {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      tipo: ['', Validators.required],
      detalle: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  
  guardar(){
    console.log(this.userForm.value)
  }
  mostrarvalores(){
    return JSON.stringify(this.userForm.value, null, 2);
  }
}
