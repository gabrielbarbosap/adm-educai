import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDicasComponent } from './cadastro-dicas.component';

describe('CadastroDicasComponent', () => {
  let component: CadastroDicasComponent;
  let fixture: ComponentFixture<CadastroDicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroDicasComponent]
    });
    fixture = TestBed.createComponent(CadastroDicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
