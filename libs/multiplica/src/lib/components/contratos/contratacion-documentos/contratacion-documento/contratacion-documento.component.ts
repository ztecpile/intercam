import { Component, OnInit, ViewChild } from '@angular/core';
import { Document } from '../../../../models/facturas.interface';
import { FacturasService } from '../../../../services/facturas.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatTable } from '@angular/material/table';

@Component({
  selector: 'intercam-contratacion-documento',
  templateUrl: './contratacion-documento.component.html',
  styleUrls: ['./contratacion-documento.component.scss'],
})
export class ContratacionDocumentoComponent implements OnInit {
  dataDocuments: Document[] = [];
  selectedDocument: Document;
  formDocument: FormGroup;
  disabledButtons: Boolean = true;
  isLoadingData: boolean = false;
  isVisibleTable: boolean = true;
  messageTitle: string = 'No encontramos resultados';
  messageSubtitle: string = 'Revisa o cambia tu búsqueda';
  headersTitles: string[] = ['Documento', 'Observaciones', 'Caduca Documento'];

  constructor(
    private facturasService: FacturasService,
    private formBuilder: FormBuilder,
    public snackbar: MatSnackBar
  ) { }

  public documento = new FormControl('', Validators.required);
  public observaciones = new FormControl('', Validators.required);
  public claveSiff = new FormControl('', Validators.required);
  public claveSabi = new FormControl('', Validators.required);
  public caduca = new FormControl('', Validators.required);
  public contrato = new FormControl('', Validators.required);

  public newForm = new FormGroup({
    documento: this.documento,
    claveSabi: this.claveSabi,
    claveSiff: this.claveSiff,
    caduca: this.caduca,
    observaciones: this.observaciones,
    contrato: this.contrato,
  });

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
    this.getDocuments();
  }


  getDocuments() {
    this.isLoadingData = true;
    this.facturasService.getDocuments().subscribe((res) => {
      this.dataDocuments = res;
      this.isLoadingData = false;
      this.isVisibleTable = this.dataDocuments.length > 0;
    });
  }

  saveDocuments() {
    const body = {
      docDescrip: this.formDocument.controls.observaciones.value,
      docNombre: this.formDocument.controls.documento.value,
      docCaduca: this.formDocument.controls.caduca.value,
      tmpCvelegSiff: this.formDocument.controls.claveSiff.value,
      tmpCvelegSabi: this.formDocument.controls.claveSabi.value,
      docDescIng: this.selectedDocument.docDescIng,
      docContrato: this.formDocument.controls.contrato.value,
      tmpCvelegBanco: this.selectedDocument.tmpCvelegBanco,
    };

    this.facturasService.saveDocument(body).subscribe({
      next: (v) => this.onSuccessSave(v),
      error: (e) => this.onErrorSave(e),
      complete: () => console.info('complete'),
    });
  }

  deleteDocument() {
    const body = {
      docId: this.selectedDocument.docId,
      docDescrip: this.formDocument.controls.observaciones.value,
      docNombre: this.formDocument.controls.documento.value,
      docCaduca: this.formDocument.controls.caduca.value,
      tmpCvelegSiff: this.formDocument.controls.claveSiff.value,
      tmpCvelegSabi: this.formDocument.controls.claveSabi.value,
      docDescIng: this.selectedDocument.docDescIng,
      docContrato: this.formDocument.controls.contrato.value,
      tmpCvelegBanco: this.selectedDocument.tmpCvelegBanco,
    };

    this.facturasService.deleteDocument(body).subscribe({
      next: (v) => this.onSuccessDelete(v),
      error: (e) => this.onErrorDelete(e),
      complete: () => console.info('complete'),
    });
  }

  updateDocument() {
    const body = {
      docId: this.selectedDocument.docId,
      docDescrip: this.formDocument.controls.observaciones.value,
      docNombre: this.formDocument.controls.documento.value,
      docCaduca: this.formDocument.controls.caduca.value,
      tmpCvelegSiff: this.formDocument.controls.claveSiff.value,
      tmpCvelegSabi: this.formDocument.controls.claveSabi.value,
      docDescIng: this.selectedDocument.docDescIng,
      docContrato: this.formDocument.controls.contrato.value,
      tmpCvelegBanco: this.selectedDocument.tmpCvelegBanco,
    };

    this.facturasService.updateDocument(body).subscribe({
      next: (v) => this.onSuccessUpdate(v),
      error: (e) => this.onErrorUpdate(e),
      complete: () => console.info('complete'),
    });
  }

  onSuccessSave(val) {
    // if (val !== '') return;

    this.formDocument.reset();
    this.snackbar.open('Se guardó correctamente los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-success',
    });
  }

  onErrorSave(val) {
    if (!val) return;

    this.formDocument.reset();
    this.snackbar.open('Upss, hubo un error al guardar los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-error',
    });
  }

  onSuccessDelete(val) {
    // if (val !== '') return;

    this.formDocument.reset();
    this.snackbar.open('Se eliminó correctamente los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-success',
    });
  }

  onErrorDelete(val) {
    if (!val) return;

    this.formDocument.reset();
    this.snackbar.open('Upss, hubo un error al eliminar los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-error',
    });
  }

  onSuccessUpdate(val) {
    // if (val !== '') return;

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

  // revertSelection() {
  //   this.disabledButtons = true;
  // }

  selectDocument(data) {
    // console.log(data);
    this.disabledButtons = false;
    this.selectedDocument = data;
    this.formDocument.controls.documento.setValue(
      this.selectedDocument.docNombre
    );
    this.formDocument.controls.observaciones.setValue(
      this.selectedDocument.docDescrip
    );
    this.formDocument.controls.claveSiff.setValue(
      this.selectedDocument.tmpCvelegSiff
    );
    this.formDocument.controls.claveSabi.setValue(
      this.selectedDocument.tmpCvelegSabi
    );
    this.formDocument.controls.caduca.setValue(this.selectedDocument.docCaduca);
    this.formDocument.controls.contrato.setValue(
      this.selectedDocument.docContrato
    );
  }

  close(){
    // this.dialogRef.close();
  }
}
