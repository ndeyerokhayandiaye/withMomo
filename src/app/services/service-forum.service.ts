import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl} from './url';
import { Forum } from '../models/modelForum';

@Injectable({
  providedIn: 'root'
})
export class ServiceForumService {

  constructor(private http:HttpClient) { }


  // getAllForum():Observable<any>{
  //   return this.http.get<any[]>(`${baseUrl}/displayforum`);

  // }

  // ajoutForum(data:any):Observable<any>{
  //   return this.http.post<any>(`${baseUrl}/addforum`,data)
  // }





  getAllForums(): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${baseUrl}/displayforum`);
  }

  // getForum(id: number): Observable<Forum> {
  //   return this.http.get<Forum>(`${baseUrl}/displayforum/${id}`);
  // }

  createForum(forum: Forum): Observable<Forum> {
    return this.http.post<Forum>(`${baseUrl}/addforum`, forum);
  }

  updateForum(id: number, forum: Forum): Observable<Forum> {
    return this.http.put<Forum>(`${baseUrl}/forums/${id}`, forum);
  }

  deleteForum(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/deleteforum/${id}`);
  }

}
