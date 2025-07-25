import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // O serviço é fornecido no nível raiz, tornando-o disponível em toda a aplicação.
})
export class AuthService {
  // BehaviorSubject para armazenar o estado de autenticação.
  // Ele emite o valor atual para novos inscritos e o valor mais recente para inscritos existentes.
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  // Observable público para que outros componentes possam se inscrever e reagir a mudanças no estado de autenticação.
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor() {
    // Ao iniciar o serviço, verifica se há um estado de autenticação salvo no localStorage.
    // Isso ajuda a manter o usuário logado mesmo após um refresh da página.
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isAuthenticatedSubject.next(loggedIn);
  }

  /**
   * Método para realizar o login do usuário.
   * @param username O nome de usuário fornecido.
   * @param password A senha fornecida.
   * @returns Retorna true se as credenciais forem válidas, caso contrário, false.
   */
  login(username: string, password: string): boolean {
    // Lógica de validação simples: usuário "adm" e senha "123".
    if (username === 'adm' && password === '123') {
      // Se as credenciais forem válidas, define o estado de autenticação como true.
      this.isAuthenticatedSubject.next(true);
      // Salva o estado de login no localStorage para persistência.
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    } else {
      // Se as credenciais forem inválidas, define o estado de autenticação como false.
      this.isAuthenticatedSubject.next(false);
      // Remove o estado de login do localStorage.
      localStorage.removeItem('isLoggedIn');
      return false;
    }
  }

  /**
   * Método para realizar o logout do usuário.
   */
  logout(): void {
    // Define o estado de autenticação como false.
    this.isAuthenticatedSubject.next(false);
    // Remove o estado de login do localStorage.
    localStorage.removeItem('isLoggedIn');
  }

  /**
   * Método para verificar se o usuário está autenticado.
   * @returns Retorna o valor atual do estado de autenticação.
   */
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
}
