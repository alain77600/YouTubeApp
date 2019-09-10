import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  apiKey = 'AIzaSyBL-BQsFjMYo-q_KPsPY3kz05sXMISg1gg';

  constructor(public http: HttpClient) { }

  getVideosByName(name: string, maxResults: number): Observable<Object> {
    const url = 'https://www.googleapis.com/youtube/v3/search?key=' +
              this.apiKey + '&q=' + name +
              '&order=date&part=snippet &type=video,id&maxResults=' + maxResults;
    return this.http.get(url)
      .pipe(map((res: any) => {
        return res;
      }));
  }

}
