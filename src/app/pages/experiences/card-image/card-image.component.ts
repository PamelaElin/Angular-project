
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-image',
  imports: [],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.css'
})
export class CardImageComponent {
  title = input<string>();
  subtitle = input<string>();
  text = input<string>();
 
  imageUrl = input<string | undefined | null>();
}
