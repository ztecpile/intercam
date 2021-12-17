import { Component, OnInit } from '@angular/core';
import { Document, TypeDocument } from '../../../../models/documents.interface';
import { DocumentsService } from '../../../../services/documents.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
// import { PersonaService } from '../../../../../../../contrato/src/lib/services/persona.service'
import { CatContratoService } from '../../../../../../../contrato/src/lib/services/cat-contrato.service';
import { CatalogoService } from '../../../../services/catalogo.service';
import { TypePerson } from '../../../../models/catalogo.interface';
import { TipoContratoVO } from '@intercam/model';
import { Profile } from '../../../../models/catalogo.interface';
import { RequiredDocuments } from '../../../../models/requerimiento.interface'
import { from } from 'rxjs';

@Component({
  selector: 'intercam-requerimiento',
  templateUrl: './requerimiento.component.html',
  styleUrls: ['./requerimiento.component.scss'],
})
export class RequerimientoComponent implements OnInit {
  dataTypesDocuments: TypeDocument[] = [];
  dataDocuments: Document[] = [];
  typesDocumentsFiltered: TypeDocument[] = [];
  dataTiposContratos: TipoContratoVO[] = [];
  dataTiposPersonas: TypePerson[] = [];
  dataPefiles: Profile[] = [];
  dataTipoRequeridoDcumento: RequiredDocuments[] = [];
  // dataPerson: TypePerson[] = [];
  disabledButtons: Boolean = true;
  selectedTypeDocument: Document;
  formDocument: FormGroup;
  isVisibleTable: boolean = true;
  messageTitle: string = 'No encontramos resultados';
  messageSubtitle: string = 'Revisa o cambia tu búsqueda';
  isLoadingData: boolean = false;
  headersTitles: string[] = [
    'Descripcion',
    'Caducidad por mes',
    'Caducidad por operacion',
  ];
  headersTiTlestwo: string[] = ['Tipo Documento', 'Observaciones'];
  idContractTypeSelection: string = '';
  idTypePerson: string = '';
  idPerfil: string = '';

  constructor(
    private documentsService: DocumentsService,
    private formBuilder: FormBuilder,
    public snackbar: MatSnackBar,
    private catalogoService: CatalogoService,
    private catContratoService: CatContratoService
  ) {}

  initForm() {
    this.formDocument = this.formBuilder.group({
      documento: ['', Validators.required],
      observaciones: ['', Validators.required],
      claveSiff: ['', Validators.required],
      claveSabi: ['', Validators.required],
      caduca: ['', Validators.required],
      contrato: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.getTypeDocuments();
    this.getDocuments();
    this.getPersonDocuments();
    this.getRequiredDocuments();
    this.getContratoDocuments();
  }

  getTypeDocuments() {
    this.isLoadingData = true;
    this.documentsService.getTypeDocuments().subscribe((res) => {
      this.dataTypesDocuments = res;
      this.isLoadingData = false;
      this.isVisibleTable = this.dataTypesDocuments.length > 0;
    });
  }

  getPersonDocuments() {
    this.isLoadingData = true;
    this.catalogoService.getTypePerson().subscribe((res) => {
      this.dataTiposPersonas = res;
      this.isLoadingData = false;
      this.isVisibleTable = this.dataTiposPersonas.length > 0;
      // console.log(res);
    });
  }

  getPerfilDocuments() {
    this.catalogoService
      .getTypePerfil(this.idContractTypeSelection, this.idTypePerson)
      .subscribe((res) => {
        // console.log(res);
        this.dataPefiles = res;
        this.isLoadingData = false;
        this.isVisibleTable = this.dataPefiles.length > 0;
      });
  }

  getRequiredDocuments() {
    this.isLoadingData = true;
    this.documentsService.getRequiredDocuments().subscribe((res) => {
      this.dataTipoRequeridoDcumento = res;
      this.isLoadingData = false;
      this.isVisibleTable = this.dataTipoRequeridoDcumento.length > 0;
      console.log(res);
    });
  }

  onContractType(event: any) {
    this.idContractTypeSelection = event.target.value;
    if (this.idContractTypeSelection !== '' && this.idTypePerson) {
      this.getPerfilDocuments();
    }
  }

  onTypePerson(event: any) {
    this.idTypePerson = event.target.value;
    if (this.idContractTypeSelection !== '' && this.idTypePerson) {
      this.getPerfilDocuments();
    }
  }

  onPerfil(event: any) {
    this.idPerfil = event.target.value;
    // const idTypeDocument = event.target.value;
    // this.typesDocumentsFiltered = this.dataTypesDocuments.filter(
    //   (item) => item.tdoId === Number()
    // );
  }

  getContratoDocuments() {
    this.catContratoService.findTipoContrato().subscribe((res) => {
      this.dataTiposContratos = res;
      this.isLoadingData = false;
      this.isVisibleTable = this.dataTiposContratos.length > 0;
      // console.log(res);
    });
  }

  getDocuments() {
    this.isLoadingData = true;
    this.documentsService.getDocuments().subscribe((res) => {
      this.dataDocuments = res;
      this.isLoadingData = false;
      this.isVisibleTable = this.dataDocuments.length > 0;
    });
  }

  updateTypeDocument() {
    // const body = {
    //   docId: this.selectedTypeDocument.docId,
    //   docDescrip: this.formDocument.controls.observaciones.value,
    //   docNombre: this.formDocument.controls.documento.value,
    //   docCaduca: this.formDocument.controls.caduca.value,
    //   tmpCvelegSiff: this.formDocument.controls.claveSiff.value,
    //   tmpCvelegSabi: this.formDocument.controls.claveSabi.value,
    //   docDescIng: this.selectedTypeDocument.docDescIng,
    //   docContrato: this.formDocument.controls.contrato.value,
    //   tmpCvelegBanco: this.selectedTypeDocument.tmpCvelegBanco,
    // };
    // this.facturasService.updateDocument(body).subscribe({
    //   next: (v) => this.onSuccessUpdate(v),
    //   error: (e) => this.onErrorUpdate(e),
    //   complete: () => console.info('complete'),
    // });
  }

  onSuccessUpdate(val) {
    this.formDocument.reset();
    this.snackbar.open('Se actualizó correctamente los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-success',
    });
  }

  onErrorUpdate(val) {
    if (!val) return;

    this.formDocument.reset();
    this.snackbar.open('Upss, hubo un error al actualizar los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-error',
    });
  }

  selectDocument(data) {
    this.disabledButtons = false;
    this.selectedTypeDocument = data;
  }

  close(): void {}

  
  getBoolenToString(data) {
    if (data === '') return '';

    return data === false ? 'No' : 'Sí';
  }
}
