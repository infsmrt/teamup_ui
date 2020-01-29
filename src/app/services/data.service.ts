import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class DataService {

    constructor(private http: HttpClient){}

    getSuggestions(position, location) {
        return this.http.get(`http://127.0.0.1:5000/${position}/${location}`);
    }
}