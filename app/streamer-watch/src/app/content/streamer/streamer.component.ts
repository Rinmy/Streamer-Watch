import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Config} from "src/app/config";

@Component({
	selector: "app-streamer",
	templateUrl: "./streamer.component.html",
	styleUrls: ["./streamer.component.scss"],
})
export class StreamerComponent implements OnInit {
	streamerId: string = "";

	constructor(private route: ActivatedRoute, private title: Title) {}

	ngOnInit() {
		this.route.params.subscribe((params) => {
			this.streamerId = params["id"];
		});

		this.route.data.subscribe((data) => {
			this.title.setTitle(`${data["subTitle"]}｜${Config.PAGE_TITLE}`);
		});
	}
}
