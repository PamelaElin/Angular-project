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
      title: "Cabaña Bosque Encantado",
     subtitle: "Noruega, Bergen, Calle de los Pinos 54",
      text: "Una cabaña rodeada de naturaleza en el corazón de Bergen, Noruega. Cuenta con un acogedor salón con chimenea, cocina totalmente equipada y una terraza con vistas al bosque. Capacidad para 6 personas.",
  
      imageUrl: '/assets/galeria-1.jpeg',
    },
    {
      title: "Cabaña de Montaña",
      subtitle: "Suiza, Zermatt, Ruta Alpina 123",
      text: "Ubicada en las montañas suizas, esta cabaña ofrece una vista impresionante de los Alpes. Dispone de jacuzzi, sauna y acceso directo a rutas de senderismo. Capacidad para 8 personas.",
   
      imageUrl: '/assets/galeria-2.jpeg',
    },
    {
      title: "Cabaña del Lago",
      subtitle: "Canadá, Quebec, Avenida de los Lagos 7",
      text: "Con una hermosa vista al lago, esta cabaña cuenta con un amplio jardín, una terraza flotante y un muelle para disfrutar de deportes acuáticos en verano. Capacidad para 4 personas.",
        imageUrl: '/assets/galeria-3.jpeg',
    },
    {
     title: "Cabaña del Bosque Verde",
     subtitle: "Estados Unidos, Oregon, Camino al Bosque 35",
     text: "Cabaña acogedora en medio de un frondoso bosque en Oregon, Estados Unidos. Ofrece amplias habitaciones, una cocina rústica y un cómodo sofá para disfrutar de las noches junto a la chimenea. Capacidad para 5 personas.",
   imageUrl: '/assets/galeria-4.jpeg',
    },
  ];
}