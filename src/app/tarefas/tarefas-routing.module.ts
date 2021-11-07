import {Routes} from "@angular/router";
import {ListarTarefasComponent} from "./listar-tarefas/listar-tarefas.component";
import {CadastrarTarefasComponent} from "./cadastrar-tarefas/cadastrar-tarefas.component";

export const TarefasRouting: Routes = [
  {
    path: "tarefas",
    redirectTo: "tarefas/listar-tarefas"
  },
  {
    path: "tarefas/listar-tarefas",
    component: ListarTarefasComponent
  },
  {
    path: "tarefas/cadastrar-tarefas",
    component: CadastrarTarefasComponent
  }
]
