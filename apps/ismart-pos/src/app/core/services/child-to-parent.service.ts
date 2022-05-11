import { EventEmitter, Injectable } from '@angular/core';
import { AltaProspectoEvent } from 'libs/contrato/src/lib/util/AltaProspectoEvent';

@Injectable({
  providedIn: 'root'
})
export class ChildToParentService {

  DOUBLE_CLICK_ALTA_PROSPECTO = new EventEmitter<AltaProspectoEvent>();

  constructor() { }
}