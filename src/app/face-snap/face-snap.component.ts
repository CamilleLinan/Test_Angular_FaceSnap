import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FaceSnapService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  faLocationDot = faLocationDot;

  constructor(private router: Router) {}

  ngOnInit() {}

  onView() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
