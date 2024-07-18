import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAlertasComponent } from './cadastrar-alertas.component';

describe('CadastrarAlertasComponent', () => {
  let component: CadastrarAlertasComponent;
  let fixture: ComponentFixture<CadastrarAlertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarAlertasComponent]
    });
    fixture = TestBed.createComponent(CadastrarAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
