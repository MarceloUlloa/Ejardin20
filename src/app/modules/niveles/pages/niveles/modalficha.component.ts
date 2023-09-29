// modal.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal" [class.open]="isOpen">
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
      {{ data }}
    </div>
  `,
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Input() data: any; // Atributo de entrada para recibir los datos del modal

  
}