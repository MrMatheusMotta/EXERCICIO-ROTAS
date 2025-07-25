import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Módulo necessário para diretivas como ngIf.
import { FormsModule } from '@angular/forms'; // Módulo para usar formulários baseados em template (ngModel).
import { AuthService } from '../auth.service'; // Importa o serviço de autenticação.
import { Router } from '@angular/router'; // Importa o Router para navegação.

@Component({
  selector: 'app-painel', // Seletor HTML para este componente.
  standalone: true, // Indica que este é um componente standalone (não precisa ser declarado em um módulo).
  imports: [CommonModule, FormsModule], // Módulos que este componente utiliza.
  templateUrl: './painel.component.html', // Caminho para o arquivo HTML do template.
  styleUrl: './painel.component.css' // Caminho para o arquivo CSS de estilos.
})
export class PainelComponent {
  username: string = ''; // Variável para armazenar o nome de usuário do formulário.
  password: string = ''; // Variável para armazenar a senha do formulário.
  errorMessage: string = ''; // Variável para exibir mensagens de erro.

  constructor(
    private authService: AuthService, // Injeta o AuthService.
    private router: Router // Injeta o Router.
  ) { }

  /**
   * Método chamado ao submeter o formulário de login.
   */
  login(): void {
    // Tenta fazer o login usando o AuthService.
    if (this.authService.login(this.username, this.password)) {
      // Se o login for bem-sucedido, redireciona para a rota '/painel-controle'.
      this.router.navigate(['/painel-controle']);
    } else {
      // Se o login falhar, define uma mensagem de erro.
      this.errorMessage = 'Usuário ou senha inválidos.';
    }
  }
}
