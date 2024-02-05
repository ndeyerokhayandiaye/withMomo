import { Component } from '@angular/core';
import { ServiceLoginService } from '../services/service-login.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-forum-message',
  templateUrl: './forum-message.component.html',
  styleUrls: ['./forum-message.component.css']
})
export class ForumMessageComponent {
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private loginService: ServiceLoginService,) { }

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

}
