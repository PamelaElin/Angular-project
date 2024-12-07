import { Component } from '@angular/core';

import { CustomButtonComponent } from "../../components/custom-button/custom-button.component";

@Component({
  selector: 'app-home',
  imports: [ CustomButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    cta: string = 'Reserva tu estadía';
    
   

}
