import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TarefaService} from "./shared/tarefa.service";
import { ListarTarefasComponent } from './listar-tarefas/listar-tarefas.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ListarTarefasComponent
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
