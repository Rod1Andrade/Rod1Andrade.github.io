import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class GitHubAPIService {
    private _resource: string = 'https://api.github.com'

    constructor(private http: HttpClient) {
    }

    public getProjects(): Observable<any> {
        return this.http.get(`${this._resource}/users/Rod1Andrade/repos?sort=created`);
    }
}