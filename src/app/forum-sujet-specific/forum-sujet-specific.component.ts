import { Component, OnInit } from '@angular/core';
import { ForumSujetService } from '../services/forum-sujet.service';
import { ServiceDomainesService } from 'src/app/services/service-domaines.service';
import { DomaineActivite } from '../models/DomaineActivite';
import { Sujet } from '../models/Sujet';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forum-sujet-specific',
  templateUrl: './forum-sujet-specific.component.html',
  styleUrls: ['./forum-sujet-specific.component.css']
})
export class ForumSujetSpecificComponent {
sujets: any;

  constructor(private forumSujetService: ForumSujetService,
               private domaineService: ServiceDomainesService,
               private route: ActivatedRoute,
               private router: Router) {}

  listeDomaines: DomaineActivite[];


  ngOnInit() {
    
    // this.chargerSujets(); // Appel de la méthode pour charger les sujets existants au chargement de la page
    this.listerDomaine();

    this.route.paramMap.subscribe((params: ParamMap) => {
    const id = params.get('id');
    console.log('ID:', id);
    // Utilise la valeur de l'id comme tu le souhaites

    // Vérifie si l'id est de type number
    const idNumber = Number(id);
    if (!isNaN(idNumber)) {
      // L'id est de type number, utilise-le
      console.log('ID (number):', idNumber);
    } else {
      this.router.navigate(['/accueil']);
      // L'id n'est pas de type number, gère l'erreur ou redirige vers une autre page
      console.error('ID invalide');
    }
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




