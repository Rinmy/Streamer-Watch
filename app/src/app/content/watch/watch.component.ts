import {Component, OnInit} from "@angular/core";
import {DomSanitizer, SafeResourceUrl, Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {Config} from "src/app/config";

@Component({
	selector: "app-watch",
	templateUrl: "./watch.component.html",
	styleUrls: ["./watch.component.scss"],
})
export class WatchComponent implements OnInit {
	streamType: string = "";
	url: SafeResourceUrl = "";

	constructor(private route: ActivatedRoute, private title: Title, private sanitizer: DomSanitizer) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.streamType = params["type"];
			this.url = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${params["id"]}`);
		});

		this.route.data.subscribe((data) => {
			this.title.setTitle(`${data["subTitle"]}｜${Config.PAGE_TITLE}`);
		});
	}
}
