import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {Config} from "./config";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	constructor(private title: Title) {}

	ngOnInit() {
		this.title.setTitle(Config.PAGE_TITLE);
	}
}
