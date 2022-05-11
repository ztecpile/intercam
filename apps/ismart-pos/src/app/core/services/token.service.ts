import { Injectable } from "@angular/core";
import { UsuarioVO } from "@intercam/model";

const TOKEN_KEY = 'token';
const USERNAME_KEY = 'usuUsuario';
const USERNAME_OBJECT_KEY = 'usuarioVO';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public setToken(token: string): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUsuUsuario(userName: string): void {
    sessionStorage.removeItem(USERNAME_KEY);
    sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public setUsuarioVO(usuarioVO: UsuarioVO): void {
    sessionStorage.removeItem(USERNAME_OBJECT_KEY);
    sessionStorage.setItem(USERNAME_OBJECT_KEY, JSON.stringify(usuarioVO));
  }

  public isAuthenticated(): boolean {
    return (this.getToken() != null) ? true : false;
  };

  public logOut(): void {
    sessionStorage.clear();
  }
}