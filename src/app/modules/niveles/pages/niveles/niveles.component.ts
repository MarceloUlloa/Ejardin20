import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NivelesService } from '@modules/niveles/servicios/niveles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css'],
  template: `
    <div #FichaModal>
      <app-modal-content [data]="parametro">ggfdhbgf</app-modal-content>
    </div>
  `,
})



export class NivelesComponent  implements OnInit{
  personasnivel: any[] = [];
  docentenivel1: any[] = [];
  docentenivel2: any[] = [];
  nivel: any[] = [];
  nombrenivel1: string = "";
  nombrenivel2: string = "";
  tiponivel: string = "";
  imagennivel: string = "";
  numeropersonas: number = 0;

  imagendocente1: string = "";
  nombredocente1: string = "";

  imagendocente2: string = "";
  nombredocente2: string = "";

  id = 0

  @ViewChild('FichaModal') modalOpenFicha: any;
  
  constructor(private nivelesService: NivelesService, private route: ActivatedRoute, private renderer: Renderer2, private el: ElementRef, private modalService: NgbModal){
  }
  modalAbierto: boolean = false;
  modalData: any;
  contenidoHTML:string = ""

  openFicha(id: string) {
    this.contenidoHTML = '<h1>hola' + id +  '</h1>'
    this.modalService.open(this.modalOpenFicha, { windowClass: 'mi-modal', modalDialogClass : 'mi-modal' }); // Abre el modal
  }

  calcularEdad(fechaNacimiento: string): string {
    const fechaNacimientoDate = new Date(fechaNacimiento);
    const hoy = new Date();
  
    let anios = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    let meses = hoy.getMonth() - fechaNacimientoDate.getMonth();
    let dias = hoy.getDate() - fechaNacimientoDate.getDate();
  
    // Ajustar la edad si los meses o días son negativos
    if (dias < 0) {
      meses--;
    }
  
    if (meses < 0) {
      anios--;
      meses += 12; // Ajustar meses a un valor positivo
    }
  
    if (anios === 0) {
      if (meses === 0) {
        return `${dias} día${dias !== 1 ? 's' : ''}`;
      } else {
        return `${meses} mes${meses !== 1 ? 'es' : ''}`;
      }
    } else {
      if (meses === 0) {
        return `${anios} año${anios !== 1 ? 's' : ''}`;
      } else {
        return `${anios} año${anios !== 1 ? 's' : ''} y ${meses} mes${meses !== 1 ? 'es' : ''}`;
      }
    }
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
  
  ngOnInit(): void {
    this.showLoading();

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.nivelesService.getDetallesNivel(this.id)
    .subscribe((response) => {
      this.nivel = response;
      this.nombrenivel1 = response.varNOMBRENIVEL
      this.nombrenivel2 = response.varNOMBRENIVEL2
      this.tiponivel = response.varNOMBRETIPONIVEL
      this.imagennivel = response.varIMAGEN
    })

    this.nivelesService.listPersonasNivel(this.id)
    .subscribe((response: any[]) => {
      this.personasnivel = response.filter(item => item.TIPOPERSONA === 21)

      this.personasnivel.forEach(element => {element.FECHANACIMIENTO = this.calcularEdad(element.FECHANACIMIENTO)
      });



      this.docentenivel1 = response.filter(item => item.TIPOPERSONA === 11); 
      
      this.imagendocente1 = this.docentenivel1[0].FOTO
      this.nombredocente1 = this.docentenivel1[0].NOMBRES + " " + this.docentenivel1[0].APELLIDO1 + " " + this.docentenivel1[0].APELLIDO2

      this.docentenivel2 = response.filter(item => item.TIPOPERSONA === 12);
      if (this.docentenivel2.length != 0)
      {
      this.imagendocente2 = this.docentenivel2[0].FOTO

        if (this.docentenivel2[0].NOMBRES != null)
        {
          this.nombredocente2 += this.docentenivel2[0].NOMBRES + " "
        }
        if (this.docentenivel2[0].APELLIDO1 != null)
        {
          this.nombredocente2 += this.docentenivel2[0].APELLIDO1 + " "
        }
        if (this.docentenivel2[0].APELLIDO2 != null)
        {
          this.nombredocente2 += this.docentenivel2[0].APELLIDO2 + " "
        }                
      }      
      else
      {
        this.nombredocente2 = "Sin docente asociado"
      }

      this.numeropersonas = this.personasnivel.length;
      this.hideLoading();
    }



    )   
  }
}

