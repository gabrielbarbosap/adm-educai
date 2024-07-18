import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  private mockStudents = Array.from({ length: 100 }, (_, i) => ({
    nome: `Estudante ${i + 1}`,
    turma: `Turma ${(i % 3) + 1}`,
    contato: `contato${i + 1}@email.com`,
    contatoResponsavel: `responsavel${i + 1}@email.com`,
    acessos: Math.floor(Math.random() * 100),
  }));

  private mockSubject = Array.from({ length: 15 }, (_, i) => ({
    nome: `Disciplina ${i + 1}`,
    acessos: Math.floor(Math.random() * 100),
    ativo: true,
  }));

  private mockQuestions = Array.from({ length: 10 }, (_, i) => ({
    nome: `Usuário ${i + 1}`,
    pergunta: `Esta é a pergunta ${i + 1}?`,
    disciplina: `Disciplina ${(i % 3) + 1}`,
  }));

  constructor() {}

  getMockQuestions(): Observable<
    { nome: string; pergunta: string; disciplina: string }[]
  > {
    return of(this.mockQuestions);
  }

  getMockStudents(): Observable<
    {
      nome: string;
      turma: string;
      contato: string;
      contatoResponsavel: string;
      acessos: number;
    }[]
  > {
    return of(this.mockStudents);
  }

  getMockSubjects(): Observable<
    { nome: string; acessos: number; ativo: boolean }[]
  > {
    return of(this.mockSubject);
  }
}
