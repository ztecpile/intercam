
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CargoFuncionarioVO, PaisVO, TipoPersonaVO, BolsaVO, CategPersonaVO, TipoInversionVO, PersonaContratoVO, UsuarioVO } from '@intercam/model';
import { DialogBuscaEjecutivoComponent } from 'libs/shred-components/src/lib/dialog/dialog-busca-ejecutivo/dialog-busca-ejecutivo.component';
import { DialogBuscarClienteComponent } from 'libs/shred-components/src/lib/dialog/dialog-buscar-cliente/buscar-cliente.component';
import { ClienteService } from 'libs/shred-components/src/lib/dialog/services/clientes.service';
import { CierreBancoInversionesServices } from '../../../services/cierre-banco-inversiones.services';




export class ConsultaMatrizTasasVO {
  public monto_inferior: string;
  public monto_superior: string;
  public dias: string;
}


@Component({
  selector: 'cierre-banco-inversiones',
  templateUrl: './cierre-banco-inversiones.component.html'
})

export class CierreBancoInversiones {
  accion = 'Cierre Banco Inversion';
 



}