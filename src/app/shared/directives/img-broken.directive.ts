import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @Input() customImg: string = ''
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('🛑 Esta imagen reventó -->', this.elHost)
    elNative.src = '../../../assets/images/perfil-generico.png'
  }

  constructor(private elHost:ElementRef) { 


  }

}
