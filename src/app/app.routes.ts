import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CabinsComponent } from './pages/cabins/cabins.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ContactComponent } from './pages/contact/contact.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cabañas', component: CabinsComponent },
  { path: 'experiencias', component: ExperiencesComponent },
  { path: 'contacto', component: ContactComponent },
  
  { path: '**', redirectTo: '' }
];;
