import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDesafiosComponent } from './listagem-desafios.component';

describe('ListagemDesafiosComponent', () => {
  let component: ListagemDesafiosComponent;
  let fixture: ComponentFixture<ListagemDesafiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemDesafiosComponent]
    });
    fixture = TestBed.createComponent(ListagemDesafiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
