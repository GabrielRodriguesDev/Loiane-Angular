import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/cursos/curso.service';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.scss']
})
export class ReceberCursoCriadoComponent implements OnInit {

    curso = ''

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.emitirCursoCriado.subscribe(
     cursoCriado => this.curso = cursoCriado //Fazendo a instancia e recebendo a notificação quando for alterado e setando na variavel. (utilizando a instacia do componente pai (CriarCuso))
    )
  }

}
