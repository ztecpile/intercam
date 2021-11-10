import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { AlertType } from "./alertType";
import { Data } from "./data";

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private changeDateSubject = new Subject<Data>();
    private showSubject = new Subject<boolean>();

    public show (value : boolean) {
        this.showSubject.next(value);
    }

    public changeData(message : string, type: AlertType, show : boolean) {
        let data = new Data();
        data.message = message;
        data.type = type;
        data.show = show;
        this.changeDateSubject.next(data);
    }

    public getChangeDataSubject() : Observable<Data> {
        return this.changeDateSubject.asObservable();
    }

    public getShowSubject() : Observable<boolean> {
        return this.showSubject.asObservable();
    }
}