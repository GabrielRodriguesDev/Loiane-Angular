import { FormControl, FormArray, FormGroup } from '@angular/forms';

export class FormValidations {

    static cepValidator(control: FormControl){//Validando o campo CEP
        const cep = control.value //Recebendo o CEP
        if(cep && cep !== ''){ //Se o campo não for vazio
        var validacep = /^[0-9]{8}$/;
        return validacep.test(cep) ? null : { cepInvalid : true };//Testa a expressão regular, se for true retorna null se for false retorna o objeto de erro  com true
        }
        return null
    }


    static equalsTo(otherField: string){
        const validator = (control : FormControl) => {
            if(otherField == null) {
                throw new Error('É necessário informar um campo. ');
            }
            console.log(<FormGroup>control.root)
            
            if(!control.root || (<FormGroup>control.root).controls){
                return null
            }
            const field = (<FormGroup>control.root).get(otherField);
            if(!field){
                throw new Error('É necessário informar um campo válido. ')
            }
            if(field.value !== control.value){
                return { esqualsTo : otherField}
            }
        };
        return validator;
    }
}