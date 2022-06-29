
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SimuladorFondosInversionService } from '../../services/simulador-fondos-inversion.services';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { SimuladorComponent } from './simulador/simulador.component';

@Component({
    selector: 'simulador-fondos-inversion',
    templateUrl: './simulador-fondos-inversion.component.html',
    styles: ['.mat-radio-button ~ .mat-radio-button {margin-left: 16px;}']
})


export class SimuladorFondosInversionComponent {

    ABRIR_SIMULADOR = false;
    dataSource: MatTableDataSource<Object>;
    displayedColumns: string[] = ['fondo', 'plazo', 'ano', 'mes', 'semana', 'mes2', 'ano2'];
    displayedColumns2: string[] = ["fondo2", 'tipo', "porciento"];
    fondoDataSource: Object[];

    @Output() onCalcularClickEvent = new EventEmitter();
    @ViewChild(SimuladorComponent) simulador: SimuladorComponent;

    onCalcularClick(e) {
        this.ABRIR_SIMULADOR = true;
        this.fondoDataSource = e.data;
        let labels: string[] = [];
        let data: number[] = [];
        e.data.map(item => {
            labels.push(item.emisionId);
            data.push(item.porcentaje);
        });
        this.simulador.onCalcularClick(labels, data,{"periodo":e.periodo ,"monto":e.importe.replace("$","") ,"porcentaje":this.fondoDataSource});

    }

}