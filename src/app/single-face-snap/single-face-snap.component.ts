import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { faLocationDot, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;
  faLocationDot = faLocationDot;
  faArrowLeft = faArrowLeft;

  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Like 😌';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onLike(faceSnapId: number) {
    if (this.buttonText === 'Like 😌') {
      this.faceSnap$ = this.faceSnapService.likeFaceSnapById(faceSnapId, 'like').pipe(
        tap(() => this.buttonText = 'Dislike 😔')
      );
    } else {
      this.faceSnap$ = this.faceSnapService.likeFaceSnapById(faceSnapId, 'dislike').pipe(
        tap(() => this.buttonText = 'Like 😌')
      );
    }
  }
}
