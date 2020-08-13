import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { fromEventPattern } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(
    private httpClient : HttpClient
  ) { }

  upload(files: Set<File>, url: string) { 
    
    
    const formData = new FormData(); // Instaciando um formData
    files.forEach(file => formData.append('file', file, file.name)); // Fazendo um forEach usando o append()


        // Exemplo de request manual no servidor
    //const request = new HttpRequest('POST', url, formData);
    //return this.httpClient.request(request);
        
        // Exemplo com o HttpClient
      return this.httpClient.post(url, formData,{ // Retornando um post sobre os parametros para quem chamou o método
        observe: 'events', // Captura os eventos
         reportProgress: true // Reporta o progresso -> Mostrando o quanto foi carregado e o total
      }) 
  }


  download(url: string) {
    return this.httpClient.get(url, {
      responseType: 'blob' as 'json'
    })
  }

  handleFile(resp: any, fileName: string) {
    const file = new Blob([resp], { // Criando uma instancia de Blob para o retorno (Que de fato é um blob)
      type: resp.type // Setando que a resposta é do type blob
    }); 

    // A Parte de download quem genrencia é o próprio navegador portato o código será todo JS PURO.

    // IE
    if(window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(file);
      return;
    }

    // Chrome
    const blob = window.URL.createObjectURL(file);

    const link = document.createElement('a');
    link.href = blob;
    link.download = fileName;

    // link.click(); // Esse método foi descontinuado no Firefox
    
    // Chrome e Firefox
    link.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }))

    setTimeout(() => { // O Remove não funciona emediatamente por isso usando um setTimeOut
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  }
} 


