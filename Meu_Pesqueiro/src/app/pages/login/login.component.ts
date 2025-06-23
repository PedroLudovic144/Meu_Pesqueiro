import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  senha = '';
   constructor(private router: Router) {}

  logar() {
    if (this.email === 'admin@pesqueiro.com' && this.senha === '123456') {
      this.router.navigate(['/home']);
    } else {
      alert('Email ou senha inválidos.');
    }
  }
}
