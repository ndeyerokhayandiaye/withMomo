import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl} from './url';

@Injectable({
  providedIn: 'root'
})
export class ServiceForumService {

  constructor(private http:HttpClient) { }


  getAllForum():Observable<any>{
    return this.http.get<any[]>(`${baseUrl}/displayforum`);

  }

  ajouterForum(data:any):Observable<any>{
    return this.http.post<any>(`${baseUrl}/addforum`,data)
  }


  
  // supprimerForum(data:any):Observable<any>{
  //   return this.http.delete<any>(`${baseUrl}/deleteforum/`,data)
    
  // }

  // supprimerForum(forumId: number): Observable<void> {
  //   const url = `${this.baseUrl}/${forumId}`;
  //    return this.http.delete<void>(`${baseUrl}/deleteforum/`,forumId);
  








  // getAllForum(): Observable<any[]> {
  //   return this.http.get<any[]>(`${baseUrl}/displayforum`);
  // }

  // ajouterForum(data: any): Observable<any> {
  //   return this.http.post<any>(`${baseUrl}/addforum`, data);
  // }



}
