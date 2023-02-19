import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {

    constructor(private http: HttpClient) {}

    faceSnaps: FaceSnap[] = [];

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    likeFaceSnapById(faceSnapId: number, likeType: 'like' | 'dislike'): void {
        // const faceSnap = this.getFaceSnapById(faceSnapId);
        // likeType === 'like' ? faceSnap.likes++ : faceSnap.likes--;
    }

    addFaceSnap(formValue: { title: string, description: string, imgUrl: string, location?: string }): void {
        const faceSnap: FaceSnap = {
            ...formValue,
            date: new Date(),
            likes: 0,
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
        };
        this.faceSnaps.push(faceSnap);
    }
}