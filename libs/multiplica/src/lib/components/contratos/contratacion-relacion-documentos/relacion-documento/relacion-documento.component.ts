import { Component, OnInit } from '@angular/core';
import { Document, TypeDocument } from '../../../../models/facturas.interface';
import { FacturasService } from '../../../../services/facturas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'intercam-relacion-documento',
  templateUrl: './relacion-documento.component.html',
  styleUrls: ['./relacion-documento.component.scss'],
})
export class RelacionDocumentoComponent implements OnInit {
  dataTypesDocuments: TypeDocument[] = [];
  dataDocuments: Document[] = [];
  disabledButtons: Boolean = true;
  selectedTypeDocument: Document;
  formDocument: FormGroup;
  isVisibleTable: boolean = true;
  messageTitle: string = 'No encontramos resultados';
  messageSubtitle: string = 'Revisa o cambia tu búsqueda';
  isLoadingData: boolean = false;
  headersTitles: string[] = ['Documento', 'Observaciones'];

  constructor(
    private facturasService: FacturasService,
    private formBuilder: FormBuilder,
    public snackbar: MatSnackBar
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
  }

  getTypeDocuments() {
    this.isLoadingData = true;
    this.facturasService.getTypeDocuments().subscribe((res) => {
      this.dataTypesDocuments = res;
      this.isLoadingData = false;
      this.isVisibleTable = this.dataTypesDocuments.length > 0;
    });

    console.log("mierda", this.dataTypesDocuments);
  }

  getDocuments() {
    this.isLoadingData = true;
    this.facturasService.getDocuments().subscribe((res) => {
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

  close(): void {

  }
}
