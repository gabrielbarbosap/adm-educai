import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  //pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [
    'Humanas',
    'Exatas',
    'Linguística e Artes',
    'Outros',
  ];
  public pieChartDatasets = [
    {
      data: [50, 60, 30, 43],
      backgroundColor: [
        'rgb(251 176 59)',
        'rgb(29 82 129)',
        'rgb(247 147 30)',
        'rgb(147 213 246)',
      ],
      borderColor: [
        'rgb(251 176 59)',
        'rgb(29 82 129)',
        'rgb(247 147 30)',
        'rgb(147 213 246)',
      ],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  //line
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Redação Ouro',
      'Redator Prata',
      'Leitor ávido',
      'Poliglota',
      'Inovador',
    ],
    datasets: [
      {
        data: [30, 44, 54, 60, 61],
        label: 'Desafios',
        fill: true,
        tension: 0.1,
        pointBackgroundColor: 'rgb(29 82 129)',
        borderColor: 'rgb(251 176 59)',
        backgroundColor: 'rgb(251 176 59)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public lineChartLegend = true;

  //radar
  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [
    'Português',
    'Matematica',
    'História',
    'Física',
    'Artes',
    'Física',
    'Química',
    'Português',
    'Matematica',
    'História',
    'Física',
    'Artes',
    'Física',
    'Química',
  ];

  public radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [
    {
      data: [30, 48, 55, 96, 34, 56, 80, 43, 70, 54, 30, 75, 27, 40],
      label: 'Todas',
      tension: 0.1,
      pointBackgroundColor: 'rgb(29 82 129)',
      borderColor: 'rgb(251 176 59)',
      backgroundColor: 'rgb(251 176 59)',
    },
  ];

  //bar
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Português', 'Matematica', 'História', 'Física', 'Artes'],
    datasets: [
      {
        data: [65, 59, 50, 49, 35],
        label: 'Top 5',
        borderColor: 'rgb(29 82 129)',
        backgroundColor: 'rgb(251 176 59)',
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };
  constructor() {}

  ngOnInit(): void {
    // Aqui você pode capturar os dados da API e atualizar `barChartData` dinamicamente.
  }
}
