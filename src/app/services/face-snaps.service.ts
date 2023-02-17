import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Archibald',
            description: 'Mon beau chien',
            imgUrl: '../../assets/snapface_img1.jpg',
            date: new Date(),
            likes: 50,
            location: 'Paris'
        },
        {
            id: 2,
            title: 'Les pyrénées',
            description: 'Le meilleur endroit pour faire des randonnées',
            imgUrl: '../../assets/snapface_img2.jpg',
            date: new Date(),
            likes: 150,
            location: 'Mont Canigou'
        },
        {
            id: 3,
            title: 'Mes cupcakes',
            description: 'Petits cupcakes à la vanille et chantilly',
            imgUrl: '../../assets/snapface_img3.jpg',
            date: new Date(),
            likes: 200
        },
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found !');
        } else {
            return faceSnap;
        }
    }

    likeFaceSnapById(faceSnapId: number, likeType: 'like' | 'dislike'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        likeType === 'like' ? faceSnap.likes++ : faceSnap.likes--;
    }
}