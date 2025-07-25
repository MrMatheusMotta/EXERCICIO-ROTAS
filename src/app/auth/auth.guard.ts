import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Importa o serviço de autenticação.

/**
 * authGuard é uma função CanActivateFn que protege rotas.
 * Ele verifica se o usuário está autenticado antes de permitir o acesso à rota.
 */
export const authGuard: CanActivateFn = (route, state) => {
  // Injeta o AuthService para verificar o estado de autenticação.
  const authService = inject(AuthService);
  // Injeta o Router para redirecionar o usuário, se necessário.
  const router = inject(Router);

  // Verifica se o usuário está autenticado usando o método isAuthenticated() do AuthService.
  if (authService.isAuthenticated()) {
    return true; // Se autenticado, permite o acesso à rota.
  } else {
    // Se não autenticado, redireciona o usuário para a rota '/painel' (tela de login).
    // O router.navigateByUrl retorna uma Promise<boolean>, que é compatível com CanActivateFn.
    return router.navigateByUrl('/painel');
  }
};
