import { DatePipe } from '@angular/common';

export class FaceSnap {
    title!: string; 
    description!: string; 
    imgUrl!: string;
    date!: Date; 
    likes!: number;
    location?: string;
}