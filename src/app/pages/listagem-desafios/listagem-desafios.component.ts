import { Component } from '@angular/core';
import {
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder,
} from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  titulo: string;
  descricao: string;
  ativo: boolean;
}

@Component({
  selector: 'app-listagem-desafios',
  templateUrl: './listagem-desafios.component.html',
  styleUrls: ['./listagem-desafios.component.scss'],
})
export class ListagemDesafiosComponent {
  allColumns = ['titulo', 'descricao', 'ativoColumn']; // Adicione a coluna 'ativoColumn' aqui
  defaultColumns = ['descricao'];
  customColumn = 'titulo';

  data: TreeNode<FSEntry>[] = [
    {
      data: { titulo: 'Poliglota', descricao: 'Facilidade com idiomas', ativo: true },
      children: [
        {
          data: {
            titulo: 'Título 1.1',
            descricao: 'Descrição 1.1',
            ativo: false,
          },
        },
        {
          data: {
            titulo: 'Título 1.2',
            descricao: 'Descrição 1.2',
            ativo: true,
          },
        },
      ],
    },
    {
      data: { titulo: 'Redator Ouro', descricao: 'Muitas redações acima da média', ativo: false },
      children: [
        {
          data: {
            titulo: 'Título 2.1',
            descricao: 'Descrição 2.1',
            ativo: true,
          },
        },
      ],
    },
  ];
}
