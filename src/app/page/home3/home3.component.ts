import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../youtube.service';
declare var $: any;

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss']
})
export class Home3Component implements OnInit {

  videos = [];

  constructor(private youtube: YoutubeService) { }

  ngOnInit() {
    this.youtube.getVideos().take(1).subscribe((videos: any) => {
      this.videos = videos.items;
      console.log(this.videos);
   });

  //  $('#yahyaherovideo').get(0).play();
  }

}
