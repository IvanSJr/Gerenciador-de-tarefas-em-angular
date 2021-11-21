import {Component, OnInit, ViewChild} from '@angular/core';
import {TarefaModel} from "../shared/tarefa.model";
import {TarefaService} from "../shared/tarefa.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm | undefined;
  tarefa: TarefaModel = new TarefaModel();

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tarefa = new TarefaModel();
  }

  cadastrar(): void {
    if (this.formTarefa != undefined){
      if (this.formTarefa.form.valid) {
        this.tarefaService.cadastrarTarefa(this.tarefa);
        this.router.navigate(['/tarefas'])
      }
    }
  }

}
