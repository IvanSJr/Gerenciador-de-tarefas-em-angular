import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarefaService} from "./shared/tarefa.service";
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { CadastrarTarefasComponent } from './cadastrar-tarefas/cadastrar-tarefas.component';

@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
