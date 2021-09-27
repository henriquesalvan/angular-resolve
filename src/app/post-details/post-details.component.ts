import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-post-details",
    templateUrl: "./post-details.component.html",
    styleUrls: ["./post-details.component.scss"]
})
export class PostDetailsComponent implements OnInit {
    public post: any;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => {
            this.post = data["post"];
        });
    }

}
