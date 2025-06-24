import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  constructor(private router: Router) {}
  irParaHome(){
    this.router.navigate(['/home']);
  }
  irParaContato(){
    this.router.navigate(['/contato']);
  }
  irParaEquipe(){
    this.router.navigate(['/equipe']);
  }
  Sair(){
    this.router.navigate(['/login']);
  }

}
