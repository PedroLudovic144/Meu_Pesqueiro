import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
pesqueiros = [
    { id: 1, nome: 'Pesqueiro do Zé', local: 'São Paulo', peixes: 'Tilápia, Pacu' }
  ];
  nome = '';
  local = '';
  peixes = '';
  filtro = '';
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
  adicionar() {
    const novo = {
      id: Date.now(),
      nome: this.nome,
      local: this.local,
      peixes: this.peixes
    };
    this.pesqueiros.push(novo);
    this.nome = '';
    this.local = '';
    this.peixes = '';
  }

  deletar(id: number) {
    this.pesqueiros = this.pesqueiros.filter(p => p.id !== id);
  }

  get filtrados() {
    return this.pesqueiros.filter(p =>
      p.nome.toLowerCase().includes(this.filtro.toLowerCase()) ||
      p.local.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
