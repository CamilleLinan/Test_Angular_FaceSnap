import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {

    constructor(private http: HttpClient) {}

    getAllFaceSnaps(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    likeFaceSnapById(faceSnapId: number, likeType: 'like' | 'dislike'): Observable<FaceSnap> {
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                likes: faceSnap.likes + (likeType === 'like' ? 1 : -1)
            })),
            switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
        )
    }

    addFaceSnap(formValue: { title: string, description: string, imgUrl: string, location?: string }): Observable<FaceSnap> {
        return this.getAllFaceSnaps().pipe(
            map(faceSnaps => [...faceSnaps].sort((a: FaceSnap, b: FaceSnap) => a.id - b.id)),
            map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
            map(previousFaceSnap => ({
                ...formValue,
                date: new Date(),
                likes: 0,
                id: previousFaceSnap.id + 1
            })),
            switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))
        );
    }
}