import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0, // colocamos o valor 0 pois os dados reais do `id` virão do componente "pai".
    conteudo: 'I love Angular',
    autoria: 'Igor',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g' // CSS class name
    }
    else{
      return 'pensamento-p' // CSS class name
    }
  }
}

// O “ngClass” é uma diretiva de atributos adicionando classes CSS ao elemento, diferente do ngIf e ngFor, que adicionam e removem elementos do template, classificados como estruturais.

