import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { environment1 } from '../../../environments/environment';
import { uploadProgress, filterReponse } from '../../shared/rxjs-operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']

})
export class UploadFileComponent implements OnInit {

  files: Set<File>;
  progress = 0;

  constructor(private service: UploadFileService) { }

  ngOnInit() { }

  onChange(event) {
    console.log(event);

    const selectedFiles = <FileList>event.srcElement.files;
    // document.getElementById('customFileLabel').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');

    this.progress = 0;
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service.upload(this.files, environment1.BASE_URL + '/upload')
        .pipe(
          uploadProgress(progress => {
            console.log(progress);
            this.progress = progress;
          }),
          filterReponse()
        )
        .subscribe(response => { console.log('Upload Concluído')
          this.progress = 0
    });
        // .subscribe((event: HttpEvent<Object>) => {
        //   // console.log(event);
        //   if (event.type === HttpEventType.Response) {
        //     console.log('Upload Concluído');
        //   } else if (event.type === HttpEventType.UploadProgress) {
        //     const percentDone = Math.round((event.loaded * 100) / event.total);
        //     // console.log('Progresso', percentDone);
        //     this.progress = percentDone;
        //   }
        // } );
    }
  }
  onDownloadExcel() {
    this.service.download(environment1.BASE_URL + '/downloadExcel')
    .subscribe((resp: any) => {
     this.service.handleFile(resp, 'Teste.xlsx')
    })
  }

  onDownloadPDF() {
    this.service.download(environment1.BASE_URL + '/downloadPDF') // Fazendo o Get do endpoint correto (servidor)
    .subscribe((resp: any) => { // Chamando o método JSPURO com base do get no endpoint faz o download do Blob retornado no get
      this.service.handleFile(resp, 'Teste.PDF') // Passando os parametros o primeiro o resp do get que seria o Blob (arq), e o nome do arq
    })
  }
}