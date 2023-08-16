import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
      declarations: [LoginPageComponent]
    }).compileComponents;
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: Tu primer encunciado el cual debe de asegurar lo siguiente
  //TODO: Debe de asegurarse que el formulario sea invalido cuando ingrese

  //TODO: Patron AAA
  

  it('🛑 Debería de retornar invalido el formulario', () => {

    //TODO: Arrange
    const mockCredentials = {
      email: '0x0x0x0x0x0x0',
      password: '111111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //TODO: Act

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //TODO: Assert
    
    expect(component.formLogin.invalid).toEqual(true)
  });
});
