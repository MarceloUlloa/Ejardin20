import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({})
  
  constructor(private authService: AuthService, private renderer: Renderer2, private el: ElementRef){


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

  showVerified() {
    const loadingElement = this.el.nativeElement.querySelector('#verified');
    this.renderer.setStyle(loadingElement, 'display', 'block');
  }

  sendLogin(): void {
    // Muestra el GIF de carga
    this.showLoading();

    const {user, password } = this.formLogin.value

    this.authService.sendCredentials(user, password)
    .subscribe(responseOK => {
      console.log("Sesion iniciada correctamente", responseOK)      
      this.hideLoading();
      this.showVerified();
    },
    err => {
      console.log('Ocurrio un error con el usuario o password')
      this.hideLoading();
    })
  }

}
