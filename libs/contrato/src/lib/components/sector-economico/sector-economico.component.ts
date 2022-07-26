import { LiveAnnouncer } from '@angular/cdk/a11y';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SectorEconomicoVO } from '@intercam/model';
import { TranslocoModule } from "@ngneat/transloco";
import { AlertasService } from 'libs/shred-components/src/lib/alertas/alertas.service';
import { AcctionButtonsComponent } from 'libs/shred-components/src/lib/form/acction-buttons/acction-buttons.component';
import { SectorEconomicoService } from '../../services/sector-economico.services';


@Component({
    selector: 'sector-economico',
    templateUrl: './sector-economico.component.html',
})


export class SectorEconomicoComponent implements AfterViewInit {


    submitted: Boolean = false;
    displayedColumns: string[] = ['clave', 'observaciones', 'cnbv', 'banxico'];
    dataSource: SectorEconomicoVO[] = [new SectorEconomicoVO()];
    paginatorDataSource: MatTableDataSource<SectorEconomicoVO> = new MatTableDataSource<SectorEconomicoVO>(this.dataSource);

    sectorEconomico: SectorEconomicoVO = new SectorEconomicoVO();
    selectedRow: SectorEconomicoVO = new SectorEconomicoVO();

    deshabilitarInputs: boolean = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(AcctionButtonsComponent) _acctionButtonsComponent: AcctionButtonsComponent;



    formGrupo: FormGroup = this.formBuilder.group({
        clave: ['', Validators.required],
        obserbaciones: ['', Validators.required],
        clave_cnbv: ['', Validators.required],
        clave_banxico: ['']

    });

    formatoDeInput(e) {
        let reg = /[a-z]/g;
        console.log(e.target.value.replace(reg, ""));
        e.target.value = e.target.value.replace(reg, "");
    }

    constructor(private _sectorEconomicoService: SectorEconomicoService, private alertasService: AlertasService, private formBuilder: FormBuilder) { }
    ngAfterViewInit(): void {
        this.paginator._intl.itemsPerPageLabel = "Registros por página:";
    }

    hasChenges() {
        if (this.sectorEconomico.secId || this.sectorEconomico.secDescripcion || this.sectorEconomico.secCnbv || this.sectorEconomico.secBanxico != null) {
            //             
            this._acctionButtonsComponent.hasChenges();
        }
    }

    getRecord(row) {
        this.deshabilitarInputs = true;
        if (this._acctionButtonsComponent.isModoConsulta()) {
            this.selectedRow = row;
            this.sectorEconomico = { ...row };
            this._acctionButtonsComponent.setFilaSelecionada(row);
        }


    }
    modoConsultaClick() {
        this.sectorEconomico = new SectorEconomicoVO();
        this.findSectorEconomicoVO();
    }
    modoAltaClick() {
        this.sectorEconomico = new SectorEconomicoVO();
        this.deshabilitarInputs = true;
    }

    modoGuardarClick() {
        this.submitted = true;
        if (this.formGrupo.valid) {
            if (this.sectorEconomico != null) this.sectorEconomico.secBanxico = null;
            this._sectorEconomicoService.createItemSectorEconomicoVO(this.sectorEconomico).subscribe(then => {
                this.alertasService.mostrarMensaje("Se creo Sector exitosamente", 'info', "Operacion realizada con exito");
                this.findSectorEconomicoVO();
                this.sectorEconomico = new SectorEconomicoVO();
                this.submitted = false;
            });
        }

    }
    modoActulaizar() {
        this.submitted = true;
        if (this.formGrupo.valid) {
            this._sectorEconomicoService.updateItemSectorEconomicoVO(this.sectorEconomico).subscribe(then => {
                this.alertasService.mostrarMensaje("Se Actualizo exitosamente", 'info', "Operacion realizada con exito");
                this.findSectorEconomicoVO();
                console.log(this.sectorEconomico);
                this.sectorEconomico = new SectorEconomicoVO();
                this.submitted = false;
            });
        }
    }

    modoEliminarClick() {
        this._sectorEconomicoService.deleteItemSectorEconomicoVO(this.sectorEconomico).subscribe(then => {
            this.findSectorEconomicoVO();
            this.alertasService.mostrarMensaje("El Sector se elimino exitosamente", 'info', "Operacion realizada con exito");
            this.sectorEconomico = new SectorEconomicoVO();
        });
        this.sectorEconomico = new SectorEconomicoVO();
    }

    modoDeshacerClick() {
        this.sectorEconomico = new SectorEconomicoVO();
        this.selectedRow = new SectorEconomicoVO();
        this.submitted = false;
        this.deshabilitarInputs = false;
    }

    findSectorEconomicoVO() {
        this._sectorEconomicoService.findSectorEconomicoVO().subscribe(
            then => {
                this.dataSource = then;
                this.paginatorDataSource = new MatTableDataSource<SectorEconomicoVO>(this.dataSource);
                this.paginatorDataSource.paginator = this.paginator;
                this.paginatorDataSource.sort = this.sort;
                this.deshabilitarInputs = true;
            },
            error => console.error(error)
        );
    }







}

