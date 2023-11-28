import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({

      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],

      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4),
      ])],

      modelo: ['modelo1']
    })
  }

  criarPensamento(): void {
    console.log(this.formulario.get('autoria')?.errors); // ? = Operador else
    if(this.formulario.valid) {
      this.service.createPensamentos(this.formulario.value).subscribe(
        () => {
          this.router.navigate(['/listar-pensamentos'])
        }
      )
    };
  };


  cancelar(): void {
    this.router.navigate(['/listar-pensamentos'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
