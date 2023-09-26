import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '@modules/home/services/home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  niveles: any[] = [];

  constructor(private homeService: HomeService, private router: Router, private renderer: Renderer2, private el: ElementRef){
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
    this.homeService.listNiveles(0, null)
    .subscribe((response: any[]) => {
      this.niveles = response;
      this.hideLoading();
    }
    )
  }

  RedirectNiveles(id: string){
    console.log("Redireccionado...")
    this.router.navigate(['/niveles/' + id])
  }


}
