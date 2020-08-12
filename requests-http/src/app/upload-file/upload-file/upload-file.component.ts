import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpEventType, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files: Set<File>; // A estrutua de dados 'Set' já cuida dos arquivos não deixando importar mais de um do mesmo.
  progress: number;

  constructor(
    private uploadFileService: UploadFileService
  ) { }

  ngOnInit(): void {
  }

  onChange(event){

    const selectFiles =  <FileList>event.srcElement.files;// Passando as informações do arquivo para a constante.
    
    //Lindando com um arq só
    //document.getElementById('customFileLabel').innerHTML = selectFiles[0].name; // Js puro, setando o nome do arquivo no campo de label.
    
    //Lindando com mutiplos arq
    const filesName = []; // Criando const de array vazia
    
    this.files = new Set(); // Instanciado a estrutura de dados Set na variavel 
    
    for(let i = 0; i<selectFiles.length; i++){ // Fazendo um laço que percorre para cada nome de arq existente
      filesName.push(selectFiles[i].name); // A cada arq existente, empurra no filesName Array.
      this.files.add(selectFiles[i]);
    }
    document.getElementById('customFileLabel').innerHTML = filesName.join(', '); /* Depois de popular todo o filesName,
    (Js puro) seto no campo da label os registros do array filesName fazendo um join (juntando) todos separando com virgula e espaço*/
    this.progress = 0
  }

  onUpload() {
    if(this.files && this.files.size > 0) { // Verficando se o valor existe
      this.uploadFileService.upload(this.files, '/api/upload') // Chamando o serviço e passando os parametros necessários.
      .subscribe((event: HttpEvent<Object>) => { // Recebendo algo do tipo HttpEvent
        // HttpEventType // É um enumerdaor que mostra o retorno do evento acessando a classe conseguimos ver seu número e descrição 
        
        if(event.type == HttpEventType.Response) {
          console.log('Upload Concluido')
          this.progress = null

        } else 

        if (event.type == HttpEventType.UploadProgress) {
          const percetDone = Math.round((event.loaded * 100) / event.total);
          console.log('Progresso', percetDone);
          this.progress = percetDone;
        }
        console.log(event) // Verificando oque está sendo retornardo
      
      })
    } // Nesse caso é necessário fazer ums unsubscribe.
  }

}
