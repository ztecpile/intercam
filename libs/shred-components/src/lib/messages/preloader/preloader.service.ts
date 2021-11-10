import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpRequest } from '@angular/common/http';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  private _loading: boolean = false;
  loadingStatus: Subject<boolean> = new Subject();
  EXCEPTION_URL: string[] =  ['api/utils/findSuggestion'];
  apiUrl : string[] = ['api/auth', 'api/payment'];

  actions : string[] = [];

  constructor(router:Router) {
    // router.events.subscribe(event => {
    //   if(event instanceof NavigationStart) {
    //     if(event.url.indexOf("#") == -1 && event.url != "/") {
    //       this.start(event.url, false);
    //     }
    //   } else if((event instanceof NavigationEnd ||
    //             event instanceof NavigationError || 
    //             event instanceof NavigationCancel)
    //      && event.url != "/") {
    //       if(event.url.indexOf("#") == -1 ) {
    //         this.end(event.url);
    //       } 
    //   }
    // });
  }

  get loading():boolean {
    return this._loading;
  }

  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }

  removeAction (item ) {
    var i = this.actions.indexOf( item );
    if(i != -1) {
      this.actions.splice( i, 1 );
    }
  }

  validateArray(url : string, arreglo : any) : boolean {
    let flag = false;
    for(var index = 0; index < arreglo.length; index++) {
        if(url.startsWith(arreglo[index])) {
          flag = true;
          break;
        }
      }
    return flag;
  }

  end(url : string) {
    let tmp = this.actions.find(element => element == url);
    if(tmp) {
      this.removeAction(url);
    }
    console.log(this.actions);
    if(this.actions.length == 0) {
      this.stopLoading();
    }
  }

  start(url : string, request : boolean) {
    let flag = true;
    if(request) {
      flag = this.validateArray(url, this.apiUrl);
    }
    if(flag) {
      let tmp = this.actions.find(element => element == url);
      if(!tmp) {
        this.actions.push(url);
        if (this.actions.length === 1) {
          this.startLoading();
        }
      } 
    }
  }
}
