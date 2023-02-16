import { DatePipe } from '@angular/common';

export class FaceSnap {
    constructor(
        public title: string = '', 
        public description: string, 
        public imgUrl: string,
        public date: Date, 
        public likes: number 
    ) {}

    getFormattedDate(datePipe: DatePipe, format: string): string {
        return (datePipe.transform(this.date, format) ?? '');
    }
}