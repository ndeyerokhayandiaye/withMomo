import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConditiondutilisationComponent } from './conditiondutilisation/conditiondutilisation.component';
import { PolitiqueComponent } from './politique/politique.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ForumSujetComponent } from './forum-sujet/forum-sujet.component';
import { ForumMessageComponent } from './forum-message/forum-message.component';

const routes: Routes = [
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'login', component: AuthentificationComponent },
  { path: 'conditionUtilisation', component: ConditiondutilisationComponent },
  { path: 'politique', component: PolitiqueComponent },
  { path: 'forumSujet', component: ForumSujetComponent },
  { path: 'forumMessage', component: ForumMessageComponent },



      // partie admin

  { path: 'admin', loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
