import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { Cabins } from '../../models/model';


@Component({
  selector: 'app-cabins',
  imports: [CardComponent],
  templateUrl: './cabins.component.html',
  styleUrl: './cabins.component.css'
})


export class CabinsComponent {
  titles: Cabins[] = [
    {
      title: '1',
      imageUrl: '/assets/inicio.jpg'

    },
    {
        title: '2',
      imageUrl: '/assets/inicio.jpg'
    }
  ];
}
