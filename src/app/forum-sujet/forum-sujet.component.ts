import { Component, OnInit } from '@angular/core';
import { ForumSujetService } from '../services/forum-sujet.service';
import { ServiceDomainesService } from 'src/app/services/service-domaines.service';
import { DomaineActivite } from '../models/DomaineActivite';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forum-sujet',
  templateUrl: './forum-sujet.component.html',
  styleUrls: ['./forum-sujet.component.css']
})
export class ForumSujetComponent implements OnInit {

  constructor(private forumSujetService: ForumSujetService,
    private domaineService: ServiceDomainesService,
    private route: ActivatedRoute,
    private http: HttpClient) {}

  listeDomaines: DomaineActivite[];
             
  ngOnInit(): void {
      this.listerDomaine();

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
