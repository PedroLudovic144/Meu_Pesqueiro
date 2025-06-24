import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipe',
  imports: [],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent {
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
