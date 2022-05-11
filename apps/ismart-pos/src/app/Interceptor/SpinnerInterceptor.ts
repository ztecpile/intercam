import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../core/services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private service: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const rutaDireccionTeso = '/tesoreria/autoriza-operacion/findDireccion';
    const rutaLiquidacionTeso =
      '/tesoreria/autoriza-operacion/findLiquidacionEntregamos';
    const rutaBeneficiarioTeso =
      '/tesoreria/autoriza-operacion/findBeneficiario';
    if (
      !(
        req.url.search(rutaDireccionTeso) !== -1 ||
        req.url.search(rutaLiquidacionTeso) !== -1 ||
        req.url.search(rutaBeneficiarioTeso) !== -1
      )
    ) {
      this.service.show();
    }

    return next.handle(req).pipe(finalize(() => this.service.hide()));
  }
}
