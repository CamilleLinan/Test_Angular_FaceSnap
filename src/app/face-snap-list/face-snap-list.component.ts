import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {

  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit() {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();
  }
}
