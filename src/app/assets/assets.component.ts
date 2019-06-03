import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-assets",
  templateUrl: "./assets.component.html",
  styleUrls: ["./assets.component.scss"]
})
export class AssetsComponent implements OnInit {
  assets = {
    resources: {
      "meditation-one.mp3": "assets/meditation/meditation-one.mp3",
      "meditation-2.mp3": "assets/meditation/meditation-2.mp3",
      "meditation-3.mp3": "assets/meditation/meditation-3.mp3",
      "meditation-4.mp3": "assets/meditation/meditation-4.mp3",
      "meditation-5.mp3": "assets/meditation/meditation-5.mp3",
      "meditation-6.mp3": "assets/meditation/meditation-6.mp3",
      "meditation-7.mp3": "assets/meditation/meditation-7.mp3",
      "meditation-8.mp3": "assets/meditation/meditation-8.mp3",
      "meditation-9.mp3": "assets/meditation/meditation-9.mp3",
      "mindmap1.pdf": "assets/resources/mindmap1.pdf",
      "mindmap2.pdf": "assets/resources/mindmap2.pdf",
      "mindmap3.pdf": "assets/resources/mindmap3.pdf",
      "mindmap4.pdf": "assets/resources/mindmap4.pdf",
      "mindmap5.pdf": "assets/resources/mindmap5.pdf",
      "mindmap6.pdf": "assets/resources/mindmap6.pdf",
      "mindmap7.pdf": "assets/resources/mindmap7.pdf",
      "mindmap8.pdf": "assets/resources/mindmap8.pdf",
      "mindmap9a.pdf": "assets/resources/mindmap9a.pdf",
      "mindmap9b.pdf": "assets/resources/mindmap9b.pdf",
      "mindmap9c.pdf": "assets/resources/mindmap9c.pdf",
      "mindmap10.pdf": "assets/resources/mindmap10.pdf",
      "mindmap11.pdf": "assets/resources/mindmap11.pdf",
      "mindmap12.pdf": "assets/resources/mindmap12.pdf",
      "mindmap13.pdf": "assets/resources/mindmap13.pdf",
      "mindmap14.pdf": "assets/resources/mindmap14.pdf",
      "mindmap15a.pdf": "assets/resources/mindmap15a.pdf",
      "mindmap15b.pdf": "assets/resources/mindmap15b.pdf",
      "worksheet101.pdf": "assets/resources/worksheet101.pdf",
      "worksheet101-old.pdf": "assets/resources/worksheet101-old.pdf",
      "worksheet102.pdf": "assets/resources/worksheet102.pdf",
      "worksheet103.pdf": "assets/resources/worksheet103.pdf",
      "worksheet104.pdf": "assets/resources/worksheet104.pdf",
      "worksheet105.pdf": "assets/resources/worksheet105.pdf",
      "worksheet106.pdf": "assets/resources/worksheet106.pdf",
      "worksheet107.pdf": "assets/resources/worksheet107.pdf",
      "worksheet108.pdf": "assets/resources/worksheet108.pdf",
      "worksheet201.pdf": "assets/resources/worksheet201.pdf",
      "worksheet202.pdf": "assets/resources/worksheet202.pdf",
      "worksheet203.pdf": "assets/resources/worksheet203.pdf",
      "worksheet204.pdf": "assets/resources/worksheet204.pdf",
      "worksheet301.pdf": "assets/resources/worksheet301.pdf",
      "worksheet302.pdf": "assets/resources/worksheet302.pdf",
      "worksheet303.pdf": "assets/resources/worksheet303.pdf",
      "visionvaluestatement.pdf": "assets/resources/visionvaluestatement.pdf"
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const { folder, file } = params;
      const url = this.assets[folder][file];
      window.location.href = url;
    });
  }
}
