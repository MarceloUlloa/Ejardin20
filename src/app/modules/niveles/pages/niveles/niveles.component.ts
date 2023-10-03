import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NivelesService } from '@modules/niveles/servicios/niveles.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css'],
})



export class NivelesComponent  implements OnInit{
  personasnivel: any[] = [];
  docentenivel1: any[] = [];
  docentenivel2: any[] = [];
  alumnosnivel: any[] = [];
  alumnosnivel_beta: any[] = [];

  personaficha: any[] = [];
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

  sentidoorden:string = 'asc';
  columnaactualorden:string = "";

  id = 0

  @ViewChild('FichaModal') modalOpenFicha: any;
  
  constructor(private nivelesService: NivelesService, private route: ActivatedRoute, 
    private renderer: Renderer2, private el: ElementRef, private modalService: NgbModal
    ,private cdr: ChangeDetectorRef){
  }

  hayAlumnos: boolean = true;
  hayDocentes: boolean = false;
  hayAsistentes: boolean = false;

  cantAlumnos: number = 0
  cantDocentes: number = 0
  cantAsistentes: number = 0

  modalAbierto: boolean = false;
  modalData: any;

  contenidoHTML_Nombre:string = ""
  contenidoHTML_Foto:string = ""
  contenidoHTML_FechaNacimiento:string = ""
  contenidoHTML_Edad:string = ""
  contenidoHTML_Genero:string = ""


 
    transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): any[] {
      if (args === null) {
        return value
      } else {
        const tmpList = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1
          }
          else if (a[args] === b[args]) {
            return 0;
          }
          else if (a[args] > b[args]) {
            return 1;
          }
          return 1
        });
  


        return (sort === 'asc') ? tmpList : tmpList.reverse()
      }
    }


  ordena(columna: string) {
    if (this.hayAlumnos){
 
      this.alumnosnivel = this.transform(this.alumnosnivel, columna, this.sentidoorden);
      
      if (this.sentidoorden == 'asc')
        this.sentidoorden = 'desc' ;
      else
        this.sentidoorden = 'asc' ;

      this.columnaactualorden = columna

      console.log(this.columnaactualorden)

      this.cdr.detectChanges();
      
    }
  }
  openFicha(id: string) {

    this.personaficha = this.alumnosnivel.filter(item => item.idPERSONA === id)

    console.log(this.personasnivel)

    this.contenidoHTML_Nombre = this.personaficha[0].NOMBRES + " " + this.personaficha[0].APELLIDO1 + " " + this.personaficha[0].APELLIDO2
    this.contenidoHTML_Foto = this.personaficha[0].FOTO

    const nacimiento: any[] = this.personaficha[0].FECHANACIMIENTO.split(",")
    this.contenidoHTML_FechaNacimiento = "Fecha de Nacimiento: " +  nacimiento[0] 
    this.contenidoHTML_Edad = "Edad: " +  nacimiento[1] 
    this.contenidoHTML_Genero = "Género: " +  this.personaficha[0].GENERO

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
  
  showLoading() {
    const loadingElement = this.el.nativeElement.querySelector('#loading');
    this.renderer.setStyle(loadingElement, 'display', 'block');
  }

  hideLoading() {
    const loadingElement = this.el.nativeElement.querySelector('#loading');
    this.renderer.setStyle(loadingElement, 'display', 'none');
  }

  extraeEdad(fecha: string){
    const cadenanacimiento: string[] = fecha.split(",")
    return cadenanacimiento[cadenanacimiento.length-1]
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
    this.alumnosnivel = response.filter(item => item.TIPOPERSONA === 21)
    this.alumnosnivel.forEach(element => {element.FECHANACIMIENTO = this.nivelesService.formatearFecha(element.FECHANACIMIENTO) + "," + this.calcularEdad(element.FECHANACIMIENTO) 
    });

    this.alumnosnivel.forEach(element => {element.INFOADICIONAL1 = element.INFOADICIONAL1.padStart(2,"0")
    });

    if (response.length>0)
    {
      this.docentenivel1 = response.filter(item => item.TIPOPERSONA === 11); 
      this.cantDocentes = this.docentenivel1.length
      if (this.cantDocentes > 0) this.hayDocentes = true

      this.docentenivel2 = response.filter(item => item.TIPOPERSONA === 12);
      this.cantAsistentes = this.docentenivel2.length
      if (this.cantAsistentes > 0) this.hayAsistentes = true

      this.cantAlumnos = this.alumnosnivel.length

    }

    if (this.hayDocentes){
      this.imagendocente1 = this.docentenivel1[0].FOTO
      this.nombredocente1 = this.docentenivel1[0].NOMBRES + " " + this.docentenivel1[0].APELLIDO1 + " " + this.docentenivel1[0].APELLIDO2
    }
    else
    {
      this.nombredocente1 = "Sin docente asociado."
    }

    if (this.hayAsistentes){
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
      this.nombredocente2 = "Sin docente asociado."
    }      

    if (this.cantAlumnos>0)
    {
      this.hayAlumnos = true
    }
    else
    {
      this.hayAlumnos = false
    }
    this.numeropersonas = this.personasnivel.length;
    this.hideLoading();
    console.log(this.alumnosnivel )
    }



    )   
  }
}

