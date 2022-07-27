import { CurrencyPipe } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SimuladorFondosInversionService } from '../../../services/simulador-fondos-inversion.services';



@Component({
    selector: 'busqueda-component',
    templateUrl: './busqueda.component.html',
    styles: ['.mat-radio-button ~ .mat-radio-button {margin-left: 16px;}']
})



export class BusquedaComponent implements AfterViewInit {


    displayedColumns: string[] = ['fondo', 'plazo', 'ano', 'mes', 'semana', 'mes2', 'ano2'];
    displayedColumns2: string[] = ["fondo2", 'tipo', "porciento"];

    deudaDataSource: MatTableDataSource<Object> = new MatTableDataSource();
    coberturaDataSource: MatTableDataSource<Object> = new MatTableDataSource();
    variableDataSource: MatTableDataSource<Object> = new MatTableDataSource();

    deudaDataSourceBkp: Object[] = [];
    coberturaDataSourceBkp: Object[] = [];
    variableDataSourceBkp: Object[] = [];

    fondoDataSource: Object[] = [];// MatTableDataSource<Object>=new MatTableDataSource([]) ;
    fondoDataSourceBkp: Object[] = [];
    monto: string = "0";
    tipo_persona: number = 5;
    periodo: number = 1;
    selectedRow: Object;
    fondoSelectedRow: Object;
    total: number = 0;
    VALIDAR_TOTAL: boolean = true;

    @Output() onCalcularClickEvent = new EventEmitter();


    @ViewChildren(MatPaginator) paginadores: MatPaginator;

    constructor(private _simuladorFondosInversionService: SimuladorFondosInversionService, private currencyPipe: CurrencyPipe) { }

    ngAfterViewInit(): void {
        //this.deudaPaginator._intl.itemsPerPageLabel = "Registros por página:";
        console.log();
    }

    findFondosPrecio() {
        this._simuladorFondosInversionService.findFondosPrecioVO(this.monto, this.tipo_persona, this.periodo).subscribe(then => {

            this.deudaDataSource = new MatTableDataSource(then.filter(item => item["tipoFondoId"] == 5));
            this.deudaDataSourceBkp = then.filter(item => item["tipoFondoId"] == 5);
            this.deudaDataSource.paginator = this.paginadores["_results"][0];

            this.coberturaDataSource = new MatTableDataSource(then.filter(item => item["tipoFondoId"] == 15));
            this.coberturaDataSourceBkp = then.filter(item => item["tipoFondoId"] == 15);
            this.coberturaDataSource.paginator = this.paginadores["_results"][1];

            this.variableDataSource = new MatTableDataSource(then.filter(item => item["tipoFondoId"] == 10));
            this.variableDataSourceBkp = then.filter(item => item["tipoFondoId"] == 10);
            this.variableDataSource.paginator = this.paginadores["_results"][2];
        });
    }

    transformAmount(element) {
        this.monto = this.currencyPipe.transform(this.monto, '$');
        element.target.value = this.monto;
    }

    getRecord(row) {
        this.selectedRow = row;
        this.fondoSelectedRow = null;
    }

    pasarAFondo() {
        this.fondoDataSource = [...this.fondoDataSource, this.selectedRow]//new MatTableDataSource([this.fondoDataSource.data,this.selectedRow]);
        if (this.selectedRow["tipoFondoId"] == 5) {
            this.deudaDataSource.data = this.deudaDataSource.data.filter(item => item["fondoId"] != this.selectedRow["fondoId"]);
        }
        if (this.selectedRow["tipoFondoId"] == 10) {
            this.variableDataSource.data = this.variableDataSource.data.filter(item => item["fondoId"] != this.selectedRow["fondoId"]);

        }
        if (this.selectedRow["tipoFondoId"] == 15) {
            this.coberturaDataSource.data = this.coberturaDataSource.data.filter(item => item["fondoId"] != this.selectedRow["fondoId"]);
        }
        this.selectedRow = null;
    }

    removerDeFondo() {

        if (this.fondoSelectedRow["tipoFondoId"] == 5) {
            this.deudaDataSource.data = [...this.deudaDataSource.data, this.deudaDataSourceBkp.filter(item => item["fondoId"] == this.fondoSelectedRow["fondoId"])[0]];
        }

        if (this.fondoSelectedRow["tipoFondoId"] == 10) {
            this.variableDataSource.data = [...this.variableDataSource.data, this.variableDataSourceBkp.filter(item => item["fondoId"] == this.fondoSelectedRow["fondoId"])[0]];
        }

        if (this.fondoSelectedRow["tipoFondoId"] == 15) {
            this.coberturaDataSource.data = [...this.coberturaDataSource.data, this.coberturaDataSourceBkp.filter(item => item["fondoId"] == this.fondoSelectedRow["fondoId"])[0]];
        }


        this.fondoDataSource = this.fondoDataSource.filter(item => item["emisionId"] != this.fondoSelectedRow["emisionId"]);
        this.fondoSelectedRow = null;
        this.hasChenges();
    }

    hasChenges() {
        this.total = 0;
        this.fondoDataSource.map(item => {
            if (item.hasOwnProperty("porcentaje"))
                this.total += Number(item["porcentaje"]);
        });
    }

    mostrarSimulador() {

        if (this.total == 100) {
            this.onCalcularClickEvent.emit({ data: this.fondoDataSource, periodo: this.periodo, importe: this.monto });
        }
        else {
            this.VALIDAR_TOTAL = false;
        }
    }

    formatoDeNumero(e) {
        return this.currencyPipe.transform(e, ' ');
    }

    formatoDeInput(e) {
        console.log(e.key);
        let reg = /[^\d]/g;
        let texto = e.key.replace(reg, "");
        if (texto == "" && e.key.length == 1) {
            return false;
        }


        return true;
    }

    deudaSortData(sort: Sort) {
        this.deudaDataSource.data = this.deudaDataSource.data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';

            switch (sort.active) {
                case 'fondo':
                    return compare(a["emisionId"], b["emisionId"], isAsc);
                case 'plazo':
                    return compare(a["fondoPlazo"], b["fondoPlazo"], isAsc);
                case 'ano':
                    return compare(a["plazoTasa"]["anio"], b["plazoTasa"]["anio"], isAsc);
                case 'mes':
                    return compare(a["plazoTasa"]["mes"], b["plazoTasa"]["mes"], isAsc);
                case 'semana':
                    return compare(a["plazoTasa"]["7"], b["plazoTasa"]["7"], isAsc);
                case 'mes2':
                    return compare(a["plazoTasa"]["28"], b["plazoTasa"]["28"], isAsc);
                case 'ano2':
                    return compare(a["plazoTasa"]["361"], b["plazoTasa"]["361"], isAsc);
                default:
                    return 0;
            }
        })
    }

    coberturaSortData(sort: Sort) {
        this.coberturaDataSource.data = this.coberturaDataSource.data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';

            switch (sort.active) {
                case 'fondo':
                    return compare(a["emisionId"], b["emisionId"], isAsc);
                case 'plazo':
                    return compare(a["fondoPlazo"], b["fondoPlazo"], isAsc);
                case 'ano':
                    return compare(a["plazoTasa"]["anio"], b["plazoTasa"]["anio"], isAsc);
                case 'mes':
                    return compare(a["plazoTasa"]["mes"], b["plazoTasa"]["mes"], isAsc);
                case 'semana':
                    return compare(a["plazoTasa"]["7"], b["plazoTasa"]["7"], isAsc);
                case 'mes2':
                    return compare(a["plazoTasa"]["28"], b["plazoTasa"]["28"], isAsc);
                case 'ano2':
                    return compare(a["plazoTasa"]["361"], b["plazoTasa"]["361"], isAsc);
                default:
                    return 0;
            }
        })
    }


    variableSortData(sort: Sort) {
        this.variableDataSource.data = this.variableDataSource.data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';

            switch (sort.active) {
                case 'fondo':
                    return compare(a["emisionId"], b["emisionId"], isAsc);
                case 'plazo':
                    return compare(a["fondoPlazo"], b["fondoPlazo"], isAsc);
                case 'ano':
                    return compare(a["plazoTasa"]["anio"], b["plazoTasa"]["anio"], isAsc);
                case 'mes':
                    return compare(a["plazoTasa"]["mes"], b["plazoTasa"]["mes"], isAsc);
                case 'semana':
                    return compare(a["plazoTasa"]["7"], b["plazoTasa"]["7"], isAsc);
                case 'mes2':
                    return compare(a["plazoTasa"]["28"], b["plazoTasa"]["28"], isAsc);
                case 'ano2':
                    return compare(a["plazoTasa"]["361"], b["plazoTasa"]["361"], isAsc);
                default:
                    return 0;
            }
        })
    }

    sortData(sort: Sort) {
        this.fondoDataSourceBkp = [...this.fondoDataSource];
        this.fondoDataSource = [];
        this.fondoDataSource = this.fondoDataSourceBkp.sort((a, b) => {
            const isAsc = sort.direction === 'asc';

            switch (sort.active) {
                case 'fondo2':
                    return compare(a["emisionId"], b["emisionId"], isAsc);
                case 'tipo':
                    return compare(a["tipoFondoId"], b["tipoFondoId"], isAsc);
                case 'porciento':
                    return compare(a["porcentaje"], b["porcentaje"], isAsc);
                default:
                    return 0;
            }
        });
    }


}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}