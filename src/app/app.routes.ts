import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicoComponent } from './servico/servico.component';
import { ContatoComponent } from './contato/contato.component';
import { PainelComponent } from './auth/painel/painel.component'; // Importa o componente de login
import { PainelControleComponent } from './auth/painel-controle/painel-controle.component'; // Importa o componente da área restrita
import { authGuard } from './auth/auth.guard'; // Importa o guard de rota

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona a rota vazia para /home
  { path: 'home', component: HomeComponent }, // Rota para o componente Home
  { path: 'sobre', component: SobreComponent }, // Rota para o componente Sobre
  { path: 'servicos', component: ServicoComponent }, // Rota para o componente Servico
  { path: 'contato', component: ContatoComponent }, // Rota para o componente Contato
  { path: 'painel', component: PainelComponent }, // Rota para o formulário de login
  {
    path: 'painel-controle', // Rota para a área restrita
    component: PainelControleComponent, // Componente a ser exibido
    canActivate: [authGuard] // Aplica o guard de rota para proteger esta rota
  },
  // Opcional: Rota curinga para lidar com rotas não encontradas (redireciona para home ou exibe um 404)
  // { path: '**', redirectTo: '/home' }
];