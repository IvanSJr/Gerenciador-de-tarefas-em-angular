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
    this.tarefas = [
      new TarefaModel(1, "Estudar Angular Js", false),
    new TarefaModel(2, "Estudar APIS RESTFULL", true),]
  }

  listarTodos(): TarefaModel[] {
    return this.tarefaService.listarTodasAsTarefas();
  }

}
