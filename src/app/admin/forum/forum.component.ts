import { Component } from '@angular/core';
import { ServiceForumService } from 'src/app/services/service-forum.service';
import { DomaineActivite } from 'src/app/models/DomaineActivite';
import { ServiceDomainesService } from 'src/app/services/service-domaines.service';
import { ActivatedRoute } from '@angular/router';
import { ServiceLoginService } from 'src/app/services/service-login.service';
import { NgForm } from '@angular/forms';
import { Forum } from 'src/app/models/modelForum';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  listeDomaines: DomaineActivite[];
  
forums: Forum[] = [];
newForum: Forum = { id: 0, forumname: '', description: '', field_id: 13, user_id: 0 };

  constructor(private forumService: ServiceForumService,
    private domaineService: ServiceDomainesService,
    private route: ActivatedRoute,
    private loginService: ServiceLoginService) { }

  ngOnInit() {
    // this.getForums();
    this.listerDomaine();
   this.loadForums();

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
        console.log(domaines);
        this.listeDomaines = domaines;
      },
      (error) => {
        console.log(error);
      }
    );
  }

loadForums(): void {
  this.forumService.getAllForums().subscribe(
    forums => {
      this.forums = forums;
    },
    error => {
      console.log('Une erreur s\'est produite lors du chargement des forums :', error);
    }
  );
}

createForum(forum: Forum): void {
  this.forumService.createForum(forum).subscribe(
    createdForum => {
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

updateForum(forum: Forum): void {
  this.forumService.updateForum(forum.id, forum).subscribe(
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
  this.forumService.deleteForum(id).subscribe(
    () => {
      console.log('Le forum a été supprimé avec succès');
      this.loadForums(); // Actualiser la liste des forums après la suppression
    },
    error => {
      console.log('Une erreur s\'est produite lors de la suppression du forum :', error);
    }
  );
}

}


