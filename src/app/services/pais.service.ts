import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../paises/interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set( 'fields','name,capital,alpha2Code,flag,population,translations,nativeName,numericCode')
  }


  buscarPais(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url, {params:this.httpParams});
      
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url,{params:this.httpParams});
      
  }
  
  buscarRegion(regionActiva: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${regionActiva}`
    console.log("sevicio",regionActiva);
    return this.http.get<Country[]>(url);

      
  }
  codePais(termino: string): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${termino}`  
    return this.http.get<Country>(url,{params:this.httpParams});
      
  }

  

  constructor(private http :HttpClient) { }
}
