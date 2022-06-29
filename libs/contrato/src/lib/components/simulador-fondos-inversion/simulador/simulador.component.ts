import { Component, Input, ViewChild } from "@angular/core";
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { SimuladorFondosInversionService } from "../../../services/simulador-fondos-inversion.services";

@Component({
    selector: 'simulador-component',
    templateUrl: './simulador.component.html',
    styles: ['.mat-radio-button ~ .mat-radio-button {margin-left: 16px;}']
})



export class SimuladorComponent {

    displayedColumns2: string[] = ["fondo2", 'tipo', "porciento"];
    @Input() fondoDataSource: Object[];
    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
    @ViewChild(BaseChartDirective) lineChart: BaseChartDirective | undefined;

    saldoInicial: string = "$0";
    saldoFinal: string = "$0";
    plusMinAcu: string = "$0";
    tasaAcom: string = "$0";
    plusMinMen: string = "$0";
    rendiAnual: string = "$0";
    fechasSimuladas: string = "";
    constructor(private _simuladorFondosInversionService: SimuladorFondosInversionService) { }

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

    onCalcularClick(labels: string[], data: number[],params:Object) {

        const options2 = { style: 'currency', currency: 'USD' };
        const numberFormat = new Intl.NumberFormat('en-US', options2);

        var option = {
            style: 'percent',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
         };
         var formatter = new Intl.NumberFormat("en-US",option);

        this.pieChartData.labels = labels;
        this.pieChartData.datasets[0].data = data;
        this._simuladorFondosInversionService.findFondosRendimientos(params).subscribe(then => {
            this.lineChartData.labels = (then.map(item => { return item["precioFondoFechaStr"] }));
            this.lineChartData.datasets[0].data = (then.map(item => { return item["tasaRendimiento"] }));
            this.lineChart.update();
            console.log(this.chart.data);
            this.saldoInicial=(then[0]["tasaRendimiento"]);
            this.saldoFinal =numberFormat.format(then[then.length - 1]["tasaRendimiento"]);
            this.plusMinAcu=numberFormat.format(Number(then[then.length - 1]["tasaRendimiento"])-Number(then[0]["tasaRendimiento"]));
            this.tasaAcom=(((then[then.length - 1]["tasaRendimiento"]-Number( then[0]["tasaRendimiento"]))/ then[0]["tasaRendimiento"]) *100).toFixed(2)+"%";
            
            this.fechasSimuladas=then[0]["precioFondoFechaStr"]+" - "+then[then.length-1]["precioFondoFechaStr"];
        });
        this.chart?.update();
    }

    public lineChartData: ChartConfiguration['data'] = {
        datasets: [
            {
                data: [],
                label: 'Comportamiento Portafolio',
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                fill: 'origin',
            },

        ],
        labels: []
    };


    public lineChartOptions: ChartConfiguration['options'] = {
        elements: {
            line: {
                tension: 0.5
            }
        },


        plugins: {
            legend: { display: true },

        }
    };

    public lineChartType: ChartType = 'line';





}