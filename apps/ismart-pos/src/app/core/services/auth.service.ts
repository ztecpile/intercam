import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UsuarioVO } from '@intercam/model';
import { Router } from '@angular/router';
import { Session } from '../models/session.model';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioVO: UsuarioVO;
  token: string;

  constructor(public http: HttpClient, private router: Router,
    private storageService: StorageService) { }

  login(username, password): Observable<boolean> {
    const urlStr = 'usuario/validaPassPhrase';
    const requestOptions: Object = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      params: new HttpParams().set('login', username).set('passPhrase', password),
      responseType: 'text',
    };

    return this.http.get<boolean>(urlStr, requestOptions);
  }
  
  logout() {
    this.storageService.logout();
  }

  loggedIn(){
    return !!sessionStorage.getItem('token');
  }

  getToken(){
    return sessionStorage.getItem('token');
  }
  
  public getUsuarioSession(): void {
    this.token = sessionStorage.getItem('token');
    const usuUsuario: string = sessionStorage.getItem('usuUsuario');
    if (usuUsuario) {
      const urlStr = 'usuario/findusuario-usuusuario/' + usuUsuario;
      this.http.get<UsuarioVO>(urlStr, {}).subscribe(
        then => {
          this.usuarioVO = then;
          sessionStorage.setItem('usuarioVO', JSON.stringify(then))
          //this.gerUrlParam();
          const data = new Session;
          data.token = this.usuarioVO.usuClave;
          data.user = this.usuarioVO;
          this.correctLogin(data);
        },
        error => console.error('Error al buscar usuario', error)
      );
    } else {
      this.gerUrlParam();
    }
  }

  private gerUrlParam(): void {
    const url = sessionStorage.getItem('url');
    console.log("urlPath: ", url);
    if(url) this.router.navigate([url]);
  }

  private correctLogin(data: Session){
    this.storageService.setCurrentSession(data);
    this.router.navigate(['/']);
  }
}
