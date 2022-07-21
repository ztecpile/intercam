import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';





@Component({
    selector: 'acction-buttons-component',
    templateUrl: './acction-buttons.component.html',
})


export class AcctionButtonsComponent {

    MODO_CONSULTA: Number = 1;
    MODO_ALTA: Number = 2;
    MODO_EDITAR = 3;
    MODO_ELIMINAR: Number = 4;
    MODO_FORMULARIO: Number = this.MODO_CONSULTA;


    BTN_ELIMINAR_OCULTO = false;
    BTN_CONSULTA_OCULTO = false;
    BTN_ALTA_OCULTO = false;
    BTN_EDITAR_OCULTO = false;
    BTN_DESHACER_OUCLTO = false;


    modeloSelecionado: Object = null;
    hayCabios: boolean = false;
    rows: any;

    @Output() onModoConsultaClick = new EventEmitter();
    @Output() onModoAltaClick = new EventEmitter();
    @Output() onModoGuardarClick = new EventEmitter();
    @Output() onModoActualizarClick = new EventEmitter();
    @Output() onModoEliminarClick = new EventEmitter();
    @Output() onModoDeshacerClick = new EventEmitter();

    @Input() modelo: Object = null;
    @Input() formGroup: FormGroup = null;

    validarBtnReset: boolean = false;//this.MODO_FORMULARIO == this.MODO_CONSULTA || this.modeloSelecionado == null || this.modelo.toString() != this.modeloSelecionado.toString()
    validarBtnEliminar: boolean = false;
    validarBtnGuardar: boolean = false;

    hasChenges() {
        if (this.MODO_FORMULARIO != this.MODO_ALTA) this.MODO_FORMULARIO = this.MODO_EDITAR;
        this.hayCabios = true;
        this.validarBtnDeshacer();
        this.validarEliminarBtn();
        this.validarGuardarBtn();

    }

    reiniciarBtn() {
        this.MODO_FORMULARIO = this.MODO_CONSULTA;
        this.modeloSelecionado = null;
        this.modelo = new Object();
        this.hayCabios = false;
        this.validarEliminarBtn();
        this.validarGuardarBtn();
        this.validarBtnReset = false;
    }

    isModoConsulta() {
        return this.MODO_FORMULARIO == this.MODO_CONSULTA;
    }

    setFilaSelecionada(row) {
        this.modeloSelecionado = { ...row };
        this.hayCabios = false;
        this.validarEliminarBtn();

    }

    modoConsultaClick() {
        this.onModoConsultaClick.emit();
    }

    modoAltaClick() {
        this.MODO_FORMULARIO = this.MODO_ALTA;
        this.validarBtnGuardar = false;
        this.validarBtnReset = true;
        this.validarBtnEliminar = false;
        this.validarBtnReset=false;
        this.onModoAltaClick.emit();
    }
    modoGuardarClick() {


        if (this.MODO_FORMULARIO == this.MODO_ALTA)
            this.onModoGuardarClick.emit();
        else
            this.onModoActualizarClick.emit();
        if (this.formGroup == null || this.formGroup?.valid)
            this.reiniciarBtn();
    }

    modoEliminarClick() {

        this.onModoEliminarClick.emit();
    }

    modoDeshacerClick() {
        this.reiniciarBtn();
        this.onModoDeshacerClick.emit();
    }

    validarBtnDeshacer() {
        if (JSON.stringify(this.modelo) != JSON.stringify(this.modeloSelecionado))
            this.validarBtnReset = true;
        else
            this.validarBtnReset = false;
    }

    ObjCompare(obj1, obj2) {
        if (obj1!=null&&obj2!=null) {
        const Obj1_keys = Object.keys(obj1);
        const Obj2_keys = Object.keys(obj2);
        
            if (Obj1_keys.length !== Obj2_keys.length) {
                return false;
            }
            for (let k of Obj1_keys) {
                if (obj1[k] !== obj2[k]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    validarGuardarBtn() {
        this.validarBtnGuardar = !this.modeloSelecionado == null || (this.MODO_FORMULARIO == this.MODO_ALTA || this.MODO_FORMULARIO == this.MODO_EDITAR);
    }

    validarEliminarBtn() {
        if (this.hayCabios && this.ObjCompare(this.modelo, this.modeloSelecionado)) {
            this.hayCabios = false;
            this.MODO_FORMULARIO = this.MODO_CONSULTA;

        }
        if (this.modeloSelecionado != null && !this.hayCabios)
            this.validarBtnEliminar = true;
        else
            this.validarBtnEliminar = false;
    }
    hiddeBtnEliminar(status: boolean) {
        this.BTN_ELIMINAR_OCULTO = status;
    }

    hiddeBtnAlta(status: boolean) {
        this.BTN_ALTA_OCULTO = status;
    }

    hiddeBtnConsulta(status: boolean) {
        this.BTN_CONSULTA_OCULTO = status;
    }

    hiddeBtnDeshacer(status: boolean) {
        this.BTN_DESHACER_OUCLTO = status;
    }

    hiddeBtnGuardar(status: boolean) {
        this.BTN_EDITAR_OCULTO = status;
    }

}