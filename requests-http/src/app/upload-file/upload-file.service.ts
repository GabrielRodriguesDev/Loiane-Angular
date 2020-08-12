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
}
