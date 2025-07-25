import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component'; // Importa o RodapeComponent

@Component({
  selector: 'app-root', // Seletor HTML para este componente.
  standalone: true, // Indica que este é um componente standalone.
  // Adiciona RouterOutlet, RouterLink e RodapeComponent aos imports.
  imports: [RouterOutlet, RouterLink, RodapeComponent],
  templateUrl: './app.component.html', // Caminho para o arquivo HTML do template.
  styleUrl: './app.component.css' // Caminho para o arquivo CSS de estilos.
})
export class AppComponent {
  title = 'componentes-e-rotas'; // Título da aplicação.
}
