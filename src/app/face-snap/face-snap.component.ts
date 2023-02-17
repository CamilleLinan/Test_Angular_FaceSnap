import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Like it 😌'
  }

  onLike() {
    if (this.buttonText === 'Like it 😌') {
      this.faceSnap.likes++;
      this.buttonText = 'Unlike it 😔';
    } else {
      this.faceSnap.likes--;
      this.buttonText = 'Like it 😌';
    }
  }
}
