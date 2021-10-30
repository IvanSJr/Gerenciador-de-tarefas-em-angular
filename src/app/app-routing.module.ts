import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TarefasRouting} from "./tarefas/tarefas-routing.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: 'tarefas/listar-tarefas',
    pathMatch: 'full'
  },
  ...TarefasRouting
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
