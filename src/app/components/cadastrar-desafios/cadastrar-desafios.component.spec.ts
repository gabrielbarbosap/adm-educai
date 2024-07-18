import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDesafiosComponent } from './cadastrar-desafios.component';

describe('CadastrarDesafiosComponent', () => {
  let component: CadastrarDesafiosComponent;
  let fixture: ComponentFixture<CadastrarDesafiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarDesafiosComponent]
    });
    fixture = TestBed.createComponent(CadastrarDesafiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
