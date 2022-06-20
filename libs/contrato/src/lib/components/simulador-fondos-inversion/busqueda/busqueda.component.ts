import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SimuladorFondosInversionService } from '../../../services/simulador-fondos-inversion.services';



@Component({
    selector: 'busqueda-component',
    templateUrl: './busqueda.component.html',
    styles: ['.mat-radio-button ~ .mat-radio-button {margin-left: 16px;}']
})



export class BusquedaComponent {


    displayedColumns: string[] = ['fondo', 'plazo', 'ano', 'mes', 'semana', 'mes2', 'ano2'];
    displayedColumns2: string[] = ["fondo2", 'tipo', "porciento"];
    deudaDataSource: MatTableDataSource<Object>;
    coberturaDataSource: MatTableDataSource<Object>;
    variableDataSource: MatTableDataSource<Object>;
    fondoDataSource: Object[] = [];// MatTableDataSource<Object>=new MatTableDataSource([]) ;
    monto: string = "$1000.00";
    tipo_persona: number = 5;
    periodo: number = 1;
    selectedRow: Object;
    fondoSelectedRow: Object;
    total: number = 0;
    VALIDAR_TOTAL: boolean = true;

    @Output() onCalcularClickEvent = new EventEmitter();


    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private _simuladorFondosInversionService: SimuladorFondosInversionService, private currencyPipe: CurrencyPipe) { }

    findFondosPrecio() {
        this._simuladorFondosInversionService.findFondosPrecioVO(this.monto, this.tipo_persona, this.periodo).subscribe(then => {

            this.deudaDataSource = new MatTableDataSource(then.filter(item => item["tipoFondoId"] == 5));
            this.deudaDataSource.paginator = this.paginator;

            this.coberturaDataSource=new MatTableDataSource(then.filter(item => item["tipoFondoId"] == 15));
            this.coberturaDataSource.paginator=this.paginator;

            this.variableDataSource=new MatTableDataSource(then.filter(item => item["tipoFondoId"] == 10));
            this.variableDataSource.paginator=this.paginator;
        });
    }

    transformAmount(element) {
        this.monto = this.currencyPipe.transform(this.monto, '$');
        element.target.value = this.monto;
    }

    getRecord(row) {
        this.selectedRow = { ...row };
        this.fondoSelectedRow = null;
    }

    pasarAFondo() {
        this.fondoDataSource = [...this.fondoDataSource, this.selectedRow]//new MatTableDataSource([this.fondoDataSource.data,this.selectedRow]);
        this.selectedRow = null;
    }

    removerDeFondo() {
        this.fondoDataSource = this.fondoDataSource.filter(item => item["emisionId"] != this.fondoSelectedRow["emisionId"]);
        this.fondoSelectedRow = null;
        this.hasChenges();
    }

    hasChenges() {
        this.total = 0;
        this.fondoDataSource.map(item => {
            if (item.hasOwnProperty("value"))
                this.total += Number(item["value"]);
        });
    }

    mostrarSimulador() {
       
        if (this.total == 100) {
            this.onCalcularClickEvent.emit({data:this.fondoDataSource,periodo:this.periodo,importe:this.monto});
        }
        else {
            this.VALIDAR_TOTAL = false;
        }
    }



}