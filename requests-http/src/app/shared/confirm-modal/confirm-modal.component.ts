import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string; // Dados a ser recebidos para a Modal
  @Input() message: string;
  @Input() rightButton: string;
  @Input() leftButton: string;

  confirmResult: Subject<boolean> // Subject é do tipo que retorna um observavel, então essa variavel é observavel

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.confirmResult = new Subject;
  }

  onConfirm() {
    this.confirmAndClose(true)
  }
 
  onClose() {
    this.confirmAndClose(false)
  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value); // Emitindo o valor de true para a variavel observavel para quem se inscreva nela possa fazer algo quando houver mutação
    this.bsModalRef.hide()
  }


}
