import { Component } from '@angular/core';
import { ServiceForumService } from 'src/app/services/service-forum.service';





@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forums: any[] = [];
  nouveauForum: any = { forumname: '', description: '' };

  constructor(private forumService:  ServiceForumService) { }

  ngOnInit() {
    this.getForums();
  }

  getForums() {
    this.forumService.getAllForum().subscribe(forums => {
      this.forums = forums;
      console.log(forums);
      console.log(this.nouveauForum)
    });
  }

  ajouterForum() {
    this.forumService.ajouterForum(this.nouveauForum).subscribe(() => {
      this.getForums();
      this.nouveauForum = { forumname: '', description: '' };
      console.log("bonjour")
    });
  }
}





// import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterLink } from '@angular/router';
// import { Forum } from 'src/app/models/modelForum';
// import { ServiceForumService } from 'src/app/services/service-forum.service';
// import { DataTablesModule } from "angular-datatables";
// import { Router } from '@angular/router';


// interface Element {
//   nom: string;
// }

// @Component({
//   selector: 'app-forum', 
  
//   templateUrl: './forum.component.html',
//   styleUrls: [ './forum.component.css']
// })
// export class ForumComponent implements OnInit {
  
//   termeRecherche: string = '';
//   forums: Forum[] = [];
//   nouveauForum: Forum = {
//     forumname: '',
//     description: '',
//     user_id: 1,
//   };

//   constructor(private forumService: ServiceForumService) { }
//   dtOptions: DataTables.Settings = {};

//   ngOnInit(): void {

//     this.dtOptions = {
//       pagingType: 'full_numbers'
//     };

//     this.getForums();
//   }


//   getForums(): void {
//     this.forumService.getAllForum()
//       .subscribe(forums => this.forums = forums);
//   }

//   ajouterForum(forumname: string, description: string): void {
//     console.log(typeof(forumname));
//     console.log(description);
//     if (forumname && description) {
//       const nouveauForum: Forum = {
//         forumname: forumname,
//         description: description,
//         user_id: 1,
//       };
//       this.forumService.ajouterForum(nouveauForum)
//         .subscribe(forum => {
//           // this.forums.push(forum);
//           console.log(forum);

//           this.nouveauForum.forumname = '';
//           this.nouveauForum.description = '';
//         });
//     }
//   }




//   elementsFiltres: Element[] = [];
//   elements: Element[] = [];

// filtrerElements(): void {
//   this.elementsFiltres = this.elements.filter(element =>
//     element.nom.toLowerCase().includes(this.termeRecherche.toLowerCase())
//   );
// }
// }