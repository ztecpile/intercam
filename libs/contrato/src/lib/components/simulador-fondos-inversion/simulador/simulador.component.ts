import { Component, Input, ViewChild } from "@angular/core";
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'simulador-component',
    templateUrl: './simulador.component.html',
    styles: ['.mat-radio-button ~ .mat-radio-button {margin-left: 16px;}']
})



export class SimuladorComponent {

    displayedColumns2: string[] = ["fondo2", 'tipo', "porciento"];
    @Input() fondoDataSource: Object[];
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    // Pie
    public pieChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
           
        }
    };
    public pieChartData: ChartData<'pie', number[], string | string[]> = {
        labels: [],
        datasets: [{
            data: []
        }]
    };
    public pieChartType: ChartType = 'pie';
    public pieChartPlugins = [DatalabelsPlugin];

    onCalcularClick(labels:string[],data:number[]){
        this.pieChartData.labels = labels;
        this.pieChartData.datasets[0].data = data;
        
    this.chart?.update();
    }

}