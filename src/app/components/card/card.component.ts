import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

 
 title = input<string>();
 titles = input<string>();
 imageUrl = input<string | undefined>();

}
