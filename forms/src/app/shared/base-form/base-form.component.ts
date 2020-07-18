import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<div></div>'
})
export  abstract class BaseFormComponent implements OnInit {

  form : FormGroup;



  ngOnInit() {
  }

  abstract submit();

  onSubmit(){
    if (this.form.valid){
      this.submit();
    } 
    else { //Caso o form não seja valido, troca os campos para touched e aplica o stylo de erro que é acionado quando o campo é touched
    this.checkFormValidation(this.form)//Passando o proprio form para analisar o objeto
    }
  }

  //Valid Form
  checkFormValidation(form: FormGroup | FormArray){
    Object.keys(form.controls).forEach(key => {// Object key retorna os key values de cada objeto. 
      console.log(key)// Será retornado os values key do objeto form (Os values keys aninhados (valores do endereco) não vão ser retornado por essa function)
      const control = form.get(key);//Pegando o value key do formulario
      control.markAsTouched();//Aplicando a classe de touched para a mudança de estilo
      if(control instanceof FormGroup || control instanceof FormArray) { //Verificando se alguma value key é um FormGroup (Um objeto aninhado)
        this.checkFormValidation(control) //Caso seja passa sobre a validação, pois o Object key não pega aninhados, portanto é necessario fazer uma "apropriação"
      }
    });
  }

  resetForm(){
    this.form.reset()
  }

  checksValidTouched(field){
    return !this.form.get(field).valid && this.form.get(field).touched // Verifica se o campo do válido de acordo com a condição passada; (Reactive forms já temos os dados no componente por isso é diferente do template drive)
  }

  errorStyle(field){
    return {
      'was-validated': this.form.get(field).valid && this.form.get(field).touched
    }   
  }

  //Formatting CSS
  checkValidEmail(){
    let fieldEmail = this.form.get('email')
    if(fieldEmail.errors){
      return fieldEmail.errors['email'] && fieldEmail.touched
    }
  }
  

}
