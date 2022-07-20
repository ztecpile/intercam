import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DivisasVO, PreciosGposeccVO } from '@intercam/model';
import { GrupoVO } from 'libs/model/src/lib/com/intercam/seguridad/vo/GrupoVO';
import { filter } from 'rxjs/operators';
import { ReutersAdministracionPerfilesService } from '../../services/reuters-administracion-perfiles.service';


@Component({
    selector: 'reuters-administracion-perfiles.component',
    templateUrl: './reuters-administracion-perfiles.component.html',
    styles: ['.mat-radio-button ~ .mat-radio-button {margin-left: 16px;}']
})

export class ReutersAdministracionPerfilesComponent implements OnInit {
    displayedColumns: string[] = ['divisa', 'activar', 'solo_lectura'];
    displayedColumns2: string[] = ["seccion", 'permitir'];
    grupoVO: GrupoVO[];
    divisasCount:number=0;
    seccionesCount:number=0;
    grupoSelecionado: Number = -1;
    divisasDataSource: DivisasVO[];
    dataSource: MatTableDataSource<DivisasVO>;
    preciosGposeccVO: PreciosGposeccVO;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    sectionDataSource: Object[] = [
        { label: "Administracion", value: 1, selected: false },
        { label: "Monitoreo", value: 2, selected: false },
        { label: "Relacionadas", value: 3, selected: false },
        { label: "Metales", value: 4, selected: false }
    ]

    constructor(private _reutersAdministracionPerfilesService: ReutersAdministracionPerfilesService) {
        this.findGpoAdmonPrecios();
        this.findDivisas();

    }
    ngOnInit(): void {

    }

    findGpoAdmonPrecios() {
        this._reutersAdministracionPerfilesService.findGpoAdmonPrecios().subscribe(then => {
            this.grupoVO = then;
        });
    }

    findDivisas() {
        this._reutersAdministracionPerfilesService.findDivisas().subscribe(then => {
            this.divisasDataSource = then.map(item => {
                item["selecionado"] = false;
                return item
            });
            this.dataSource = new MatTableDataSource(this.divisasDataSource);
            this.getPerfilesByGpo();
            this.getSeccionesByGpo();
            this.dataSource.paginator = this.paginator;
        });
    }

    getSeccionesByGpo() {
        this.seccionesCount=0;
        this.sectionDataSource.map(item => { item["selected"] = null });
        this._reutersAdministracionPerfilesService.getSeccionesByGpo(this.grupoSelecionado).subscribe(then => {

            then.map(item => {
                this.sectionDataSource.map(secction => {
                    if (secction["value"] == item.seccion){
                        secction["selected"] = true;
                        this.seccionesCount++;
                    } 

                });
            });

        });
    }

    getPerfilesByGpo() {
        this.divisasCount=0;
        this.divisasDataSource.map(item => { item["selecionado"] = null; item.soloLectura = null; });
        this._reutersAdministracionPerfilesService.getPerfilesByGpo(this.grupoSelecionado).subscribe(then => {
            this.divisasDataSource.map(item => {


                then.map(perfil => {
                    if (perfil.divId == item.divId) {
                        item["selecionado"] = true;
                        this.divisasCount++;
                        if(perfil.soloLectura==="S") item.soloLectura="S";
                    };

                });


                return item;
            });

        });
    }

    salvarPerfil() {
        let lstPreciosGpoDivVO = this.divisasDataSource.filter(item => item["selecionado"] == true);
        let lstPreciosGposeccVO = this.sectionDataSource.filter(item => item["selected"] == true);


        let obj = {

            "lstPreciosGpoDivVO": lstPreciosGpoDivVO.map(item => {
                let preciosGpoDivVO = {
                    soloLectura: item.soloLectura == null ? "N" : "S",
                    divId: item.divId,
                    gpuClave: this.grupoSelecionado
                };

                return preciosGpoDivVO;
            }),

            "lstPreciosGposeccVO": lstPreciosGposeccVO.map(item => {
                let preciosGposeccVO = {
                    seccion: item["value"],
                    gpuClave: this.grupoSelecionado

                };
                return preciosGposeccVO
            })
        };
        this._reutersAdministracionPerfilesService.savePerfil(obj).subscribe();
    }
    cambioDeGrupo() {
        this.getPerfilesByGpo();
        this.getSeccionesByGpo();
    }

    chackChange()
    {
        this.divisasCount = this.divisasDataSource.filter(item => item["selecionado"] == true).length;
        this.seccionesCount = this.sectionDataSource.filter(item => item["selected"] == true).length;
    }

    


}

