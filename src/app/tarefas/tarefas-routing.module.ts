import {Routes} from "@angular/router";
import {ListarTarefasComponent} from "./listar-tarefas/listar-tarefas.component";

export const TarefasRouting: Routes = [
  {
    path: "tarefas",
    redirectTo: "tarefas/listar-tarefas"
  },
  {
    path: "tarefas/listar-tarefas",
    component: ListarTarefasComponent
  }
]
