import {Component, OnInit} from "@angular/core";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import { LoginObject } from "../../core/models/login-object.model";
import { AuthService } from "../../core/services/auth.service";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  
  public submitLogin(): void {
    this.submitted = true;
    this.error = null;
    if(this.loginForm.valid){
      this.authService.login(new LoginObject(this.loginForm.value).username,new LoginObject(this.loginForm.value).password)
      .subscribe(result => {
        if (result.toString() === 'true') {
          console.log('Cargando session...');
          sessionStorage.setItem('usuUsuario', new LoginObject(this.loginForm.value).username);
          this.authService.getUsuarioSession();
        } else {
          this.error = {code: 1, message: 'Usuario o password son incorrectos'};
        }
      },
        error => console.error('Error al iniciar sesion', error)
      );
    }
  }

}
