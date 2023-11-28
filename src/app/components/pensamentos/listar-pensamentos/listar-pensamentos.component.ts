import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {


  listaPensamentos: Pensamento[] = []; // Conteúdo vindo do Back-end
  paginaAtual: number = 1;


  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.getPensamentos(this.paginaAtual).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
      console.log(this.listaPensamentos);
    });
  };

};




