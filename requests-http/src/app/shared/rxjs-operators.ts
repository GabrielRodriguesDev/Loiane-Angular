import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';


export function filterReponse<T>(){
    return pipe(
        filter((event: HttpEvent<T>) => event.type == HttpEventType.Response),
         //Filtrando para ver se é "HttpEventType.Response"
        map((res:HttpResponse<T>) => res.body) // Retornando apenas o corpo da reposta
    ); 
}

export function uploadProgress<T>(cb: (progress: number) => void) {
    return tap((event: HttpEvent<T>) => {
        if(event.type == HttpEventType.UploadProgress) { // Caso o event sendo executado seja "HttpEventType.UploadProgress"
            cb(Math.round((event.loaded * 100) / event.total)) // Executando uma function de callback e calculando em porcentagem sem casa deci
        }
    })
}