import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createDate!: Date;
  likes!: number;
  imgUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon beau chien';
    this.createDate = new Date();
    this.likes = 6;
    this.imgUrl = "../../assets/snapface_img1.jpg";
    this.buttonText = 'Like it 😌'
  }

  onLike() {
    if (this.buttonText === 'Like it 😌') {
      this.likes++;
      this.buttonText = 'Unlike it 😔';
    } else {
      this.likes--;
      this.buttonText = 'Like it 😌';
    }
  }
}
