import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { ContatoComponent } from './pages/contato/contato.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, HomeComponent, ContatoComponent, EquipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Meu_Pesqueiro';
}
