import { Component } from '@angular/core';

import {  Experiences } from '../../models/model';
import { CardImageComponent } from "./card-image/card-image.component";

@Component({
  selector: 'app-experiences',
  imports: [ CardImageComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {

    
  image: Experiences[] = [

    {
      
      imageUrl: '/assets/galeria-5.jpeg',
    },
    {
        imageUrl: '/assets/galeria-7.jpeg',
    },
    {
     imageUrl: '/assets/galeria-6.jpeg',
    },
  ];
}
