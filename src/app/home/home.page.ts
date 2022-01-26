import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  validationUserMessage = {
    Documento: [
      { type: 'required', message: 'Ingrese su documento de identificacion' },
      {
        type: 'minlength',
        message: 'El documento debe tener minimo 8 digitos',
      },
    ],
  };

  validationFormUser: FormGroup;

  constructor(
    public formbuider: FormBuilder,
    //hola esta es una prueba
  ) {}

  ngOnInit() {
    this.validationFormUser = this.formbuider.group({
      Documento: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(8)])
      ),
    });
  }

  
}
