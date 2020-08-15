import { Injectable } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

enum Alertypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  DARK = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  showAlert(message: string, type: Alertypes, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent); /* Iniciando o modal com base em um component
    (O componente tem que estar habito a ser usado) */
    bsModalRef.content.type = type; // "content" é a propriedade por onde passamos informações "InputProperty"
    bsModalRef.content.message = message;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, Alertypes.DANGER);
  }

  showAlertSuccess(message: string){
    this.showAlert(message, Alertypes.SUCCESS, 3000);
  }

  showAlertWarning(message: string){
    this.showAlert(message, Alertypes.WARNING);
  }

  showAlertInfo(message: string){
    this.showAlert(message, Alertypes.INFO);
  }

  showAlertDark(message: string){
    this.showAlert(message, Alertypes.DARK);
  }

  showConfirm(title: string, message: string, rightButton: string, leftButton: string) {//Chamando o método que passa o parametros necessários e inicia a modal
    const bsModalRef : BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title; // Acessando todas as variaveis globais do ConfirmModal... Neste caso as @Input para setar algum valor necessário.
    bsModalRef.content.message = message; 
    bsModalRef.content.rightButton = rightButton;
    bsModalRef.content.leftButton = leftButton;

    return (<ConfirmModalComponent> bsModalRef.content).confirmResult; // Tipando o retorno para pegar o intelissense, e agora sabemos que o confirmResult retorna um observable.
  }
}
