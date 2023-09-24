import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean = false
  openSession: boolean = false
  formLogin: FormGroup = new FormGroup({})
  nombrePersona: string = ""
  
  constructor(private authService: AuthService, private renderer: Renderer2, private el: ElementRef, private cookie: CookieService, private router: Router){
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        user: new FormControl('',[
          Validators.required
        ]),
        password: new FormControl('',[
          Validators.required
        ])
      }
    )
  }

  // Muestra el elemento de carga
  showLoading() {
    const loadingElement = this.el.nativeElement.querySelector('#loading');
    this.renderer.setStyle(loadingElement, 'display', 'block');
  }

  // Oculta el elemento de carga
  hideLoading() {
    const loadingElement = this.el.nativeElement.querySelector('#loading');
    this.renderer.setStyle(loadingElement, 'display', 'none');
  }

  hideImgUsuario() {
    const loadingElement = this.el.nativeElement.querySelector('#imgusuario');
    this.renderer.setStyle(loadingElement, 'display', 'none');
  }

  showImgUsuario() {
    const loadingElement = this.el.nativeElement.querySelector('#imgusuario');
    this.renderer.setStyle(loadingElement, 'display', 'block');
  }

  showVerified() {
    const loadingElement = this.el.nativeElement.querySelector('#verified');
    this.renderer.setStyle(loadingElement, 'display', 'block');
  }

  sendLogin(): void {
    this.errorSession  = false
    this.openSession = false

    this.hideImgUsuario();
    // Muestra el GIF de carga
    this.showLoading();

    const {user, password } = this.formLogin.value

    this.authService.sendCredentials(user, password)
      .subscribe(responseOK => {
        
      this.nombrePersona = responseOK.nombre
      this.openSession = true
      this.hideLoading();
      this.showVerified();
      this.cookie.set("token", responseOK.token, 4, '/')

      interval(1500)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/home'])
      });
      
    },
    err => {
      this.errorSession = true
      this.hideLoading();
    })
  }

}
