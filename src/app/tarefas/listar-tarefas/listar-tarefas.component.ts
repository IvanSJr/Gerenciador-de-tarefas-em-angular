import { Component, OnInit } from '@angular/core';
import {TarefaModel} from "../shared/tarefa.model";
import {TarefaService} from "../shared/tarefa.service";

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: TarefaModel[] | undefined;

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
    this.tarefas = this.listarTodos();
    this.tarefas = []
  }

  listarTodos(): TarefaModel[] {
    return this.tarefaService.listarTodasAsTarefas();
  }

}
