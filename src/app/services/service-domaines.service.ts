import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './url';

@Injectable({
  providedIn: 'root'
})
export class ServiceDomainesService {

  constructor(private http:HttpClient) { }
  ajoutDomaine(data:any){
    return this.http.post(`${baseUrl}/addfield`,data)

  }


  // listerDomaine(): Observable<DomaineActivite[]>{
  //   return this.http.get<DomaineActivite[]> (`${baseUrl}/listdomaines`);
  // }

  listerDomaine(){
    return this.http.get (`${baseUrl}/displayfield`);
  }



  // modifierDomaine(domaine: DomaineActivite) {
  //   const url = `${this.apiUrl}/${domaine.id}`;
  //   return this.http.put<DomaineActivite>(`${baseUrl}/displayfield`, domaine);
  // }

  // modifierDomaine(domaine: DomaineActivite): Observable<DomaineActivite> {
  //   const url = `${this.apiUrl}/${domaine.id}`;
  //   return this.http.put<DomaineActivite>(url, domaine);
  // }



}




 
