import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Módulo necessário para diretivas como ngIf.

@Component({
  selector: 'app-rodape', // Seletor HTML para este componente.
  standalone: true, // Indica que este é um componente standalone.
  imports: [CommonModule], // Módulos que este componente utiliza.
  templateUrl: './rodape.component.html', // Caminho para o arquivo HTML do template.
  styleUrl: './rodape.component.css' // Caminho para o arquivo CSS de estilos.
})
export class RodapeComponent {
  // Propriedades para os dados do rodapé
  institucionalText: string = '© 2024 Sua Empresa. Todos os direitos reservados.';
  email: string = 'contato@suaempresa.com';
  facebookLink: string = 'https://www.facebook.com/suaempresa';
  instagramLink: string = 'https://www.instagram.com/suaempresa';
  linkedinLink: string = 'https://www.linkedin.com/company/suaempresa';
}
