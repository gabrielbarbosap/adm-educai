import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListagemUsuariosComponent } from './pages/listagem-usuarios/listagem-usuarios.component';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { ListagemPerguntasComponent } from './pages/listagem-perguntas/listagem-perguntas.component';
import { ListagemDisciplinaComponent } from './pages/listagem-disciplina/listagem-disciplina.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadastroDicasComponent } from './components/cadastro-dicas/cadastro-dicas.component';
import { CadastrarDesafiosComponent } from './components/cadastrar-desafios/cadastrar-desafios.component';
import { CadastrarAlertasComponent } from './components/cadastrar-alertas/cadastrar-alertas.component';
import { ChartComponent } from './components/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbMenuModule,
  NbIconModule,
  NbCardModule,
  NbTabsetModule,
  NbInputModule,
  NbCheckboxModule,
  NbSelectModule,
  NbListModule,
  NbTreeGridCellDefDirective,
  NbTreeGridModule,
  NbTableModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ListagemDesafiosComponent } from './pages/listagem-desafios/listagem-desafios.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemUsuariosComponent,
    CadastrosComponent,
    ListagemPerguntasComponent,
    ListagemDisciplinaComponent,
    DashboardComponent,
    CadastroDicasComponent,
    CadastrarDesafiosComponent,
    CadastrarAlertasComponent,
    ChartComponent,
    ListagemDesafiosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgChartsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbTabsetModule,
    NbInputModule,
    NbCheckboxModule,
    NbSelectModule,
    NbListModule,
    NbTreeGridModule,
    NbTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
