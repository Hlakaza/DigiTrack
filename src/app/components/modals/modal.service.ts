import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  @Output() toggleModal: EventEmitter<string> = new EventEmitter<string>();
  @Output() bodyModal: EventEmitter<string> = new EventEmitter<string>();
  @Output() closeMobileNav: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }
  /**
   * @param {string} id
   *
   * @example
   * How to open Modal
   * this.modal.open('large')
   *
   *
   */
  open(id: string) {
    this.setModal('open', id);
  }

  /**
   * @param {string} id
   *
   * @example
   * inject modal service into any component and use the following example:
   * this.modal.close('login')
   *
   * @returns []
   */
  close(id: string) {
    this.setModal('close', id, null);
  }

  /**
   *
   * @example
   * inject modal service into any component and use the following example:
   * this.modal.clearAll()
   *
   * @returns []
   */
  clearAll() {
    this.toggleModal.emit('clear');
    this.getModal();
  }

  setModal(type: string, id: string, value = '') {
    this.toggleModal.emit(`${type},${id},${value}`);
    this.getModal();
  }

  getModal() {
    return this.toggleModal;
  }

  setContent(value: any) {
    this.bodyModal.emit(`${value}`);
    this.getContent();
  }

  getContent() {
    return this.bodyModal;
  }
}
