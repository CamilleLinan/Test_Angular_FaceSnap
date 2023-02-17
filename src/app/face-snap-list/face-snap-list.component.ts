import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon beau chien',
        imgUrl: '../../assets/snapface_img1.jpg',
        date: new Date(),
        likes: 50,
        location: 'Paris'
      },
      {
        title: 'Les pyrénées',
        description: 'Le meilleur endroit pour faire des randonnées',
        imgUrl: '../../assets/snapface_img2.jpg',
        date: new Date(),
        likes: 150,
        location: 'Mont Canigou'
      },
      {
        title: 'Mes cupcakes',
        description: 'Petits cupcakes à la vanille et chantilly',
        imgUrl: '../../assets/snapface_img3.jpg',
        date: new Date(),
        likes: 200
      },
    ]
  }
}
