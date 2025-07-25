import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ProdutosServiceService } from '../service/produtos-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CommonModule], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  produtos: any[] = []; 

  constructor(
    private produtoService: ProdutosServiceService, 
    private router: Router 
  ) { }

  ngOnInit(): void {

    this.produtos = this.produtoService.getProdutos(); 
    console.log(this.produtos); 
  }
}