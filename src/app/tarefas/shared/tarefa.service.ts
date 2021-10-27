import { Injectable } from '@angular/core';
import { TarefaModel } from "./tarefa.model";

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  public listarTodasAsTarefas(): TarefaModel[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  public cadastrarTarefa(tarefa: TarefaModel): void {
    const tarefas = this.listarTodasAsTarefas();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  public buscarTarefaPorId(id: number): TarefaModel | undefined {
    const tarefas: TarefaModel[] = this.listarTodasAsTarefas();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  public atualizarTarefa(tarefa: TarefaModel): void {
    const tarefas: TarefaModel[] = this.listarTodasAsTarefas();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id){
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  public removerTarefa(id: number): void {
    let tarefas: TarefaModel[] = this.listarTodasAsTarefas();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  public alterarStatusDaTarefa(id: number): void {
    const tarefas: TarefaModel[] = this.listarTodasAsTarefas();
    tarefas.forEach((obj, index, objs) => {
      if (obj.id === id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
