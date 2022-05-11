import { Component, Inject, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Attribute, PickListVO, SimplePredicate } from '@intercam/model';
import { PickListService } from 'libs/contrato/src/lib/services/pick-list.service';

@Component({
  selector: 'intercam-dialog-pick-list',
  templateUrl: './dialog-pick-list.component.html',
  styleUrls: ['./dialog-pick-list.component.scss']
})
export class DialogPickListComponent implements OnInit {

  title:string ='';
  searchArray:Attribute[] = [];
  displayedColumns = [];
  displayNames = [];

  searchText: string = '';
  entity: string = '';
  predicates: SimplePredicate[] = [];
  fetchLimit:number;

  resultPickList: any[];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  isDisabledBtnAceptar:boolean = true;
  selectItem:any;
  
  funcForm: FormGroup;

  constructor(
    private _pickListService: PickListService,
    public dialogRef: MatDialogRef<DialogPickListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if(data){
      this.title = data['title'];
      this.displayedColumns = data['displayedColumns'];
      this.displayNames = data['displayNames'];
      this.searchArray = data['searchArray'];
      this.searchText = data['remoteSearchText'];
      this.entity = data['entity'];
      this.predicates = data['predicates'];
      this.fetchLimit = data['fetchLimit'];
    }
  }
  
  ngOnInit(): void {
    this.createFunForm();
    this.makeRemoteSearch();
  }

  createFunForm(){
    this.funcForm = new FormGroup({
      remoteSearchCombo: new FormControl(this.getValueSearchCombo()),
      remoteSearchText: new FormControl(this.searchText, this.validatorLogInputText()),
      optInicie: new FormControl('i'),
      optContenga: new FormControl(null)
    });
  }

  getValueSearchCombo(){
    var name;
    if(this.searchArray != null && this.searchArray.length > 0){
      name = this.searchArray[0].name;
    }
    return name;
  }

  validatorLogInputText():ValidatorFn{
    return(control: AbstractControl): { [key:string]: boolean} | null => {
      let value = control.value;
      if(value != undefined && value.length < 3){
        return {'minlengthSearchCustomer' : true};
      }
      return null 
    };
  }

  getCtr(name: string, group= ''): FormControl { 
    if (group === '') return this.funcForm.get(name) as FormControl
    else return this.funcForm.controls[group].get(name) as FormControl
  }

  makeRemoteSearch(){
    if(this.funcForm.invalid){
      return;
    }

    var fillParameters: any[]=[];
    var objectPickList : PickListVO = new PickListVO();
    objectPickList.entity = this.entity;
    objectPickList.predicates = this.predicates;
    objectPickList.fetchLimit = this.fetchLimit;
    fillParameters.push(objectPickList);
    
    this._pickListService.fill(fillParameters).subscribe(
      then => {
        this.resultPickList = then;
        this.dataSource = new MatTableDataSource(this.resultPickList);
      },
      error => console.error(error)
    );
  }

  getDisName(i:number){
    return this.displayNames[i];
  }
  
  updateSearchText(inputSearchText:string){
    if(inputSearchText != null && inputSearchText.length > 0){
      this.predicates.forEach(item => {
        item.value = this.getCtr('optInicie').value != null ? inputSearchText.toUpperCase()+'%': '%'+inputSearchText.toUpperCase()+'%';
      });
    }
  }

  changeRadioOptInicie(event) {
    if(event){
      this.getCtr('optInicie').setValue('i');
      this.getCtr('optContenga').setValue(null);
      this.updatePredicates(false);
    }
  }

  changeRadioOptContenga(event) {
    if(event){
      this.getCtr('optInicie').setValue(null);
      this.getCtr('optContenga').setValue('c');
      this.updatePredicates(true);
    }
  }

  updatePredicates(parametro:boolean){
    const re = /(^%)/g;
    this.predicates.forEach(item => {
      item.value = parametro ? '%'+item.value: item.value.toString().replace(re,'');
    });
  }

  habiltaBtnAceptar(){
    this.isDisabledBtnAceptar = false;
  }

  close(){
    this.dialogRef.close();
  }

  envia(){
    if(this.selectItem != undefined || this.selectItem != null){
      this.dialogRef.close({data: this.selectItem});
    }
  }

  dblclickItem(row:any){
    this.selectItem = row;
    this.envia();
  }

  eliminar(){
    this.dialogRef.close({data: 'eliminar'});
  }

  getClassBtnAceptar(parametro: boolean) {
    if(parametro){
      return 'btn-img accept-button-des'
    } else {
      return 'btn-img accept-button'
    }
  }
}
