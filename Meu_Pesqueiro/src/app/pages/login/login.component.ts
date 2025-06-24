import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
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
