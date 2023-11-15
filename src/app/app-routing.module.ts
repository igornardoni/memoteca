import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'listar-pensamentos',
    pathMatch: 'full',
  },

  {
    path: 'criar-pensamento', // Eu escolho o nome da rota
    component: CriarPensamentoComponent   // Aqui eu listo onde está/qualé a rota
  },

  {
    path: 'listar-pensamentos',
    component: ListarPensamentosComponent
  },

  {
    path: 'excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
