import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../mock-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.scss'],
})
export class ListagemUsuariosComponent implements OnInit {
  students: { nome: string, turma: string, contato: string, contatoResponsavel: string, acessos: number }[] = [];
  filteredStudents: { nome: string, turma: string, contato: string, contatoResponsavel: string, acessos: number }[] = [];
  searchTerm = new FormControl('');

  constructor(private studentDataService: MockDataService) {}

  ngOnInit(): void {
    this.studentDataService.getMockStudents().subscribe(data => {
      this.students = data;
      this.filteredStudents = data;
    });

    this.searchTerm.valueChanges.subscribe(value => {
      this.filterStudents(value);
    });
  }

  filterStudents(searchTerm: any): void {
    this.filteredStudents = this.students.filter(student => 
      student.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}