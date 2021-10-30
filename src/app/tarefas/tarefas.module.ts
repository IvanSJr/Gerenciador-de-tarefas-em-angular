import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarefaService} from "./shared/tarefa.service";
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';

@NgModule({
  declarations: [
    ListarTarefasComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
