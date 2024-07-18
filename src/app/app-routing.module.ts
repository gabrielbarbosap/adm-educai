import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemUsuariosComponent } from './pages/listagem-usuarios/listagem-usuarios.component';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { ListagemPerguntasComponent } from './pages/listagem-perguntas/listagem-perguntas.component';
import { ListagemDisciplinaComponent } from './pages/listagem-disciplina/listagem-disciplina.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListagemDesafiosComponent } from './pages/listagem-desafios/listagem-desafios.component';

const routes: Routes = [
  { path: 'listagem-usuarios', component: ListagemUsuariosComponent },
  { path: 'cadastros', component: CadastrosComponent },
  { path: 'listagem-perguntas', component: ListagemPerguntasComponent },
  { path: 'listagem-disciplina', component: ListagemDisciplinaComponent },
  { path: 'listagem-desafios', component: ListagemDesafiosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redireciona para o dashboard por padrão
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }, // Redireciona qualquer rota inválida para o dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
