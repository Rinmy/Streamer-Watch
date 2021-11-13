import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WatchComponent } from "./content/watch/watch.component";
import { StreamerComponent } from "./content/streamer/streamer.component";
import { TopComponent } from "./content/top/top.component";
import { ErrorComponent } from "./error/error.component";
import { StreamerListComponent } from "./content/streamer-list/streamer-list.component";

const routes: Routes = [
	{
		path: "",
		component: TopComponent,
		data: {
			subTitle: "",
		},
	},
	{
		path: "watch/:type/:id",
		component: WatchComponent,
		data: {
			subTitle: "ライブ",
		},
	},
	{
		path: "streamer",
		component: StreamerListComponent,
		data: {
			subTitle: "配信者一覧",
		},
	},
	{
		path: "streamer/:id",
		component: StreamerComponent,
		data: {
			subTitle: "配信者",
		},
	},
	{
		path: "**",
		component: ErrorComponent,
		data: {
			subTitle: "エラー",
		},
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
