import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class YoutubeService {

  base = 'https://us-central1-yahya-a302f.cloudfunctions.net/';

  constructor(private http: HttpClient) { }

  public getVideos() {
    return this.http.get(this.base + 'getVideos');
  }

}
