import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TopComponent } from "./content/top/top.component";
import { WatchComponent } from "./content/watch/watch.component";
import { StreamerComponent } from "./content/streamer/streamer.component";
import { ErrorComponent } from "./error/error.component";
import { StreamerListComponent } from "./content/streamer-list/streamer-list.component";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		SidebarComponent,
		TopComponent,
		WatchComponent,
		StreamerComponent,
		ErrorComponent,
		StreamerListComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
