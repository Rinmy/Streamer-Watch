import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {Config} from "src/app/config";

@Component({
	selector: "app-streamer-list",
	templateUrl: "./streamer-list.component.html",
	styleUrls: ["./streamer-list.component.scss"],
})
export class StreamerListComponent implements OnInit {
	constructor(private route: ActivatedRoute, private title: Title) {}

	ngOnInit() {
		this.route.data.subscribe((data) => {
			this.title.setTitle(`${data["subTitle"]}｜${Config.PAGE_TITLE}`);
		});
	}
}
