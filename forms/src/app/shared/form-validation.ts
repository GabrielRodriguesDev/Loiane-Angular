import { FormControl } from '@angular/forms';

export class FormValidations {

    static cepValidator(control: FormControl){//Validando o campo CEP
        const cep = control.value //Recebendo o CEP
        if(cep && cep !== ''){ //Se o campo não for vazio
        var validacep = /^[0-9]{8}$/;
        return validacep.test(cep) ? null : { cepInvalid : true };//Testa a expressão regular, se for true retorna null se for false retorna o objeto de erro  com true
        }
        return null
    }
}