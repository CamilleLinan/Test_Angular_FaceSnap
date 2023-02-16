import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = {
      title: 'Archibald',
      description: 'Mon beau chien',
      imgUrl: '../../assets/snapface_img1.jpg',
      date: new Date(),
      likes: 0
    };

    this.myOtherSnap = {
      title: 'Les pyrénées',
      description: 'Le meilleur endroit pour faire des randonnées',
      imgUrl: '../../assets/snapface_img2.jpg',
      date: new Date(),
      likes: 0
    };

    this.myLastSnap = {
      title: 'Mes Cupcakes',
      description: 'Petits cupcakes à la vanille et chantilly',
      imgUrl: '../../assets/snapface_img3.jpg',
      date: new Date(),
      likes: 0
    };
  }
}