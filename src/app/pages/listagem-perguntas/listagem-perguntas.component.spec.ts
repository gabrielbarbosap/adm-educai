import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPerguntasComponent } from './listagem-perguntas.component';

describe('ListagemPerguntasComponent', () => {
  let component: ListagemPerguntasComponent;
  let fixture: ComponentFixture<ListagemPerguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemPerguntasComponent]
    });
    fixture = TestBed.createComponent(ListagemPerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
