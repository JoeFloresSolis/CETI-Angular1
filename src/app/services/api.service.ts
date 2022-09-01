import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  public baseUrl:string= environment.apiUrl;

  constructor(private http:HttpClient) {}//!Inyección de dependencias, emplea metódos y atributos de alguién más
    
  getpersonajes():Observable<any[]>{
    const url= `${this.baseUrl}/pokemon`;

    return this.http.get(url)
    .pipe(
      map((res:any) =>{
        return res.results
      })
    )
    
  }
}
