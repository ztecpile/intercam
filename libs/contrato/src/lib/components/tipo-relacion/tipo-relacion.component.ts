import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TipoRelVO } from '@intercam/model';
import { AlertasService } from 'libs/shred-components/src/lib/alertas/alertas.service';
import { AcctionButtonsComponent } from 'libs/shred-components/src/lib/form/acction-buttons/acction-buttons.component';
import { TipoRelacionService } from '../../services/tipo-relacion.service';



@Component({
    selector: 'tipo-relacion.component',
    templateUrl: './tipo-relacion.component.html',
})


export class TiposRelacionComponent implements AfterViewInit {

    displayedColumns: string[] = ['Observaciones', 'Tipo'];

    dataSource: TipoRelVO[] = [];
    paginatorDataSource: MatTableDataSource<TipoRelVO> = new MatTableDataSource<TipoRelVO>(this.dataSource);

    tipoRelVO: TipoRelVO = new TipoRelVO;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatTable) matTable: MatTable<TipoRelVO>;

    @ViewChild(AcctionButtonsComponent) acctionButtonsComponent: AcctionButtonsComponent;

    formGrupo: FormGroup = this.formBuilder.group({
        tipo_valor: ['', Validators.required],
        obserbaciones: ['', Validators.required],


    });
    submitted: Boolean = false;

    setReadyOnly: boolean = true;
    constructor(private _tipoRelacionService: TipoRelacionService, private alertasService: AlertasService, private formBuilder: FormBuilder) { }



    ngAfterViewInit(): void {
        this.paginator._intl.itemsPerPageLabel = "Registros por página:";
    }

    findTipoRelVO() {
        this._tipoRelacionService.findTipoRelVO().subscribe(then => {
            this.dataSource = then;
            this.paginatorDataSource = new MatTableDataSource<TipoRelVO>(this.dataSource);
            this.paginatorDataSource.paginator = this.paginator;
            this.setReadyOnly = false;


        });
    }

    hasChenges() {

        this.acctionButtonsComponent.hasChenges();
    }

    getRecord(row) {
        if (this.acctionButtonsComponent.isModoConsulta()) {
            this.tipoRelVO = row;
            this.acctionButtonsComponent.setFilaSelecionada(row);
        }
    }


    onModoConsultaClick() {
        //  alert("Click evento");
        this.findTipoRelVO();
        this.tipoRelVO = new TipoRelVO();
    }

    onModoAltaClick() {
        this.acctionButtonsComponent.validarBtnReset=true;
        this.tipoRelVO = new TipoRelVO();
        this.setReadyOnly = false;
    }

    onModoEliminarClick() {
        this._tipoRelacionService.deleteTipoRelVO(this.tipoRelVO).subscribe(then => {
            this.alertasService.mostrarMensaje("Se elimino exitosamente", 'info', "Operacion realizada con exito");
            this.findTipoRelVO();
        });
        this.tipoRelVO = new TipoRelVO();
    }

    onModoGuardarClick() {
        this.submitted = true;
        if (this.formGrupo.valid) {
            this._tipoRelacionService.createTipoRelVO(this.tipoRelVO).subscribe(then => {
                this.alertasService.mostrarMensaje("Se Creo exitosamente", 'info', "Operacion realizada con exito");
                this.findTipoRelVO();
            });
            this.submitted = false;
        }

    }
    onModoDeshacerClick() {
        this.setReadyOnly=true;
        this.tipoRelVO = new TipoRelVO();
    }

    onModoActualizarClick() {
        this.submitted = true;
        if (this.formGrupo.valid) {
            this._tipoRelacionService.updateTipoRelVO(this.tipoRelVO).subscribe(then => {
                this.alertasService.mostrarMensaje("Se actualizo exitosamente", 'info', "Operacion realizada con exito");
                this.findTipoRelVO();
            });
            this.tipoRelVO = new TipoRelVO();
            this.submitted = false;
        }
    }


}