import { Component, OnInit } from '@angular/core';
import { ForumSujetService } from '../services/forum-sujet.service';
import { Sujet } from '../models/Sujet';
import { ServiceDomainesService } from 'src/app/services/service-domaines.service';
import { DomaineActivite } from '../models/DomaineActivite';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-forum-sujet',
  templateUrl: './forum-sujet.component.html',
  styleUrls: ['./forum-sujet.component.css']
})
export class ForumSujetComponent implements OnInit {

  listeDomaines: DomaineActivite[];

  sujets: any[]=[]; // Variable pour stocker les sujets de forum
  nouveauSujet: any = {}; // Variable pour stocker les détails du nouveau sujet
  // user_id= 1;
  // message_received= 20;

  topic:Sujet={
    id: 0,
    content: '',
    forum_id: 0,
    user_id: 0,
    message_received: 0,
    created_at: '',
  }
  message_received: number;
  user_id: number;
  forum_id: number;

  constructor(private forumSujetService: ForumSujetService,
               private domaineService: ServiceDomainesService,
               private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.chargerSujets(); // Appel de la méthode pour charger les sujets existants au chargement de la page
    this.listerDomaine();
  }

  chargerSujets() {
    this.forumSujetService.getSujets().subscribe(
      (data) => {
        this.sujets = data; // Stocker les sujets récupérés dans la variable sujets
      },
      (error) => {
        console.log(error); // Gérer les erreurs de récupération des sujets
      }
    );
  }

  // ajoutSujet() {
  //   this.forumSujetService.ajoutSujet(this.nouveauSujet).subscribe(
  //     (data) => {
  //       this.sujets.push(data); // Ajouter le nouveau sujet à la liste des sujets affichés
  //       this.nouveauSujet = {}; // Réinitialiser les détails du nouveau sujet
  //     },
  //     (error) => {
  //       console.log(error); // Gérer les erreurs d'ajout du sujet
  //     }
  //   );
  // }

  // ajoutSujet() {
  //   if (!this.nouveauSujet.content) {
  //     console.log('Veuillez fournir les détails requis pour le nouveau sujet.');
  //     return;
  //   }
  
  //   this.forumSujetService.ajoutSujet(this.nouveauSujet).subscribe(
  //     (data) => {
  //       this.sujets.push(data); 
  //       this.nouveauSujet = {}; 
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  //  user_id:string;
  // this.user_id = localStorage.getItem('user_id');


  //lolllll ajoutSujet(){
  //   this.topic.user_id = localStorage.getItem('user_id');
  //   console.log(this.topic);
  //   this.forumSujetService.ajoutSujet(this.topic).subscribe(
  //     (data) => {
  //       this.sujets.push(data); 
  //       this.nouveauSujet = {};
  //     }
  //   )
  // }
  verifierChamps(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    });
  }

  listerDomaine(): void {
    this.domaineService.listerDomaine().subscribe(
      (domaines: DomaineActivite[]) => {
  
        console.log(domaines)
        this.listeDomaines = domaines;
      },
      (error) => {
        console.log(error);
        // Traitez l'erreur ici
      }
    );
  }

  ajoutSujet(){
    this.topic.user_id=this.user_id;
    this.topic.message_received=this.message_received;
   this.topic.forum_id=this.forum_id;
   this.topic.created_at= new Date().toString();
   console.log(this.sujets);
   
   this.forumSujetService.ajoutSujet(this.topic).subscribe(
     (response)=>{
      this.verifierChamps("sujet bien creer","sujet bien creer","success")
      console.log("sujet bien creer", response)
     }
     
   )
  }


  editerSujet(sujet: any) {
    this.forumSujetService.editerSujet(sujet).subscribe(
      (data) => {
        // Mettre à jour le sujet modifié dans la liste des sujets affichés
        const index = this.sujets.findIndex((s) => s.id === sujet.id);
        if (index !== -1) {
          this.sujets[index] = data;
        }
      },
      (error) => {
        console.log(error); 
      }
    );
  }

  supprimerSujet(sujet: any) {
    this.forumSujetService.supprimerSujet(sujet).subscribe(
      () => {
        // Supprimer le sujet de la liste des sujets affichés
        const index = this.sujets.findIndex((s) => s.id === sujet.id);
        if (index !== -1) {
          this.sujets.splice(index, 1);
        }
      },
      (error) => {
        console.log(error); // Gérer les erreurs de suppression du sujet
      }
    );
  }

}
