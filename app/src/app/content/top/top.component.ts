import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {Config} from "src/app/config";

@Component({
	selector: "app-top",
	templateUrl: "./top.component.html",
	styleUrls: ["./top.component.scss"],
})
export class TopComponent implements OnInit {
	constructor(private title: Title) {}

	ngOnInit() {
		this.title.setTitle(Config.PAGE_TITLE);
	}
}
