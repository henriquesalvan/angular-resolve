import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable()
export class PostDetailsResolver implements Resolve<any> {
    constructor(private httpClient: HttpClient) {
    }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<any> {
        let postId: number = parseInt(activatedRouteSnapshot.params["id"]);

        return this.httpClient.get(`${environment.apiURL}/posts/${postId}`);
    }
}
