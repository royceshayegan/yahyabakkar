import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../youtube.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  videos = [];

  constructor(private youtube: YoutubeService) { }

  ngOnInit() {
    this.youtube.getVideos().take(1).subscribe((videos: any) => {
      this.videos = videos.items;
      console.log(this.videos);
   });
  }

}
