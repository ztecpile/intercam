import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { PreloaderService } from './preloader.service';

@Injectable()
export class PreloaderInterceptor implements HttpInterceptor {
  activeRequests: number = 0;

  constructor(private service: PreloaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.service.start(request.url, true);
    return next.handle(request).pipe(
      finalize(() => {
        this.service.end(request.url);
      })
    );
  }   
}