import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { LoginUsuario } from "../../core/models/login-usuario";
import { AuthService } from "../../core/services/auth.service";
import { TokenService } from "../../core/services/token.service";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public errMsj: string = null;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenService: TokenService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  
  public submitLogin(): void {
    this.submitted = true;
    this.errMsj = null;
    if(this.loginForm.valid){
      let loginUsuario = new LoginUsuario(this.loginForm.value);
      this.authService.login(loginUsuario).subscribe(
        then => {
          if(then != null){
            console.log('Cargando session...');
            this.tokenService.setToken(then.token);
            this.tokenService.setUsuUsuario(then.usuarioVO.usuClave);
            this.tokenService.setUsuarioVO(then.usuarioVO);
            this.authService.correctLogin();
          } else {
            this.errMsj = 'Usuario o password son incorrectos';
          }
        },
        error => {
          console.error('Error al iniciar sesion',error);
      });
    }
  }

}
