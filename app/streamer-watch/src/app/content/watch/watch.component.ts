import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {Config} from "src/app/config";

@Component({
	selector: "app-watch",
	templateUrl: "./watch.component.html",
	styleUrls: ["./watch.component.scss"],
})
export class WatchComponent implements OnInit {
	constructor(private route: ActivatedRoute, private title: Title) {}

	ngOnInit() {
		this.route.data.subscribe((data) => {
			this.title.setTitle(`${data["subTitle"]}｜${Config.PAGE_TITLE}`);
		});
	}
}
