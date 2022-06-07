import { LiveAnnouncer } from '@angular/cdk/a11y';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SectorEconomicoVO } from '@intercam/model';
import { TranslocoModule } from "@ngneat/transloco";
import { AlertasService } from 'libs/shred-components/src/lib/alertas/alertas.service';
import { SectorEconomicoService } from '../../services/sector-economico.services';


@Component({
    selector: 'sector-economico',
    templateUrl: './sector-economico.component.html',
})


export class SectorEconomicoComponent {
    displayedColumns: string[] = ['clave', 'observaciones', 'cnbv', 'banxico'];
    dataSource: SectorEconomicoVO[] = [new SectorEconomicoVO()]
    paginatorDataSource: MatTableDataSource<SectorEconomicoVO> = new MatTableDataSource<SectorEconomicoVO>(this.dataSource);


    MODO_CONSULTA: Number = 1;
    MODO_ALTA: Number = 2;
    MODO_EDITAR = 3;
    MODO_ELIMINAR: Number = 4;
    MODO_FORMULARIO: Number = this.MODO_CONSULTA;

    sectorEconomico: SectorEconomicoVO = new SectorEconomicoVO();

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;



    constructor(private _sectorEconomicoService: SectorEconomicoService, private alertasService: AlertasService) {
        this.findSectorEconomicoVO();
    }

    getRecord(row) {
        if (this.MODO_FORMULARIO != this.MODO_EDITAR && this.MODO_FORMULARIO != this.MODO_ALTA) {
            this.sectorEconomico = row;
        }
    }

    modoConsultaClick() {
        this.MODO_FORMULARIO = this.MODO_CONSULTA;
        this.sectorEconomico = new SectorEconomicoVO();
    }
    modoAltaClick() {
        this.MODO_FORMULARIO = this.MODO_ALTA;
        this.sectorEconomico = new SectorEconomicoVO();
    }

    modoGuardarClick() {
        if (this.MODO_FORMULARIO == this.MODO_ALTA) {
            if(this.sectorEconomico!=null) this.sectorEconomico.secBanxico = null;
            this._sectorEconomicoService.createItemSectorEconomicoVO(this.sectorEconomico).subscribe(then => {
                this.alertasService.mostrarMensaje("Se creo Sector exitosamente", 'info', "Operacion realizada con exito");
                this.findSectorEconomicoVO();
                this.MODO_FORMULARIO = this.MODO_CONSULTA;
                this.sectorEconomico = new SectorEconomicoVO();
            });
        }

        else{
            this._sectorEconomicoService.updateItemSectorEconomicoVO(this.sectorEconomico).subscribe(then => {
                this.alertasService.mostrarMensaje("Se Actualizo exitosamente", 'info', "Operacion realizada con exito");
                this.findSectorEconomicoVO();
                this.MODO_FORMULARIO = this.MODO_CONSULTA;
                this.sectorEconomico = new SectorEconomicoVO();
            });
        }
    }

    modoEliminarClick() {
        this._sectorEconomicoService.deleteItemSectorEconomicoVO(this.sectorEconomico).subscribe(then => {
            this.findSectorEconomicoVO();
            this.alertasService.mostrarMensaje("El Sector se elimino exitosamente", 'info', "Operacion realizada con exito");
            this.MODO_FORMULARIO = this.MODO_CONSULTA;
            this.sectorEconomico = new SectorEconomicoVO();
        });
    }

    modoDeshacerClick() {
        this.MODO_FORMULARIO = this.MODO_CONSULTA;
        this.sectorEconomico = new SectorEconomicoVO();
    }

    findSectorEconomicoVO() {
        this._sectorEconomicoService.findSectorEconomicoVO().subscribe(
            then => {
                this.dataSource = then;
                this.paginatorDataSource = new MatTableDataSource<SectorEconomicoVO>(this.dataSource);
                this.paginatorDataSource.paginator = this.paginator;
                this.paginatorDataSource.sort = this.sort;
            },
            error => console.error(error)
        );
    }







}

