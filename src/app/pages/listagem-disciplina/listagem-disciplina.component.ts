import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../mock-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listagem-disciplina',
  templateUrl: './listagem-disciplina.component.html',
  styleUrls: ['./listagem-disciplina.component.scss'],
})
export class ListagemDisciplinaComponent {
  students: {
    nome: string;
    ativo: boolean;
    acessos: number;
  }[] = [];
  filteredStudents: {
    nome: string;
    ativo: boolean;
    acessos: number;
  }[] = [];
  searchTerm = new FormControl('');

  constructor(private studentDataService: MockDataService) {}

  ngOnInit(): void {
    this.studentDataService.getMockSubjects().subscribe((data) => {
      this.students = data;
      this.filteredStudents = data;
    });

    this.searchTerm.valueChanges.subscribe((value) => {
      this.filterStudents(value);
    });
  }

  filterStudents(searchTerm: any): void {
    this.filteredStudents = this.students.filter((student) =>
      student.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
