import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  faLocationDot = faLocationDot;

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit() {
    this.buttonText = 'Like it 😌';
  }

  onLike() {
    if (this.buttonText === 'Like it 😌') {
      this.faceSnapService.likeFaceSnapById(this.faceSnap.id, 'like');
      this.buttonText = 'Unlike it 😔';
    } else {
      this.faceSnapService.likeFaceSnapById(this.faceSnap.id, 'dislike');
      this.buttonText = 'Like it 😌';
    }
  }
}
