import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceLoginService } from 'src/app/services/service-login.service';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private loginService: ServiceLoginService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    const script = document.createElement('script');
    script.src = '../../../assets/js/script.js';
    document.body.appendChild(script);
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

}
