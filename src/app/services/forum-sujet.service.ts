import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl} from './url';
import { Observable } from 'rxjs/internal/Observable';
import { Sujet } from '../models/Sujet';

@Injectable({
  providedIn: 'root'
})
export class ForumSujetService {


  constructor(private http:HttpClient) { }

  getAllForums(): Observable<Sujet[]> {
    return this.http.get<Sujet[]>(`${baseUrl}/displaytopic`);
  }

 
  createForum(forum: Sujet): Observable<Sujet> {
    return this.http.post<Sujet>(`${baseUrl}/addtopic`, forum);
  }

  updateForum(id: number, forum: Sujet): Observable<Sujet> {
    return this.http.put<Sujet>(`${baseUrl}/topic/${id}`, forum);
  }

  deleteForum(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/deletetopic/${id}`);
  }









  // getTopics(): Observable<Topic[]> {
  //   return this.http.get<Topic[]>(`${baseUrl}/displaytopic`);
  // }

  // createTopic(topicData: Topic): Observable<Topic> {
  //   return this.http.post<Topic>(this.apiUrl, topicData);
  // }

  // updateTopic(topicId: number, updatedContent: string): Observable<Topic> {
  //   const url = `${this.apiUrl}/${topicId}`;
  //   const data = { content: updatedContent };
  //   return this.http.put<Topic>(url, data);
  // }

  // deleteTopic(topicId: number): Observable<any> {
  //   const url = `${this.apiUrl}/${topicId}`;
  //   return this.http.delete(url);
  // }




  // getSujets() {
  //   return this.http.get<any[]>(`${baseUrl}/displaytopic`); // Effectuer une requête GET vers l'API pour obtenir les sujets
  // }

  // ajoutSujet(nouveauSujet: any) {
  //   return this.http.post<any>(`${baseUrl}/addtopic`, nouveauSujet); // Effectuer une requête POST pour ajouter un nouveau sujet
  // }

  // editerSujet(sujet: any) {
  //   const url = `${baseUrl}/${sujet.id}`;
  //   return this.http.put<any>(`${baseUrl}/updatespecifictopic`, sujet); // Effectuer une requête PUT pour mettre à jour un sujet existant
  // }

  // supprimerSujet(sujet: any) {
  //   const url = `${baseUrl}/${sujet.id}`;
  //   return this.http.delete<any>(`${baseUrl}/deletespecifictopic`); // Effectuer une requête DELETE pour supprimer un sujet
  // }

}
