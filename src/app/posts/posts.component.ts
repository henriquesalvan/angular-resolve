import {HttpClient} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
    selector: "app-posts",
    templateUrl: "./posts.component.html",
    styleUrls: ["./posts.component.scss"]
})
export class PostsComponent implements OnInit {
    public posts: any[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<any[]>(`${environment.apiURL}/posts`).subscribe(httpResponse => {
            this.posts = httpResponse;
        });
    }
}
