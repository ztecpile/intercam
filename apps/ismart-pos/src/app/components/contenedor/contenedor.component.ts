import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
@Component({
  selector: 'intercam-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss'],
  providers: [AuthService]
})
export class ContenedorComponent implements AfterViewInit {

  prefixISmart: string = 'ANG:';

  constructor(private _router: Router,
    private _activatedRoute:ActivatedRoute) {
  }

  ngAfterViewInit(): void {
  }
  
  openRouter(url:string){
    this._router.navigate([this.getUrl(url)],{relativeTo:this._activatedRoute})
      .catch(this.handleError);
  }

  openRouterRefresh(url:string){
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
     this._router.navigate([this.getUrl(url)])).catch(this.handleError);
  }

  homeRouter() {
    this._router.navigate(['/'],{relativeTo:this._activatedRoute})
          .catch(this.handleError);
  }

  private handleError (error: Response|any) {
    if (error.status == 401) {
      this._router.navigate(['/login']);
      return error.status;
    }
  }
  
  getUrl(url:string):string{
    let urlStr:string = url;
    if (url.indexOf(this.prefixISmart) >= 0){
      urlStr = urlStr.substring(urlStr.indexOf(this.prefixISmart) + 4);
    }
    return urlStr;
  }
}