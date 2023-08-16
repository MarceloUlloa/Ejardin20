import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '../../../data/user.json'
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let httpClientSpy: { post: jasmine.Spy }
  let a: CookieService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO: Prueba del SendCredentials
  it('Debe de retornar un objeto con "data" y "tokenSession"', 
  (done:DoneFn) => {
    const user: any = mockUser.userOK
    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x'
    }

    httpClientSpy.post.and.returnValue(
      of (mockResponse)
    )

    service.sendCredentials("test@test.com", "12345678")
      .subscribe(responseApi =>{
        const getProperties = Object.keys(responseApi)
        expect(getProperties).toContain('data')
        expect(getProperties).toContain('tokenSession')
        done()

      })

  })


});
 