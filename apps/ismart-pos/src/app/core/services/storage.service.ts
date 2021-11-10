import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UsuarioVO } from "@intercam/model";
import { BehaviorSubject } from "rxjs";
import { Session } from "../models/session.model";

@Injectable()
export class StorageService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  
  setCurrentSession(session: Session): void {
    sessionStorage.setItem('currentUser', JSON.stringify(session));
    this.loggedIn.next(true);
  }

  loadSessionData(): Session{
    var sessionStr = sessionStorage.getItem('currentUser');
    return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session {
    return this.loadSessionData();
  }

  removeCurrentSession(): void {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('usuUsuario');
    sessionStorage.removeItem('usuarioVO');
    sessionStorage.removeItem('perId');
    sessionStorage.removeItem('conId');
    sessionStorage.removeItem('cliente');
    sessionStorage.removeItem('porCliente');
  }

  getCurrentUser(): UsuarioVO {
    var session: Session = this.getCurrentSession();
    return (session && session.user) ? session.user : null;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return (session && session.token) ? session.token : null;
  };

  logout(): void{
    console.log('Cerrando session...');
    this.loggedIn.next(false);
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }

}