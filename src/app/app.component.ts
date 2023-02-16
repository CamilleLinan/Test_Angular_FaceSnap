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
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon beau chien',
      '../../assets/snapface_img1.jpg',
      new Date(),
      0
    );

    this.myOtherSnap = new FaceSnap(
      'Les pyrénées',
      'Le meilleur endroit pour faire des randonnées',
      '../../assets/snapface_img2.jpg',
      new Date(),
      0
    );

    this.myLastSnap = new FaceSnap(
      'Mes Cupcakes',
      'Petits cupcakes à la vanille et chantilly',
      '../../assets/snapface_img3.jpg',
      new Date(),
      0
    );
  }
}