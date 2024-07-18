import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'front-educai-adm';
  menuItems = [
    { title: 'Painel', link: '/dashboard', icon: 'bar-chart-outline' },
    { title: 'Cadastros', link: '/cadastros', icon: 'folder-add-outline' },
    {
      title: 'Disciplinas',
      link: '/listagem-disciplina',
      icon: 'list-outline',
    },
    {
      title: 'Desafios',
      link: '/listagem-desafios',
      icon: 'award-outline',
    },
    {
      title: 'Perguntas',
      link: '/listagem-perguntas',
      icon: 'question-mark-outline',
    },
    {
      title: 'Usuários',
      link: '/listagem-usuarios',
      icon: 'people-outline',
    },
  ];

  constructor(private sidebarService: NbSidebarService) {}
  toggleSidebar() {
    this.sidebarService.toggle(true, 'menu-sidebar');
  }
}
