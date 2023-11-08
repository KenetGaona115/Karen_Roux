import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isAdmin: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido. Valores:', this.loginForm.value);
      // Lógica de autenticación u otras acciones con los datos del formulario...
    } else {
      console.log('Formulario inválido. Por favor, completa los campos requeridos.');
    }
  }

  validateAdmin() {
    this.loginForm.get('email')?.value == 'admin' ?
      this.isAdmin = true : this.isAdmin = false
  }
}
