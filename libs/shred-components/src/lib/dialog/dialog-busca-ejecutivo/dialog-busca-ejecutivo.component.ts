import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EjecutivoSucursalVO } from '@intercam/model';
import { CentroCostrosService } from 'libs/contrato/src/lib/services/centro-costos.service';

@Component({
  selector: 'intercam-dialog-busca-ejecutivo',
  templateUrl: './dialog-busca-ejecutivo.component.html',
  styleUrls: ['./dialog-busca-ejecutivo.component.scss']
})
export class DialogBuscaEjecutivoComponent implements OnInit {

  displayedColumnsPer: string[] = [
    'perIdEjecutivo',
    'nomEjecutivo',
    'ccoClave',
    'regDescripcion',
    'sucDescripcion',
    'sarDescripcion'
  ];

  funcForm: FormGroup;

  arrEjeSucVO: EjecutivoSucursalVO[];

  dataSourceConcidencia: MatTableDataSource<EjecutivoSucursalVO> = new MatTableDataSource();
  
  selectItem: EjecutivoSucursalVO;

  constructor(public dialogRef: MatDialogRef<DialogBuscaEjecutivoComponent>,
    private _centroCostosService: CentroCostrosService) {
    
  }

  ngOnInit(): void {
    this.createFunForm();
  }

  createFunForm(){
    this.funcForm = new FormGroup({
      buscaEje: new FormControl('', this.validatorLogInputText())
    });
  }

  validatorLogInputText():ValidatorFn{
    return(control: AbstractControl): { [key:string]: boolean} | null => {
      let value = control.value;
      if(value != undefined && value.length < 3){
        return {'requiereMinimoTresLetras' : true};
      }
      return null 
    };
  }

  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
  }

  onSubmit(){
    if (this.funcForm.invalid) {
      return;
    }

    this._centroCostosService.findCcoByNombreEjecutivo(this.funcForm.get('buscaEje').value.toUpperCase()).subscribe(
      then =>{
        this.arrEjeSucVO = then;
        this.dataSourceConcidencia = new MatTableDataSource(this.arrEjeSucVO);
      },
      error => console.error(error)
    );
  }

  enviarEjecutivo(item:EjecutivoSucursalVO){
    this.selectItem = item;
    this.recuperarEjecutivo();
  }

  recuperarEjecutivo(){
    if(this.selectItem != undefined || this.selectItem != null){
      this.dialogRef.close({data: this.selectItem});
    }
  }

  close(){
    this.dialogRef.close();
  }
}
