import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Módulo necessário para diretivas como ngIf.
import { AuthService } from '../auth.service'; // Importa o serviço de autenticação.
import { Router } from '@angular/router'; // Importa o Router para navegação.

@Component({
  selector: 'app-painel-controle', // Seletor HTML para este componente.
  standalone: true, // Indica que este é um componente standalone.
  imports: [CommonModule], // Módulos que este componente utiliza.
  templateUrl: './painel-controle.component.html', // Caminho para o arquivo HTML do template.
  styleUrl: './painel-controle.component.css' // Caminho para o arquivo CSS de estilos.
})
export class PainelControleComponent {

  constructor(
    private authService: AuthService, // Injeta o AuthService.
    private router: Router // Injeta o Router.
  ) { }

  /**
   * Método para realizar o logout do usuário.
   */
  logout(): void {
    this.authService.logout(); // Chama o método logout do AuthService.
    this.router.navigate(['/painel']); // Redireciona para a tela de login após o logout.
  }
}
