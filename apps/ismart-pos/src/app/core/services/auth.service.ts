import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioVO } from '@intercam/model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioVO: UsuarioVO;
  
  constructor(
    public http: HttpClient, 
    private router: Router,
    private tokenServices: TokenService) { }

  login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    const urlStr = 'auth/login';
    return this.http.post<JwtDTO>(urlStr, loginUsuario);
  }
  
  getUsuario(usuUsuario: string): Observable<UsuarioVO> {
    const urlStr = 'usuario/findusuario-usuusuario/' + usuUsuario;
    return this.http.get<UsuarioVO>(urlStr, {});
  }

  getRolVO(rolId: number): Observable<any> {
    const urlStr = 'usuario/getRolVO/' + rolId;
    return this.http.get<any>(urlStr, {});
  }

  isAccessAllowed(url: string, perId: number, conId: number, porCliente: boolean,
    rolDejaLog: boolean, rolClave: number, usuId: string, reqCuestioSeguri: boolean, sistema: string): Observable<any[]> {

    const urlStr = 'cierre-op/isAccessAllowed';
    const params: Object = new Object({
      'url': url,
      'perId': perId,
      'conId': conId,
      'porCliente': porCliente,
      'rolDejaLog': rolDejaLog,
      'rolClave': rolClave,
      'usuId': usuId,
      'reqCuestioSeguri': reqCuestioSeguri,
      'sistema': sistema
    });
    return this.http.post<any[]>(urlStr, params);
  }

  getToken(){
    return this.tokenServices.getToken();
  }

  correctLogin(){
    this.gerUrlParam();
  }

  private gerUrlParam(): void {
    const url = sessionStorage.getItem('url');
    console.log("urlPath: ", url);
    if(url) this.router.navigate([url]);
    this.router.navigate(['/']);
  }
  
  logOut(): void {
    console.log('Cerrando session...');
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
     this.router.navigate(['/login']));
     this.tokenServices.logOut();
  }
}