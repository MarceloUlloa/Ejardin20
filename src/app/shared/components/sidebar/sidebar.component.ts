import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '@shared/services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  FRONTinstitucion: undefined | string = "lololo";

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: []}

  customOptions: Array<any> = []
  
  constructor(private router: Router, private tokenService: TokenService) {
    
  }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Niveles',
        icon: 'uil uil-estate',
        router: ['/', '/home']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]


    this.FRONTinstitucion = this.tokenService.leerTokenInstitucion()
 
  }

}


