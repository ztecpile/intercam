import { Document } from '../../../../models/facturas.interface';
import { FacturasService } from '../../../../services/facturas.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intercam-profesiones',
  templateUrl: './profesiones.component.html',
  styleUrls: ['./profesiones.component.scss'],
})
export class ProfesionesComponent implements OnInit {
  dataDocuments: Document[] = [];
  disabledButtons: Boolean = true;
  selectedDocument: Document;
  formProfession: FormGroup;
  isLoading: boolean = false;
  formDocument: FormGroup;

  constructor(
    private facturasService: FacturasService,
    private formBuilder: FormBuilder,
    public snackbar: MatSnackBar
  ) {}

  public observaciones = new FormControl('', Validators.required);
  public riesgo = new FormControl('', Validators.required);

  public newForm = new FormGroup({
    observaciones: this.observaciones,
    riesgo: this.riesgo,
  });

  ngOnInit(): void {
    this.initForm();
    this.getDocuments();
  }

  initForm() {
    this.formProfession = this.formBuilder.group({
      riesgo: ['', Validators.required],
      observaciones: ['', Validators.required],

    });
  }

  deleteDocument() {
    this.isLoading = true;
    const body = {
      docId: this.selectedDocument.docId,
      docDescrip: this.formDocument.controls.observaciones.value,
      docNombre: this.selectedDocument.docNombre,
      docCaduca: this.selectedDocument.docCaduca,
      tmpCvelegSiff: this.selectedDocument.tmpCvelegSabi,
      tmpCvelegSabi: this.selectedDocument.tmpCvelegSabi,
      docDescIng: this.selectedDocument.docDescIng,
      docContrato: this.selectedDocument.docContrato,
      tmpCvelegBanco: this.formDocument.controls.riesgo.value,
    };

    this.facturasService.updateDocument(body).subscribe({
      next: (v) => this.onSuccessDelete(v),
      error: (e) => this.onErrorDelete(e),
      complete: () => console.info('complete'),
    });
  }

  updateDocument() {
    this.isLoading = true;
    const body = {
      docId: this.selectedDocument.docId,
      docDescrip: this.formDocument.controls.observaciones.value,
      docNombre: this.selectedDocument.docNombre,
      docCaduca: this.selectedDocument.docCaduca,
      tmpCvelegSiff: this.selectedDocument.tmpCvelegSabi,
      tmpCvelegSabi: this.selectedDocument.tmpCvelegSabi,
      docDescIng: this.selectedDocument.docDescIng,
      docContrato: this.selectedDocument.docContrato,
      tmpCvelegBanco: this.formDocument.controls.riesgo.value,
    };
  }

  onSuccessDelete(val) {
    // if (val !== '') return;

    this.formDocument.reset();
    this.snackbar.open('Se eliminaron correctamente los datos.', '×', {
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

  getDocuments() {
    this.facturasService.getDocuments().subscribe((res) => {
      this.dataDocuments = res;
    });
  }

  revertSelection() {
    this.disabledButtons = true;
  }

  selectDocument(data) {
    this.disabledButtons = false;
    this.selectedDocument = data;
    this.formProfession.controls.riesgo.setValue(
      this.selectedDocument.tmpCvelegBanco
    );
    this.formProfession.controls.observaciones.setValue(
      this.selectedDocument.docDescrip
    );

  }
  tables = [
    {
      cabezera: 'Docuemnto',
    },
  ];
}

