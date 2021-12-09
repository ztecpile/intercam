import { Component, OnInit } from '@angular/core';
import { TypeDocument } from '../../../../models/facturas.interface';
import { FacturasService } from '../../../../services/facturas.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'intercam-tipo-documento',
  templateUrl: './tipo-documento.component.html',
  styleUrls: ['./tipo-documento.component.scss']
})
export class TipoDocumentoComponent implements OnInit {
  dataDocuments: TypeDocument[] = [];
  disabledButtons: Boolean = true;
  selectedTypeDocument: TypeDocument;
  formTypeDocument: FormGroup;
  isLoadingData: boolean = false;
  isVisibleTable: boolean = true;
  messageTitle: string = 'No encontramos resultados';
  messageSubtitle: string = 'Revisa o cambia tu búsqueda';
  headersTitles: string[] = ['Tipo de Documento', 'Clave SIFF', 'Caducidad por Mes', 'Caducidad por operación'];

  constructor(private facturasService: FacturasService,
    private formBuilder: FormBuilder,
    public snackbar: MatSnackBar) {}

    initForm() {
      this.formTypeDocument = this.formBuilder.group({
        tipoDocumento: ['', Validators.required],
        claveSiff: ['', Validators.required],
        caducidadPorMes: ['', Validators.required],
        caducidadPorOperacion: ['', Validators.required],
      });
    }
  ngOnInit(): void {
    this.initForm();
    this.getTypeDocuments();
  }

  getTypeDocuments() {
    this.isLoadingData = true;
    this.facturasService.getTypeDocuments().subscribe((res) => {
      this.dataDocuments = res;
    });
  }

  saveTypeDocument() {
    const body = {
      typeDocNombre: this.formTypeDocument.controls.tipoDocumento.value,
      tmpCvelegSiff: this.formTypeDocument.controls.claveSiff.value,
      caducidadPorMes: this.formTypeDocument.controls.caducidadPorMes.value,
      caducidadPorOperacion: this.formTypeDocument.controls.caducidadPorOperacion.value,
    };

    this.facturasService.saveTypeDocument(body).subscribe({
      next: (v) => this.onSuccessSave(v),
      error: (e) => this.onErrorSave(e),
      complete: () => console.info('complete'),
    });
  }

  onSuccessSave(val) {
    // if (val !== '') return;

    this.formTypeDocument.reset();
    this.snackbar.open('Se guardó correctamente los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-success',
    });
  }

  onErrorSave(val) {
    if (!val) return;

    this.formTypeDocument.reset();
    this.snackbar.open('Upss, hubo un error al guardar los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-error',
    });
  }

  updateTypeDocument() {
    const body = {
      docId: this.selectedTypeDocument.docId,
      typeDocNombre: this.formTypeDocument.controls.tipoDocumento.value,
      tmpCvelegSiff: this.formTypeDocument.controls.claveSiff.value,
      caducidadPorMes: this.formTypeDocument.controls.caducidadPorMes.value,
      caducidadPorOperacion: this.formTypeDocument.controls.caducidadPorOperacion.value,
    };

    this.facturasService.updateTypeDocument(body).subscribe({
      next: (v) => this.onSuccessUpdate(v),
      error: (e) => this.onErrorUpdate(e),
      complete: () => console.info('complete'),
    });
  }

  onSuccessUpdate(val) {
    // if (val !== '') return;

    this.formTypeDocument.reset();
    this.snackbar.open('Se actualizó correctamente los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-success',
    });
  }

  onErrorUpdate(val) {
    if (!val) return;

    this.formTypeDocument.reset();
    this.snackbar.open('Upss, hubo un error al actualizar los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-error',
    });
  }

  deleteTypeDocument() {
    const body = {
      docId: this.selectedTypeDocument.docId,
      typeDocNombre: this.formTypeDocument.controls.tipoDocumento.value,
      tmpCvelegSiff: this.formTypeDocument.controls.claveSiff.value,
      caducidadPorMes: this.formTypeDocument.controls.caducidadPorMes.value,
      caducidadPorOperacion: this.formTypeDocument.controls.caducidadPorOperacion.value,
    };

    this.facturasService.deleteTypeDocument(body).subscribe({
      next: (v) => this.onSuccessDelete(v),
      error: (e) => this.onErrorDelete(e),
      complete: () => console.info('complete'),
    });
  }

  onSuccessDelete(val) {
    // if (val !== '') return;

    this.formTypeDocument.reset();
    this.snackbar.open('Se eliminó correctamente los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-success',
    });
  }

  onErrorDelete(val) {
    if (!val) return;

    this.formTypeDocument.reset();
    this.snackbar.open('Upss, hubo un error al eliminar los datos.', '×', {
      duration: 5000,
      panelClass: 'mat-error',
    });
  }

  // revertSelection() {
  //   this.disabledButtons = true;
  // }

  selectDocument(data) {
    this.disabledButtons = false;
    this.selectedTypeDocument = data;
    this.formTypeDocument.controls.tipoDocumento.setValue(this.selectedTypeDocument.typeDocNombre);
    this.formTypeDocument.controls.claveSiff.setValue(this.selectedTypeDocument.tmpCvelegSiff);
    this.formTypeDocument.controls.caducidadPorMes.setValue(this.selectedTypeDocument.caducidadPorMes);
    this.formTypeDocument.controls.caducidadPorOperacion.setValue(this.selectedTypeDocument.caducidadPorOperacion);
  }

  close() {

  }

}
