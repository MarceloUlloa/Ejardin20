import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from '@shared/services/token.service';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css'],
}
)
export class SectionGenericComponent implements OnInit  {
  @ViewChild('logoutConfirmationModal') logoutConfirmationModal: any;

  FRONTusuarioactual: undefined | string = "";

  constructor(private tokenService: TokenService, private modalService: NgbModal) { }

  openLogoutConfirmationModal() {
    this.modalService.open(this.logoutConfirmationModal); // Abre el modal
  }

  confirmLogout() {
    this.modalService.dismissAll(); // Cierra todos los modales
    this.logout()
    // Aquí puedes llamar a tu servicio AuthService para realizar el logout
  }

  ngOnInit(): void {
    this.FRONTusuarioactual = this.tokenService.leerTokenUsuario()

  }

  logout(): void{

    //const isConfirmed = window.confirm('¿Estás seguro de que deseas cerrar sesión?');

    //if (isConfirmed) {
      this.tokenService.logout()
    //}
    
  }

}
