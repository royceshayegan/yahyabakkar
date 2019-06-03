import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos = [];

  constructor(private youtube: YoutubeService) { }

  ngOnInit() {
    this.youtube.getVideos().take(1).subscribe((videos: any) => {
      this.videos = videos.items;
      console.log(this.videos);
   });
  }

}
