import { Component, OnInit } from '@angular/core';
import { ForumSujetService } from '../services/forum-sujet.service';
import { ServiceDomainesService } from 'src/app/services/service-domaines.service';
import { DomaineActivite } from '../models/DomaineActivite';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Sujet } from '../models/Sujet';
import { ServiceForumService } from '../services/service-forum.service';
import { ServiceLoginService } from '../services/service-login.service';

@Component({
  selector: 'app-forum-sujet',
  templateUrl: './forum-sujet.component.html',
  styleUrls: ['./forum-sujet.component.css']
})
export class ForumSujetComponent implements OnInit {

  constructor(private forumSujetService: ForumSujetService,
    private domaineService: ServiceDomainesService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private loginService: ServiceLoginService,
    ) {}

  listeDomaines: DomaineActivite[];
  forums: Sujet[] = [];
  newForum: Sujet = { id: 0, content: '', forum_id:0, user_id: 0 , message_received: 0, created_at:''};
  content = "";

             
  ngOnInit(): void {
      this.listerDomaine();
      this.loadForums;

   }


   
loadForums(): void {
  this.forumSujetService.getAllForums().subscribe(
    forums => {
      console.log("bonjour forum",forums)
      this.forums = forums;
    },
    error => {
      console.log('Une erreur s\'est produite lors du chargement des forums :', error);
    }
  );
}

createForum(forum: Sujet): void {
  let forum1= 
  this.forumSujetService.createForum(forum).subscribe(
    createdForum => {
      console.log("Sujet")
      console.log("BonSOIRRRRR",createdForum)
      // this.verifierChamps('Forum creé', 'Le forum a été créé avec succès : ' + createdForum.id, 'success');
      this.verifierChamps("Forum creé","Le forum a été créé avec succès","success")

      console.log('Le forum a été créé avec succès :', createdForum);
      this.loadForums(); // Actualiser la liste des forums après la création
    },
    error => {
      this.verifierChamps("Erreur","Une erreur s'est produite lors de la création du forum","error")
      console.log('Une erreur s\'est produite lors de la création du forum :', error);
    }
  );
}

updateForum(forum: Sujet): void {
  this.forumSujetService.updateForum(forum.id, forum).subscribe(
    updatedForum => {
      console.log('Le forum a été mis à jour avec succès :', updatedForum);
      this.loadForums(); // Actualiser la liste des forums après la mise à jour
    },
    error => {
      console.log('Une erreur s\'est produite lors de la mise à jour du forum :', error);
    }
  );
}

deleteForum(id: number): void {
  this.forumSujetService.deleteForum(id).subscribe(
    () => {
      console.log('Le forum a été supprimé avec succès');
      this.loadForums(); // Actualiser la liste des forums après la suppression
    },
    error => {
      console.log('Une erreur s\'est produite lors de la suppression du forum :', error);
    }
  );
}


logout() {
  this.loginService.logout().subscribe(
    () => {
      // Gérer la déconnexion réussie
      console.log('Déconnexion réussie');
      // Rediriger l'utilisateur vers une autre page si nécessaire
    },
    (error) => {
      // Gérer les erreurs de déconnexion
      console.log('Erreur lors de la déconnexion', error);
    }
  );
}
             

 


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

}
