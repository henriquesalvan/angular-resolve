import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PostDetailsResolver} from "./app.resolvers";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
    {path: "posts", component: PostsComponent},
    {path: "posts/:id", component: PostDetailsComponent, resolve: {post: PostDetailsResolver}}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [PostDetailsResolver]
})
export class AppRoutingModule {
}
