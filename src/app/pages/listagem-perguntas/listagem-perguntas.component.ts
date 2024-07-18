import { Component } from '@angular/core';
import { MockDataService } from '../../mock-data.service';

@Component({
  selector: 'app-listagem-perguntas',
  templateUrl: './listagem-perguntas.component.html',
  styleUrls: ['./listagem-perguntas.component.scss'],
})
export class ListagemPerguntasComponent {
  questions: { nome: string, pergunta: string, disciplina: string }[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.mockDataService.getMockQuestions().subscribe(data => {
      this.questions = data;
    });
  }
}