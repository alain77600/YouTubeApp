import { CatalogModel } from './../../models/catalog.model';
import { VideoModel } from './../../models/video.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Configuration } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseEndpoint = '/items';
  private actionUrl: string;

  constructor(public http: HttpClient, private configuration: Configuration) {
    this.actionUrl = this.configuration.server;
  }

  getUserCatalog(userName: string): Observable<CatalogModel> {
    return this.http.get<CatalogModel>(`${this.actionUrl}${userName}`);
  }

  updateVideoInCatalog(userName: string, videoItems: VideoModel[]) {
    const params = {
      name: userName,
      videos: videoItems
    };
    return this.http.put(`${this.actionUrl}${userName}`, params);
  }
}
