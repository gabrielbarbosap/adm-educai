import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDisciplinaComponent } from './listagem-disciplina.component';

describe('ListagemDisciplinaComponent', () => {
  let component: ListagemDisciplinaComponent;
  let fixture: ComponentFixture<ListagemDisciplinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemDisciplinaComponent]
    });
    fixture = TestBed.createComponent(ListagemDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
