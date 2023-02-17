import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { faLocationDot, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;
  buttonText!: string;
  faLocationDot = faLocationDot;
  faArrowLeft = faArrowLeft;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Like it 😌';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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
