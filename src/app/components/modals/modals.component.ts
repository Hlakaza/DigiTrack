import { Component, OnInit, Renderer2 } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  modals = [];
  modalToggle = [];
  modalStyles = {};
  modalContent: any;
  modalGameId = '';
  constructor(public modal: ModalService, private render: Renderer2 ) {
        this.modal.getModal().subscribe(value => {
      // Split string into params.
      setTimeout(() => {
        this.modalToggle = value.split(',');
        if (this.modalToggle[0] === 'clear') {
          this.modals = [];
          this.render.removeClass(document.body, 'modal-open');
        } else {
          this.modalToggle[0] === 'open' ? this.modalOpen(this.modalToggle[1]) : this.modalClose(this.modalToggle[1]);
        }
      }, 0);
    });
   }

  ngOnInit() {
     // Listen to modal service to toggle open / close
     this.modal.getContent().subscribe(value => {
         this.modalContent = value;
    });
  }

  modalOpen(id: string) {
    this.modals[id] = true;
    this.render.addClass(document.body, 'modal-open');
  }

  modalClose(id: string) {
    this.modals[id] = false;
    this.render.removeClass(document.body, 'modal-open');
  }

  modalClear() {
    this.modal.clearAll();
  }

}
