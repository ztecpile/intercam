import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ColoniaVO, Const, EntidadVO, MunicipVO } from '@intercam/model';
import { ColoniasServices } from '../../../services/colonias.services';
import { PersonaService } from '../../../services/persona.service';
import { ProspeccionService } from '../../../services/prospeccion.service';
import { ColoniasComponent } from '../../colonias/colonias.component';

@Component({
  selector: 'intercam-dialog-busqueda-cp',
  templateUrl: './dialog-busqueda-cp.component.html',
  styleUrls: ['./dialog-busqueda-cp.component.scss']
})
export class DialogBusquedaCpComponent implements OnInit {
  dataSourceEntidad: MatTableDataSource<EntidadVO> = new MatTableDataSource();
  @ViewChild(ColoniasComponent) coloniaComponent;
  funcForm: FormGroup;
  /**
   * Variables para la consulta de colonia
   */
    /*
  * Id Broxel
  **/
    colCityCodeBrx: String;
    entIsoCodeBrx: String;
    
  entClave: Number;
  arrayEntidad: EntidadVO[]=[];
  listaEntidadVo : EntidadVO[]=[];
  arrayMunicipios: MunicipVO[]=[];
  listaMunicipios: MunicipVO[]=[];
  arrayColonia: ColoniaVO[]=[];
  coloniaDisabled:boolean;
  municipioDisabled:boolean;
  cp:string;
  entidad:string;
  ciudad:string;
  municipio: string;
  colonia:string;
  /**
  * Almacena la lista de colonias
  **/

 arrColoniaDialog: ColoniaVO[] = [];
  private _paisClaveDir: number;
  selectItem: any;
  constructor( public dialogRef: MatDialogRef<DialogBusquedaCpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _personaService: PersonaService,private formBuilder: FormBuilder, private coloniaServices: ColoniasServices
  ) { 
    this.municipioDisabled=true;
    this.coloniaDisabled=true;
    if(data){
      this.colonia=this.data['coloniaCbo'];
      this.municipio = this.data['coloniaMun'];
      this.ciudad = this.data['ciudadDialog'];
      this.entidad = this.data['cboEntidad'];
      this.cp = this.data['cpDialog'];
    }
  }

  ngOnInit(): void {
    this.createFunForm();
    this.obtenerEntidad();  
  }
  obtenerEntidad(){
 
        this.coloniaServices.findAllEntidadByPaiClave(1).subscribe(
          then => {
            this.arrayEntidad= then;
            for (let i = 0; i < this.arrayEntidad.length; i++) {
              if(i == 0){
                this.funcForm.get('cboEntidad').setValue(this.arrayEntidad[i].entClave);
                this.listaEntidadVo = this.arrayEntidad;
                break;
              }
            }
            document.getElementById('coloniaCbo').removeAttribute('disabled');
            document.getElementById('coloniaMun').removeAttribute('disabled');

           
          },
          error => console.error(error)
        )

      
  }
  /**Metodo para crear el formulario que se estara utilizando  */
  createFunForm() {
    this.funcForm = this.formBuilder.group({
      entidadDialog: new FormControl(''),
      alcMunDialog: new FormControl(''),
      cboColoniaDialog: new FormControl(''),
      ciudadDialog: new FormControl(''),  
      cpDialog: new FormControl(''),
      cboEntidad:[''],
      cboMunicipio:['']
  });
  }
  /**Metodo para validar el control del input del form */
  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
   }

   
   /**Metodo para llenar los campos de entendad */
   changeEntidadDialog(colClave: number) {
           

        var entidad = parseInt(this.funcForm.get('cboEntidad').value);
        this.coloniaServices.findMunicipioByEntidad( entidad).subscribe(
          then => {
            this.arrayMunicipios = then;
             for (let i = 0; i < this.arrayMunicipios.length; i++) {
              if(i == 0){
                this.funcForm.get('cboMunicipio').setValue(this.arrayMunicipios[i].munClave);
                this.listaMunicipios = this.arrayMunicipios;
                break;
              }
            }
            this.municipioDisabled=false;
            document.getElementById('coloniaCbo').removeAttribute('disabled');
            document.getElementById('coloniaMun').removeAttribute('disabled');
            },
          error => console.error(error)
        )
    }
   /**Metodo para llenar los campos de entendad */
   changeMunicipioDialog(colClave: any) {
    var mun  =  parseInt(this.funcForm.get('cboMunicipio').value);
    this.coloniaServices.findColoniaByMunicipio(mun).subscribe(
      then => {
        this.arrColoniaDialog = then;
         for (let i = 0; i < this.arrColoniaDialog.length; i++) {
          if(i == 0){
            this.funcForm.get('cboColoniaDialog').setValue(this.arrColoniaDialog[i].colClave);
            this.arrColoniaDialog = this.arrColoniaDialog;
            break;
          }
        }
        this.coloniaDisabled=false;
        document.getElementById('coloniaCbo').removeAttribute('disabled');
        },
      error => console.error(error)
    )
}
   /**Metodo para llenar los campos de enteidad */
   changeColoniaDialog(colClave: number) {
     var colClaveSelect= this.funcForm.get('cboColoniaDialog').value;
    for (let i = 0; i < this.arrColoniaDialog.length; i++) {
      if(this.arrColoniaDialog[i].colClave == colClaveSelect){
        this.funcForm.get("ciudadDialog").setValue(this.arrColoniaDialog[i].colCiudad);
        this.funcForm.get("cpDialog").setValue(this.arrColoniaDialog[i].colCPostal);
         break;
      }
    }      
        
     
  }

  envia(){
      
    this.data.colonia= this.funcForm.get('cboColoniaDialog').value;
    this.data.municipio= this.funcForm.get('cboMunicipio').value;
    this.data.cp= this.funcForm.get("cpDialog").value;
     this.dialogRef.close({data: this.data});
     
    }

  }
