import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl} from './url';

@Injectable({
  providedIn: 'root'
})
export class ForumSujetService {


  constructor(private http:HttpClient) { }

  getSujets() {
    return this.http.get<any[]>(`${baseUrl}/displaytopic`); // Effectuer une requête GET vers l'API pour obtenir les sujets
  }

  ajoutSujet(nouveauSujet: any) {
    return this.http.post<any>(`${baseUrl}/addtopic`, nouveauSujet); // Effectuer une requête POST pour ajouter un nouveau sujet
  }

  editerSujet(sujet: any) {
    const url = `${baseUrl}/${sujet.id}`;
    return this.http.put<any>(`${baseUrl}/updatespecifictopic`, sujet); // Effectuer une requête PUT pour mettre à jour un sujet existant
  }

  supprimerSujet(sujet: any) {
    const url = `${baseUrl}/${sujet.id}`;
    return this.http.delete<any>(`${baseUrl}/deletespecifictopic`); // Effectuer une requête DELETE pour supprimer un sujet
  }

}
