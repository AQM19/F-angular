import { Component, OnInit } from '@angular/core';
import { GraficasServiceService } from '../../services/graficas-service.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit{

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor( private graficasService: GraficasServiceService ) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe( ({labels, values}) => {
      
      labels.forEach(e => {
        this.doughnutChartData.labels?.push(e);
      });

      values.forEach(v => {
        this.doughnutChartData.datasets[0].data.push(v);
      })

    });
  }
}
