import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
pesqueiros = [
    { id: 1, nome: 'Pesqueiro do Zé', local: 'São Paulo', peixes: 'Tilápia, Pacu' }
  ];
  nome = '';
  local = '';
  peixes = '';
  filtro = '';

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
