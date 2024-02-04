import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomaineActivite } from 'src/app/models/DomaineActivite';
import { ServiceDomainesService } from 'src/app/services/service-domaines.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-domaines-activites',
  templateUrl: './domaines-activites.component.html',
  styleUrls: [ './domaines-activites.component.css']
})
export class DomainesActivitesComponent implements OnInit {

  listeDomaines: DomaineActivite[];

  domaineActivite:FormGroup;
  userConnect:any;
  picture: File;
  description: string;
  fieldname: string ="";
  // fieldname!: string;

  constructor(private domaineService: ServiceDomainesService,
    private formbuilder:FormBuilder) {
      

  this.domaineActivite=this.formbuilder.group({
    fieldname:["",[Validators.required,Validators.maxLength(200)]],
    description:["",[Validators.required,Validators.maxLength(500)]],
    picture:["",Validators.required],
    user_id:[""],
  })

    }


ngOnInit(): void {
  this.userConnect = JSON.parse(localStorage.getItem("userConnect") || ""); 
  this.listerDomaine();
}

verifierChamps(title: any, text: any, icon: any) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon
  });
}

ajoutDomaine(){

  let formData = new FormData();
    formData.append('fieldname', this.domaineActivite.value.fieldname);
    console.log(this.fieldname);
    formData.append('description', this.domaineActivite.value.description);
    console.log(this.description);
    formData.append('picture', this.picture);
    console.log(formData);
   

  this.domaineService.ajoutDomaine(formData).subscribe(
    (response :any)=>{
      this.verifierChamps("Super","domaine ajouté avec succes","success")
    console.log(response);
    this.listeDomaines.unshift(response);
    this.domaineActivite.reset();
    this.domaineActivite.patchValue({
      fieldname: '',
      description: ''
    });
  },
  
  (err)=>{
    this.verifierChamps("Erreur","domaine non ajouté","error")
    console.log(err)
  }
  )
}

getFile(event: any) {
  console.warn(event.target.files[0]);
  this.picture= event.target.files[0] as File;
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

modifierDomaine(domaine: DomaineActivite) {
  // Afficher un formulaire de modification ou effectuer toute autre action nécessaire pour la modification

  // Exemple : Modifier le domaine d'activité dans la liste
  const index = this.listeDomaines.findIndex(item => item.id === domaine.id);
  if (index !== -1) {
    this.listeDomaines[index] = domaine;
  }
}

}


