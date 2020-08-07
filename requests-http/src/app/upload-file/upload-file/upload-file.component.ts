import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event){

    const selectFiles =  <FileList>event.srcElement.files;// Passando as informações do arquivo para a constante.
    
    //Lindando com um arq só
    //document.getElementById('customFileLabel').innerHTML = selectFiles[0].name; // Js puro, setando o nome do arquivo no campo de label.
    
    //Lindando com mutiplos arq
    const filesName = []; // Criando const de array vazia
    
    for(let i = 0; i<selectFiles.length; i++){ // Fazendo um laço que percorre para cada nome de arq existente
      filesName.push(selectFiles[i].name); // A cada arq existente, empurra no filesName Array.
    }
    document.getElementById('customFileLabel').innerHTML = filesName.join(', '); /* Depois de popular todo o filesName,
    (Js puro) seto no campo da label os registros do array filesName fazendo um join (juntando) todos separando com virgula e espaço*/
  }

}
