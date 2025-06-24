import { Routes } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { ContatoComponent } from './pages/contato/contato.component';
import { EquipeComponent } from './pages/equipe/equipe.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: '**', redirectTo: 'login' }
];
