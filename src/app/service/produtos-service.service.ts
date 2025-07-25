import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {

  constructor() { }

  private produtos = [
    {
      foto: './img/handheld.jpg', 
      rotulo: 'Console Portátil',
      detalhe: 'Experimente a liberdade de jogar onde quiser com este console compacto e poderoso.' 
    },
    {
      foto: './img/sega.jpg',
      rotulo: 'Console SEGA Mega Drive',
      detalhe: 'Reviva os clássicos com o lendário console da SEGA, com gráficos e sons nostálgicos.'
    },
    {
      foto: './img/snes.jpg',
      rotulo: 'Console SNES',
      detalhe: 'Descubra a magia dos jogos 16-bits com este icônico console que marcou gerações.'
    },
    {
      foto: './img/xbox.jpg',
      rotulo: 'Console Xbox Series S',
      detalhe: 'Mergulhe em jogos de última geração com gráficos incríveis e desempenho ultrarrápido.'
    }
  ];


  getProdutos(): any[] { 
    return this.produtos;
  }
}