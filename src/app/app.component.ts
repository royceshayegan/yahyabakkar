import { Component, OnInit } from "@angular/core";
import {
  RouterModule,
  Routes,
  Router,
  NavigationEnd,
  ActivatedRoute
} from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";
import { YoutubeService } from "./youtube.service";
import * as $ from "jquery";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/take";

@Component({
  selector: "yahya-shell",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  videos = [];

  constructor(
    private youtube: YoutubeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === "primary")
      .mergeMap(route => route.data)
      .subscribe(event => {
        this.titleService.setTitle(`Yahya Bakkar | ${event.title}`);
        var tag = { name: "description", content: event["metaDescription"] };
        let attributeSelector: string = 'name="description"';
        this.metaService.removeTag(attributeSelector);
        this.metaService.addTag(tag, false);
        console.log(event.title, event.metaDescription);
      });

    this.youtube
      .getVideos()
      .take(1)
      .subscribe((videos: any) => {
        this.videos = videos.items;
        console.log(this.videos);
      });

    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
