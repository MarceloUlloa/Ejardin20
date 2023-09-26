import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NivelesService } from '@modules/niveles/servicios/niveles.service';

@Component({
  selector: 'app-niveles',
  templateUrl: './niveles.component.html',
  styleUrls: ['./niveles.component.css']
})

export class NivelesComponent  implements OnInit{
  personasnivel: any[] = [];
  id = 0
  constructor(private nivelesService: NivelesService, private route: ActivatedRoute){
  }
  
  ngOnInit(): void {
    //this.showLoading();


    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.nivelesService.listPersonasNivel(this.id)
    .subscribe((response: any[]) => {
      this.personasnivel = response;
      console.log(this.personasnivel)
      //this.hideLoading();
    }
    )   
  }
}
